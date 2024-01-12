import React from "react";
import { useQuery } from "@tanstack/react-query";

const weatherWidget = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["weatherWidget"],
    queryFn: () =>
      fetch(
        "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/12.70030/lat/56.0421/data.json" //      http://opendata.smhi.se/apidocs/metfcst/index.html - This is the API documentation
      ).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;


  
  // Get current time and split its part into an array
  const currentTimeFetch = new Date();
  const currentTimeSplit = currentTimeFetch.toString().split(" ");

  const currentTime = currentTimeSplit[4];
  const closestHour = Math.round(parseInt(currentTime.split(":")[0]));
  const currentMonth = currentTimeSplit[1];
  const getMonthNumber = (monthName) => {
    const months = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    };

    return months[monthName];
  };
  const monthNumber = getMonthNumber(currentMonth);

  // Convert all the values into a string with the API format
  const searchTime =
    currentTimeSplit[3] +
    "-" +
    monthNumber +
    "-" +
    currentTimeSplit[2] +
    "T" +
    closestHour +
    ":00:00Z";

  // Compare searthTime to the API's timeSeries array and find the matching index to see exactly what data is available for the current time
  let matchingIndex = -1;

  data.timeSeries.forEach((timeSeries, index) => {
    if (timeSeries.validTime === searchTime) {
      matchingIndex = index;
      return;
    }
  });

  if (matchingIndex === -1) {
    return <p>ERR: No matching data found for searchTime: {searchTime}</p>;
  }

  return (
    <div>
      <p>{currentTime} - Current Time</p>
      <p>
        {data.timeSeries[matchingIndex].validTime.slice(11, 16)} - Associated
        time
      </p>
      <br />
      <p>
        {data.timeSeries[matchingIndex].parameters[18].values[0]} - WeatherType
      </p>
      <p>{data.timeSeries[matchingIndex].parameters[10].values[0]} °C</p>
      <p>{data.timeSeries[matchingIndex].parameters[14].values[0]} m/s</p>
      <p>
        {data.timeSeries[matchingIndex].parameters[5].values[0]} mm/h - Average
        rain amount
      </p>
    </div>
  );
};
export default weatherWidget;
