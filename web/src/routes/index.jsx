import { DisplayContainer } from "../components/DisplayContainer";
import { Veckoevents } from "../components/Veckoevents";
import { TrafficWidget } from "../components/trafficWidget";
import { SlideTimer } from "../components/SlideTimer";
import { NewsArticleWidget } from "../components/NewsArticleWidget";
import { Insta } from "../components/Insta";
import { CountdownWidget } from "../components/CountdownWidget";
import { useMisc } from "../lib/hooks/useMisc";

export const RootRoute = () => {
  const dataForTrafficWidget = {
    divId: "someId",
    interval: 30000, // Custom interval in milliseconds
    // Add any other properties needed by the TrafficWidget component
  };
  const dataTime = {
    datetime: "2015-03-25",
  };

  /*
    tidigare kod:
    <DisplayContainer />
    <Veckoevents />
    <CountdownWidget data={dataTime} />
    */
  return (
    <>
      <TrafficWidget data={dataForTrafficWidget} />
      <SlideTimer />
      <NewsArticleWidget />
      <Insta />
      <CountdownWidget data={dataTime} />
      {console.log(useMisc("st-hbg-c-departures"))}
    </>
  );
};

/**
 * @type {import('react-router-dom').RouteObject}
 */
// eslint-disable-next-line react-refresh/only-export-components
export const rootRoute = {
  path: "/",
  element: <RootRoute />,
};
