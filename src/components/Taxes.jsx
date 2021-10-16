import React from 'react';
import Tax from './Tax';

const Taxes = ({ taxes, toggleCheck }) => {
  if (taxes.length === 0) {
    return <></>;
  }
  return (
    <div className="taxes-block">
      <div className="subtitle">Итого можете внести в качестве досрочных:</div>
      <div className="taxes">
        {taxes.map((el, index) => {
          return (
            <Tax
              toggleCheck={toggleCheck}
              key={index}
              id={index}
              isChecked={el.isChecked}
              sum={el.sum}
              time={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Taxes;
