import { useApi } from "../../../hooks/useApi";
import { useLightStore } from "../../../store/useLightStore";
import { useColorStore } from "../../../store/useColorStore";
import InfoIcon from "../../atome/InfoIcon";
import PlayIcon from "../../atome/PlayIcon";
import DisplayPatternDemo from "./DisplayPatternDemo";
import { usePatternStore } from "../../../store/usePatternStore";
import { useEffect, useState } from "preact/hooks";

const PatternItem = ({ pattern}) => {
  const { request } = useApi();
  const { setPattern } = usePatternStore();
  const { light } = useLightStore();
  const { color } = useColorStore();

  const [numColors, setNumColors] = useState(pattern.number_required_color_max || 1);
  const [selectedColors, setSelectedColors] = useState([]);

  useEffect(() => {
    let initialOrder = light.data.order || [];
    

    if (initialOrder.length < numColors) {
        const defaultColorId = color.data?.colors?.[0]?.id ?? 0;
        const filler = new Array(numColors - initialOrder.length).fill(defaultColorId);
        initialOrder = [...initialOrder, ...filler];
    }
    
    setSelectedColors(initialOrder.slice(0, numColors));
  }, [numColors, light.data.order, color.data.colors]);


  const handlePlay = async () => {
    const body = {
      pattern: pattern.label,
      order: selectedColors.slice(0, numColors) 
    };
    
    await setPattern(request, body);
  };

  const handleUpdateColor = (index, newColorId) => {
    setSelectedColors(prev => {
        const newOrder = [...prev];
        newOrder[index] = newColorId;
        return newOrder;
    });
  };

  return (
    <div className={`pattern tooltip-parent ${pattern.number_required_color_max > 2 ? 'wide' : ''}`}>
      <div className="ptn-top">
        <p className="ptn-label">{pattern.label}</p>
        <button className="ptn-info outline tooltip-parent fab small">
          <InfoIcon />
          <span className="tooltip">{pattern.description}</span>
        </button>
      </div>
            
      <div className="ptn-setup">
        {pattern.dynamic_color_number && (
          <div className="ptn-config">
            <label>
              Nombre de couleurs
              <input
                type="number"
                min={1}
                max={pattern.number_required_color_max}
                value={numColors}
                onInput={(e) => {
                    const val = parseInt(e.target.value, 10);
                    if(!isNaN(val)) setNumColors(val);
                }}
              />
            </label>
          </div>
        )}

        <div className="ptn-act">
          <button onClick={handlePlay} className="first fab">
            <PlayIcon />
          </button>
        </div>

        <div className={`ptn-demo tooltip-parent ${pattern.label.toLowerCase()}`}>
          <DisplayPatternDemo
            selectedColorsIds={selectedColors}
            numColors={numColors}
            onColorChange={handleUpdateColor}
          />
        </div>
      </div>
    </div>
  );
};

export default PatternItem;