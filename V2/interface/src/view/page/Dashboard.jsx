import { Link } from 'preact-router';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks'

import { useApi } from '../hooks/useApi';
import { getColors} from '../../usecase/colors';
import { hsv2hslString } from '../../usecase/common';
import { getLights, toggleLightsState } from '../../usecase/lights';
import { changePatterns, getPatterns } from '../../usecase/patterns';

import PlayIcon from '../atome/PlayIcon';
import HomeIcon from '../atome/HomeIcon';
import AngleLeftIcon from '../atome/AngleLeftIcon';
import LightbulbIcon from '../atome/LightbulbIcon';
import ColorPaletteIcon from '../atome/ColorPaletteIcon';

import './dashboard.css'

const colorInit = {
  data : {
    colors :  []
  }, 
  metadata : {
    error : null,
    isLoading : false,
    lastUpdated: 0,
  }
}

const lightsInit = {
  data : {
    colors: colorInit,
    order: []
  }, 
  metadata : {
    error : null,
    isLoading : false,
    lastUpdated: 0,
  }
}

const patternsInit = {
  data : [], 
  metadata : {
    error : null,
    isLoading : false,
    lastUpdated: 0,
  }
}

const Dashboard = ({protocole, host, setHost, port ,root}) => {
  const [order, setOrder] = useState([])
  const [lights, setLights] = useState(lightsInit)
  const [colors, setColors] = useState(colorInit)
  const [patterns, setPatterns] = useState(patternsInit)
  
  const { request } = useApi(`${protocole}://${host}:${port}${root}`);
  
  useEffect(() => {
    console.log('dashboard')
    fetchLightsNColorsNPatterns(request, lights, setLights, colors, setColors, patterns, setPatterns);
  }, []);
  
  useEffect(() => {
    setOrder(lights.data.order)
  }, [lights.data.order]);

  const goToMain = () => {
    if (window.location.pathname === "/") {
      return '/home'
    } 
    return '/'
  }

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


  const displayPatternsCircle = (patterns, request, order) => {
    const activePatterns = patterns.slice(0, 7);

    return (
      <div className="pat-wrapper-circle">
        {
          activePatterns.map((pattern, idx) => {
            const angle = 360 / 7 * idx;
            const radius = 230 / 2;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <div 
                key={idx} 
                className={`pat`}
                style={{
                  transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                }}
                onClick={(event) => handlePlayPattern(event, request, pattern.label, order)} 
              >
                  <p>
                    {pattern.label}
                  </p>
              </div>
            )
          })
        }
      </div>
    );
  };

  const displayPatternsRect = (patterns, request, order) => {
    const activePatterns = patterns
    .filter((pattern) => pattern.number_required_color_max !== null)
    .sort((a, b) => {
      if (b.number_required_color_max !== a.number_required_color_max) {
        return b.number_required_color_max - a.number_required_color_max;
      }
      return a.label.localeCompare(b.label);
    })

    return (
      <>
        {
          activePatterns.map((pattern, idx) => {
            return (
              <div key={idx} class="card">
                <div>
                  <p class="main">
                    {pattern.label}
                  </p>
                  <p class="mainsub">
                    {pattern.description}
                  </p>
                </div>
                <button onClick={(event) => handlePlayPattern(event, request, pattern.label, order)} className="fab play">
                  <PlayIcon/>
                </button>
              </div>
            )
          })
        }
      </>
    );
  };


  return (
    <main className='dashboard'>
      <div className='header'>
        <Link href={goToMain()}>
          <div className='logo'>
            <LightbulbIcon/>
            <span>Led Stripe</span>
          </div>
        </Link>
      </div>

      <div class="container">
        {
          displayPatternsCircle(patterns.data, request, order)
        }

        <div className="start">
          <label
            for="themeToggle"
            className="st-sunMoonThemeToggleBtn"
          >
            <input type="checkbox" id="themeToggle" className="themeToggleInput" onChange={(event)=>toggleLight(event, request, setLights)} checked={lights.data?.state?.data?.content}/>
            <div className="svg-wrapper">
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="none"
              >
                <mask id="moon-mask">
                  <rect x="0" y="0" width="20" height="20" fill="white"></rect>
                  <circle cx="11" cy="3" r="8" fill="black"></circle>
                </mask>
                <circle
                  className="sunMoon"
                  cx="10"
                  cy="10"
                  r="8"
                  mask="url(#moon-mask)"
                ></circle>
                <g>
                  <circle className="sunRay sunRay1" cx="18" cy="10" r="1.5"></circle>
                  <circle className="sunRay sunRay2" cx="14" cy="16.928" r="1.5"></circle>
                  <circle className="sunRay sunRay3" cx="6" cy="16.928" r="1.5"></circle>
                  <circle className="sunRay sunRay4" cx="2" cy="10" r="1.5"></circle>
                  <circle className="sunRay sunRay5" cx="6" cy="3.1718" r="1.5"></circle>
                  <circle className="sunRay sunRay6" cx="14" cy="3.1718" r="1.5"></circle>
                </g>
              </svg>
            </div>
          </label>
        </div>
      </div>

      <div className="bottom">

      <DisplayColors colors={colors.data.colors} order={order} setOrder={setOrder} />


      <div className="pat-wrapper-rect">
        {
          displayPatternsRect(patterns.data, request, order)
        }
        <div class="card last">
          <Link href={goToMain()}>
            <button className="fab outline tooltip-parent">
              <HomeIcon/>
              <span className="tooltip">Aller à l'acceuil</span>
            </button>
          </Link>
          <button className="fab tooltip-parent">
            <ColorPaletteIcon/>
            <span className="tooltip">Changer les couleurs</span>
          </button>
        </div>
      </div>

      </div>


    </main>
  )
}

