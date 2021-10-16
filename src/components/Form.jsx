import React from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';

const Form = ({ setTaxes, setSalary }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onCount = (data) => {
    let sum = data.sum;
    let tax = Math.floor((sum * 12 * 13) / 100, 5);
    let count = Math.floor(260000 / tax);
    let result = [];
    for (let index = 0; index < count; index++) {
      result.push(tax);
    }
    result.push(260000 - count * tax);
    result = result.map((el) => {
      return { sum: el, isChecked: true };
    });
    setTaxes(result);

    setSalary(data.sum);
  };
  return (
    <form onSubmit={handleSubmit(onCount)} className="input-block">
      <div className="subtitle">Ваша зарплата в месяц</div>
      <input
        {...register('sum', { required: true, maxLength: 7, pattern: /^[1-9][0-9]{4,5}$/ })}
        type="text"
        className={classNames({ error: !!errors.sum })}
        placeholder="Введите данные"
      />
      {errors.sum && errors.sum.type === 'required' && (
        <div className="alert">Поле обязательно для заполнения</div>
      )}
      {errors.sum && errors.sum.type === 'maxLength' && (
        <div className="alert">Слишком много символов</div>
      )}
      {errors.sum && errors.sum.type === 'pattern' && (
        <div className="alert">Некорректный ввод. Пример корренктного ввода: 50000</div>
      )}
      <button type="submit" className="count">
        Рассчитать
      </button>
    </form>
  );
};

export default Form;
