import { useEffect, useRef, useState } from 'preact/hooks'

import { useApi } from '../../hooks/useApi';
import { getColors } from '../../../usecase/colors';
import { getPatterns } from '../../../usecase/patterns';
import { useAppContext } from '../../context/AppContext';
import { useLightStore } from '../../store/useLightStore';
import { useNetworkStore } from '../../store/useNetworkStore';

import Colors from './Colors';
import Networks from './Networks';
import Patterns from './Patterns';
import Info from "../atome/Info";
import Infos from "../molecule/Infos";
import Header from '../organisme/Header';
import Lights from './Lights';
import LightsInfo from '../organisme/lights/LightsInfo';
import NetworkInfo from '../organisme/networks/NetworkInfo';
import ColorInfo from '../organisme/color/ColorInfo';
import ArrowRotateIcon from '../atome/ArrowRotateIcon';



const patternsInit = {
  data : [], 
  metadata : {
    error : null,
    isLoading : false,
    lastUpdated: 0,
  }
}


const Home = ({refresh}) => {
  const { request } = useApi();
  
  const [patterns, setPatterns] = useState(patternsInit)


  return (
    <main className='home'>
      <Header />

      <article className='config'>
        <div className='config-top'>
          <h2>Configuration</h2>
          <button className="outline fab" onClick={refresh}><ArrowRotateIcon/></button>
        </div>
        <div className='config-infos-wrapper'>
          <div className='config-infos'>
            <h3>Lumières</h3>
            <LightsInfo/>
          </div>

          <div>
            <div className='config-infos'>
              <h3>Réseaux</h3>
              <NetworkInfo/>

            </div>

            <div className='config-infos'>
              <h3>Couleurs</h3>
              <ColorInfo/>
              <div>
              </div>
            </div>
          </div>
        </div>
      </article>


      <Lights />

      {/* <Patterns patterns={patterns} setPatterns={setPatterns} request={request} lights={lights} setLights={setLights} colors={colors}/> */}

      <Colors />

      <Networks />
    </main>
  )
}

export default Home


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
    fetchColors (request, setColors)
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

