import { useState } from "react";
import { AddWidgetButton } from "../components/AddWidgetButton";
import { EditContainer } from "../components/DisplayContainer";
import { SlideTimer } from "../components/SlideTimer.jsx";
import { SlideObject } from "../components/SlideObject";
import { useSlides } from "../lib/hooks/useSlides";

export const AdminPage = () => {
  const { data: slides } = useSlides();
  const [layoutSelectToggle, setlayoutSelectToggle] = useState(true);
  const layoutID = 0;

  return (
    <>
      <div className="flex m-6">
        {/* Slide list */}
        <div className="block w-[15vw] justify-start">
          <div className="grid grid-cols-1 place-items-center min-w-8">
            <p className="flex justify-center items-center m-6">
              <SlideTimer />
            </p>

            {slides && slides.length > 0 ? (
              slides.map((slide) => (
                <div key={slide.id} className="grid">
                  <SlideObject id={slide.id} layout={layoutID} />
                </div>
              ))
            ) : (
              <p> No Slides.. </p>
            )}
          </div>

          {/* Add Slide Button */}
          <div className="flex justify-center mt-6">
            <button
              title="Add New"
              className="flex items-center justify-center w-8 duration-300 outline-none cursor-pointer group hover:rotate-90"
              onClick={() => {
                setlayoutSelectToggle(!layoutSelectToggle);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="duration-300 stroke-purple-400 fill-none group-hover:fill-purple-800 group-active:stroke-purple-200 group-active:fill-purple-600 group-active:duration-0"
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

        {/* Preview + Edit*/}
        <EditContainer />

        {/* Layout selector popup */}
        {layoutSelectToggle && (
          <div className="grid h-[100vh] fixed top-6 right-6 bg-black bg-opacity-10">
            <button> Layout bild </button>
            <button> Layout bild </button>
            <button> Layout bild </button>
          </div>
        )}

        <AddWidgetButton />
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
