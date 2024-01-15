import { WidgetGridComponent } from "./WidgetGridComponent";
import { WidgetsMainComponent } from "./WidgetsMainComponent";
import { WidgetsInteractComponent } from "./WidgetsInteractComponent";

export const DisplayContainer = () => {
  return (
    <>
      <WidgetGridComponent />
      <WidgetsMainComponent />
    </>
  );
};

export const EditContainer = () => {
  return (
    <>
      <WidgetGridComponent />
      <WidgetsInteractComponent />
    </>
  );
};
