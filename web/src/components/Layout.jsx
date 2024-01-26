export const Layout = () => {
    return (
        <div className="grid grid-cols-2 grid-rows-3 gap-2">
        <div className="row-span-2 h-80 rounded-md bg-slate-500">
            <button className="bg-blue-500  hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">+</button>
        </div>
        <div className="col-span-2 rounded-md col-start-1 row-start-3 bg-slate-500">
             <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">+</button>
        </div>
        <div className="col-start-2 row-start-1 rounded-md bg-slate-500">
             <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">+</button>
        </div>
        <div className="col-start-2 row-start-2 rounded-md bg-slate-500">
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">+</button>
        </div>
    </div>
    );
}
