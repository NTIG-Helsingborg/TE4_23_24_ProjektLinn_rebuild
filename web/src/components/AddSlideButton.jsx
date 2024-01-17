import { useLayouts } from "../lib/hooks/useLayouts";
import { useNewSlide } from "../lib/hooks/useSlides";

export const AddSlideButton = () => {
  const newSlideMutation = useNewSlide();
  const { data: layouts } = useLayouts();

  if (!layouts) return <div> Loading... </div>;
  return (
    <div className="flex justify-center mt-6">
      <button
        title="Add New"
        className="flex items-center justify-center w-8 duration-300 outline-none cursor-pointer group hover:rotate-90"
        onClick={() =>
          newSlideMutation.mutate({
            layout: layouts[0].id,
            interval: 30,
          })
        }
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
  );
};
