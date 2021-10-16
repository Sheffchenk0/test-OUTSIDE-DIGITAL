import React from 'react';

const Home = ({ openPopup }) => {
  return (
    <button onClick={openPopup} className="button button--transparent">
      <span>Налоговый вычет</span>
    </button>
  );
};

export default Home;
