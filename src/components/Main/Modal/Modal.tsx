import styles from './Modal.module.css';
import { cardsImage } from '../../../const/const';
import React, { ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setIsModal } from '../../../redux/slice';

const Modal: React.FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const currentCard = useAppSelector((state) => state.currentCard);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    return () => {
      dispatch(setIsModal(false));
    };
  }, [dispatch]);

  return (
    <main className={styles.modal}>
      <button className={styles.modal__closeButton} onClick={goBack}>
        Go back
      </button>
      <div className={styles.modal__item} onClick={(e) => e.stopPropagation()}>
        {currentCard.name !== 'MINOR_CHARACTER' ? (
          <h2 className={styles.modal__item_title}>{currentCard.name}</h2>
        ) : (
          <h2 className={styles.modal__item_title}>Minor character</h2>
        )}
        <div className={styles.modal__item_container}>
          <span className={styles.modal__item_race}>{currentCard.race}</span>
          <img className={styles.modal__item_image} src={cardsImage(currentCard.race)}></img>
        </div>
        <table className={styles.modal__item_table}>
          <tbody>
            <tr>
              <th>Birth: </th>
              <td>{currentCard.birth}</td>
            </tr>
            <tr>
              <th>Death: </th>
              <td>{currentCard.death}</td>
            </tr>
            <tr>
              <th>Gender: </th>
              <td>{currentCard.gender}</td>
            </tr>
            <tr>
              <th>Hair: </th>
              <td>{currentCard.hair}</td>
            </tr>
            <tr>
              <th>Height: </th>
              <td>{currentCard.height}</td>
            </tr>
            <tr>
              <th>Realm: </th>
              <td>{currentCard.realm}</td>
            </tr>
            <tr>
              <th>Spouse: </th>
              <td>{currentCard.spouse}</td>
            </tr>
            <tr>
              <th>WikiUrl: </th>
              <td>
                <a
                  className={styles.modal__item_link}
                  href={currentCard.wikiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {currentCard.wikiUrl}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Modal;
