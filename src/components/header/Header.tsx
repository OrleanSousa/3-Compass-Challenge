import styles from './Header.module.css';
import logoSite from '../../assets/logosite.svg';
import userVeto from '../../assets/userVetor.svg';
import cardVetor from '../../assets/cartVetor.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={logoSite} alt="Logo" className={styles.logoImage} />
          <h1 className={styles.logoText}>Furniro</h1>
        </div>

        {/* Menu Header */}
        <div className={styles.menu}>
          <Link to='/' className={styles.menuItem}>Home</Link>
          <Link to='/shop' className={styles.menuItem}>Shop</Link>
          <Link to='#' className={styles.menuItem}>About</Link>
          <Link to='/contact' className={styles.menuItem}>Contact</Link>
        </div>

        {/* User and Cart Icons */}
        <div className={styles.icons}>
          <a href="#">
            <img src={userVeto} alt="User" className={styles.icon} />
          </a>
          <a href="#">
            <img src={cardVetor} alt="Cart" className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
