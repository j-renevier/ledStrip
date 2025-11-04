import Websocket from "./Websocket";
import SelectNetworks from "./SelectNetworks";
import SearchNetworks from "./SearchNetworks";

const Networks = () => {
  return (
    <article>
      <SelectNetworks/>
      <SearchNetworks/>
      <Websocket/>
    </article>
  )
}

export default Networks


