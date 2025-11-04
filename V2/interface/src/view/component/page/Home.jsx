import { useEffect, useRef, useState } from 'preact/hooks'

import { useApi } from '../../hooks/useApi';
import { getPatterns } from '../../../usecase/patterns';

import Colors from '../organisme/color/Colors';
import Networks from '../organisme/networks/Networks';
import Patterns from './Patterns';
import Info from "../atome/Info";
import Infos from "../molecule/Infos";
import Header from '../organisme/Header';
import Lights from '../organisme/lights/Lights';
import LightsInfo from '../organisme/lights/LightsInfo';
import NetworkInfo from '../organisme/networks/NetworkInfo';
import ColorInfo from '../organisme/color/ColorInfo';
import ArrowRotateIcon from '../atome/ArrowRotateIcon';
import { useLightStore } from '../../store/useLightStore';



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
  const { light, fetchLight, fetchLightState, toggleLightState } = useLightStore();


  return (
    <main className='home'>
      <Header />

      <details >
        <summary className='one-line'>
          <div className='config-top'>
            <h2>Configuration</h2>
            <button className="outline fab" onClick={refresh}><ArrowRotateIcon/></button>
          </div>
          </summary>
        <article className='config'>

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
      </details>



      {/* <Patterns patterns={patterns} setPatterns={setPatterns} request={request} lights={lights} setLights={setLights} colors={colors}/> */}

      <details open >
        <summary className='one-line'>
          <h2>Lumières</h2>
            <ul>
            <Info 
              error={light.data?.state?.metadata?.error}
              lastUpdated={light.data?.state?.metadata?.lastUpdated}
              isLoading={light.data?.state?.metadata?.isLoading}
              value={light.data.state.data.value ? '☀️' : '🌑'}
            />
          </ul>
        </summary>
        <Lights />
      </details>

      <details open >
        <summary className='one-line'>
          <h2>Couleurs</h2>
        </summary>
        <Colors />
      </details>

      <details open >
        <summary className='one-line'>
          <h2>Réseaux</h2>
        </summary>
        <Networks />
      </details>

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

