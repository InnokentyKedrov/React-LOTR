import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Cards.module.css';
import { CharactersType } from '../../../types/types';
import { cardsImage } from '../../../const/const';
import { useAppDispatch } from '../../../redux/hooks';
import { setCurrentCard, setIsModal } from '../../../redux/slice';

const Cards: React.FC<{ card: CharactersType }> = (props): ReactElement => {
  const dispatch = useAppDispatch();

  const showModal = (event: { preventDefault: () => void }): void => {
    event.preventDefault();
    dispatch(setCurrentCard(props.card));
    localStorage.setItem('ISMODAL', 'true');
    dispatch(setIsModal(true));
  };

  return (
    <li className={styles.cards__item} onClick={showModal}>
      {props.card.name !== 'MINOR_CHARACTER' ? (
        <h2 className={styles.cards__item_title}>{props.card.name}</h2>
      ) : (
        <h2 className={styles.cards__item_title}>Minor character</h2>
      )}
      <NavLink className={styles.cards__item_container} to="/modal" end>
        <span className={styles.cards__item_race}>{props.card.race}</span>
        <img className={styles.cards__item_image} src={cardsImage(props.card.race)}></img>
      </NavLink>
    </li>
  );
};

export default Cards;
