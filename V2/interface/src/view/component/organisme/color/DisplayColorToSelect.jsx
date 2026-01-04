import { hsv2hslString } from "../../../../usecase/common";

const DisplayColorToSelect = ({ hue, saturation, value, children, onClick }) => {
  const newHue = Math.round((hue * 360) / 255);
  const newSaturation = Math.round((saturation * 100) / 255);
  const newValue = Math.round((value * 100) / 255);

  return (
    <button
      className="pattern-demo-color"
      style={{ background: hsv2hslString(newHue, newSaturation, newValue) }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default DisplayColorToSelect;