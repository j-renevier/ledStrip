import { useEffect, useState } from "preact/hooks";

import { dateToHourFrFormat, getFreshness } from "../../../usecase/common";

import SpinnerIcon from "../atome/SpinnerIcon";

const Infos = ({children, lastUpdated, error, isLoading}) => {
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
        error ? (
          <details className="error" >
            <summary>{error.message ?? "Erreur"}</summary>
              {JSON.stringify(error)}
          </details>
        ) : null
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
        isLoading && <SpinnerIcon/>
      }
    </div>
  )
}

export default Infos