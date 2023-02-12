import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const state = useAppSelector((state) => state);

  return (
    <header className={styles.header}>
      <ul className={styles.header__container}>
        <li>
          <NavLink className={styles.header__link} to="/" end>
            Main
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.header__link} to="/about" end>
            About us
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.header__link} to="/login" end>
            Login
          </NavLink>
        </li>
      </ul>
      {state.ISMODAL && <span className={styles.header__span}>{state.currentCard.name}</span>}
    </header>
  );
};

export default Header;
