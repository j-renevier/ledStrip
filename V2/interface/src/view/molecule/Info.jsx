import { useEffect, useState } from "preact/hooks";

import { dateToHourFrFormat, getFreshness } from "../../usecase/common";


const Infos = ({children, lastUpdated, error,  isLoading}) => {
  const [freshness, setFreshness] = useState(() => getFreshness(lastUpdated));

  useEffect(() => {
    setFreshness(getFreshness(lastUpdated));
    
    const intervalId = setInterval(() => {
      setFreshness(getFreshness(lastUpdated));
    }, 2000);
  
    return () => clearInterval(intervalId);
  }, [lastUpdated]);


  const handleMouseEnter = () => {
    setFreshness(getFreshness(lastUpdated));
  };

  const classNames = ['lastUpdated-info-parent'];
  if (isLoading) classNames.push('loading');
  if (error) classNames.push('error');
  
  const attrs = {
    onMouseEnter: handleMouseEnter,
    className: classNames.length > 0 ? classNames.join(' ') : undefined,
    ...(lastUpdated && { 'data-update': new Date(lastUpdated).toISOString() }),
    ...(error && { 'data-error': error }),
  };


  return (
    <div {...attrs}>
      {
        error
          ? <details className="error" >
              <summary>{error.message ?? "Erreur lors de la récupération des données"}</summary>
                {error}
            </details>
          : null
      }
      <ul>
        {
          children
        }
      </ul>
      <span className="lastUpdated-info">
        {dateToHourFrFormat(lastUpdated)} {freshness}
      </span>
      {
        isLoading
          ? <div className="spinner">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <linearGradient id="a11">
                  <stop offset="0" stop-color="#3B82F6" stop-opacity="0"></stop>
                  <stop offset="1" stop-color="#3B82F6"></stop>
                </linearGradient>
                <circle fill="none" stroke="url(#a11)" stroke-width="30" stroke-linecap="round" stroke-dasharray="0 44 0 44 0 44 0 44 0 360" cx="100" cy="100" r="60" transform-origin="center">
                  <animateTransform type="rotate" attributeName="transform" calcMode="discrete" dur="2" values="360;324;288;252;216;180;144;108;72;36" repeatCount="indefinite"></animateTransform>
                </circle>
              </svg>
            </div>
          : null
      }
    </div>
  )
}

const Info = ({label, value, lastUpdated, error,  isLoading}) => {
  const [freshness, setFreshness] = useState(() => getFreshness(lastUpdated));

  let valueString = '';
  if(value) {
    if (Array.isArray(value) || typeof value === 'object') {
      valueString = JSON.stringify(value);
    } else {
      valueString = String(value);
    }
  }

  const formattedLabel = label ? label.charAt(0).toUpperCase() + label.slice(1).replaceAll('_', ' ') + ': ': '';

  const handleMouseEnter = () => {
    setFreshness(getFreshness(lastUpdated));
  };

  const classNames = ['tooltip-parent'];
  if (isLoading) classNames.push('loading');
  if (error) classNames.push('error');
  
  const attrs = {
    onMouseEnter: handleMouseEnter,
    className: classNames.length > 0 ? classNames.join(' ') : undefined,
    ...(lastUpdated && { 'data-update': new Date(lastUpdated).toISOString() }),
    ...(error && { 'data-error': error }),
  };

  return (
    <li {...attrs}>
      <strong>{formattedLabel}</strong>
      <span className="content">
        {isLoading
          ? 'chargement...'
          : valueString
        }
      </span>
      { lastUpdated 
        ? <span className="tooltip">
            {dateToHourFrFormat(lastUpdated)} {freshness}
          </span>
        : null
      }
    </li>
  );
};

export {Infos, Info}