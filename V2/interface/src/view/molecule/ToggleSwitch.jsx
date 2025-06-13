import "./toggleSwitch.css";

export default function ToggleSwitch({ onToggle, isOn, isLoading, children, className, name = "switch"}) {
  
  return (
    <label className={`${className}`}>
      { children || children } 
      <div className={`switch ${isOn ? "on" : "off"}${isLoading ? " disabled" : ""}`} disabled={isLoading ? true : false}>
        <input
          type="checkbox"
          onChange={onToggle}
          checked={isOn}
          disabled={isLoading}
          name={name}
        />
        <span className="slider"></span>
      </div>
    </label>
  );
}