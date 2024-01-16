import React from "react";
import { useQuery } from "@tanstack/react-query";
import clearday from "../assets/weatherSVG/clear-day.svg?react";
import cloudy from "../assets/weatherSVG/cloudy.svg?react";
import drizzle from "../assets/weatherSVG/drizzle.svg?react";
import extremerain from "../assets/weatherSVG/extreme-rain.svg?react";
import extremesleet from "../assets/weatherSVG/extreme-sleet.svg?react";
import extremesnow from "../assets/weatherSVG/extreme-snow.svg?react";
import fog from "../assets/weatherSVG/fog.svg?react";
import overcast from "../assets/weatherSVG/overcast.svg?react";
import partlycloudy from "../assets/weatherSVG/partly-cloudy-day.svg?react";
import rain from "../assets/weatherSVG/rain.svg?react";
import raindrop from "../assets/weatherSVG/raindrop.svg?react";
import raindrops from "../assets/weatherSVG/raindrops.svg?react";
import sleet from "../assets/weatherSVG/sleet.svg?react";
import snow from "../assets/weatherSVG/snow.svg?react";
import snowflake from "../assets/weatherSVG/snowflake.svg?react";
import thunderstormrain from "../assets/weatherSVG/thunderstorms-rain.svg?react";
import thunderstorm from "../assets/weatherSVG/thunderstorms.svg?react";

const weatherFetcher = async () => {
  const res = await fetch(
    "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/12.70030/lat/56.0421/data.json"
  );
  const data = await res.json();

  // Get current time and split its part into an array
  const currentTimeFetch = new Date();
  const currentTimeSplit = currentTimeFetch.toString().split(" ");

  const currentTime = currentTimeSplit[4];
  const closestHour = currentTime.split(":")[0].padStart(2, "0"); // Makes sure single digit hours are padded with a 0
  const currentMonth = currentTimeSplit[1];

  const getMonthNumber = (monthName) => {
    // Translates the month name into a number
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

  // Compare searchTime to the API's timeSeries array and find the matching index to see exactly what data is available for the current time
  let matchingIndex = -1;

  data.timeSeries.forEach((timeSeries, index) => {
    if (timeSeries.validTime === searchTime) {
      matchingIndex = index;
      return;
    }
  });

  if (matchingIndex === -1) {
    throw new Error(`No matching data found for searchTime: ${searchTime}`);
  }

  const getWeatherType = (weatherName) => {
    const weather = {
      1: clearday,
      2: clearday,
      3: cloudy,
      4: partlycloudy,
      5: cloudy,
      6: overcast,
      7: fog,
      8: raindrop,
      9: raindrops,
      10: raindrops,
      11: thunderstormrain,
      12: sleet,
      13: sleet,
      14: sleet,
      15: snowflake,
      16: snowflake,
      17: snowflake,
      18: drizzle,
      19: rain,
      20: extremerain,
      21: thunderstorm,
      22: sleet,
      23: sleet,
      24: extremesleet,
      25: snow,
      26: snow,
      27: extremesnow,
    };

    return weather[weatherName];
  };
  const daysAhead = [];

  for (let index = 1; index < 7; index++) {
    const day = {
      weatherType: getWeatherType(
        data.timeSeries[matchingIndex + index]?.parameters[18]?.values[0]
      ),
      medtemperature:
        data.timeSeries[matchingIndex + index]?.parameters[10]?.values[0],
      rainAmount:
        data.timeSeries[matchingIndex + index]?.parameters[5]?.values[0],
      windSpeed:
        data.timeSeries[matchingIndex + index]?.parameters[14]?.values[0],
    };

    daysAhead.push(day);
  }
  console.log(data);
  return {
    currentTime,
    associatedTime: data.timeSeries[matchingIndex].validTime.slice(11, 16),
    weatherType: getWeatherType(
      data.timeSeries[matchingIndex].parameters[18].values[0]
    ),
    temperature: data.timeSeries[matchingIndex].parameters[10].values[0],
    windSpeed: data.timeSeries[matchingIndex].parameters[14].values[0],
    rainAmount: data.timeSeries[matchingIndex].parameters[5].values[0],
    daysAhead: daysAhead,
  };
};
export const WeatherWidget = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["weatherWidget"],
    refetchInterval: 3600 * 1000,
    queryFn: weatherFetcher,
  });
  if (isPending) return "Loading...";
  console.log(data.daysAhead);
  if (error) return "An error has occurred: " + error.message;
  return (
    <div
      className="bg-red-500 grid grid-cols-2 grid-rows-2"
      style={{ width: "2000px", height: "900px" }}
    >
      <div className="flex justify-center  bg-blue-500">
        <div className="w-1/2 self-center">
          <data.weatherType />
        </div>
        <p className="text-9xl self-center">{data.temperature} °C</p>
      </div>
      <div className="flex flex-row justify-center items-center bg-green-500">
        <div className="">
          <p className="text-2xl text-end">Helsingborg, Sverige</p>
          <table className="mx-auto border-separate border-spacing-x-10 h-1/6">
            <tr>
              <td>
                <p className="text-3xl text-center">Nederbörd</p>
              </td>
              <td>
                <p className="text-3xl text-center">Vind (Byar)</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-2xl text-center">{data.rainAmount} mm</p>
              </td>
              <td>
                <p className="text-2xl text-center">{data.windSpeed} m/s</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="col-span-2 flex">
        {data.daysAhead.map((day, index) => (
          <div key={index} className="flex-rows bg-yellow-500 w-2/12">
            <p>test</p>
            < day.weatherType/> 
            <p>{day.medtemperature}</p>
            <p>{day.rainAmount}</p>
            <p>{day.windSpeed}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
