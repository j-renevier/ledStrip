import { useEffect } from "preact/hooks";

import {Info} from "../molecule/Info";
import ToggleSwitch from "../molecule/ToggleSwitch";
import { getLights, getLightsState, toggleLightsState } from "../../usecase/lights";

import './lights.css'

const Lights = ({lights, setLights, request}) => {

  useEffect(() => {
    if (!lights) {
      fetchLights(request, setLights);
    }
  }, []);

  return (
    <article>
      <div className="lights-header">
        <h2>Lights</h2>
        <ul>
          <Info 
            error={lights.data?.state?.metadata?.error}
            lastUpdated={lights.data?.state?.metadata?.lastUpdated}
            isLoading={lights.data?.state?.metadata?.isLoading}
            value={lights.data?.state?.data?.content ? '☀️' : '🌑'}
          />
        </ul>
         

      </div>

      <div className="lights-state">
        <ToggleSwitch  onToggle={(event)=>toggleLight(event, request, setLights)} isOn={lights.data?.state?.data?.content} isLoading={lights.data?.state?.metadata?.isLoading}/>
        <button className="outline" onClick={(event)=>fetchLightState(event, request, setLights)}>Rafraichir</button>
      </div>
    </article>
  )
}

export default Lights

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


const fetchLightState = async (event, request, setLights) => {
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
  
  const newState = await getLightsState(request);
      
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

