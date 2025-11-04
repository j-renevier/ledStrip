import { hsv2hslString } from '../../../../usecase/common';

import './colors.css'

const DisplayColor = (hue, saturation, value) => {
  const newHue = Math.round(hue * 360 / 255);
  const newSaturation =  Math.round(saturation * 100 / 255);
  const newValue =  Math.round(value * 100 / 255);

  return (
    <div className="color-info">
      <div className="color-desc">
        <p className="tooltip-parent">
          Hue : {newHue}
          <span className="tooltip">Teinte : Descrition de la couleurs [0 - 360]</span>
        </p>
        <p className="tooltip-parent">
          Sat : {newSaturation}
          <span className="tooltip">Saturation : Qauntité de gris [0 - 100]</span>
        </p>
        <p className="tooltip-parent">
          Value : {newValue}
          <span className="tooltip">Valeurs : Quantité de lumière [0 - 100]</span>
        </p>
      </div>
      <div className="color-display" style={{background: hsv2hslString(newHue, newSaturation, newValue)}}></div>
    </div>
  )
}


export default DisplayColor