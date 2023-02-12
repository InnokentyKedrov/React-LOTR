import React, { FormEvent, ReactElement, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setCurrentPage, setSearch, setSort } from '../../../redux/slice';
import styles from './SearchForm.module.css';

type Props = {
  sortData: () => void;
};

const SearchForm: React.FC<Props> = (props): ReactElement => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);

  const handleSearchChange = (event: FormEvent<HTMLInputElement>): void => {
    event.preventDefault();
    localStorage.setItem('search', event.currentTarget.value);
    dispatch(setSearch(event.currentTarget.value));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    localStorage.setItem('currentPage', '1');
    dispatch(setCurrentPage('1'));
    props.sortData();
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    let temp;
    switch (event.target.value) {
      case '0':
        temp = 'gender';
        break;
      case '1':
        temp = 'race';
        break;
      default:
        temp = 'name';
        break;
    }
    dispatch(setSort(temp));
    localStorage.setItem('sort', temp);
    localStorage.setItem('currentPage', '1');
    dispatch(setCurrentPage('1'));
    props.sortData();
  };

  useEffect((): void => {}, [state.search, state.sort]);

  return (
    <form className={styles.search__container} onSubmit={onSubmit}>
      <div className={styles.search__range}>
        <label className={styles.search__range_label}>Sort by:</label>
        <div className={styles.search__range_wrapper}>
          <input
            className={styles.search__range_input}
            type="range"
            min="0"
            max="2"
            value={state.sort === 'gender' ? '0' : state.sort === 'race' ? '1' : '2'}
            list="tickmarks"
            name="sort"
            onChange={onChange}
          />
          <datalist className={styles.search__range_datalist} id="tickmarks">
            <option className={styles.search__range_option} value="0" label="Gender" />
            <option className={styles.search__range_option} value="1" label="Race" />
            <option className={styles.search__range_option} value="2" label="Name" />
          </datalist>
        </div>
      </div>

      <div className={styles.search__input_wrapper}>
        <input
          className={styles.search__input}
          type="text"
          defaultValue={localStorage.getItem('search') || ''}
          onChange={handleSearchChange}
          placeholder="🔍 Enter text"
          autoComplete="on"
        ></input>
        <button className={styles.search__button} type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
