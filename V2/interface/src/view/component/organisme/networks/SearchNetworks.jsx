import { useRef, useState } from "preact/hooks";

import { dateToHourFrFormat, getKnowHost } from "../../../../usecase/common";
import { useAppContext } from '../../../context/AppContext';

import './searchNetworks.css'

const SearchNetworks = () => {
  const { host, setHost, protocole, port, rootApi } = useAppContext();

  const isWorking = useRef(false);
  const knowHosts = getKnowHost();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentIp, setCurrentIp] = useState(['192.168.0.0', '192.168.0.10']);

  const [lastIpString, setLastIpString] = useState('192.168.0.0')
  const [totalNumberIpGenerate, setTotalNumberIpGenerate] = useState(100000)

  const numberIpGenererSimultaneously = 10
  const timeoutIterate = 200
  const timeoutCheckIpHealth = 1000

  const [startDate, setStartDate] = useState(0)

  // - 10.0.0.0 à 10.255.255.255
  // - 172.16.0.0 à 172.31.255.255
  // - 192.168.0.0 à 192.168.255.255

  function* generateIps(numberIpsInReturn = 1, lastIpString='192.168.0.0') {
    let ip = lastIpString.split(".").map(Number);
    let array = []
    let carried = 0 
    
    while(true){
      array = []
      for (let index = 0; index < numberIpsInReturn; index++) {
        for(let j = 3; j >= 0; j--){
          if (j === 3 ){
            ip[j]++
          }
          if (ip[j] > 255) {
            carried = 1
            ip[j] = 0 
          }
          if(carried){
            ip[j-1]++
            carried = 0 
          }
          if (j=== 0 && ip[j] === 255 && carried){
            return
          }

          if(ip[0] === 192 && ip[1] === 169){
            ip = [172, 16, 0, 0]
          }
          if(ip[0] === 172 && ip[1] === 32){
            ip = [10, 0, 0, 0]
          }
          if(ip[0] === 11){
            return
          }
        }
        array.push(ip.join('.'))
      }
      yield array
    }
  }

  const stopSearch = (event) => {
    if (event) {
      setResult('');
    }
    isWorking.current = false;
    setLoading(false);
    setStartDate(0)
  };

  let i = 0
  const startSearch = () => {
    setLoading(true);
    setResult('');
    isWorking.current = true;
    setStartDate(Date.now())

    const ips = generateIps(numberIpGenererSimultaneously, lastIpString);

    const iterate = () => {
      if (!isWorking.current || i >= totalNumberIpGenerate / numberIpGenererSimultaneously) {
        stopSearch();
        return;
      }

      const { value, done } = ips.next();

      if (done) {
        stopSearch();
        return;
      }

      setCurrentIp([value[0], value[value.length - 1]]);

      value.forEach((ip) => {
        checkIpHealth(ip, timeoutCheckIpHealth).then((res) => {
          if (res && isWorking.current) {
            setResult(res);
            if (host !== res){
              setHost(res)
            }
            stopSearch();
          }
        }).catch(() => {});
      });

      i++
      setTimeout(iterate, timeoutIterate);
    };

    iterate();
  };

  const checkIpHealth = (ip, timeout = 1000) => {
    return new Promise((resolve, reject) => {
      const controller = new AbortController();
      const signal = controller.signal;

      const timeoutId = setTimeout(() => {
        controller.abort();
        reject(new Error('Timeout'));
      }, timeout);

      fetch(`${protocole}://${ip}:${port}${rootApi}health`, { signal })
        .then(res => res.json())
        .then(res => {
          clearTimeout(timeoutId);
          if (res.status?.toLowerCase() === 'ok') {
            console.log(ip)
            resolve(ip);
          } else {
            reject(new Error('Not OK'));
          }
        })
        .catch(() => reject(new Error('Fetch error')));
    });
  };

  return (
    <div className="search-networks">
      <h3>Rechercher IP de l'hôte</h3>

      <div className="action-wrapper">
        <div className="action input">
          <label htmlFor="number-ip" className="discreet">
            Nombre d'IP à tester
          </label>
          <input
            type="number"
            id="number-ip"
            value={totalNumberIpGenerate}
            onInput={(event)=>setTotalNumberIpGenerate(event.target.value)}
            disabled={loading}
            placeholder="Nombre d'ip a tester"
            autocomplete="off" 
          />
        </div>
        <div className="action input">
          <label htmlFor="ip-start" className="discreet">
            Début de la recherche
          </label>
          <input
            type="text"
            id="ip-start"
            value={lastIpString}
            onInput={(event)=>setLastIpString(event.target.value)}
            disabled={loading}
            placeholder="IP de départ"
            autocomplete="off" 
          />
        </div>


        <button onClick={startSearch} disabled={loading} className="action">
          Démarrer
        </button>

        <button onClick={stopSearch} disabled={!loading} className="action">
          Arrêter
        </button>
      </div>

      {loading ? (
        <>
          <p>Recherche en cours ...</p>
          <p>Nombre d'IP max testée : {totalNumberIpGenerate}</p>
          <p>Temps max estimer : {totalNumberIpGenerate * timeoutIterate / numberIpGenererSimultaneously / 100}</p>
          <p>Date de début {dateToHourFrFormat(startDate)}</p>
          <p>Temps écouler {Math.round((Date.now() - startDate) / 1000)}s</p>
          <p>Progression {Math.round((Date.now() - startDate)/ (totalNumberIpGenerate * timeoutIterate / numberIpGenererSimultaneously)* 100)}%</p>
          <p>Plage d'IP en cours de test : {currentIp[0]} - {currentIp[1]}</p>
        </>
      ) : result !== null ? (
        <>
          <p>Recherche terminée</p>
          <p>{result === '' ? 'Aucun résultat trouvé' : `Une IP trouvée : ${(host => host ? `${host.label} - ${host.ip}` : result)(knowHosts.find(h => h.ip === result))}`}</p>
        </>
      ) : null}
    </div>
  )
}

export default SearchNetworks