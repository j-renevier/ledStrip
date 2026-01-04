import { useState, useRef, useEffect } from "preact/hooks";
import { hsv2HexadecimalString, hsv2hslString } from "../../../../usecase/common";
import DisplayColorToSelect from "../color/DisplayColorToSelect";
import { useColorStore } from "../../../store/useColorStore";

const DisplayPatternColors = ({ index, hue, saturation, value, changeOrder }) => {
  const [displaySelectColor, setDisplaySelectColor] = useState(false);
  const [isRightSide, setIsRightSide] = useState(false);
  const { color } = useColorStore();
  const buttonRef = useRef(null);

  const newHue = Math.round((hue * 360) / 255);
  const newSaturation = Math.round((saturation * 100) / 255);
  const newValue = Math.round((value * 100) / 255);

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target) && !event.target.closest('.change-order')) {
      setDisplaySelectColor(false);
    }
  };

  useEffect(() => {
    if (displaySelectColor) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [displaySelectColor]);

  const handleColorSelection = (event, colorId) => {
    event.stopPropagation();
    changeOrder(colorId);
    setDisplaySelectColor(false);
  };

  const toggleSelect = () => {
    setDisplaySelectColor((prev) => {
      if (!prev && buttonRef.current) {
        setIsRightSide(buttonRef.current.getBoundingClientRect().left > (window.innerWidth / 2));
      }
      return !prev;
    });
  };

  return (
    <button
      className="pattern-demo-color"
      style={{ background: hsv2hslString(newHue, newSaturation, newValue) }}
      onClick={toggleSelect}
      ref={buttonRef}
    >
      {displaySelectColor && (
        <div className={`change-order ${isRightSide ? 'right' : ''}`}>
          {color.data.colors
            .sort((a, b) => (b.is_favorite === true) - (a.is_favorite === true))
            .map((c) => {
              return (
                <DisplayColorToSelect
                  key={c.index}
                  hue={c.hue}
                  saturation={c.saturation}
                  value={c.value}
                  onClick={(e) => handleColorSelection(e, c.index)}
                >
                  <span className="bg-hight-contrast">
                    {hsv2HexadecimalString(c.hue, (c.saturation/255*100), (c.value/255*100))}
                  </span>
                </DisplayColorToSelect>
              )
            }
          )}
        </div>
      )}
    </button>
  );
};

export default DisplayPatternColors;