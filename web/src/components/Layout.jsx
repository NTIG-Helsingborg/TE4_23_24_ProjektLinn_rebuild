// import React from "react";


export const Layout = ({ updateFilterWidget,divImages }) => {
    const handleClick = (size,divID) => {
      updateFilterWidget(size,divID);
    };

    <img src={divImages.div1} alt="widget" className="w-full h-auto object-contain cursor-pointer" />
    return (
        <div className="grid grid-cols-2 grid-rows-3 gap-2 mx-8">
            <div className="row-span-2 flex justify-center items-center rounded-md bg-slate-300 aspect-[1/2] my-1 relative">
                {divImages.div1 && <img src={divImages.div1} alt="widget" className="w-full h-auto object-contain cursor-pointer absolute top-0 left-0" />}

                <button onClick={() => handleClick('1x2','div1')} className="bg-blue-500 hover:bg-blue-400 duration-100 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded z-10" >+</button>
            </div>
            <div className="col-span-2 flex justify-center items-center rounded-md col-start-1 row-start-3 bg-slate-300 aspect-[2/1] relative">
                {divImages.div2 && <img src={divImages.div2} alt="widget" className="w-full h-auto object-contain cursor-pointer absolute top-0 left-0" />}

                <button onClick={() => handleClick('2x1','div2')} className="bg-blue-500 hover:bg-blue-400 duration-100 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded z-10" >+</button>
            </div>
            <div className="col-start-2 flex justify-center items-center row-start-1 rounded-md bg-slate-300 aspect-w-1 aspect-h-1 aspect-square relative">
                {divImages.div3 && <img src={divImages.div3} alt="widget" className="w-full h-auto object-contain cursor-pointer absolute top-0 left-0" />}

                <button onClick={() => handleClick('1x1','div3')} className="bg-blue-500 hover:bg-blue-400 duration-100 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded z-10" >+</button>
            </div>
            <div className="flex justify-center items-center rounded-md bg-slate-300 aspect-w-1 aspect-h-1 aspect-square relative">
                {divImages.div4 && <img src={divImages.div4} alt="widget" className="w-full h-auto object-contain cursor-pointer absolute top-0 left-0" />}

                <button onClick={() => handleClick('1x1','div4')} className="bg-blue-500 hover:bg-blue-400 duration-100 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded z-10" >+</button>
            </div>
        </div>
    );
}









export const LayoutPreview = ({ divImages }) => {
  

    console.log(divImages);
    <img src={divImages.div1} alt="widget" className="w-full h-auto object-contain cursor-pointer" />
    return (
        <div className="grid grid-cols-2 grid-rows-3 gap-2 mx-8">
            <div className="row-span-2 flex justify-center items-center rounded-md bg-slate-300 aspect-[1/2] my-1 relative">
                {divImages.div1 && <img src={divImages.div1} alt="widget" className="w-full h-auto object-contain cursor-pointer absolute top-0 left-0" />}

               
            </div>
            <div className="col-span-2 flex justify-center items-center rounded-md col-start-1 row-start-3 bg-slate-300 aspect-[2/1] relative">
                {divImages.div2 && <img src={divImages.div2} alt="widget" className="w-full h-auto object-contain cursor-pointer absolute top-0 left-0" />}

            </div>
            <div className="col-start-2 flex justify-center items-center row-start-1 rounded-md bg-slate-300 aspect-w-1 aspect-h-1 aspect-square relative">
                {divImages.div3 && <img src={divImages.div3} alt="widget" className="w-full h-auto object-contain cursor-pointer absolute top-0 left-0" />}

            </div>
            <div className="flex justify-center items-center rounded-md bg-slate-300 aspect-w-1 aspect-h-1 aspect-square relative">
                {divImages.div4 && <img src={divImages.div4} alt="widget" className="w-full h-auto object-contain cursor-pointer absolute top-0 left-0" />}

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