export default Dashboard



const fetchLights = async (request, setLights) => {
  setLights((prev) => ({
    ...prev,
    metadata: {
      ...prev.metadata,
      isLoading: true,
    }
  }));

  const newLights = await getLights(request);

  setLights((prev) => ({
    ...prev,
    data : {
      ...prev.data,
      ...(newLights.data ?? null),
      state: {
        data : {
          ...prev.data.state?.data,
          content : newLights.data.state
        },
        metadata : {
          ...prev.data.state?.matadata,
          error : newLights.error ?? null,
          isLoading: false,
          lastUpdated: Date.now(),
        }
      },
    },
    metadata: {
      ...prev.metadata,
      error : newLights.error ?? null,
      isLoading: false,
      lastUpdated: Date.now(),
    }
  }));
};

const fetchColors = async (request, setColors) => {
  setColors((prev) => ({
    ...prev,
    metadata: {
      ...prev.metadata,
      isLoading: true,
    }
  }));
  
  const newColors = await getColors(request);
  
  setColors((prev) => ({
    ...prev,
    data : {
      ...prev.data,
      ...(newColors.data ?? null)
    },
    metadata: {
      ...prev.metadata,
      error : newColors.error ?? null,
      isLoading: false,
      lastUpdated: Date.now(),
    }
  }));
};

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


const fetchLightsNColorsNPatterns = async (request, lights, setLights, colors, setColors, patterns, setPatterns) => {
  await fetchLights (request, setLights)
  
  if(lights.data.colors && (colors.metadata.lastUpdated < lights.metadata.lastUpdated)) {
    setColors((prev) => ({
      ...prev,
      data : {
        ...prev.data,
        ...lights.data.colors
      },
      metadata: {
        ...prev.metadata,
        error: lights.metadata.error,
        isLoading: false,
        lastUpdated: lights.metadata.lastUpdated,
      }
    }));
  } else {
    fetchColors(request, setColors)
  }

  if(lights.data.lights_patterns && (patterns.metadata.lastUpdated < lights.metadata.lastUpdated)) {
    setPatterns((prev) => ({
      ...prev,
      data : [
        ...prev.data,
        ...lights.data.lights_patterns
      ],
      metadata: {
        ...prev.metadata,
        error: lights.metadata.error,
        isLoading: false,
        lastUpdated: lights.metadata.lastUpdated,
      }
    }));
  } else {
    fetchPatterns(request, setPatterns)
  }
};


