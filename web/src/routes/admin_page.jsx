import {
  DisplayContainer,
  EditContainer,
} from "../components/DisplayContainer";

export const AdminPage = () => {
  return (
    <>
      <h1 className="text-green-500 flex justify-start">RootRoute</h1>
      <div className="flex m-6">
        <div className="block w-48 justify-start">
          <div className="min-w-8">
            <p className="4">Tryck på + knappen för att lägga till en sida</p>
            <div className="flex justify-center items-center m-6">
              <svg
                width="95"
                viewBox="0 0 302 520"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 43C0 19.2518 19.2518 0 43 0H259C282.748 0 302 19.2518 302 43V477C302 500.748 282.748 520 259 520H43C19.2518 520 0 500.748 0 477V43Z"
                  fill="#A60896"
                />
                <path
                  d="M9 51C9 28.9086 26.9086 11 49 11H252C274.091 11 292 28.9086 292 51V468C292 490.091 274.091 508 252 508H49C26.9086 508 9 490.091 9 468V51Z"
                  fill="white"
                />
                <path
                  d="M165 104C165 96.268 171.268 90 179 90H251C258.732 90 265 96.268 265 104V176C265 183.732 258.732 190 251 190H179C171.268 190 165 183.732 165 176V104Z"
                  fill="#696969"
                />
                <path
                  d="M165 224C165 216.268 171.268 210 179 210H251C258.732 210 265 216.268 265 224V296C265 303.732 258.732 310 251 310H179C171.268 310 165 303.732 165 296V224Z"
                  fill="#696969"
                />
                <path
                  d="M45 104C45 96.268 51.268 90 59 90H131C138.732 90 145 96.268 145 104V296C145 303.732 138.732 310 131 310H59C51.268 310 45 303.732 45 296V104Z"
                  fill="#696969"
                />
                <path
                  d="M59 446C51.268 446 45 439.732 45 432V360C45 352.268 51.268 346 59 346H251C258.732 346 265 352.268 265 360V432C265 439.732 258.732 446 251 446H59Z"
                  fill="#696969"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-center items-center mt-6">
            <button
              title="Add New"
              className="group cursor-pointer outline-none hover:rotate-90 duration-300 w-8 flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="stroke-purple-400 fill-none group-hover:fill-purple-800 group-active:stroke-purple-200 group-active:fill-purple-600 group-active:duration-0 duration-300"
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
        </div>
        {/* THE DISPLAY CONTAINER */}
        <div className="container mx-auto px-4 border-4 max-w-56">
          <EditContainer />
        </div>

        <div className="flex ml-6 justify-end">
          <div className="grid ms:grid-cols-3 gap-x-2 gap-y-3 grid-flow-row-dense">
            <div className="bg-zinc-600 rounded-lg shadow-xl max-h-7 min-w-7 text-center">
              +
            </div>
            <div className="bg-zinc-600 rounded-lg shadow-xl max-h-7 min-w-7 text-center">
              +
            </div>
            <div className="bg-zinc-600 rounded-lg shadow-xl max-h-7 min-w-7 text-center">
              +
            </div>
            <div className="bg-zinc-600 rounded-lg shadow-xl max-h-7 min-w-7 text-center">
              +
            </div>
            <div className="bg-zinc-600 rounded-lg shadow-xl max-h-7 min-w-7 text-center">
              +
            </div>
            <div className="bg-zinc-600 rounded-lg shadow-xl max-h-7 min-w-7 text-center">
              +
            </div>
            <div className="bg-zinc-600 rounded-lg shadow-xl max-h-7 min-w-7 text-center">
              +
            </div>
            <div className="bg-zinc-600 rounded-lg shadow-xl max-h-7 min-w-7 text-center">
              +
            </div>
            <div className="bg-zinc-600 rounded-lg shadow-xl max-h-7 min-w-7 text-center">
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
