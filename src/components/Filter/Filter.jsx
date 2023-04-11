import { changeValue } from 'Redux/filter';
import { useDispatch } from 'react-redux';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <input
      className={css.input}
      type="text"
      name="filter"
      onChange={e => dispatch(changeValue(e.currentTarget.value))}
    />
  );
};
