import { useEffect, useState } from "preact/hooks";

import { dateToHourFrFormat, getFreshness } from "../../../usecase/common";

import SpinnerIcon from "./SpinnerIcon";

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
          ? <SpinnerIcon className="inline"/>
          : valueString
        }
      </span>
      { 
        lastUpdated ?  (
          <span className="tooltip">
            {dateToHourFrFormat(lastUpdated)} {freshness}
          </span>
        ) : null
      }
    </li>
  );
};

export default Info