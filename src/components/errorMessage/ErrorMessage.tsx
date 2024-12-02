import React from 'react';

interface ErrorMessageProps {
  message: string;
  className?: string;  
  style?: React.CSSProperties;  
  children?: React.ReactNode; 
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, className, style, children }) => {
  return (
    <div className={className} style={style}>
      {children || <p>{message}</p>}  
    </div>
  );
};

export default ErrorMessage;
