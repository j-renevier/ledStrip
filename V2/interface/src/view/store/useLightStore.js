import { create } from 'zustand'
import { getLights, getLightsState, toggleLightsState } from '../../usecase/lights'

const lightInit = {
  data: {
    colors: {
      data: {
        colors: []
      },
      metadata: {
        error: null,
        isLoading: false,
        lastUpdated: 0,
      }
    },
    order: [],
    state: {
      data: {
        value: null
      },
      metadata: {
        error: null,
        isLoading: false,
        lastUpdated: 0,
      }
    }
  },
  metadata: {
    error: null,
    isLoading: false,
    lastUpdated: 0,
  }
}

export const useLightStore = create((set, get) => ({
  light: lightInit,

  fetchLight: async (request) => {
    set(state => ({
      light: {
        ...state.light,
        metadata: { ...state.light.metadata, isLoading: true }
      }
    }));

    const response = await getLights(request);

    set(state => ({
      light: {
        ...state.light,
        data: {
          ...state.light.data,
          ...response.data,
          state: {
            data: {
              ...state.light.data.state?.data,
              value: response.data?.state ?? state.light.data.state?.data?.value
            },
            metadata: {
              ...state.light.data.state?.metadata,
              error: response.error ?? null,
              isLoading: false,
              lastUpdated: Date.now()
            }
          }
        },
        metadata: {
          error: response.error ?? null,
          isLoading: false,
          lastUpdated: Date.now()
        }
      }
    }));
  },

  fetchLightState: async (request) => {
    set(state => ({
      light: {
        ...state.light,
        data: {
          ...state.light.data,
          state: {
            ...state.light.data.state,
            metadata: {
              ...state.light.data.state.metadata,
              isLoading: true
            }
          }
        }
      }
    }));

    const response = await getLightsState(request);

    set(state => ({
      light: {
        ...state.light,
        data: {
          ...state.light.data,
          state: {
            data: {
              ...state.light.data.state.data,
              value: response.data
            },
            metadata: {
              error: response.error ?? null,
              isLoading: false,
              lastUpdated: Date.now()
            }
          }
        }
      }
    }));
  },

  toggleLightState: async (request) => {
    set(state => ({
      light: {
        ...state.light,
        data: {
          ...state.light.data,
          state: {
            ...state.light.data.state,
            metadata: {
              ...state.light.data.state.metadata,
              isLoading: true
            }
          }
        }
      }
    }));

    const response = await toggleLightsState(request);

    set(state => ({
      light: {
        ...state.light,
        data: {
          ...state.light.data,
          state: {
            data: {
              ...state.light.data.state.data,
              value: response.data
            },
            metadata: {
              error: response.error ?? null,
              isLoading: false,
              lastUpdated: Date.now()
            }
          }
        }
      }
    }));
  },

  updateLightsState: ({value=null, error=null, isLoading=null, lastUpdated=null}) => {
    set(state => ({
      light: {
        ...state.light,
        data: {
          ...state.light.data,
          state: {
            data: {
              ...state.light.data.state.data,
              value: value ?? state.light.data.state.data.value
            },
            metadata: {
              error: error ?? state.light.data.state.metadata.error,
              isLoading: isLoading ?? state.light.data.state.metadata.isLoading,
              lastUpdated: lastUpdated ?? state.light.data.state.metadata.lastUpdated,
            }
          }
        }
      }
    }));
  },
}));


  // const light = useLighttore(state => state.light); // tout l'objet
  // const lighttate = useLighttore(state => state.light.data.state.data.value);
  // const globalMetadata = useLighttore(state => state.light.metadata);
  // const stateMetadata = useLighttore(state => state.light.data.state.metadata);
  // const { light, fetchLight, fetchLightState, toggleLightState } = useLighttore();
  // const { light, fetchLight, fetchLightState, toggleLightState } = useLighttore();

  // useEffect(() => {
  //   if (!light?.data?.leds_pin) {
  //     fetchLight(request);
  //   }
  // }, []);