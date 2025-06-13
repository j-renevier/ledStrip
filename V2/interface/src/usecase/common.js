export const normalizeData = (data, updatedAt) => {
  if (Array.isArray(data)) {
    return {
      value: data,
      error: null,
      lastUpdated: updatedAt,
      isLoading: false,
    };
  }

  if (typeof data === 'object' && data !== null) {
    const result = {};
    for (const key in data) {
      result[key] = normalizeData(data[key], updatedAt);
    }
    return result;
  }

  return {
    value: data,
    error: null,
    lastUpdated: updatedAt,
    isLoading: false,
  };
};


export const getFreshness = (timestamp = 0) => {
  const diff = Date.now()  - new Date(timestamp).getTime();

  return diff <= 10000 ? '🟢' : diff <= 30000 ? '🟠' : '🔴';
};

export const dateToHourFrFormat = (timestamp) => {
 return  new Date(timestamp).toLocaleString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

export const getKnowHost = () =>{
  return [
    { label: '📍 Défaut', ip: '192.168.1.1' },
    { label: '🏠 Maison', ip: '192.168.1.189' },
    { label: '☎️ Téléphone', ip: '192.168.97.200' }
  ]
}


export const rgb2Hsv = ({r, g, b}) => {
  r /= 255, g /= 255, b /= 255;

  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, v = max;

  var d = max - min;
  s = max == 0 ? 0 : d / max;

  if (max == min) {
    h = 0;
  } else {
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }

    h /= 6;
  }
  
  return { 
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100)
  };
};

export const hsv2Rgb = ({h, s, v}) => {
  h /= 360, s /= 100, v /= 100;
  var r, g, b;

  var i = Math.floor(h * 6);
  var f = h * 6 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0: r = v, g = t, b = p; break;
    case 1: r = q, g = v, b = p; break;
    case 2: r = p, g = v, b = t; break;
    case 3: r = p, g = q, b = v; break;
    case 4: r = t, g = p, b = v; break;
    case 5: r = v, g = p, b = q; break;
  }

  return {r : Math.floor(r * 255), g : Math.floor(g * 255), b: Math.floor(b * 255)};
}

export const hexadecimalString2Rgb = (str) => {
  const hex = str.replace(/^#/, '');
  return {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16)
  };
}

export const rgb2HexadecimalString = ({r, g, b}) => {
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}


export const hsv2hslString = (h, s, v) => {
  s /= 100;
  v /= 100;

  const l = (2 - s) * v / 2;

  let sl;
  if (l !== 0) {
      if (l === 1) {
          sl = 0;
      } else if (l < 0.5) {
          sl = s * v / (l * 2);
      } else {
          sl = s * v / (2 - l * 2);
      }
  } else {
      sl = 0;
  }

  // Arrondir les valeurs pour éviter les erreurs d'arrondi
  const roundedH = Math.round(h);
  const roundedSl = Math.round(sl * 100);
  const roundedL = Math.round(l * 100);

  // Retourner la couleur sous forme de chaîne HSL
  return `hsl(${roundedH}, ${roundedSl}%, ${roundedL}%)`;
};
