const HuePicker = ({newColor, setNewColor}) => {
  return (
    <div className='hue'>
      <label htmlFor="inputHue">Teinte [0 - 360]</label>
      <div className='color-param hue'>
        <div className="value">
          <button 
            className="color-praram-act-btn" 
            onClick={()=> setNewColor(prev => ({...prev, hsv: { ...prev.hsv, h: (prev.hsv.h - 1) < 0 ? 360 : (prev.hsv.h - 1)}}))}
            type="button"
            >
              -
          </button>
          <input 
            type="number" 
            className=""
            id="inputHue" 
            name="hue" 
            min="0" 
            max="360" 
            step="1"  
            value={newColor.hsv.h ?? 0}
            onInput={(event)=> setNewColor(prev => ({...prev, hsv: { ...prev.hsv, h: (event.target.value < 0 ? 0 : (event.target.value <= 360 ? event.target.value : 360))}}))}
          />
          <button 
            className="color-praram-act-btn" 
            onClick={()=> setNewColor(prev => ({...prev, hsv: { ...prev.hsv, h: (prev.hsv.h + 1) > 360 ? 0 : (prev.hsv.h + 1)}}))}
            type="button"
          >
            +
          </button>
        </div>
        <button 
          className="min color-praram-act-btn"
          onClick={()=> setNewColor(prev => ({...prev, hsv: { ...prev.hsv, h: 0}}))}
          type="button"
        >
          0
        </button>
        <input 
          type="range" 
          className="" 
          id="inputRangeHue" 
          name="hue" 
          min="0" 
          max="360"
          step="1"  
          value={newColor.hsv.h ?? 0}
          onInput={(event)=> setNewColor(prev => ({...prev, hsv: { ...prev.hsv, h: event.target.value}}))}
        />
        <button 
          className="max color-praram-act-btn" 
          onClick={()=> setNewColor(prev => ({...prev, hsv: { ...prev.hsv, h: 360}}))}
          type="button"
        >
          360
        </button>
      </div>
    </div>
  )
}

export default HuePicker