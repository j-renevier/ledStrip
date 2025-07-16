import { create } from 'zustand'
import { createColors, getColors } from '../../usecase/colors';


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

export const useColorStore = create((set, get) => ({
  color: colorInit,

  fetchColor: async (request) => {
    set((state) => ({
      color: {
        ...state.color,
        metadata: {
          ...state.color.metadata,
          isLoading: true,
        },
      },
    }));

    const newColors = await getColors(request);

    set((state) => ({
      color: {
        data: {
          ...state.color.data,
          ...(newColors.data ?? {}),
        },
        metadata: {
          ...state.color.metadata,
          error: newColors.error ?? null,
          isLoading: false,
          lastUpdated: Date.now(),
        },
      },
    }));
  },

  createColor: async (request, body) => {
    const newColor = await createColors(request, body);

    set((state) => ({
      color: {
        data: {
          ...state.color.data,
          colors: [...state.color.data.colors, newColor.data],
        },
        metadata: {
          ...state.color.metadata,
          error: newColor.error ?? null,
          isLoading: false,
          lastUpdated: Date.now(),
        },
      },
    }));

    return newColor;
  },
}));

