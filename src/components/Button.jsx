import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router";

  const VARIANT_STYLES = {
    primary: "bg-fuchsia-900 text-white border-fuchsia-600 drop-shadow-primary hover:bg-fuchsia-300 hover:text-gray-900",
    secondary: "bg-white text-fuchsia-900 border-fuchsia-900 drop-shadow-secondary hover:bg-gray-100 ",
    inactive: "bg-gray-200 text-gray-700 cursor-not-allowed border-gray-700",
  };

  const ICON_POSITIONS = {
    right: "ml-2", 
    left: "mr-2",
  };

function Button({
  onClick,
  buttonText,
  variant = "primary",
  buttonIcon,
  iconLocation,
  disabled = false,
  ariaLabel,
  iconSize = "lg",
  ...otherProps
}) {

  const navigate = useNavigate();

  const effectiveVariant = disabled ? "inactive" : variant;

  const computedAriaLabel =  (disabled ? `${buttonText} button disabled` : !buttonIcon ? `click for ${buttonText}` : ariaLabel);


  const renderIcon = (position) => {
    if (!buttonIcon || iconLocation !== position) return null;

    const iconSize = iconLocation === "center" ? "xl" : "md";
    const positionClass = position !=="center" ? ICON_POSITIONS[position] : "";

    return(
      <span className={positionClass}>
        <FontAwesomeIcon icon={buttonIcon} size={iconSize} />
      </span>
    );
  };

  const renderContent = () => {
    if (iconLocation === "center") {
      return renderIcon("center");
    }

    return (
      <>
        {renderIcon("left")}
        {buttonText}
        {renderIcon("right")}
      </>
    );
  };

  const getPadding = () => {
    if (iconLocation === "center") {
      return "p-1";
    }
    return "px-2 py-1";
  };


  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    
    if (onClick) {
      if (typeof onClick === 'function') {
        onClick(e);
        return;
      }
      navigate(onClick);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`rounded-md border-2 text-base font-sans ${getPadding()} ${VARIANT_STYLES[effectiveVariant]}`.trim().replace(/\s+/g, ' ')}
      disabled={disabled}
      aria-label={computedAriaLabel}
      aria-disabled={disabled}
    >
      {renderContent()}
    </button>
  );
}

export default Button;
