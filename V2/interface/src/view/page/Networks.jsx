import Websocket from "../organisme/Websocket";
import SelectNetworks from "../organisme/SelectNetworks";
import SearchNetworks from "../organisme/SearchNetworks";

const Networks = ({host, setHost, protocole, port, root}) => {
  return (
    <article>
      <h2>Réseaux</h2>
      <SelectNetworks host={host} setHost={setHost} protocole={protocole} port={port} root={root}/>
      <SearchNetworks host={host} setHost={setHost} protocole={protocole} port={port} root={root}/>
      <Websocket host={host} port={port} root={root}/>

    </article>
  )
}

export default Networks


