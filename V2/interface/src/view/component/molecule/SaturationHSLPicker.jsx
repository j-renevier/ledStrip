const SaturationHSLPicker = ({hslVal, updateHslVal}) => {
  return (
    <div className='saturation-hsl'>
      <label htmlFor="inputSaturation-hsl">Saturation [0 - 100]</label>
      <div className='color-param saturation-hsl'>
        <div className="value">
          <button 
            className="color-praram-act-btn" 
            onClick={()=> updateHslVal({...hslVal, s: (hslVal.s - 1) < 0 ? 100 : (hslVal.s - 1)})}
            type="button"
            >
              -
          </button>
          <input 
            type="number" 
            className=""
            id="inputSaturation-hsl" 
            name="saturation-hsl" 
            min="0" 
            max="100" 
            step="1"  
            value={hslVal.s ?? 0}
            onInput={(event)=> updateHslVal({...hslVal, s: (event.target.value < 0 ? 0 : (event.target.value <= 100 ? event.target.value : 100))})}
          />
          <button 
            className="color-praram-act-btn"
            onClick={()=> updateHslVal({...hslVal, s: (hslVal.s + 1) > 100 ? 0 : (hslVal.s + 1)})}
            type="button"
          >
            +
          </button>
        </div>
        <button 
          className="min color-praram-act-btn"
          onClick={()=> updateHslVal({ ...hslVal, s: 0})}
          type="button"
        >
          0
        </button>
        <input 
          type="range" 
          className="" 
          id="inputRangeSaturation-hsl" 
          name="saturation-hsl" 
          min="0" 
          max="100"
          step="1"  
          value={hslVal.s ?? 0}
          onInput={(event)=> updateHslVal({...hslVal, s: Math.round(event.target.value)})}
        />
        <button 
          className="max color-praram-act-btn" 
          onClick={()=> updateHslVal({...hslVal, s: 100})}
          type="button"
        >
          100
        </button>
      </div>
    </div>
  )
}

export default SaturationHSLPicker