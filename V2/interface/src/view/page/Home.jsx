import { useEffect, useRef, useState } from 'preact/hooks'

import Lights from './Lights';
import Colors from './Colors';
import Networks from './Networks';
import Patterns from './Patterns';

import { useApi } from '../hooks/useApi';
import Header from '../organisme/Header';
import {Info, Infos} from '../molecule/Info';

import { getColors} from '../../usecase/colors';
import { getLights } from '../../usecase/lights';
import { getNetworks } from '../../usecase/networks';
import { getPatterns } from '../../usecase/patterns';

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

const networksInit = {
  data : {
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


const Home = ({protocole, host, setHost, port , root}) => {
  const [networks, setNetworks] = useState(networksInit)
  const [health, setHealth] = useState(healthData)
  const [lights, setLights] = useState(lightsInit)
  const [colors, setColors] = useState(colorInit)
  const [patterns, setPatterns] = useState(patternsInit)

  const { request } = useApi(`${protocole}://${host}:${port}${root}`);

  useEffect(() => {
    fetchLightsNColorsNPatterns(request, lights, setLights, colors, setColors, patterns, setPatterns);
  }, []);
  
  
  useEffect(() => {
    fetchNetworks(request, setNetworks);
  }, [host]);

  return (
    <main>
      <Header host={host} setHost={setHost} protocole={protocole} port={port} root={root}/>

      <article className='config'>
        <h2>Configuration</h2>
        <div>
          <div>
            <h3>Lumières</h3>
            <Infos lastUpdated={lights.metadata.lastUpdated} error={lights.metadata.error} isLoading={lights.metadata.isLoading}>
              <Info label={'Broche'} value={lights.data?.leds_pin}/>
              <Info label={'Type de leds'} value={lights.data?.leds_type}/> 
              <Info label={'Nombre de leds'} value={lights.data?.number_leds}/>
              <br/>
              <Info label={'Etat'} error={lights.data?.state?.metadata?.error} lastUpdated={lights.data?.state?.metadata?.lastUpdated} isLoading={lights.data?.state?.metadata?.isLoading} value={lights.data?.state?.data?.content? '☀️' : '🌑'}/>
              <Info label={'Vitesse'} value={lights.data?.speed}/>
              <Info label={'Mise a jours toutes les n milliseconds'} value={lights.data?.update_each_milliseconds}/>
              <Info label={'Luminositée de référence'} value={lights.data?.reference_brightness}/>
              <Info label={'Plan'} value={lights.data?.pattern}/>
              <Info label={'Décalage'} value={lights.data?.offset}/>
              <Info label={'Flou'} value={lights.data?.blur}/>
              <Info label={'Etalement'} value={lights.data?.spread}/>
              <Info label={'Nombre de leds utilisé'} value={lights.data?.number_of_leds_used}/>
            </Infos>
          </div>

          <div>
            <div>
              <h3>Réseaux</h3>
              <Infos lastUpdated={networks.metadata.lastUpdated} error={networks.metadata.error} isLoading={networks.metadata.isLoading}>
                <Info label={'Environement'} value={networks.data?.environment}/>
                <Info label={'SSID'} value={networks.data?.ssid}/>
                <Info label={'IP'} value={networks.data?.ip}/>
                <Info label={'passerelle'} value={networks.data?.gateway}/>
                <Info label={'sous-réseaux'} value={networks.data?.subnet}/>
                <Info label={'DNS'} value={networks.data?.dns}/>
                <Info label={'HTTP'} value={networks.data?.http}/>
                <Info label={'Websocket'} value={networks.data?.ws}/>
              </Infos>
            </div>

            <div>
              <h3>Couleurs</h3>
              <Infos lastUpdated={colors.metadata.lastUpdated} error={colors.metadata.error} isLoading={colors.metadata.isLoading}>
                <Info label={'Nombre de couleurs'} value={colors.data?.colors_size}/>
                <Info label={'Nombre max de couleurs'} value={colors.data?.max_colors}/>
                <Info label={'Nombre max de couleurs favorites'} value={colors.data?.max_favorite_colors}/>
              </Infos>
              <div>
              </div>
            </div>
          </div>
        </div>
      </article>


      <Lights lights={lights} setLights={setLights} request={request}/>

      <Patterns patterns={patterns} setPatterns={setPatterns} request={request} lights={lights} setLights={setLights} colors={colors}/>

      <Colors colors={colors} setColors={setColors} request={request} order={lights.data.order}/>

      <Networks host={host} setHost={setHost} protocole={protocole} port={port} root={root}/>

      <article>
        <h2>Avertissement</h2>
        <ul>
          <li>Application android : <a href="https://github.com/j-renevier/ledStrip/blob/feature/basics_api/V2/interface/pwa/app-release-signed.apk">Lien vers l'apk</a></li>
          <li>Page github : <a href="https://j-renevier.github.io/ledStrip/">Site heberger sur github page</a></li>
          <li>Repository github : <a href="https://github.com/j-renevier/ledStrip">Repo github</a></li>
          <li style={{display: 'flex', gap:'0.5rem', fontSize: '0.7rem'}}>
            <div>
              <p>
              Les couleurs sont décrites à l'aide des paramètres HSV — Teinte (Hue), Saturation et Valeur, qui diffèrent du modèle HSL.
              </p>
              <p>
                Le modèle HSL ajuste la luminosité en ajoutant du blanc ou du noir à la couleur, tandis que HSV la modifie uniquement en ajoutant du noir.
              </p>
            </div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/1/13/Color_solid_comparison_hsl_hsv_rgb_cone_sphere_cube_cylinder.png' style={{height: '100px'}}/>
          </li>
        </ul>

        <h2>Health</h2>
        <div>
          <p>version : {health?.version ?? ''}</p>
        </div>
      </article>
    </main>
  )
}

export default Home

const fetchNetworks = async (request, setNetworks) => {
  setNetworks((prev) => ({
    ...prev,
    metadata: {
      ...prev.metadata,
      isLoading: true,
    }
  }));
  
  const newNetworks = await getNetworks(request);

  setNetworks((prev) => ({
    ...prev,
    data : {
      ...prev.data,
      ...(newNetworks.data ?? null)
    },
    metadata: {
      ...prev.metadata,
      error : newNetworks.error ?? null,
      isLoading: false,
      lastUpdated: Date.now(),
    }
  }));
};

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


const healthData = {
  status: 'OK',
  version: '2.0.0'
}