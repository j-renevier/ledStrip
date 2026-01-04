import { useColorStore } from "../../../store/useColorStore";
import DisplayPatternColors from "./DisplayPatternColors";

const DisplayPatternDemo = ({ selectedColorsIds, numColors, onColorChange }) => {
  const { color } = useColorStore();

  const items = [];
  
  for (let i = 0; i < numColors; i++) {
    const colorId = selectedColorsIds[i];
    const colorObj = color.data?.colors.find(c => c.index === colorId);

    items.push(
      <DisplayPatternColors
        key={i}
        index={i}
        hue={colorObj?.hue ?? 0}
        saturation={colorObj?.saturation ?? 0}
        value={colorObj?.value ?? 0}
        changeOrder={(newId) => onColorChange(i, newId)}
      />
    );
  }

  return <>{items}</>;
};

export default DisplayPatternDemo;