import {
  DisplayContainer,
  EditContainer,
} from "../components/DisplayContainer";

export const AdminPage = () => {
  return (
    <>
      <h1 className="text-green-500 flex justify-start">RootRoute</h1>
      <div className="flex m-6">
        <div className="block max-w-24 justify-start">
          <p>click on the + button to add a page</p>
          <button
            title="Add New"
            className="group cursor-pointer outline-none duration-300 w-8 flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="stroke-purple-400 fill-none group-hover:fill-purple-800 group-active:stroke-purple-200 group-active:fill-purple-600 group-active:duration-0 duration-300 mt-6"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                strokeWidth="1.5"
              ></path>
              <path d="M8 12H16" strokeWidth="1.5"></path>
              <path d="M12 16V8" strokeWidth="1.5"></path>
            </svg>
          </button>
        </div>

        {/* THE DISPLAY CONTAINER */}
        <div className="container mx-auto px-4 border-4 max-w-56">
          <EditContainer />
        </div>

        <div className="flex ml-6 justify-end">
          <div className="grid grid-cols-3 gap-1">
            <div className="col-span-1 bg-green-500 p-4 m-1 mx-3 text-center max-w-24 max-h-20">
              +
            </div>
            <div className="col-span-1 bg-green-500 p-4 m-1 mx-3 text-center max-w-24 max-h-20">
              +
            </div>
            <div className="col-span-1 bg-green-500 p-4 m-1 mx-3 text-center max-w-24 max-h-20">
              +
            </div>
            <div className="col-span-1 bg-green-500 p-4 m-1 mx-3 text-center max-w-24 max-h-20">
              +
            </div>
            <div className="col-span-1 bg-green-500 p-4 m-1 mx-3 text-center max-w-24 max-h-20">
              +
            </div>
            <div className="col-span-1 bg-green-500 p-4 m-1 mx-3 text-center max-w-24 max-h-20">
              +
            </div>
            <div className="col-span-1 bg-green-500 p-4 m-1 mx-3 text-center max-w-24 max-h-20">
              +
            </div>
            <div className="col-span-1 bg-green-500 p-4 m-1 mx-3 text-center max-w-24 max-h-20">
              +
            </div>
            <div className="col-span-1 bg-green-500 p-4 m-1 mx-3 text-center max-w-24 max-h-20">
              +
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/**
 * @type {import('react-router-dom').RouteObject}
 */
// eslint-disable-next-line react-refresh/only-export-components
export const adminRoute = {
  path: "/admin",
  element: <AdminPage />,
};
