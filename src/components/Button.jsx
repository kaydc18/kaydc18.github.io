import React from "react";

function Button({
  onClick,
  buttonText,
  variant,
  buttonIcon,
  iconLocation,
  disabled,
  ariaLabel,
}) {
  let buttonContent;
  if (buttonIcon) {
    if (iconLocation === "center") {
      ariaLabel = buttonText;
      buttonContent = <>{buttonIcon}</>;
    } else if (iconLocation === "right") {
      buttonContent = (
        <>
          {buttonText} <span className="ml-2">{buttonIcon}</span>
        </>
      );
    } else if (iconLocation === "left") {
      buttonContent = (
        <>
          <span className="mr-2">{buttonIcon}</span>
          {buttonText}
        </>
      );
    }
  } else {
    buttonContent = <>{buttonText}</>;
  }

  if (disabled) {
    ariaLabel = `${buttonText} button disabled`;
    variant = "inactive";
  }

  return (
    <button
      onClick={onClick}
      className={`px-2 py-1 rounded-md border-2 text-base font-sans ${variant === "primary" ? "bg-fuchsia-900 text-gray-100 border-fuchsia-600 drop-shadow-primary hover:bg-fuchsia-300 hover:text-gray-900" : variant === "secondary" ? "bg-white text-fuchsia-900 border-fuchsia-900 drop-shadow-secondary hover:bg-gray-100 " : variant === "inactive" ? "bg-gray-200 text-gray-700 cursor-not-allowed border-gray-700" : "bg-white text-black hover:bg-gray-100"}`}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={disabled}
    >
      {buttonContent}
    </button>
  );
}

export default Button;
