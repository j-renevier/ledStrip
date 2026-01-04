import { create } from 'zustand'
import { useLightStore } from './useLightStore'
import { changePatterns, getPatterns } from '../../usecase/patterns';

const patternInit = {
  data: {
    patterns: []
  },
  metadata: {
    error: null,
    isLoading: false,
    lastUpdated: 0,
  }
}

export const usePatternStore = create((set, get) => ({
  pattern: patternInit,

  fetchPatterns: async (request) => {
    set(state => ({
      pattern: { ...state.pattern, metadata: { ...state.pattern.metadata, isLoading: true } }
    }));

    const response = await getPatterns(request);

    set(state => ({
      pattern: {
        data: { ...state.pattern.data, patterns: response.data ?? [] },
        metadata: {
          error: response.error ?? null,
          isLoading: false,
          lastUpdated: Date.now()
        }
      }
    }));
  },

  setPattern: async (request, body) => {
    set(state => ({
      pattern: { ...state.pattern, metadata: { ...state.pattern.metadata, isLoading: true } }
    }));

    const response = await changePatterns(request, body);
    const lightStore = useLightStore.getState();
    if (lightStore.fetchLight) {
        await lightStore.fetchLight(request); 
    }

    set(state => ({
      pattern: {
        ...state.pattern,
        metadata: {
          error: response.error ?? null,
          isLoading: false,
          lastUpdated: Date.now()
        }
      }
    }));

    return response;
  },
}));