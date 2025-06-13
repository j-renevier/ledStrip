import { useRef, useState } from "preact/hooks";
import { getKnowHost } from "../../usecase/common";

const SelectNetworks = ({ host, setHost, protocole, port, root , compact = false}) => {
  const [temporaryHost, setTemporaryHost] = useState(null);
  const timerRef = useRef(null);
  const knowHosts = getKnowHost();

  const checkNewHost = async (value) => {
    try {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      
      setTemporaryHost(value);
      const response = await fetch(`${protocole}://${value}:${port}${root}health`);
      const result = await response.json();

      if (result.status.toLowerCase() === 'ok') {
        setHost(value);
      } else {
        console.error(`Erreur santé serveur : ${result.status} attendu : ok`);
      }
    } catch (error) {
      console.error('Erreur santé serveur : ', error);
    } finally {
      setTemporaryHost(null);
    }
  };

  const handleChangeHost = (event) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      const value = event.target.value;
      checkNewHost(value);
    }, 1500);
  };



  return (
    <form className={`chose-network`} onSubmit={(event) => {event.preventDefault(); checkNewHost(event.target.host.value)}}>
      <div className="can-load">
        <input
          type="text"
          list="known-hosts-list"
          id="host"
          name="host"
          value={temporaryHost ?? host}
          onInput={(event)=>handleChangeHost(event)}
          disabled={!!temporaryHost}
          placeholder="Choisis une IP connue"
          autocomplete="off" 
        />
        <datalist id="known-hosts-list">
          {knowHosts.map((hostItem, index) => (
            <option key={index} value={hostItem.ip}>
              {`${hostItem.label} - ${hostItem.ip}`}
            </option>
          ))}
        </datalist>
        {
          !!temporaryHost
            ? <div className="inside-spinner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                  <linearGradient id="a11">
                    <stop offset="0" stop-color="#3B82F6" stop-opacity="0"></stop>
                    <stop offset="1" stop-color="#3B82F6"></stop>
                  </linearGradient>
                  <circle fill="none" stroke="url(#a11)" stroke-width="30" stroke-linecap="round" stroke-dasharray="0 44 0 44 0 44 0 44 0 360" cx="100" cy="100" r="60" transform-origin="center">
                    <animateTransform type="rotate" attributeName="transform" calcMode="discrete" dur="2" values="360;324;288;252;216;180;144;108;72;36" repeatCount="indefinite"></animateTransform>
                  </circle>
                </svg>
              </div>
            : null
        }
      </div>
      {
        !compact ? <button type="submit">Verifier</button> : null
      }
    </form>
  );
};

export default SelectNetworks;
