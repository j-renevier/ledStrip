import { useRef, useState } from "preact/hooks";
import { getKnowHost } from "../../usecase/common";

const SearchNetworks = ({host, setHost, protocole, port, root}) => {
  
  const [loading, setLoading] = useState(false);
  const [currentIp, setCurrentIp] = useState(['192.168.0.0', '192.168.0.10']);
  const [result, setResult] = useState(null);
  const isWorking = useRef(false);
  const knowHosts = getKnowHost();


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
  };

  const startSearch = () => {
    setLoading(true);
    setResult(null);
    isWorking.current = true;

    const ips = generateIps(10);
    let i = 0;

    const iterate = () => {
      if (!isWorking.current || i >= 50) {
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
        checkIpHealth(ip).then((res) => {
          if (res && isWorking.current) {
            setResult(res);
            if (host !== res){
              setHost(res)
            }
            stopSearch();
          }
        }).catch(() => {});
      });

      i++;
      setTimeout(iterate, 200);
    };

    iterate();
  };

  const checkIpHealth = (ip, timeout = 2000) => {
    return new Promise((resolve, reject) => {
      const controller = new AbortController();
      const signal = controller.signal;

      const timeoutId = setTimeout(() => {
        controller.abort();
        reject(new Error('Timeout'));
      }, timeout);

      fetch(`${protocole}://${ip}:${port}${root}health`, { signal })
        .then(res => res.json())
        .then(res => {
          clearTimeout(timeoutId);
          if (res.status?.toLowerCase() === 'ok') {
            resolve(ip);
          } else {
            reject(new Error('Not OK'));
          }
        })
        .catch(() => reject(new Error('Fetch error')));
    });
  };

  return (
    <div>
      <h3>Rechercher IP de l'hôte</h3>

      <button onClick={startSearch} disabled={loading}>
        Démarrer
      </button>

      <button onClick={stopSearch} disabled={!loading}>
        Arrêter
      </button>

      {loading ? (
        <>
          <p>Recherche en cours ...</p>
          <p>Plage d'IP testée : {currentIp[0]} - {currentIp[1]}</p>
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