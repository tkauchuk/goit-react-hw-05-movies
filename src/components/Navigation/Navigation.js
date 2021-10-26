import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to='/' className={styles.link} activeClassName={styles.active} exact>
            Home
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/movies' className={styles.link} activeClassName={styles.active}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;