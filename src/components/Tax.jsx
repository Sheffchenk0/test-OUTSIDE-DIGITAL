import classNames from 'classnames';
import React from 'react';
import mark from '../images/Vectormark.svg';

const Tax = ({ id, sum, time, isChecked, toggleCheck }) => {
  const onToggleCheck = () => {
    toggleCheck(id);
  };
  return (
    <div className="tax">
      <div onClick={onToggleCheck} className={classNames('checkbox', { active: isChecked })}>
        <img src={mark} alt="" />
      </div>
      <div className="tax__sum">
        {sum.toLocaleString('ru')} рублей{' '}
        <span className="tax__desc">
          в{time === 2 && 'о'} {time}-{time === 2 ? 'о' : 'ы'}й год
        </span>
      </div>
    </div>
  );
};

export default Tax;
