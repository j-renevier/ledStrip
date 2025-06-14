import { useEffect, useRef, useState } from "preact/hooks";

import { getPatterns, changePatterns } from "../../usecase/patterns";

import PlayIcon from "../atome/PlayIcon";
import InfoIcon from "../atome/InfoIcon";
import { hsv2hslString } from "../../usecase/common";

import './patterns.css'

const Patterns = ({patterns, setPatterns, request, lights, setLights, colors}) => {
  const [order, setOrder] = useState([])

  useEffect(() => {
    if (!patterns) {
      fetchPatterns(request, setPatterns);
    }
  }, []);

  useEffect(() => {
    setOrder(lights.data.order)
  }, [lights.data.order]);

  const handlePlayPattern = async (event, request, pattern, order) =>{
    event?.preventDefault()

    const body = {
      pattern : pattern, 
    }

    if (order !== lights.data.order){
      body['order'] = order
    } 

    try {
      await changePatterns(request, body)

      setLights((prev) => ({
        ...prev,
        data : {
          ...prev.data,
          order: order
        }
      }))
    } catch (error) {
      console.error(error)
    }
  }

  const displayColorToSelect = (hue, saturation, value, children, changeOrder) => {
    const newHue = Math.round(hue * 360 / 255);
    const newSaturation =  Math.round(saturation * 100 / 255);
    const newValue =  Math.round(value * 100 / 255);

    return (
      <button className={`pattern-demo-color`} style={{background: hsv2hslString(newHue, newSaturation, newValue)}} onClick={changeOrder}>
        {children}
      </button>
      
    )
  }

  const displayColor = (index, hue, saturation, value, order, setOrder, numberColorsMax, numberColors) => {
    const [displaySelectColor, setDisplaySelectColor] = useState(false);
    const [isRightSide, setIsRightSide] = useState(false);

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


    const changeOrder = (event, colorIndex) => {
      event.stopPropagation()

      numberColors = Number(numberColors ?? numberColorsMax)
      const startIndex = Math.floor(numberColorsMax / numberColors  * index)
      const endIndex = Math.floor(numberColorsMax / numberColors   * ( index + 1 ))

      setOrder((prev) => {
        const newOrder = [...prev];
        for(let i = startIndex; i < endIndex; i++ ) {
          newOrder[i] = colorIndex;
        }
        return newOrder;
      });
    

      setDisplaySelectColor(false)
    };


    const changeDisplaySelectColor = () => {
      setDisplaySelectColor(
        (prev) => {
          setIsRightSide(buttonRef.current.getBoundingClientRect().left > (window.innerWidth / 2)); // Recalc position du change order
          return !prev
        }
      )
    }

    return (
      <button className="pattern-demo-color" style={{background: hsv2hslString(newHue, newSaturation, newValue)}}  onClick={changeDisplaySelectColor} ref={buttonRef}>  
        {
          displaySelectColor  
          ? <div className={`change-order ${isRightSide ? 'right' : ''}`}>
              {
                colors.data.colors
                  .filter((color) => color.id !== order[index]) 
                  .sort((a, b) => {
                    return (b.is_favorite === true) - (a.is_favorite === true);
                  })
                  .map((color) => {
                    return (
                      displayColorToSelect(
                        color?.hue ?? 0,
                        color?.saturation ?? 0,
                        color?.value ?? 0,
                        <span className="bg-hight-contrast">
                          {color.id} hsv({Math.round(color?.hue * 360 / 255)}, {Math.round(color?.saturation / 2.55)}, {Math.round(color?.value / 2.55)}) 
                        </span>,
                        (event) => changeOrder(event, color.id)
                      )
                    );
                  })
              }
            </div>
          : null
        }
      </button>
    );
  };
  
  const displayPatternDemo = (order, setOrder, numberColorsMax, numberColors) => {
    if (!lights?.data?.order || !colors?.data?.colors) return null;

    const items = [];
    
    for (let index = 0; index < (numberColors?? numberColorsMax); index++) {

      const startIndex = Math.floor(numberColorsMax / Number(numberColors ?? numberColorsMax)  * index)
      const color = colors.data.colors.find((c) => c.id === order[startIndex]);
      
      items.push(
        displayColor(index, color?.hue ?? 0, color?.saturation ?? 0, color?.value ?? 0, order, setOrder, numberColorsMax, numberColors)
      );
    }
  
    return (
      <>
        {items}
      </>
    )
  }
  
  const displayPatterns = (patterns, request) => {
    const [numberColors, setNumberColors ] = useState([])
     
    return (
      <section className="pattern-wrapper">
        {
          patterns
            .filter((pattern) => pattern.number_required_color_max !== null)
            .sort((a, b) => {
              if (b.number_required_color_max !== a.number_required_color_max) {
                return b.number_required_color_max - a.number_required_color_max;
              }
              return a.label.localeCompare(b.label);
            })
            .map((pattern, idx) => {

              return (
                <div key={idx} className={`pattern tooltip-parent ${pattern.number_required_color_max > 2 ? 'wide': ''}`}>
                  <div className="ptn-top">
                    <p className="ptn-label">
                      {pattern.label}
                    </p>
                    <button className={`ptn-info outline tooltip-parent fab small`}>
                      <InfoIcon/>
                      <span className="tooltip">{pattern.description}</span>
                    </button>
                  </div>
                  {/* <p className="ptn-description">{pattern.description}</p> */}
                  <div className="ptn-setup">
                    {
                      pattern.dynamic_color_number && 
                      <div className="ptn-config">
                        <label>
                          Nombre de couleurs
                          <input type="number" name="numberColor" min={1} max={pattern.number_required_color_max}
                            value={numberColors[idx] ?? pattern.number_required_color_max} 
                            onInput={(event) => {
                              setNumberColors((prev) => {
                                const newNumberColors = [...prev];
                                newNumberColors[idx] = event.target.value;
                                return newNumberColors
                              })
                            }}/>
                        </label>
                      </div>
                    }

                    <div className="ptn-act">
                      <button onClick={(event) => handlePlayPattern(event, request, pattern.label, order)} className="fab">
                        <PlayIcon/>
                      </button>
                    </div>

                    <div className={`ptn-demo tooltip-parent ${pattern.label.toLowerCase()}`}>
                      {displayPatternDemo(order, setOrder, pattern.number_required_color_max, numberColors[idx])}
                    </div>
                  </div>
                </div>
              )
            })
        }
      </section>
    );
  };

  return (
    <article>
      <h2>Schéma</h2>
      <div>
        {
          displayPatterns(patterns.data, request, lights, colors)
        }
      </div>
    </article>
  )
}

export default Patterns


const fetchPatterns = async (request, setPatterns) => {
  setPatterns((prev) => ({
    ...prev,
    metadata: {
      ...prev.metadata,
      isLoading: true,
    }
  }));
  
  const newPatterns = await getPatterns(request);
  
  setPatterns((prev) => ({
    ...prev,
    data : [
      ...prev.data,
      ...(newPatterns.data ?? null)
    ],
    metadata: {
      ...prev.metadata,
      error : newPatterns.error ?? null,
      isLoading: false,
      lastUpdated: Date.now(),
    }
  }));
};