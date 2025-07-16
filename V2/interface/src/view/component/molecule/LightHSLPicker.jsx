const LightHSLPicker = ({hslVal, updateHslVal}) => {
  return (
    <div className='light-hsl'>
      <label htmlFor="inputLight-hsl">Lumière [0 - 100]</label>
      <div className='color-param light-hsl'>
        <div className="value">
          <button 
            className="color-praram-act-btn" 
            onClick={()=> updateHslVal({...hslVal, l: (hslVal.l - 1) < 0 ? 100 : (hslVal.l - 1)})}
            type="button"
            >
              -
          </button>
          <input 
            type="number" 
            className=""
            id="inputLight-hsl" 
            name="light-hsl" 
            min="0" 
            max="100" 
            step="1"  
            value={hslVal.l ?? 0}
            onInput={(event)=> updateHslVal({...hslVal, l: (event.target.value < 0 ? 0 : (event.target.value <= 100 ? event.target.value : 100))})}
          />
          <button 
            className="color-praram-act-btn"
            onClick={()=> updateHslVal({...hslVal, l: (hslVal.l + 1) > 100 ? 0 : (hslVal.l + 1)})}
            type="button"
          >
            +
          </button>
        </div>
        <button 
          className="min color-praram-act-btn"
          onClick={()=> updateHslVal({ ...hslVal, l: 0})}
          type="button"
        >
          0
        </button>
        <input 
          type="range" 
          className="" 
          id="inputRangeLight-hsl" 
          name="light-hsl" 
          min="0" 
          max="100"
          step="1"  
          value={hslVal.l ?? 0}
          onInput={(event)=> updateHslVal({...hslVal, l: Math.round(event.target.value)})}
        />
        <button 
          className="max color-praram-act-btn" 
          onClick={()=> updateHslVal({...hslVal, l: 100})}
          type="button"
        >
          100
        </button>
      </div>
    </div>
  )
}

export default LightHSLPicker