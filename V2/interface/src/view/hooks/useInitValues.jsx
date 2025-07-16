

import { useApi } from './useApi';
import { useAppContext } from '../context/AppContext';
import { useLightStore } from '../store/useLightStore';
import { useColorStore } from '../store/useColorStore';
import { useNetworkStore } from '../store/useNetworkStore';
import { useEffect } from 'preact/hooks';

export const useInitValues = () => {
  const { request } = useApi();
  const { host } = useAppContext()
  const { light, fetchLight} = useLightStore();
  const { network, fetchNetwork } = useNetworkStore();
  const { color, fetchColor } = useColorStore();
  
  useEffect(() => {    
    if (!light.metadata.isLoading && !light.metadata.lastUpdated) {
      fetchLight(request);
    }

    if (!network.metadata.isLoading && !network.metadata.lastUpdated) {
      fetchNetwork(request)
    }
    
    if (!color.metadata.isLoading && !color.metadata.lastUpdated) {
      fetchColor(request)
    }
  }, []);


  useEffect(() => {
    fetchNetwork(request);
  }, [host]);


  const refresh = () => {
    fetchLight(request);
    fetchNetwork(request)
    fetchColor(request)
  }

  return { refresh };
}
