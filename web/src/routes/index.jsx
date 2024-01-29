import { DisplayContainer } from "../components/DisplayContainer";
import { Veckoevents } from "../components/Veckoevents";
import { TrafficWidget2x1,TrafficWidget1x1,TrafficWidget1x2 } from "../components/trafficWidget";
import { SlideTimer } from "../components/SlideTimer";
import { NewsArticleWidget } from "../components/NewsArticleWidget";
//import { Insta } from "../components/Insta";
import { CountdownWidget } from "../components/CountdownWidget";
import { useMisc } from "../lib/hooks/useMisc";

export const RootRoute = () => {
 

  return (
    <>
     <DisplayContainer />
      {/* <Veckoevents /> */}


      <div className="grid grid-cols-2 grid-rows-3 gap-2 mx-8">
            <div className="row-span-2 flex justify-center items-center rounded-md bg-slate-300 aspect-[1/2] my-1 ">
            </div>
            <div className="col-span-2 flex justify-center items-center rounded-md col-start-1 row-start-3 bg-slate-300 aspect-[2/1] ">
            </div>
            <div className="col-start-2 flex justify-center items-center row-start-1 rounded-md bg-slate-300 aspect-w-1 aspect-h-1 aspect-square">
            </div>
            <div className=" flex justify-center items-center rounded-md bg-slate-300 aspect-w-1 aspect-h-1 aspect-square">
            </div>
        </div>
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
