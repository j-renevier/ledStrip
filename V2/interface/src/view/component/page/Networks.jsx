import Websocket from "../organisme/networks/Websocket";
import SelectNetworks from "../organisme/networks/SelectNetworks";
import SearchNetworks from "../organisme/networks/SearchNetworks";

const Networks = () => {
  return (
    <article>
      <h2>Réseaux</h2>
      <SelectNetworks/>
      <SearchNetworks/>
      <Websocket/>
    </article>
  )
}

export default Networks


