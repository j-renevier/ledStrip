import { Link } from 'preact-router';
import { useEffect, useState } from 'preact/hooks'

import { useApi } from '../../hooks/useApi';
import { useWebSocket } from '../../hooks/useWebSocket';
import { useLightStore } from '../../store/useLightStore';
import { changePatterns } from '../../../usecase/patterns';

import Logo from '../molecule/Logo';
import HomeIcon from '../atome/HomeIcon';
import NewColor from '../organisme/color/NewColor';
import ColorPaletteIcon from '../atome/ColorPaletteIcon';
import DisplayPatterns from '../organisme/pattern/displayPatterns';

import './dashboard.css'
import DisplayPatternsCircle from '../organisme/pattern/DisplayPatternsCircle';

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

const patternsInit = {
  data : [], 
  metadata : {
    error : null,
    isLoading : false,
    lastUpdated: 0,
  }
}

const Dashboard = () => {
  const {light, toggleLightState} = useLightStore();
  const { request } = useApi();

  useWebSocket();
  

  const [order, setOrder] = useState([])
  const [colors, setColors] = useState(colorInit)
  const [patterns, setPatterns] = useState(patternsInit)
  

  useEffect(() => {
    setOrder(light.data.order)
  }, [light.data.order]);

  const basePath = import.meta.env.VITE_BASE_PATH || '/';

  const goToMain = () => {
    const currentPath = window.location.pathname.replace(basePath, '/') || '/';

    if (currentPath === '/') {
      return basePath + 'home';
    }
    return basePath;
  };

  const handlePlayPattern = async (event, request, pattern, order) =>{
    event?.preventDefault()
  
    const body = {
      pattern : pattern, 
    }
  
    if (order !== light.data.order){
      body['order'] = order
    } 
  
    try {
      await changePatterns(request, body)
  
      setLight((prev) => ({
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

  return (
    <main className='dashboard'>
      <div className='header'>
        <Logo color='#FFFFFF'/>
      </div>

      <div class="container">
        <DisplayPatternsCircle/>

        <div className="start">
          <label
            for="themeToggle"
            className="st-sunMoonThemeToggleBtn"
          >
            <input type="checkbox" id="themeToggle" className="themeToggleInput" onChange={()=>toggleLightState(request)} checked={light.data.state.data.value}/>
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
        <div className="pat-wrapper-rect">    
          <DisplayPatterns/>
          <div class="card last">
            <Link href={goToMain()}>
              <button className="fab outline tooltip-parent">
                <HomeIcon/>
                <span className="tooltip">Aller à l'acceuil</span>
              </button>
            </Link>
            <NewColor className='fab outline tooltip-parent'>      
              <ColorPaletteIcon/>
              <span className="tooltip">Ajouter une couleur</span>
            </NewColor>
          </div>
        </div>
      </div>
  </main>
  )
}

export default Dashboard



