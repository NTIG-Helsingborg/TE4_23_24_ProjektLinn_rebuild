// import React from "react";



export const Layout = ({ updateLogMessage, messageOptions }) => {
    const handleClick = (buttonId) => {
      const message = messageOptions[buttonId] || '';
      
      updateLogMessage(message);
      console.log(message);
    };

    return (
        <div className="grid grid-cols-2 grid-rows-3 gap-2 mx-8">
            <div className="row-span-2 flex justify-center items-center rounded-md bg-slate-300 aspect-[1/2] my-1">
                <button onClick={() => handleClick('1/2')} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" >+</button>
            </div>
            <div className="col-span-2 flex justify-center items-center rounded-md col-start-1 row-start-3 bg-slate-300 aspect-[2/1]">
                <button onClick={() => handleClick('2/1')} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">+</button>
            </div>
            <div className="col-start-2 flex justify-center items-center row-start-1 rounded-md bg-slate-300 aspect-w-1 aspect-h-1 aspect-square">
                <button onClick={() => handleClick('1/1')} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">+</button>
            </div>
            <div className="flex justify-center items-center rounded-md bg-slate-300 aspect-w-1 aspect-h-1 aspect-square">
                <button onClick={() => handleClick('1/1')} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">+</button>
            </div>
        </div>
    );
}




export default Layout;


// import React from 'react';


// const Layout = ({ logFunction }) => {
//     const handleClick = () => {
//       logFunction();

//     };

//     return (
//         <div className="grid grid-cols-2 grid-rows-3 gap-2 mx-8">
//             <div className="row-span-2 flex justify-center items-center rounded-md bg-slate-300 aspect-[1/2] my-1 ">
//                 <button id='1/2' className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={handleClick}>+</button>
//             </div>
//             <div className="col-span-2 flex justify-center items-center rounded-md col-start-1 row-start-3 bg-slate-300 aspect-[2/1]  ">
//                 <button id='2/1' className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded " onClick={handleClick} >+</button>
//             </div>
//             <div className="col-start-2 flex justify-center items-center row-start-1 rounded-md bg-slate-300 aspect-w-1 aspect-h-1 aspect-square">
//                 <button id='1/1' className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={handleClick}>+</button>
//             </div>
//             <div className=" flex justify-center items-center rounded-md bg-slate-300 aspect-w-1 aspect-h-1 aspect-square">
//                 <button id='1/1' className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={handleClick}>+</button>
//             </div>
//         </div>
//     );
// }

// export default Layout;

// User
// how do i get the function to only console log if a button got a id='1/1'