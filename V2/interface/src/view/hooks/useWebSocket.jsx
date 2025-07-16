import { useEffect, useRef, useState, useCallback } from 'preact/hooks';

import { useAppContext } from '../context/AppContext';
import { useLightStore } from '../store/useLightStore';

export const useWebSocket = (onMessageCallback = null, autoConnect = true) => {
  const { host, port, protocolSocket, rootSocket} = useAppContext();
  const url = `${protocolSocket}://${host}:${port}${rootSocket}`;

  const socketRef = useRef(null);
  const [state, setState] = useState('idle');
  const [messages, setMessages] = useState([]);

  const { updateLightsState } = useLightStore();

  const open = useCallback(() => {
    if (!url) return;

    if (socketRef.current && [WebSocket.OPEN, WebSocket.CONNECTING].includes(socketRef.current.readyState)) {
      console.warn('Open webSocket');
      return;
    }

    try {
      const socket = new WebSocket(url);
      socketRef.current = socket;
      setState('connecting');

      socket.addEventListener('open', () => {
        setState('open');
        setMessages(prev => [...prev, {value: `Connection established`, level: 'success', update: Date.now()}]);
      });

      socket.addEventListener('message', (event) => {
        const lastUpdated = Date.now()
        setMessages(prev => [...prev, {value: `Response received`, level: 'success', update: Date.now()}, {value: event.data, update: lastUpdated}]);
        
        const value = JSON.parse(event.data)

        if (value.hasOwnProperty("state")){
          updateLightsState({value : value.state, lastUpdated: lastUpdated})
        }
        
        if (onMessageCallback) onMessageCallback(event.data);
      });

      socket.addEventListener('close', (event) => {
        setState('closed');
        console.log(event)
        setMessages(prev => [...prev, {value: `Closed`, level: 'warning', update: Date.now()}, {value: `${event.code} ${event.reason}`, update: Date.now()}]);
      });
  
      socket.addEventListener('error', (error) => {
        setState('error');
        console.log(error)
        setMessages(prev => [...prev, {value: `Error`, level: 'error', update: Date.now()}, {value: error.message || JSON.stringify(error), update: Date.now()}]);
      })

      return () => {
        close()
      };
    } catch (error) {
      console.error("WebSocket open() failed:", error);
      setState('error');
      setMessages(prev => [...prev, { value: `Exception while opening socket`, level: 'error', update: Date.now() }, { value: error.message, update: Date.now() }]);
    }
  }, [url]);

  const sendMessage = useCallback((message) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(message);
      setMessages(prev => [...prev, {value: `Message send`, level: 'info', update: Date.now()}, {value: message, update: Date.now()}]);
    } else {
      console.warn('WebSocket not open');
    }
  }, []);

  const close = useCallback(() => {
    if (socketRef.current) {
      socketRef.current.close();
      socketRef.current = null;
      setState('closed');
    }
  }, []);


  useEffect(() => {
    if (autoConnect) {
      open();
    }

    return () => {
      close();
    };
  }, [autoConnect, open, close]);


  return { state, messages, open, sendMessage, close };
};