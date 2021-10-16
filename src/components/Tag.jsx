import React from 'react';

const Tag = ({ children, className, ...otherProps }) => {
  return (
    <div className={'tag ' + className} {...otherProps}>
      {children}
    </div>
  );
};

export default Tag;
