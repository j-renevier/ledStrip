import { useState, useCallback } from 'preact/hooks';

import { useAppContext } from '../context/AppContext';

export const useApi = () => {
  const { protocole, host, port, rootApi } = useAppContext();
  const baseUrl = `${protocole}://${host}:${port}${rootApi}`;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (endpoint, method = 'GET', body = null, headers = {}) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(baseUrl + endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: body ? JSON.stringify(body) : null,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Erreur lors de la requête');
      }

      setData(result);
      return result;
    } catch (err) {
      setError(err.message || 'Erreur inconnue');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [baseUrl]);

  return { request, data, error, loading };
};