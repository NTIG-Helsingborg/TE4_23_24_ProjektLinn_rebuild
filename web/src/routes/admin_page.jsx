import { useEffect, useState } from "react";
import { EditContainer } from "../components/DisplayContainer";
import { PopUpTimer } from "../components/PopUpTimer";
import { SlideObject } from "../components/SlideObject";
import { useSlides } from "../lib/hooks/useSlides";
import { useNewSlide } from "../lib/hooks/useSlides";
import {
  Layout1SVG,
  Layout2SVG,
  Layout3SVG,
} from "../assets/layoutPreviews/layoutSVGs";
// import { SlideTimer } from "../components/SlideTimer";

export const AdminPage = () => {
  const newSlideMutation = useNewSlide();
  const { data: slides } = useSlides();
  const [layoutSelectToggle, setlayoutSelectToggle] = useState(true);

  async function addSlide() {
    newSlideMutation.mutate(
      {
        layout: null,
        index: 0,
        interval: 30,
      },
      {
        onSuccess: () => {
          location.reload();
        },
      }
    );
  }

  return (
    <>
      <div className="flex h-[100vh] w-[100vw] p-6 justify-between">
        <div
          id="SlideList"
          className="flex flex-col w-[15vw] h-full pb-16 justify-center"
        >
          {/* Slides */}
          <div id="SlideLayouts" className="flex flex-col overflow-y-auto">
            {slides && slides.length > 0 ? (
              slides.map((slide) => (
                <div key={slide.id} className="grid py-4 h-fitt">
                  <SlideObject id={slide.id} />
                </div>
              ))
            ) : (
              <div className="mx-auto font-bold "> No Slides.. </div>
            )}
          </div>

          {/* Add Slide Button */}
          <div
            id="AddSlideButton"
            className="absolute bottom-6 w-[15vw] bg-white flex justify-center"
          >
            <button
              title="Add New"
              className="flex items-center justify-center w-10 h-10 my-2 duration-300 outline-none cursor-pointer group hover:rotate-90"
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

            <button className="flex items-center justify-center w-10 h-10 my-2 duration-300 outline-none cursor-pointer group hover:scale-110">
              <svg
                width="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="duration-300 stroke-purple-400 fill-none group-hover:fill-purple-800 group-active:stroke-purple-200 group-active:fill-purple-600 group-active:duration-0"
              >
                <path
                  d="M11.5117 1.99512C6.54116 1.99512 2.51172 6.02455 2.51172 10.9951C2.51172 15.9657 6.54116 19.9951 11.5117 19.9951C16.4823 19.9951 20.5117 15.9657 20.5117 10.9951C20.5117 6.02455 16.4823 1.99512 11.5117 1.99512ZM0.511719 10.9951C0.511719 4.91998 5.43659 -0.00488281 11.5117 -0.00488281C17.5869 -0.00488281 22.5117 4.91998 22.5117 10.9951C22.5117 17.0702 17.5869 21.9951 11.5117 21.9951C5.43659 21.9951 0.511719 17.0702 0.511719 10.9951ZM11.5117 3.99512C12.064 3.99512 12.5117 4.44283 12.5117 4.99512L11.5 11L15.9589 12.1007C16.4529 12.3477 16.6531 12.9484 16.4061 13.4423C16.1592 13.9363 15.5585 14.1365 15.0645 13.8895L11.0645 11.8895C10.7257 11.7202 10.5117 11.3739 10.5117 10.9951V4.99512C10.5117 4.44283 10.9594 3.99512 11.5117 3.99512Z"
                  fill="#6b21a8"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Preview + Edit*/}
        <div className="border-4 w-[30vw] max-h-full aspect-[9/16] my-auto rounded-[12px]">
          <EditContainer />
        </div>

        {/* Widget Editor */}
        <div className="w-[40vw]"> Background </div>

        {/* Layout selector popup */}
        {layoutSelectToggle && (
          <div className="flex justify-center items-center z-10 fixed top-6 right-6 w-[40vw] h-[calc(100%-theme(space.12))] bg-white rounded-[12px]">
            <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2">
              <button
                onClick={() => addSlide(0)}
                className="flex justify-center items-center w-[11vw] xl:w-[9vw] lg:w-[10vw] aspect-[9/16]"
              >
                <Layout1SVG />
              </button>
              <button
                onClick={() => addSlide(1)}
                className="flex justify-center items-center w-[11vw] xl:w-[9vw] lg:w-[10vw] aspect-[9/16]"
              >
                <Layout2SVG />
              </button>
              <button
                onClick={() => addSlide(2)}
                className="flex justify-center items-center w-[11vw] xl:w-[9vw] lg:w-[10vw] aspect-[9/16]"
              >
                <Layout3SVG />
              </button>
            </div>
          </div>
        )}
      </div>
      <PopUpTimer />
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
