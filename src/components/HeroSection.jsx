import React from 'react';
import Button from './Button.jsx';

export default function HeroSection({ title, subtitle, description, button }) {

  let emphasizeText;
  if (title && subtitle) {
    emphasizeText = "text-fuchsia-900";
  }

  const renderButton = (button) => {
    if (!button) return null;
    return (
      <div className="mt-1.5">
        <Button
          onClick={button.link}
          buttonText={button.text}
          variant={button.variant}
          icon={button.icon}
          iconLocation={button.iconLocation}
          disabled={button.disabled}
          ariaLabel={button.ariaLabel}
          iconSize={button.iconSize}
        />
      </div>
    );
  }

  return (
    <section className="flex flex-col items-start justify-start gap-1">
      {title && <h1>{title}</h1>}
      {subtitle && <h2 className={emphasizeText}>{subtitle}</h2>}
      {description && <p>{description}</p>}
      {renderButton(button)}
    </section>
  );
}