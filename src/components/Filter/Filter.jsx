import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = filter => dispatch(setFilter(filter));

  return (
    <label className={css.filter}>
      <h3> Find contacts by name: {'\u00A0'}</h3>
      <input
        className={css.contact_input}
        type="text"
        onChange={e => handleFilterChange(e.target.value)}
      />
    </label>
  );
};

export default Filter;
