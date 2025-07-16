import { useLightStore } from "../../../store/useLightStore";

import Info from "../../atome/Info";
import Infos from "../../molecule/Infos";

const LightsInfo = () => {
  const { light } = useLightStore();

  return (
    <Infos lastUpdated={light.metadata.lastUpdated} error={light.metadata.error} isLoading={light.metadata.isLoading}>
      <Info label={'Broche'} value={light.data.leds_pin}/>
      <Info label={'Type de leds'} value={light.data.leds_type}/> 
      <Info label={'Nombre de leds'} value={light.data.number_leds}/>
      <br/>
      <Info label={'Etat'} error={light.data.state.metadata.error} lastUpdated={light.data.state.metadata.lastUpdated} isLoading={light.data.state.metadata.isLoading} value={light.data.state.data.value ?'ALLUME' : 'ETTEIND'}/>
      <Info label={'Vitesse'} value={light.data.speed}/>
      <Info label={'Mise a jours toutes les n milliseconds'} value={light.data.update_each_milliseconds}/>
      <Info label={'Luminositée de référence'} value={light.data.reference_brightness}/>
      <Info label={'Plan'} value={light.data.pattern}/>
      <Info label={'Décalage'} value={light.data.offset}/>
      <Info label={'Flou'} value={light.data.blur}/>
      <Info label={'Etalement'} value={light.data.spread}/>
      <Info label={'Nombre de leds utilisé'} value={light.data.number_of_leds_used}/>
    </Infos>
  )
}

export default  LightsInfo