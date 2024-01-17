// import PocketBase from "pocketbase";
// const pb = new PocketBase("https://projekt-linn.pockethost.io/");

export const AddWidgetButton = () => {
  const widgetsFromDB = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {/* använd col-span/row-span-2,3,4,5,6,7,8 for att ändra storlek på celler for widgets */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-x-3 gap-y-3 grid-flow-row-dense">
          {widgetsFromDB.map((widget, index) => {
            return (
              <div
                key={index}
                className="bg-zinc-600 rounded-lg shadow-xl min-h-28 min-w-28 flex justify-center items-center"
              >
                <button className="flex items-center justify-center w-8 duration-300 outline-none cursor-pointer group hover:rotate-90">
                  +
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
