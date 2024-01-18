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

  const getMonthNumber = (monthName) => {
    // Translates the month name into a number
    const months = {
      0: "01",
      1: "02",
      2: "03",
      3: "04",
      4: "05",
      5: "06",
      6: "07",
      7: "08",
      8: "09",
      9: "10",
      10: "11",
      11: "12",
    };

    return months[monthName];
  };
  const monthNumber = getMonthNumber(currentTimeFetch.getMonth());
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

  const getWeekDay = (dayvalue) => {
    const day = {
      0: "Söndag",
      1: "Måndag",
      2: "Tisdag",
      3: "Onsdag",
      4: "Torsdag",
      5: "Fredag",
      6: "Lördag",
    };
    return day[dayvalue];
  };

  const daysAhead = [];
  let Wsymb2;
  let t;
  let pmedian;
  let ws;
  let weekDay;
  var futureDate = new Date();
  futureDate.setHours(12, 0, 0, 0);

  let futureDateIndex = -1;

  for (let index = 1; index < 7; index++) {
    futureDate.setDate(currentTimeFetch.getDate() + index);
    weekDay = getWeekDay(futureDate.getDay());

    var futureDateSearch =
      futureDate.getFullYear() +
      "-" +
      getMonthNumber(futureDate.getMonth()) +
      "-" +
      futureDate.getDate() +
      "T" +
      futureDate.getHours() +
      ":00:00Z";

    data.timeSeries.forEach((timeSeries, index) => {
      if (timeSeries.validTime === futureDateSearch) {
        futureDateIndex = index;
        return;
      }
    });
    if (futureDateIndex === -1) {
      throw new Error(`No matching data found for futureDateSearch: ${searchTime}`);
    }

    data.timeSeries[futureDateIndex].parameters.forEach((parameter) => {
      if (parameter.name === "Wsymb2") {
        Wsymb2 = parameter.values[0];
      }
    });
    data.timeSeries[futureDateIndex].parameters.forEach((parameter) => {
      if (parameter.name === "t") {
        t = parameter.values;
      }
    });
    data.timeSeries[futureDateIndex].parameters.forEach((parameter) => {
      if (parameter.name === "pmedian") {
        pmedian = parameter.values;
      }
    });
    data.timeSeries[futureDateIndex].parameters.forEach((parameter) => {
      if (parameter.name === "ws") {
        ws = parameter.values;
      }
    });

    const day = {
      weekdays: weekDay,
      date: futureDate.getDate(),
      futureweatherType: getWeatherType(Wsymb2),
      medtemperature: t,
      rainAmount: pmedian,
      windSpeed: ws,
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
    weekdays: getWeekDay(currentTimeFetch.getDay()),
    daysAhead: daysAhead,
  };
};
export const WeatherWidget2x1 = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["weatherWidget"],
    refetchInterval: 3600 * 1000,
    queryFn: weatherFetcher,
  });
  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  const TodayWeatherIcon = data.weatherType;

  return (
    <div
      className="bg-gradient-to-r from-indigo-500 to-indigo-900  text-white grid grid-cols-2 grid-rows-2"
      style={{ width: "2000px", height: "900px", padding: "1%" }}
    >
      <div className="flex justify-center  ">
        <div className="w-1/2 self-center">
          <TodayWeatherIcon />
        </div>
        <p className="text-9xl self-center">{data.temperature} °C</p>
      </div>
      <div className="flex flex-row justify-center items-center ">
        <div className="">
          <p className="text-2xl text-end">Helsingborg, Sverige</p>
          <table className="mx-auto border-separate border-spacing-x-10 h-1/6">
            <tbody>
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
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-span-2 gap-10 flex">
        {data.daysAhead.map((day, index) => {
          const { weekdays, medtemperature, rainAmount, windSpeed, date } = day;
          const FutureWeatherIcon = day.futureweatherType;

          return (
            <div
              key={index}
              className="grid grid-col-1 rounded-xl w-2/12 bg-slate-800/25 text-center place-items-center"
            >
              <p>{date}</p>
              <p className="text-4xl">{weekdays}</p>
              <div className="w-1/2">
                <FutureWeatherIcon />
              </div>
              <p className="text-3xl">{medtemperature} °C</p>
              <div>
                <p className="text-2xl">{rainAmount} mm</p>
                <p className="text-2xl">{windSpeed} m/s</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const WeatherWidget1x2 = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["weatherWidget"],
    refetchInterval: 3600 * 1000,
    queryFn: weatherFetcher,
  });
  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  const TodayWeatherIcon = data.weatherType;
  return (
    <div
      className="bg-gradient-to-br from-indigo-500 to-indigo-900  text-white grid grid-col-1"
      style={{ width: "900px", height: "2000px", padding: "1%" }}
    >
      <div className="flex justify-center" style={{ marginTop: "10%" }}>
        <p className="text-6xl">{data.weekdays}</p>
      </div>
      <div className=" flex justify-center self-center ">
        <div className="w-3/12">
          <TodayWeatherIcon />
        </div>
        <p className="text-9xl self-center">{data.temperature} °C</p>
      </div>
      <div className="flex justify-center">
        <p className="text-2xl">Helsingborg, Sverige</p>
      </div>
      <div>
        <table className="mx-auto border-separate border-spacing-x-20 h-1/6">
          <tbody>
            <tr>
              <td>
                <p className="text-3xl text-center">Nederbörd:</p>
              </td>
              <td>
                <p className="text-3xl text-center">Vindhastighet:</p>
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
          </tbody>
        </table>
      </div>
      <div
        className="grid grid-cols-3 grid-rows-2 gap-10"
        style={{ marginBottom: "10%" }}
      >
        {data.daysAhead.map((day, index) => {
          const { weekdays, medtemperature, rainAmount, windSpeed } = day;
          const FutureWeatherIcon = day.futureweatherType;

          return (
            <div
              key={index}
              className="grid grid-col-1 rounded-xl bg-slate-800/25 text-center place-items-center"
            >
              <p className="text-4xl">{weekdays}</p>
              <div className="w-1/2">
                <FutureWeatherIcon />
              </div>
              <p className="text-3xl">{medtemperature} °C</p>
              <div>
                <p className="text-2xl">{rainAmount} mm</p>
                <p className="text-2xl">{windSpeed} m/s</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
