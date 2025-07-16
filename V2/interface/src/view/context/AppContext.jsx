import { createContext } from 'preact';
import { useContext, useState, useMemo } from 'preact/hooks';

import { getKnowHost } from '../../usecase/common';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const basePath = import.meta.env.VITE_BASE_PATH || '/';

  const protocole = import.meta.env.VITE_API_PROTOCOLE || 'http';
  const [host, setHost] = useState(import.meta.env.VITE_API_HOST || getKnowHost()[0]['ip'] || '192.168.1.189');
  const port = import.meta.env.VITE_API_PORT || '80';
  const rootApi = import.meta.env.VITE_API_ROOT_PATH || '/api/';
  const protocolSocket = import.meta.env.VITE_API_PROTOCOLE_SOCKET || 'ws';
  const rootSocket = import.meta.env.VITE_API_ROOT_SOCKET || '/ws';

  const contextValue = useMemo(() => ({
    host,
    setHost,
    protocole,
    port,
    rootApi,
    protocolSocket,
    rootSocket,
    basePath
  }), [host]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);