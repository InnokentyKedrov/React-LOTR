import React from 'react';
import { CardType } from '../../../types/types';
import styles from './LoginCards.module.css';

const LoginCards: React.FC<{ card: CardType }> = (props) => {
  return (
    <li className={styles.cards__item}>
      <img className={styles.cards__item_img} src={props.card.img} />
      <span>Name: {props.card.firstName}</span>
      <span>Surname: {props.card.surname}</span>
      <span>Birthday: {props.card.birthday}</span>
      <span>Race: {props.card.race}</span>
      <span>Class person: {props.card.person}</span>
      <span>Gender: {props.card.gender}</span>
    </li>
  );
};

export default LoginCards;
