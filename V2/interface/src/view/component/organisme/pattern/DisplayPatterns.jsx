import { useLightStore } from "../../../store/useLightStore";
import PatternItem from "./PatternItem";

const DisplayPatterns = () => {
  const { light } = useLightStore();

  const patterns = light.data.lights_patterns || [];

  return (
    <section className="pattern-wrapper">
      {patterns
        .filter((pattern) => pattern.number_required_color_max !== null)
        .sort((a, b) => {
          if (b.number_required_color_max !== a.number_required_color_max) {
            return b.number_required_color_max - a.number_required_color_max;
          }
          return a.label.localeCompare(b.label);
        })
        .map((pattern, idx) => (
          <PatternItem key={idx} pattern={pattern} />
        ))}
    </section>
  );
};

export default DisplayPatterns;