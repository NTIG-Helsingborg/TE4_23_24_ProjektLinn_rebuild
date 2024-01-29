import { DisplayContainer } from "../components/DisplayContainer";
import { Veckoevents } from "../components/Veckoevents";
import { TrafficWidget2x1,TrafficWidget1x1,TrafficWidget1x2 } from "../components/trafficWidget";
import { SlideTimer } from "../components/SlideTimer";
import { NewsArticleWidget } from "../components/NewsArticleWidget";
//import { Insta } from "../components/Insta";
import { CountdownWidget1x1, CountdownWidget1x2, CountdownWidget2x1 } from "../components/CountdownWidget";
import { useMisc } from "../lib/hooks/useMisc";
import { WeatherWidget1x2,WeatherWidget2x1 } from "../widgets/weatherWidget";

export const RootRoute = () => {
 

  return (
    <>
    <CountdownWidget1x2 data={{datetime:"2024-3-24"}} />
    
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
