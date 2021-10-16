import React from 'react';

const Button = ({ className, children, ...otherProps }) => {
  return (
    <button className={'button ' + className} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
