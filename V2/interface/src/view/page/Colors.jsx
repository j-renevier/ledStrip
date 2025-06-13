import { useEffect, useRef, useState } from 'preact/hooks'

import { createColors, getColors } from '../../usecase/colors';

import './colors.css'
import PenIcon from '../atome/penIcon';
import TrashIcon from '../atome/TrashIcon';
import ToggleSwitch from '../molecule/ToggleSwitch';
import { hexadecimalString2Rgb, hsv2hslString, hsv2Rgb, rgb2HexadecimalString, rgb2Hsv } from '../../usecase/common';

const addColorInitValue = {hsv: {h : 0, s: 0, v: 0}, isFavorite: false}

const Colors = ({colors, setColors, request, order}) => {
  const [addColor, setAddColor] = useState(addColorInitValue)
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!colors) {
      fetchColors(request, setColors);
    }
  }, []);

  const handleChangeColor  = (event) => {
    setAddColor(prev => ({
      ...prev,
      hsv: rgb2Hsv(hexadecimalString2Rgb(event.target.value))
    }))
  }

  const closeAddColor = () => {
    setAddColor(addColorInitValue)
    dialogRef.current?.close()
  }

  const handleAddColor = async (event) =>{
    event.preventDefault()    
    const body = {
      hue: Math.round(addColor.hsv.h * 255 / 360),     
      saturation: Math.round(addColor.hsv.s * 255 / 100),     
      value: Math.round(addColor.hsv.v * 255 / 100),
      isFavorite: addColor.isFavorite
    }
    
    const createColors = await createColor(request, setColors, body)

    if(createColors.data){

      closeAddColor()
    }  else {
      setAddColor(addColorInitValue)
    }
  }

  return (
    <article>
      <h2>Couleurs</h2>

      <div className="add-color">
        <button onClick={() => dialogRef.current?.showModal()}>Nouvelle couleur</button>

        <dialog ref={dialogRef}>
          <form onSubmit={handleAddColor} onReset={closeAddColor}>
            <h3 className='title'>Nouvelle couleur</h3>
            
            <div className='setup pick-color'>
              <div>
                <label for='hue'>Teinte</label>
                <input type='number' name='hue' id='hue' min={0} max={360} value={addColor.hsv.h ?? 0} onInput={(event)=> setAddColor(prev => ({...prev, hsv: { ...prev.hsv, h: event.target.value}}))}/>

                <label for='saturation'>Saturation</label>
                <input type='number' name='saturation' id='saturation' min={0} max={100} value={addColor.hsv.s ?? 0} onInput={(event)=> setAddColor(prev => ({...prev, hsv: { ...prev.hsv, s: event.target.value}}))}/>

                <label for='value'>Valeurs</label>
                <input type='number' name='value' id='value' min={0} max={100} value={addColor.hsv.v ?? 0} onInput={(event)=> setAddColor(prev => ({...prev, hsv: { ...prev.hsv, v: event.target.value}}))}/>
              </div>

              <input type='color' name='color' value={rgb2HexadecimalString(hsv2Rgb(addColor.hsv))} onInput={(event)=>handleChangeColor(event)}/>
            </div>

            <div className='setup'>
              <ToggleSwitch name={"favorite"} className={'favorite-toggle'} onToggle={()=>setAddColor(prev => ({...prev, isFavorite: !prev.isFavorite}))} isOn={addColor.isFavorite} isLoading={false}>
              <span>Favoris</span>
              </ToggleSwitch>
            </div>

            <div className="act">
              <button type='reset' className='outline'>Annuler</button>
              <button type='submit'>Ajouter</button>
            </div>
          </form> 
        </dialog>
      </div>

      <div>
        <h3>Couleurs sélectionner</h3>
        <div className='selected-colors'>
          {
            order?.map((colorIndex) =>{
              const color = colors.data?.colors.find(color => color.id === colorIndex)
              return (
                displayColor(color?.hue, color?.saturation, color?.value)
              )
            })
          }
        </div>
      </div>

      <div>
        <h3>Liste des couleurs</h3>
        {
          displayColors(colors.data?.colors)
        }
      </div>
    </article>
  )
}

export default Colors

const createColor = async (request, setColors, body) => {
  
  const newColor = await createColors(request, body);
  
  setColors((prev) => {
    return ({
      ...prev,
      data : {
        ...prev.data,
        colors : [...prev.data.colors, newColor.data]
      },
      metadata: {
        ...prev.metadata,
        error : newColor.error ?? null,
        isLoading: false,
        lastUpdated: Date.now(),
      }
    })
  });

  return newColor
};



const fetchColors = async (request, setColors) => {
  setColors((prev) => ({
    ...prev,
    metadata: {
      ...prev.metadata,
      isLoading: true,
    }
  }));
  
  const newColors = await getColors(request);
  
  setColors((prev) => ({
    ...prev,
    data : {
      ...prev.data,
      ...(newColors.data ?? null)
    },
    metadata: {
      ...prev.metadata,
      error : newColors.error ?? null,
      isLoading: false,
      lastUpdated: Date.now(),
    }
  }));
};

const displayColors = (colors) => {
  return (
    <section className='colors-container'>
      {
        colors.map((color) =>{
          return(
            <div className='color'>
              <div className='color-header'>
                <p className='color-context'>
                  ID : {color.id ?? ''}
                  {color.is_favorite ? <span className='is-favorite'>⭐</span> : null}
                </p>
                <div className='color-update'>
                  <button className='fab outline'>
                    <PenIcon/>
                  </button>
                  <button className='fab bg-error'>
                    <TrashIcon/>
                  </button>
                </div>
              </div>
              {
                displayColor(color.hue ?? 0, color.saturation ?? 0, color.value ?? 0)
              }
            </div>
          )
        })
      }
    </section>
  )
}

const displayColor = (hue, saturation, value) => {
  const newHue = Math.round(hue * 360 / 255);
  const newSaturation =  Math.round(saturation * 100 / 255);
  const newValue =  Math.round(value * 100 / 255);

  return (
    <div className="color-info">
      <div className="color-desc">
        <p className="tooltip-parent">
          H : {newHue}
          <span className="tooltip">Teinte : Descrition de la couleurs</span>
        </p>
        <p className="tooltip-parent">
          S : {newSaturation}
          <span className="tooltip">Saturation : Qauntité de gris</span>
        </p>
        <p className="tooltip-parent">
          V : {newValue}
          <span className="tooltip">Valeurs : Quantité de lumière</span>
        </p>
      </div>
      <div className="color-display" style={{background: hsv2hslString(newHue, newSaturation, newValue)}}></div>
    </div>
  )
}


