import classNames from 'classnames';
import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import PopupContainer from './components/Popup';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className="container">
      {/* {isPopupOpen ? <Popup closePopup={closePopup} /> : <Home onClick={openPopup} />} */}
      <Home openPopup={openPopup} />
      <PopupContainer closePopup={closePopup} className={classNames({ active: isPopupOpen })} />
    </div>
  );
}
export default App;
