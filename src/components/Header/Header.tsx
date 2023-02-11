import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const state = useAppSelector((state) => state);

  return (
    <header className={styles.header__container}>
      <NavLink className={styles.header__link} to="/" end>
        Main
      </NavLink>
      <NavLink className={styles.header__link} to="/about" end>
        About us
      </NavLink>
      <NavLink className={styles.header__link} to="/login" end>
        Login
      </NavLink>
      {state.ISMODAL && <span className={styles.header__span}>{state.currentCard.name}</span>}
    </header>
  );
};

export default Header;
