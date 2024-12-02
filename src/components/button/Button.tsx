import React from 'react';

interface PropsButton {
  textValue: string;
  styled?: string; 
  type?: 'button' | 'submit' | 'reset';  
  isDisabled?: boolean;  
  ariaLabel?: string; 
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<PropsButton> = ({
  textValue,
  styled = '',  
  type = 'button',  
  isDisabled = false,  
  ariaLabel,
  onClick
}) => {
  const buttonClass = `--btn --secondary ${styled} ${isDisabled ? 'disabled' : ''}`.trim();

  return (
    <button
      className={buttonClass}
      type={type}
      disabled={isDisabled}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {textValue}
    </button>
  );
};

export default Button;
