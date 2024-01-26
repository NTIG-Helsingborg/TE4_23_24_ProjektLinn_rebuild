import { DisplayContainer } from "../components/DisplayContainer";
import { Veckoevents } from "../components/Veckoevents";
import { TrafficWidget } from "../components/trafficWidget";
import { SlideTimer } from "../components/SlideTimer";
import { NewsArticleWidget } from "../components/NewsArticleWidget";
//import { Insta } from "../components/Insta";
import { CountdownWidget } from "../components/CountdownWidget";
import { useMisc } from "../lib/hooks/useMisc";

export const RootRoute = () => {
 

  return (
    <>
     <DisplayContainer />
      <Veckoevents />
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
