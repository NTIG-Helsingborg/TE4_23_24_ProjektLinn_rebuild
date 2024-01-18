import { config } from 'localforage';
import TrafficWidget from '../components/trafficWidget'

import { useEffect } from 'react';

import { CountdownWidget } from "../components/CountdownWidget";

export const RootRoute = () => {
  
   
    return (
        
            <>
                <h1 className='text-green-500'>RootRoute</h1>
    
                <div  className='m-10 aspect-[1/2] w-2/6 bg-transform' >
                    <TrafficWidget divId={1}/>
                </div>
                <div className='m-10 aspect-[2/1] w-4/6 bg-transform' >
                    <TrafficWidget divId={2}/>
                </div>
                <div  className='m-10 aspect-[1/1] w-2/6 bg-transform' >
                    <TrafficWidget divId={3}/>
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
