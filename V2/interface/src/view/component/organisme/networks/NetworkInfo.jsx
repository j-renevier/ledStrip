import { useNetworkStore } from "../../../store/useNetworkStore";

import Info from "../../atome/Info";
import Infos from "../../molecule/Infos";

const NetworkInfo = () => {
  const { network } = useNetworkStore();

  return (
    <Infos lastUpdated={network.metadata.lastUpdated} error={network.metadata.error} isLoading={network.metadata.isLoading}>
      <Info label={'Environement'} value={network.data.environment}/>
      <Info label={'SSID'} value={network.data.ssid}/>
      <Info label={'IP'} value={network.data.ip}/>
      <Info label={'passerelle'} value={network.data.gateway}/>
      <Info label={'sous-réseaux'} value={network.data.subnet}/>
      <Info label={'DNS'} value={network.data.dns}/>
      <Info label={'HTTP'} value={network.data.http}/>
      <Info label={'Websocket'} value={network.data.ws}/>
    </Infos>
  )
}

export default  NetworkInfo