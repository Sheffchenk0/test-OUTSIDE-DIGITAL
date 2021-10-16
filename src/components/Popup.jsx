import React, { useState } from 'react';

import Button from './Button';
import Taxes from './Taxes';
import classNames from 'classnames';
import Tags from './Tags';
import Form from './Form';
import CloseButton from './CloseButton';

const Popup = ({ closePopup, className }) => {
  // Taxes
  const [taxes, setTaxes] = useState([]);
  const toggleCheck = (id) => {
    setTaxes((taxes) => {
      let arr = [...taxes];
      arr[id] = { sum: taxes[id].sum, isChecked: !taxes[id].isChecked };

      return arr;
    });
  };

  // Tags
  const [tag, setTag] = useState(0);
  const tags = ['Платёж', 'Срок'];

  // Form
  const [salary, setSalary] = useState();
  const onSubmit = () => {
    console.log({ taxes, tag, salary });
  };

  return (
    <div className={classNames('popup__container', className)}>
      <div className="popup__body">
        <CloseButton onClick={closePopup} />
        <h1 className="title">Налоговый вычет</h1>
        <div className="desc">
          Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета
          составляет не более 13% от своего официального годового дохода.
        </div>
        <Form setSalary={setSalary} setTaxes={setTaxes} />
        <Taxes toggleCheck={toggleCheck} taxes={taxes} />
        <div className="choose-block">
          <span>Что уменьшаем?</span>
          <Tags tags={tags} setTag={setTag} activeTag={tag} />
        </div>
        <Button onClick={onSubmit} className="button--red">
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default Popup;
