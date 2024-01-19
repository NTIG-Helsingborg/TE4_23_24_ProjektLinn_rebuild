/* eslint-disable react/prop-types */
import { useDeleteSlide } from "../lib/hooks/useSlides";
import {
  Layout1SVG,
  Layout2SVG,
  Layout3SVG,
} from "../assets/layoutPreviews/layoutSVGs";

export const SlideObject = ({ id }) => {
  const newDeleteFunc = useDeleteSlide();

  return (
    <>
      {/* Delete button */}
      <button
        onClick={() => {
          newDeleteFunc.mutate(id, {
            onSuccess: () => {
              location.reload();
            },
          });
        }}
        className="w-[50%] mx-auto relative grid place-items-end mb-[-30px] pr-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="25px"
          className="duration-300 stroke-red-500 fill-none group-hover:fill-purple-800 group-active:stroke-purple-200 group-active:fill-purple-600 group-active:duration-0"
        >
          <path
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            strokeWidth="1.5"
          ></path>
          <path d="M8 12H16" strokeWidth="1.5"></path>
          <path d="M12 16V8" strokeWidth="1.5"></path>
        </svg>
      </button>

      {/* SVG icon for layout */}
      <div className="flex justify-center items-center w-[5vw] mx-auto">
        <Layout1SVG />
      </div>
    </>
  );
};
