import { useApi } from "../../../hooks/useApi";
import { useLightStore } from "../../../store/useLightStore";
import { usePatternStore } from "../../../store/usePatternStore";

const DisplayPatternsCircle = () => {
  const {light, toggleLightState} = useLightStore();
  const { setPattern } = usePatternStore();
  const { request } = useApi();

    const handlePlayPattern = async (event, patternLabel) => {
      event?.preventDefault();
      
      const body = {
        pattern: patternLabel
      };

      try {
        await setPattern(request, body);
      } catch (error) {
        console.error(error);
      }
    };

const patternsList = light.data.lights_patterns || [];
    
    const allowedLabels = ['BLINK', 'FADE_IN', 'FADE_OUT', 'IN', 'OUT'];
    const activePatterns = patternsList.filter(pattern => 
        allowedLabels.includes(pattern.label)
    );
const count = activePatterns.length;
    if (count === 0) return null;

    return (
      <div className="pat-wrapper-circle">
        {activePatterns.map((pattern, idx) => {
          const angleDeg = (360 / count) * idx - 90;
          const angleRad = (angleDeg * Math.PI) / 180;
          
          const radius = 130; 
          const x = radius * Math.cos(angleRad);
          const y = radius * Math.sin(angleRad);

          return (
            <div
              key={idx}
              className="pat"
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
              }}
              onClick={(event) => handlePlayPattern(event, pattern.label)}
            >
              <p>{pattern.label}</p>
            </div>
          );
        })}
      </div>
    );
  };

export default DisplayPatternsCircle