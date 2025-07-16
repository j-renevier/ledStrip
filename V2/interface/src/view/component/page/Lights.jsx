import { useEffect } from "preact/hooks";

import { useApi } from "../../hooks/useApi";
import { useLightStore } from "../../store/useLightStore";

import Info from "../atome/Info";
import ToggleSwitch from "../molecule/ToggleSwitch";
import ArrowRotateIcon from "../atome/ArrowRotateIcon";

import './lights.css'

const Lights = () => {
  const { light, fetchLight, fetchLightState, toggleLightState } = useLightStore();
  const { request } = useApi();
  
  useEffect(() => {
    if (!light.metadata.isLoading || light.metadata.lastUpdated) {
      fetchLight(request);
    }
  }, []);
  
  return (
    <article>
      <div className="lights-header">
        <h2>Lumières</h2>
        <ul>
          <Info 
            error={light.data?.state?.metadata?.error}
            lastUpdated={light.data?.state?.metadata?.lastUpdated}
            isLoading={light.data?.state?.metadata?.isLoading}
            value={light.data.state.data.value ? '☀️' : '🌑'}
          />
        </ul>
      </div>

      <div className="lights-state">
        <ToggleSwitch  onToggle={()=>toggleLightState(request)} isOn={light.data?.state?.data?.value} isLoading={light.data?.state?.metadata?.isLoading}/>
          
        <button className="outline fab" onClick={()=>fetchLightState(request)}><ArrowRotateIcon/></button>
      </div>
    </article>
  )
}

export default Lights
