import { useEffect, useRef, useState } from 'preact/hooks'

import { useApi } from '../../../hooks/useApi';
import { useColorStore } from '../../../store/useColorStore';
import { hexadecimalString2Rgb, hsl2Hsv, hsv2Hsl, hsv2Rgb, rgb2HexadecimalString, rgb2Hsv } from '../../../../usecase/common';

import HuePicker from '../../molecule/HuePicker';
import RedPicker from '../../molecule/RedPicker';
import BluePicker from '../../molecule/BluePicker';
import GreenPicker from '../../molecule/GreenPicker';
import ToggleSwitch from '../../molecule/ToggleSwitch';
import ValueHSVPicker from '../../molecule/ValueHSVPicker';
import LightHSLPicker from '../../molecule/LightHSLPicker';
import SaturationHSVPicker from '../../molecule/SaturationHSVPicker';
import SaturationHSLPicker from '../../molecule/SaturationHSLPicker';

import './newColor.css'

const updateCssValues = (hsvColor, hslColor, rgbColor) => {
  let root = document.documentElement

  root.style.setProperty('--color-main-hue', hslColor.h.toString())
  root.style.setProperty('--color-main-saturation', hslColor.s.toString())
  root.style.setProperty('--color-main-light', hslColor.l.toString())
  
  root.style.setProperty('--color-main-saturation-hsv', hsvColor.s.toString())
  root.style.setProperty('--color-main-value-hsv', hsvColor.v.toString())
  
  root.style.setProperty('--color-main-red', rgbColor.r.toString())
  root.style.setProperty('--color-main-green', rgbColor.g.toString())
  root.style.setProperty('--color-main-blue', rgbColor.b.toString())
}

const areHsvEqual = (a, b) => {
  return  a.h === b.h && a.s === b.s && a.v === b.v
};


