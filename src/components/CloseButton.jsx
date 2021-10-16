import React from 'react';
import close from '../images/Vectorclose.svg';

const CloseButton = (props) => {
  return (
    <div {...props} className="close">
      <img src={close} alt="" />
    </div>
  );
};

export default CloseButton;
