import PropTypes from "prop-types";
import { CountdownWidget } from "./CountdownWidget";

export const widgets = {
  countdown: CountdownWidget,
};
/**
 * @param {{type: string, data: object}} props
 */
export const Widget = ({ type, data }) => {
  const component = widgets[type];
  if (!component) return <div>Widget not found</div>;
  return component({ data });
};

Widget.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};
