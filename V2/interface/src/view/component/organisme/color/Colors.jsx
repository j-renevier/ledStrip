import { useEffect, useRef, useState } from 'preact/hooks'

import { useApi } from '../../../hooks/useApi';
import { useLightStore } from '../../../store/useLightStore';
import { useColorStore } from '../../../store/useColorStore';
import { hsv2hslString, color2NewColorValue } from '../../../../usecase/common';

import NewColor from './NewColor';
import PenIcon from '../../atome/PenIcon';
import DisplayColor from './DisplayColor';
import TrashIcon from '../../atome/TrashIcon';

import './colors.css'

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
        <NewColor/>
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


const DisplayColors = (colors) => {

  const dialogRef = useRef(null);
  const { request } = useApi();
  const { deleteColor } = useColorStore();

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedColorToEdit, setSelectedColorToEdit] = useState(null);

  const handleDeleteColor = (color) => {
    setSelectedColor(color);
    dialogRef.current?.showModal();
  };

  const closeDeleteColor = () => {
    setSelectedColor(null);
    dialogRef.current?.close();
  };

  const handleConfirmSuppression = async (event) => {
    event.preventDefault();
    if (!selectedColor) return;

    const body = { index: selectedColor.index };
    await deleteColor(request, body);

    closeDeleteColor();
  };

  const handleEditColor = (color) => {
    setSelectedColorToEdit(color);
  };

  const closeEditColor = () => {
    setSelectedColorToEdit(null);
  };

  return (
    <section className='colors-container'>
      {colors.map((color) => {
        return (
          <div className='color' key={color.index}>
            <div className='color-context'>
              <span>Idx : {color.index ?? ''}</span>
            </div>
            {DisplayColor(color.hue ?? 0, color.saturation ?? 0, color.value ?? 0)}
            <div className='color-footer'>
              <div>
                {color.is_favorite ? <p className='is-favorite'>⭐</p> : null}
              </div>
              <div className='color-update'>
              <button
                className='fab outline'
                onClick={() => handleEditColor(color)}
              >
                <PenIcon />
              </button>
                <button
                  className='fab bg-error'
                  onClick={() => handleDeleteColor(color)}>
                  <TrashIcon />
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <dialog ref={dialogRef} className='delete-color-dialog'>
        {selectedColor && (
          <form onSubmit={handleConfirmSuppression} onReset={closeDeleteColor}>
            <h2 className='title'>Confirmer la suppression</h2>
            <p className='color-index'>Index {selectedColor.index}</p>
            <div
              className='color-display'
              style={{
                background: hsv2hslString(
                  Math.round((selectedColor.hue ?? 0) * 360 / 255),
                  Math.round((selectedColor.saturation ?? 0) * 100 / 255),
                  Math.round((selectedColor.value ?? 0) * 100 / 255)
                ),
              }}
            ></div>
            <div className='act'>
              <button type='reset' className='outline'>
                Annuler
              </button>
              <button type='submit'>Supprimer</button>
            </div>
          </form>
        )}
      </dialog>

      {selectedColorToEdit && (
        <NewColor
          title='Modification de la couleur'
          className='fab outline'
          newColorInitValue={color2NewColorValue(selectedColorToEdit)}
          onClose={closeEditColor}
          autoOpen={true}
        >
          <PenIcon />
        </NewColor>
      )}

    </section>
  );
};
