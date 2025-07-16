import { useEffect, useRef, useState } from 'preact/hooks'

import { useApi } from '../../../hooks/useApi';
import { useColorStore } from '../../../store/useColorStore';
import { hexadecimalString2Rgb, hsl2Hsv, hsv2Hsl, hsv2Rgb, rgb2HexadecimalString, rgb2Hsv } from '../../../../usecase/common';

import HuePicker from '../../molecule/HuePicker';
import ToggleSwitch from '../../molecule/ToggleSwitch';
import ValueHSVPicker from '../../molecule/ValueHSVPicker';
import SaturationHSVPicker from '../../molecule/SaturationHSVPicker';

import './addNewColor.css'
import SaturationHSLPicker from '../../molecule/SaturationHSLPicker';
import LightHSLPicker from '../../molecule/LightHSLPicker';
import RedPicker from '../../molecule/RedPicker';
import GreenPicker from '../../molecule/GreenPicker';
import BluePicker from '../../molecule/BluePicker';

const addColorInitValue = {hsv: {h : 0, s: 100, v: 100}, isFavorite: false}

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

const AddNewColor = () => {

  const { request } = useApi();
  const { createColor } = useColorStore();

  const dialogRef = useRef(null)
  const [addColor, setAddColor] = useState(addColorInitValue)
  const [hexVal, setHexVal] = useState('#ff0000');
  const [hslVal, setHslVal] = useState({h: 0, s: 100, l: 50})
  const [rgbVal, setRgbVal] = useState({r: 255, g: 0, b: 0})

  useEffect(() => {
    setHexVal(rgb2HexadecimalString(hsv2Rgb(addColor.hsv.h, addColor.hsv.s, addColor.hsv.v)));
    setHslVal(hsv2Hsl(addColor.hsv.h, addColor.hsv.s, addColor.hsv.v));
    setRgbVal(hsv2Rgb(addColor.hsv.h, addColor.hsv.s, addColor.hsv.v));
  }, [addColor.hsv]);

  useEffect(() => {
    updateCssValues(addColor.hsv, hslVal, rgbVal)
  }, [addColor.hsv, hslVal, rgbVal]);

  const updateHslVal = ({h, s, l}) => {
    setHslVal({ h, s, l });
    const newHsv = hsl2Hsv(h , s, l);
    if (!areHsvEqual(newHsv, addColor.hsv)) {
      setAddColor(prev => ({ ...prev, hsv: newHsv }));
    }
  }

  const updateRgbVal = ({r, g, b}) => {
    setRgbVal({r, g, b});
    const newHsv = rgb2Hsv(r, g, b);
    if (!areHsvEqual(newHsv, addColor.hsv)) {
      setAddColor(prev => ({ ...prev, hsv: newHsv }));
    }
  }

  const handleChangeColor = (event) => {
    const raw = event.target.value.trim().replace(/^#/, '').toUpperCase();
    const hexRegex = /^[0-9A-F]{6}$/;

    setHexVal(event.target.value);

    if (hexRegex.test(raw)) {
      const rgb = hexadecimalString2Rgb(`#${raw}`);
      const newHsv = rgb2Hsv(rgb.r, rgb.g, rgb.b);

      if (!areHsvEqual(newHsv, addColor.hsv)) {
        setAddColor((prev) => ({ ...prev, hsv: newHsv }));
      }
    }
  }

  const closeAddColor = () => {
    setAddColor(addColorInitValue)
    setHexVal(rgb2HexadecimalString(hsv2Rgb(addColor.hsv.h, addColor.hsv.s, addColor.hsv.v)));
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
    <div className="add-color">
      <button onClick={() => dialogRef.current?.showModal()}>Nouvelle couleur</button>

      <dialog ref={dialogRef} className="add-color-dialog" >
        <form onSubmit={handleAddColor} onReset={closeAddColor}>
          <h2 className='title'>Nouvelle couleur</h2>

          <div className="scrollable">
            <div className='pick-color sys-wrapper'>
              <div className='hue-sys sys'>
                <div className='select-param-wrapper'>
                  <HuePicker addColor={addColor} setAddColor={setAddColor}/>
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
                    <SaturationHSVPicker addColor={addColor} setAddColor={setAddColor}/>
                    <ValueHSVPicker addColor={addColor} setAddColor={setAddColor}/>
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
                <input type='color' name='color' value={rgb2HexadecimalString(hsv2Rgb(addColor.hsv.h, addColor.hsv.s, addColor.hsv.v))} onInput={(event)=>handleChangeColor(event)} />
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

              <ToggleSwitch name={"favorite"} className={'favorite-toggle'} onToggle={()=>setAddColor(prev => ({...prev, isFavorite: !prev.isFavorite}))} isOn={addColor.isFavorite} isLoading={false}>
                <span>⭐Favori</span>
              </ToggleSwitch>
            </div>

          </div>
          <div className="act">
            <button type='reset' className='outline'>Annuler</button>
            <button type='submit'>Ajouter</button>
          </div>
        </form> 
      </dialog>
    </div>
  )
}

export default AddNewColor