const toggleLight = async (event, request, setLights) => {
  event?.preventDefault()

  setLights((prev) => ({
    ...prev,
    data: {
      ...prev.data,
      state: {
        ...prev.data.state.data,
        metadata : {
          ...prev.data.state.matadata,
          isLoading: true,
        }
      },
    }
  }));

  const newState = await toggleLightsState(request);
  
  setLights((prev) => ({
    ...prev,
    data : {
      ...prev.data,
      state: {
        data : {
          ...prev.data.state.data,
          content : newState.data
        },
        metadata : {
          ...prev.data.state.matadata,
          error : newState.error ?? null,
          isLoading: false,
          lastUpdated: Date.now(),
        }
      },
    }
  }));
};


const DisplayColors = ({ colors, order, setOrder }) => {
  const scrollRef = useRef(null);
  const [colorWidth, setColorWidth] = useState(0);
  const visibleCount = 7;

  useEffect(() => {
    if (scrollRef.current) {
      const firstColor = scrollRef.current.querySelector('.carousel-color');
      if (firstColor) {
        const style = getComputedStyle(firstColor);
        const marginRight = parseInt(style.marginRight, 10) || 0;
        setColorWidth(firstColor.offsetWidth + marginRight);
      }
    }
  }, [colors]);
  
  const scrollByOffset = useCallback((offset) => {
    const container = scrollRef.current;
    if (!container) return;
  
    const isVertical = container.scrollHeight > container.clientHeight;
  
    container.scrollBy({
      top: isVertical ? offset : 0,
      left: isVertical ? 0 : offset,
      behavior: 'smooth',
    });
  }, []);
  
  const scrollStart = useCallback(() => {
    scrollByOffset(-(colorWidth * visibleCount / 2 ));
  }, [colorWidth, visibleCount, scrollByOffset]);
  
  const scrollEnd = useCallback(() => {
    scrollByOffset(colorWidth * visibleCount / 2);
  }, [colorWidth, visibleCount, scrollByOffset]);

  const selectColor = useCallback(
    (id) => {
      setOrder((prev) => ([id, ...prev]));
    },
    [setOrder]
  );


  const ColorItem = ({ color }) => {
    const h = Math.round((color?.hue * 360) / 255);
    const s = Math.round((color?.saturation * 100) / 255);
    const v = Math.round((color?.value * 100) / 255);
    const colorStyle = { background: hsv2hslString(h, s, v) };
    const isSelected = order.includes(color?.id);
    const orderIndex = isSelected ? order.indexOf(color.id) + 1 : null;

    return (
      <div
        key={color?.id}
        className="carousel-color"
        style={colorStyle}
        onClick={() => selectColor(color?.id)}
      >
        {isSelected && <span className="color-order">{orderIndex}</span>}
      </div>
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-nav start" onClick={scrollStart}>
        <button className="fab">
          <AngleLeftIcon />
        </button>
      </div>

      <div className="carousel-show-colors" ref={scrollRef}>
        {colors.map((color) => (
          <ColorItem key={color.id} color={color} />
        ))}
      </div>

      <div className="carousel-nav end" onClick={scrollEnd}>
        <button className="fab">
          <AngleLeftIcon />
        </button>
      </div>
    </div>
  );
};





// const DisplayColors = ({ colors, order, setOrder }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const visibleCount = 7;

//   const goLeft = () => {
//     setCurrentIndex((prev) =>
//       (prev - 1 + colors.length) % colors.length
//     );
//   };

//   const goRight = () => {
//     setCurrentIndex((prev) =>
//       (prev + 1) % colors.length
//     );
//   };

//   const selectColor = (id) => {
//     setOrder((prev) => (prev.includes(id) ? prev : [id, ...prev]));
//   };


//   const getVisibleColors = () => {
//     const result = [];
//     for (let i = 0; i < visibleCount; i++) {
//       const index = (currentIndex + i) % colors?.length;
//       result.push(colors[index]);
//     }
//     return result;
//   };

//   return (
//     <div className="carousel">
//       <div className="carousel-nav left" onClick={goLeft}>
//         <button className="fab">
//           <AngleLeftIcon/>
//         </button>
//       </div>

//       <div className="carousel-show-colors">
//         {getVisibleColors().map((color) => {
//           const h = Math.round(color?.hue * 360 / 255);
//           const s = Math.round(color?.saturation * 100 / 255);
//           const v = Math.round(color?.value * 100 / 255);
//           const colorStyle = { background: hsv2hslString(h, s, v) };

//           return (
//             <div
//               key={color?.id}
//               className="carousel-color"
//               style={colorStyle}
//               onClick={() => selectColor(color?.id)}
//             >
//               {
//                 order.includes(color?.id) ? (
//                   <span className="color-order">{order?.indexOf(color.id) + 1}</span>
//                 ) : null
//               }
//             </div>
//           );
//         })}
//       </div>

//       <div className="carousel-nav right" onClick={goRight}>
//         <button className="fab">
//           <AngleRightIcon/>
//         </button>
//       </div>
//     </div>
//   );
// };




// const displayColors = (colors) => {
//   return (
//     <section className='colors-container'>
//       {
//         colors.map((color) =>{
//           return(
//             <div className='color'>
//               <div className='color-header'>
//                 <p className='color-context'>
//                   ID : {color.id ?? ''}
//                   {color.is_favorite ? <span className='is-favorite'>⭐</span> : null}
//                 </p>
//                 <div className='color-update'>
//                   <button className='fab outline'>
//                     <PenIcon/>
//                   </button>
//                   <button className='fab bg-error'>
//                     <TrashIcon/>
//                   </button>
//                 </div>
//               </div>
//               {
//                 displayColor(color.hue ?? 0, color.saturation ?? 0, color.value ?? 0)
//               }
//             </div>
//           )
//         })
//       }
//     </section>
//   )
// }

// const displayColor = (hue, saturation, value) => {
//   const newHue = Math.round(hue * 360 / 255);
//   const newSaturation =  Math.round(saturation * 100 / 255);
//   const newValue =  Math.round(value * 100 / 255);

//   return (
//     <div className="color-info">
//       <div className="color-desc">
//         <p className="tooltip-parent">
//           H : {newHue}
//           <span className="tooltip">Teinte : Descrition de la couleurs</span>
//         </p>
//         <p className="tooltip-parent">
//           S : {newSaturation}
//           <span className="tooltip">Saturation : Qauntité de gris</span>
//         </p>
//         <p className="tooltip-parent">
//           V : {newValue}
//           <span className="tooltip">Valeurs : Quantité de lumière</span>
//         </p>
//       </div>
//       <div className="color-display" style={{background: hsv2hslString(newHue, newSaturation, newValue)}}></div>
//     </div>
//   )
// }














// const displayColors = (colors) => {
//   return (
//     <div className="carouselle">
//       <div className='go-color-left' onClick={gotocolorN-1}>
//         <button className="">
//           <
//         </button>
//       </div>
//       <div className='caraouslle-show-colors'>
//         {
//           colors.map((color) =>{
//             const newHue = Math.round(color.hue * 360 / 255);
//             const newSaturation =  Math.round(color.saturation * 100 / 255);
//             const newValue =  Math.round(color.value * 100 / 255);

//             return(
//               <div className='color' key={color.id} style={{background: hsv2hslString(newHue, newSaturation, newValue)}} onClick={setorder(prev => [color.id, ...prev])}>
//                 { 
//                   color.id in order || 
//                   <span className='color-order'>{index color in order}</span>
//                 }
//               </div>
//             )
//           })
//         }
//       </div>
//       <div className='go-color-right'>
//         <button className="" onClick={gotocolorN+1}>
//           <
//         </button>
//       </div>

//       <div className=''>
//         {
//           colors.map((color) =>{
//             const newHue = Math.round(color.hue * 360 / 255);
//             const newSaturation =  Math.round(color.saturation * 100 / 255);
//             const newValue =  Math.round(color.value * 100 / 255);

//             return(
//               <div className='color' style={{background: hsv2hslString(newHue, newSaturation, newValue)}} onClick={gotocolorX}>
//               </div>
//             )
//           })
//         }
//       </div>

//     </div>
//   )
// }
