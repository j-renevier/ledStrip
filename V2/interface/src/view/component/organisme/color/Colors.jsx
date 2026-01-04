import { useLightStore } from '../../../store/useLightStore';
import { useColorStore } from '../../../store/useColorStore';

import NewColor from './NewColor';
import DisplayColor from './DisplayColor';

import './colors.css'
import DisplayColors from './DisplayColors';

const Colors = () => {

  const { light } = useLightStore();
  const { color } = useColorStore();


  const displayFavoriteStats = () => {
    if (isNaN(color.data?.favorite_colors_left) && favorite_colors_left !== 0) {
      return null
    }
    
    const left = color.data?.colors.reduce((acc, cur) => acc + cur.is_favorite, 0)
    return (
      <p className="tooltip-parent badge">
        {left} / {(color.data?.favorite_colors_left ?? 0 ) + left}
        <span className="tooltip">Nombre de couleur favorite / nombre de couleur favorites max</span>
      </p>
    )
  }

  return (
    <article>
      <div className="color-top">
        <NewColor className='first'/>
        {
          (color.data?.max_colors) ? (
            <div className="color-limit">
              <p className="tooltip-parent badge">
                {color.data?.colors_size} / {color.data?.max_colors}
                <span className="tooltip">Nombre de couleur / nombre de couleur max</span>
              </p>
              {displayFavoriteStats()}
            </div>
          ) : null
        }
      </div>

      <div>        
        <div className="color-top">
          <h3>Couleurs sélectionner</h3>
          {
            light.data?.order && (
              <div>
                <p className="tooltip-parent badge">
                  {light.data?.order.length}{light.data?.max_order ? ` / ${light.data?.max_order}` : null}
                </p>
              </div>
            )
          }
        </div>
        <div className='selected-colors'>
          {
            light.data.order?.map((colorIndex) =>{
              const selectedColor = color.data?.colors.find(color => color.index === colorIndex)
              return (
                DisplayColor(selectedColor?.hue, selectedColor?.saturation, selectedColor?.value)
              )
            })
          }
        </div>
      </div>

      <div>
        <h3>Liste des couleurs</h3>
        {
          DisplayColors(color.data?.colors)
        }
      </div>
    </article>
  )
}

export default Colors
