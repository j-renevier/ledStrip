import { useRef, useState } from "preact/hooks";

import { getKnowHost } from "../../../../usecase/common";
import { useAppContext } from '../../../context/AppContext';

import SpinnerIcon from "../../atome/SpinnerIcon";

import './selectNetworks.css'

const SelectNetworks = ({compact = false}) => {
  const { host, setHost, protocole, port, rootApi } = useAppContext();
  
  const [temporaryHost, setTemporaryHost] = useState(null);
  const timerRef = useRef(null);
  const knowHosts = getKnowHost();

  const checkNewHost = async (value) => {
    try {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      setTemporaryHost(value);
      const response = await fetch(`${protocole}://${value}:${port}${rootApi}health`);
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
          !!temporaryHost && <SpinnerIcon className={`inline inline-host`} />
        }
      </div>
      {
        !compact ? <button type="submit">Verifier</button> : null
      }
    </form>
  );
};

export default SelectNetworks;