const NewColor = ({title = 'Nouvelle couleur', children='Nouvelle couleur', className='', newColorInitValue = {index : null, hsv: {h : 0, s: 100, v: 100}, isFavorite: false}, autoOpen = false, onClose }) => {

  const { request } = useApi();
  const { createColor, updateColor } = useColorStore();

  const dialogRef = useRef(null)
  const [newColor, setNewColor] = useState(newColorInitValue)
  const [hexVal, setHexVal] = useState(rgb2HexadecimalString(hsv2Rgb(newColor.hsv.h, newColor.hsv.s, newColor.hsv.v)));
  const [hslVal, setHslVal] = useState(hsv2Hsl(newColor.hsv.h, newColor.hsv.s, newColor.hsv.v))
  const [rgbVal, setRgbVal] = useState(hsv2Rgb(newColor.hsv.h, newColor.hsv.s, newColor.hsv.v))

  useEffect(() => {
    if (autoOpen && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [autoOpen]);

  useEffect(() => {
    setHexVal(rgb2HexadecimalString(hsv2Rgb(newColor.hsv.h, newColor.hsv.s, newColor.hsv.v)));
    setHslVal(hsv2Hsl(newColor.hsv.h, newColor.hsv.s, newColor.hsv.v));
    setRgbVal(hsv2Rgb(newColor.hsv.h, newColor.hsv.s, newColor.hsv.v));
  }, [newColor.hsv]);


  useEffect(() => {
    updateCssValues(newColor.hsv, hslVal, rgbVal)
  }, [newColor.hsv, hslVal, rgbVal]);

  const updateHslVal = ({h, s, l}) => {
    setHslVal({ h, s, l });
    const newHsv = hsl2Hsv(h , s, l);
    if (!areHsvEqual(newHsv, newColor.hsv)) {
      setNewColor(prev => ({ ...prev, hsv: newHsv }));
    }
  }

  const updateRgbVal = ({r, g, b}) => {
    setRgbVal({r, g, b});
    const newHsv = rgb2Hsv(r, g, b);
    if (!areHsvEqual(newHsv, newColor.hsv)) {
      setNewColor(prev => ({ ...prev, hsv: newHsv }));
    }
  }

  const handleChangeColor = (event) => {
    const raw = event.target.value.trim().replace(/^#/, '').toUpperCase();
    const hexRegex = /^[0-9A-F]{6}$/;

    setHexVal(event.target.value);

    if (hexRegex.test(raw)) {
      const rgb = hexadecimalString2Rgb(`#${raw}`);
      const newHsv = rgb2Hsv(rgb.r, rgb.g, rgb.b);

      if (!areHsvEqual(newHsv, newColor.hsv)) {
        setNewColor((prev) => ({ ...prev, hsv: newHsv }));
      }
    }
  }

  const closeNewColor = () => {
    setNewColor(newColorInitValue)
    setHexVal(rgb2HexadecimalString(hsv2Rgb(newColor.hsv.h, newColor.hsv.s, newColor.hsv.v)));
    dialogRef.current?.close()
    if (onClose) onClose();
  }

  const handleNewColor = async (event) =>{
    event.preventDefault()

    let result
    if (newColor.index !== null && newColor.index !== undefined) {

      const body = {
        index : newColorInitValue.index
      }

      newColorInitValue.hsv.h !== Math.round(newColor.hsv.h * 255 / 360) ? body.hue = Math.round(newColor.hsv.h * 255 / 360) : null
      newColorInitValue.hsv.s !== Math.round(newColor.hsv.s * 255 / 100) ? body.saturation = Math.round(newColor.hsv.s * 255 / 100) : null
      newColorInitValue.hsv.v !== Math.round(newColor.hsv.v * 255 / 100) ? body.value = Math.round(newColor.hsv.v * 255 / 100) : null
      newColorInitValue.isFavorite !== newColor.isFavorite ? body.isFavorite = newColor.isFavorite : null
      
      result = await updateColor(request, body)

    } else {
      const body = {
        hue: Math.round(newColor.hsv.h * 255 / 360),     
        saturation: Math.round(newColor.hsv.s * 255 / 100),     
        value: Math.round(newColor.hsv.v * 255 / 100),
        isFavorite: newColor.isFavorite
      }
      
      result = await createColor(request, body)
    }

    if(result.data){
      closeNewColor()
      return null
    }  else {
      setNewColor(newColorInitValue)
    }
  }

  
  const handleOpenModal = () => {
    setHslVal(hsv2Hsl(newColor.hsv.h, newColor.hsv.s, newColor.hsv.v));
    setRgbVal(hsv2Rgb(newColor.hsv.h, newColor.hsv.s, newColor.hsv.v));

    setTimeout(() => {
      dialogRef.current?.showModal()
    }, 1);
  }

  return (
    <div className="new-color">
      { 
        autoOpen || (
          <button onClick={handleOpenModal} className={className}>{children}</button>
        )
      }

      <dialog ref={dialogRef} className="new-color-dialog" >
        <form onSubmit={handleNewColor} onReset={closeNewColor}>
          <h2 className='title'>{title}</h2>

          <div className="scrollable">
            <div className='pick-color sys-wrapper'>
              <div className='hue-sys sys'>
                <div className='select-param-wrapper'>
                  <HuePicker newColor={newColor} setNewColor={setNewColor}/>
                </div>
              </div>

              <div className='hsl-sys sys'>
                <details open>
                  <summary>HSL</summary>
                  <div className='select-param-wrapper'>
                    <SaturationHSLPicker hslVal={hslVal} updateHslVal={updateHslVal}/>
                    <LightHSLPicker hslVal={hslVal} updateHslVal={updateHslVal}/>
                  </div>
                </details>
              </div>

              <div className='hsv-sys sys'>
                <details>
                  <summary>HSV</summary>
                  <div className='select-param-wrapper'>
                    <SaturationHSVPicker newColor={newColor} setNewColor={setNewColor}/>
                    <ValueHSVPicker newColor={newColor} setNewColor={setNewColor}/>
                  </div>
                </details>
              </div>

              <div className='rgb-sys sys'>
                <details>
                  <summary>RGB</summary>
                  <div className='select-param-wrapper'>
                    <RedPicker rgbVal={rgbVal} updateRgbVal={updateRgbVal}/>
                    <GreenPicker rgbVal={rgbVal} updateRgbVal={updateRgbVal}/>
                    <BluePicker rgbVal={rgbVal} updateRgbVal={updateRgbVal}/>
                  </div>
                </details>
              </div>
            </div>

            <div className='favorit-native-picker'>

              <div className='native-picker'>
                <input type='color' name='color' value={rgb2HexadecimalString(hsv2Rgb(newColor.hsv.h, newColor.hsv.s, newColor.hsv.v))} onInput={(event)=>handleChangeColor(event)} />
              </div>
              
              <div className='hex-sys sys'>
                <div className='select-param-wrapper'>
                  <div>
                    <label for='hexa' className="tooltip-parent">Hexadecimal
                      <span className="tooltip">[#000000 - #FFFFFF] ou [000000 - FFFFFF]</span>
                    </label>
                    <input type='text' name='hexa' id='hexa' value={hexVal} onChange={(event)=>handleChangeColor(event)}/>
                  </div>
                </div>
              </div>

              <ToggleSwitch name={"favorite"} className={'favorite-toggle'} onToggle={()=>setNewColor(prev => ({...prev, isFavorite: !prev.isFavorite}))} isOn={newColor.isFavorite} isLoading={false}>
                <span>⭐Favori</span>
              </ToggleSwitch>
            </div>
          </div>
          <div className="act">
            <button type='reset' className='outline'>Annuler</button>
            <button type="submit" className='first'>{(newColor.index !== null && newColor.index !== undefined) ? 'Modifier' : 'Ajouter'}</button>

          </div>
        </form> 
      </dialog>
    </div>
  )
}

export default NewColor