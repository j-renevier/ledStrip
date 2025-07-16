const GreenPicker = ({rgbVal, updateRgbVal}) => {
  return (
    <div className='green'>
      <label htmlFor="inputGreen">Vert [0 - 255]</label>
      <div className='color-param green'>
        <div className="value">
          <button 
            className="color-praram-act-btn" 
            onClick={()=> updateRgbVal({...rgbVal, g: (rgbVal.g - 1) < 0 ? 255 : (rgbVal.g - 1)})}
            type="button"
            >
              -
          </button>
          <input 
            type="number" 
            className=""
            id="inputGreen" 
            name="green" 
            min="0" 
            max="255" 
            step="1"  
            value={rgbVal.g ?? 0}
            onInput={(event)=> updateRgbVal({...rgbVal, g: (event.target.value < 0 ? 0 : (event.target.value <= 255 ? event.target.value : 255))})}
          />
          <button 
            className="color-praram-act-btn"
            onClick={()=> updateRgbVal({...rgbVal, g: (rgbVal.g + 1) > 255 ? 0 : (rgbVal.g + 1)})}
            type="button"
          >
            +
          </button>
        </div>
        <button 
          className="min color-praram-act-btn"
          onClick={()=> updateRgbVal({ ...rgbVal, g: 0})}
          type="button"
        >
          0
        </button>
        <input 
          type="range" 
          className="" 
          id="inputRangeGreen" 
          name="green" 
          min="0" 
          max="255"
          step="1"  
          value={rgbVal.g ?? 0}
          onInput={(event)=> updateRgbVal({...rgbVal, g: Math.round(event.target.value)})}
        />
        <button 
          className="max color-praram-act-btn" 
          onClick={()=> updateRgbVal({...rgbVal, g: 255})}
          type="button"
        >
          255
        </button>
      </div>
    </div>
  )
}

export default GreenPicker