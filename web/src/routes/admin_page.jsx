export const AdminPage = () => {
  return (
    <>
      <h1 className="text-green-500 flex justify-start">RootRoute</h1>
      <div className="flex m-6">
        <div className="block max-w-24 justify-start">
          <p>click on the + button to add a page</p>
          <button className="mt-6">+</button>
        </div>

        <div className="j">
          <h1> THE CONTAINER </h1>
        </div>

        <div className="container mt-8 flex ml-6 justify-end">
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
