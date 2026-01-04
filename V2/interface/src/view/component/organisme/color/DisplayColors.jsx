import { useEffect, useRef, useState } from 'preact/hooks'

import { useApi } from '../../../hooks/useApi';
import { useColorStore } from '../../../store/useColorStore';
import { hsv2hslString, color2NewColorValue } from '../../../../usecase/common';

import NewColor from './NewColor';
import DisplayColor from './DisplayColor';
import PenIcon from '../../atome/PenIcon';
import TrashIcon from '../../atome/TrashIcon';

import './colors.css'



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

export default DisplayColors