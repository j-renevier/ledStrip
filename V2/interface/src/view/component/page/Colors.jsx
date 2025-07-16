import { useEffect, useRef, useState } from 'preact/hooks'

import { useApi } from '../../hooks/useApi';
import { useLightStore } from '../../store/useLightStore';
import { useColorStore } from '../../store/useColorStore';
import { hexadecimalString2Rgb, hsv2hslString, rgb2HexadecimalString, rgb2Hsv } from '../../../usecase/common';

import PenIcon from '../atome/PenIcon';
import TrashIcon from '../atome/TrashIcon';
import ToggleSwitch from '../molecule/ToggleSwitch';

import './colors.css'
import AddNewColor from '../organisme/color/AddNewColor';

const addColorInitValue = {hsv: {h : 0, s: 0, v: 0}, isFavorite: false}

const Colors = () => {

  const { light } = useLightStore();
  const { color, createColor } = useColorStore();
  const { request } = useApi();

  const [addColor, setAddColor] = useState(addColorInitValue)
  const dialogRef = useRef(null)

  const handleChangeColor  = (event) => {
    setAddColor(prev => {
      const rgb = hexadecimalString2Rgb(event.target.value)
      return ({
        ...prev,
        hsv: rgb2Hsv(rgb.r, rgb.g, rgb.b)
      })
    })
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
    
    const createColors = await createColor(request, body)

    if(createColors.data){

      closeAddColor()
    }  else {
      setAddColor(addColorInitValue)
    }
  }

  return (
    <article>
      <h2>Couleurs</h2>

      <AddNewColor/>

      <div>
        <h3>Couleurs sélectionner</h3>
        <div className='selected-colors'>
          {
            light.data.order?.map((colorIndex) =>{
              const color = color.data?.colors.find(color => color.id === colorIndex)
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
          displayColors(color.data?.colors)
        }
      </div>
    </article>
  )
}

export default Colors


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


