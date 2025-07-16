import { create } from 'zustand'
import { getNetworks } from '../../usecase/networks';


const networkInit = {
  data : {
  }, 
  metadata : {
    error : null,
    isLoading : false,
    lastUpdated: 0,
  }
}

export const useNetworkStore = create((set, get) => ({
  network: networkInit,
  
  fetchNetwork : async (request) => {
    set((state) => ({
      network : {
        ...state.network,
        metadata: { ...state.network.metadata, isLoading: true }
      }
    }));
    
    const response = await getNetworks(request);

    set((state) => ({
      network : {
        ...state.network,
        data : {
          ...state.network.data,
          ...response.data
        },
        metadata: {
          error: response.error ?? null,
          isLoading: false,
          lastUpdated: Date.now()
        }
      }
    }));
  }
}));

