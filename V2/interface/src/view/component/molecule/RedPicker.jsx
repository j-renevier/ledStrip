const RedPicker = ({rgbVal, updateRgbVal}) => {
  return (
    <div className='red'>
      <label htmlFor="inputRed">Rouge [0 - 255]</label>
      <div className='color-param red'>
        <div className="value">
          <button 
            className="color-praram-act-btn" 
            onClick={()=> updateRgbVal({...rgbVal, r: (rgbVal.r - 1) < 0 ? 255 : (rgbVal.r - 1)})}
            type="button"
            >
              -
          </button>
          <input 
            type="number" 
            className=""
            id="inputRed" 
            name="red" 
            min="0" 
            max="255" 
            step="1"  
            value={rgbVal.r ?? 0}
            onInput={(event)=> updateRgbVal({...rgbVal, r: (event.target.value < 0 ? 0 : (event.target.value <= 255 ? event.target.value : 255))})}
          />
          <button 
            className="color-praram-act-btn"
            onClick={()=> updateRgbVal({...rgbVal, r: (rgbVal.r + 1) > 255 ? 0 : (rgbVal.r + 1)})}
            type="button"
          >
            +
          </button>
        </div>
        <button 
          className="min color-praram-act-btn"
          onClick={()=> updateRgbVal({ ...rgbVal, r: 0})}
          type="button"
        >
          0
        </button>
        <input 
          type="range" 
          className="" 
          id="inputRangeRed" 
          name="red" 
          min="0" 
          max="255"
          step="1"  
          value={rgbVal.r ?? 0}
          onInput={(event)=> updateRgbVal({...rgbVal, r: Math.round(event.target.value)})}
        />
        <button 
          className="max color-praram-act-btn" 
          onClick={()=> updateRgbVal({...rgbVal, r: 255})}
          type="button"
        >
          255
        </button>
      </div>
    </div>
  )
}

export default RedPicker