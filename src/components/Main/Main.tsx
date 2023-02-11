import React, { ReactElement, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './Main.module.css';
import Cards from './Cards/Cards';
import SearchForm from './SearchForm/SearchForm';
import { CharactersType } from '../../types/types';
import Pagination from './Pagination/Pagination';
import { fetchCharacters } from '../../redux/thunks';

const Main: React.FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);

  const sortData = async (): Promise<void> => {
    dispatch(fetchCharacters(state));
  };

  useEffect((): void => {
    sortData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.limit, state.currentPage, state.sort, state.pages]);

  return (
    <main className={styles.main__container}>
      <SearchForm sortData={sortData} />

      {state.status === 'loading' && <span className={styles.loading}></span>}
      {state.status === 'serverError' && <div className={styles.cards__serverError}></div>}
      {state.status === 'notFound' && <div className={styles.cards__searchEmpty}></div>}
      {state.status === 'resolved' && (
        <ul className={styles.cards__list}>
          {state.stateCharacters.map((el: CharactersType) => (
            <Cards card={el} key={el._id} />
          ))}
          <li className={styles.cards__item_hidden}></li>
          <li className={styles.cards__item_hidden}></li>
          <li className={styles.cards__item_hidden}></li>
          <li className={styles.cards__item_hidden}></li>
          <li className={styles.cards__item_hidden}></li>
        </ul>
      )}

      <Pagination sortData={sortData} />
    </main>
  );
};

export default Main;
