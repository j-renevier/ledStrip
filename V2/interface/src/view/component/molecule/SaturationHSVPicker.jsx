const SaturationHSVPicker = ({newColor, setNewColor}) => {
  return (
    <div className='saturation-hsv'>
      <label htmlFor="inputSaturation-hsv">Saturation [0 - 100]</label>
      <div className='color-param saturation-hsv'>
        <div className="value">
          <button 
            className="color-praram-act-btn" 
            onClick={()=> setNewColor(prev => ({...prev, hsv: { ...prev.hsv, s: (prev.hsv.s - 1) < 0 ? 100 : (prev.hsv.s - 1)}}))}
            type="button"
            >
              -
          </button>
          <input 
            type="number" 
            className=""
            id="inputSaturation-hsv" 
            name="saturation-hsv" 
            min="0" 
            max="100" 
            step="1"  
            value={newColor.hsv.s ?? 0}
            onInput={(event)=> setNewColor(prev => ({...prev, hsv: { ...prev.hsv, s: (event.target.value < 0 ? 0 : (event.target.value <= 100 ? event.target.value : 100))}}))}
          />
          <button 
            className="color-praram-act-btn" 
            onClick={()=> setNewColor(prev => ({...prev, hsv: { ...prev.hsv, s: (prev.hsv.s + 1) > 100 ? 0 : (prev.hsv.s + 1)}}))}
            type="button"
          >
            +
          </button>
        </div>
        <button 
          className="min color-praram-act-btn"
          onClick={()=> setNewColor(prev => ({...prev, hsv: { ...prev.hsv, s: 0}}))}
          type="button"
        >
          0
        </button>
        <input 
          type="range" 
          className="" 
          id="inputRangeSaturation-hsv" 
          name="saturation-hsv" 
          min="0" 
          max="100"
          step="1"  
          value={newColor.hsv.s ?? 0}
          onInput={(event)=> setNewColor(prev => ({...prev, hsv: { ...prev.hsv, s: Math.round(event.target.value)}}))}
        />
        <button 
          className="max color-praram-act-btn" 
          onClick={()=> setNewColor(prev => ({...prev, hsv: { ...prev.hsv, s: 100}}))}
          type="button"
        >
          100
        </button>
      </div>
    </div>
  )
}

export default SaturationHSVPicker