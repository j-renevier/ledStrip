const BluePicker = ({rgbVal, updateRgbVal}) => {
  return (
    <div className='blue'>
      <label htmlFor="inputBlue">Bleu [0 - 255]</label>
      <div className='color-param blue'>
        <div className="value">
          <button 
            className="color-praram-act-btn" 
            onClick={()=> updateRgbVal({...rgbVal, b: (rgbVal.b - 1) < 0 ? 255 : (rgbVal.b - 1)})}
            type="button"
            >
              -
          </button>
          <input 
            type="number" 
            className=""
            id="inputBlue" 
            name="blue" 
            min="0" 
            max="255" 
            step="1"  
            value={rgbVal.b ?? 0}
            onInput={(event)=> updateRgbVal({...rgbVal, b: (event.target.value < 0 ? 0 : (event.target.value <= 255 ? event.target.value : 255))})}
          />
          <button 
            className="color-praram-act-btn"
            onClick={()=> updateRgbVal({...rgbVal, b: (rgbVal.b + 1) > 255 ? 0 : (rgbVal.b + 1)})}
            type="button"
          >
            +
          </button>
        </div>
        <button 
          className="min color-praram-act-btn"
          onClick={()=> updateRgbVal({ ...rgbVal, b: 0})}
          type="button"
        >
          0
        </button>
        <input 
          type="range" 
          className="" 
          id="inputRangeBlue" 
          name="blue" 
          min="0" 
          max="255"
          step="1"  
          value={rgbVal.b ?? 0}
          onInput={(event)=> updateRgbVal({...rgbVal, b: Math.round(event.target.value)})}
        />
        <button 
          className="max color-praram-act-btn" 
          onClick={()=> updateRgbVal({...rgbVal, b: 255})}
          type="button"
        >
          255
        </button>
      </div>
    </div>
  )
}

export default BluePicker