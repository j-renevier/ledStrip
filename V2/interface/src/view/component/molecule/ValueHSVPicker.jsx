const ValueHSVPicker = ({newColor, setNewColor}) => {
  return (
    <div className='value-hsv'>
      <label htmlFor="inputValue-hsv">Value [0 - 100]</label>
      <div className='color-param value-hsv'>
        <div className="value">
          <button 
            className="color-praram-act-btn" 
            onClick={()=> setNewColor(prev => ({...prev, hsv: { ...prev.hsv, v: (prev.hsv.v - 1) < 0 ? 100 : (prev.hsv.v - 1)}}))}
            type="button"
            >
              -
          </button>
          <input 
            type="number" 
            className=""
            id="inputValue-hsv" 
            name="value-hsv" 
            min="0" 
            max="100" 
            step="1"  
            value={newColor.hsv.v ?? 0}
            onInput={(event)=> setNewColor(prev => ({...prev, hsv: { ...prev.hsv, v: (event.target.value < 0 ? 0 : (event.target.value <= 100 ? event.target.value : 100))}}))}
          />
          <button 
            className="color-praram-act-btn" 
            onClick={()=> setNewColor(prev => ({...prev, hsv: { ...prev.hsv, v: (prev.hsv.v + 1) > 100 ? 0 : (prev.hsv.v + 1)}}))}
            type="button"
          >
            +
          </button>
        </div>
        <button 
          className="min color-praram-act-btn"
          onClick={()=> setNewColor(prev => ({...prev, hsv: { ...prev.hsv, v: 0}}))}
          type="button"
        >
          0
        </button>
        <input 
          type="range" 
          className="" 
          id="inputRangeValue-hsv" 
          name="value-hsv" 
          min="0" 
          max="100"
          step="1"  
          value={newColor.hsv.v ?? 0}
          onInput={(event)=> setNewColor(prev => ({...prev, hsv: { ...prev.hsv, v: Math.round(event.target.value)}}))}
        />
        <button 
          className="max color-praram-act-btn" 
          onClick={()=> setNewColor(prev => ({...prev, hsv: { ...prev.hsv, v: 100}}))}
          type="button"
        >
          100
        </button>
      </div>
    </div>
  )
}

export default ValueHSVPicker