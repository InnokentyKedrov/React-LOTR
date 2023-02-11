import { ReactElement, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setCurrentPage, setLimit } from '../../../redux/slice';
import styles from './Pagination.module.css';

const Pagination: React.FC<{ sortData: () => void }> = (props): ReactElement => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);

  const [error, setError] = useState('');
  const [placeholder, setPlaceholder] = useState(`${state.currentPage}/${state.pages}`);
  const [disableLeft, setDisableLeft] = useState(
    localStorage.getItem('currentPage') === '1' ? true : false
  );
  const [disableRight, setDisableRight] = useState(
    localStorage.getItem('currentPage') === state.pages ? true : false
  );
  const [enteredText, setEnteredText] = useState('');
  const input = useRef<HTMLInputElement>(null);

  const onChangeLimit = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    dispatch(setLimit(event.target.value));
    dispatch(setCurrentPage('1'));
    localStorage.setItem('currentPage', '1');
    localStorage.setItem('limit', event.target.value);
    props.sortData();
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setEnteredText(event.target.value);
  };

  const enterHandler = (event: React.KeyboardEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const value = Number(enteredText);
    if (value) {
      if (value <= Number(state.pages) && value >= 1) {
        localStorage.setItem('currentPage', enteredText);
        setEnteredText('');
        setError('');
        changeCurrentPage();
        input.current?.blur();
      } else setError(`Enter a number from 1 to ${state.pages}.`);
    } else setError(`Please enter a namber.`);
  };

  const changeCurrentPage = () => {
    dispatch(setCurrentPage(localStorage.getItem('currentPage') as string));
    props.sortData();
  };

  const onClickLeft = () => {
    if (Number(state.currentPage) > 1) {
      localStorage.setItem(
        'currentPage',
        (Number(localStorage.getItem('currentPage')) - 1).toString()
      );
      changeCurrentPage();
    }
  };

  const onClickRight = () => {
    if (Number(state.currentPage) < Number(state.pages)) {
      localStorage.setItem(
        'currentPage',
        (Number(localStorage.getItem('currentPage')) + 1).toString()
      );
      changeCurrentPage();
    }
  };

  useEffect(() => {
    setPlaceholder(`${state.currentPage}/${state.pages}`);
    setDisableRight(state.currentPage === state.pages ? true : false);
    setDisableLeft(state.currentPage === '1' ? true : false);
  }, [placeholder, state.limit, state.currentPage, state.pages, enteredText]);

  return (
    <section className={styles.pagination__container}>
      <fieldset className={styles.pagination__fieldset}>
        <legend className={styles.pagination__legend}>Number of characters per page</legend>
        <label className={styles.pagination__label}>
          10
          <input
            className={styles.pagination__input_radio}
            type="radio"
            value="10"
            checked={state.limit === '10'}
            onChange={onChangeLimit}
          />
          <span className={styles.pagination__radio_span}></span>
        </label>
        <label className={styles.pagination__label}>
          20
          <input
            className={styles.pagination__input_radio}
            type="radio"
            value="20"
            checked={state.limit === '20'}
            onChange={onChangeLimit}
          />
          <span className={styles.pagination__radio_span}></span>
        </label>
        <label className={styles.pagination__label}>
          100
          <input
            className={styles.pagination__input_radio}
            type="radio"
            value="100"
            checked={state.limit === '100'}
            onChange={onChangeLimit}
          />
          <span className={styles.pagination__radio_span}></span>
        </label>
      </fieldset>
      <ul className={styles.pagination__list}>
        <li className={styles.pagination__item}>
          <button
            className={disableLeft ? styles.pagination__buttonDisabled : styles.pagination__button}
            onClick={onClickLeft}
          >
            {'<'}
          </button>
        </li>
        <li className={styles.pagination__item}>
          <form className={styles.login__form} onSubmit={enterHandler}>
            <label className={styles.pagination__item_label}>
              <input
                className={styles.pagination__item_input}
                type="text"
                ref={input}
                placeholder={placeholder}
                value={enteredText}
                onChange={onChangeInput}
              />
            </label>
          </form>
        </li>
        <li className={styles.pagination__item}>
          <button
            className={disableRight ? styles.pagination__buttonDisabled : styles.pagination__button}
            onClick={onClickRight}
          >
            {'>'}
          </button>
        </li>
      </ul>
      <span className={styles.pagination__error}>{error}</span>
    </section>
  );
};

export default Pagination;
