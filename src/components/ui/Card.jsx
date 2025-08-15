import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  header, 
  footer, 
  variant = 'default',
  ...props 
}) => {
  const baseClasses = 'card';
  const variantClasses = {
    default: 'card-default',
    elevated: 'card-elevated',
    outlined: 'card-outlined'
  };

  const classes = [
    baseClasses,
    variantClasses[variant],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {header && (
        <div className="card-header">
          {header}
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
