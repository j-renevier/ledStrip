import { useColorStore } from "../../../store/useColorStore";

import Info from "../../atome/Info";
import Infos from "../../molecule/Infos";

const ColorInfo = () => {
  const { color } = useColorStore();
  
  return (
    <Infos lastUpdated={color.metadata.lastUpdated} error={color.metadata.error} isLoading={color.metadata.isLoading}>
      <Info label={'Nombre de couleurs'} value={color.data.colors_size}/>
      <Info label={'Nombre max de couleurs'} value={color.data.max_colors}/>
      <Info label={'Nombre max de couleurs favorites'} value={color.data.max_favorite_colors}/>
    </Infos>
  )
}

export default  ColorInfo