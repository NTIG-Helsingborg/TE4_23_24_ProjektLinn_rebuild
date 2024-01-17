import { AddWidgetButton } from "../components/AddWidgetButton";
import { AddSlideButton } from "../components/AddSlideButton";
import { EditContainer } from "../components/DisplayContainer";
import { SlideTimer } from "../components/SlideTimer.jsx";
import { SlideObject } from "../components/SlideObject";
import { useSlides } from "../lib/hooks/useSlides";

export const AdminPage = () => {
  const { data: slides } = useSlides();
  return (
    <>
      <div className="flex m-6">
        {/* Slides */}
        <div className="block w-48 justify-start">
          <div className="min-w-8">
            <p className="flex justify-center items-center m-6">
              <SlideTimer />
            </p>

            {slides?.map((slide) => {
              return (
                <div key={slide.id}>
                  <SlideObject />
                </div>
              );
            })}
          </div>

          <AddSlideButton />
        </div>

        {/* Preview */}
        <EditContainer />

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
