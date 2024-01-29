import { DisplayContainer } from "../components/DisplayContainer";
import { Veckoevents } from "../components/Veckoevents";
import { TrafficWidget2x1,TrafficWidget1x1,TrafficWidget1x2 } from "../components/trafficWidget";
import { SlideTimer } from "../components/SlideTimer";
import { NewsArticleWidget } from "../components/NewsArticleWidget";
//import { Insta } from "../components/Insta";
import { CountdownWidget1x1, CountdownWidget1x2, CountdownWidget2x1 } from "../components/CountdownWidget";
import { useMisc } from "../lib/hooks/useMisc";

export const RootRoute = () => {
 

  return (
    <>
     <DisplayContainer />
   
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
