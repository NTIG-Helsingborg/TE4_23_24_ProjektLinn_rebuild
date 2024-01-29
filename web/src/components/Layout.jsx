export const Layout = () => {
    return (
        <div className="grid grid-cols-2 grid-rows-3 gap-2 mx-8">
            <div className="row-span-2 flex justify-center items-center rounded-md bg-slate-300 aspect-[1/2 + 2rem] ">
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">+</button>
            </div>
            <div className="col-span-2 flex justify-center items-center rounded-md col-start-1 row-start-3 bg-slate-300 aspect-[2/1]  ">
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded " >+</button>
            </div>
            <div className="col-start-2 flex justify-center items-center row-start-1 rounded-md bg-slate-300 aspect-w-1 aspect-h-1 aspect-square">
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" >+</button>
            </div>
            <div className=" flex justify-center items-center rounded-md bg-slate-300 aspect-w-1 aspect-h-1 aspect-square">
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">+</button>
            </div>
        </div>
    );
}
