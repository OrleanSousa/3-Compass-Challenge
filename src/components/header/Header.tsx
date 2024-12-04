import React from 'react';
import styles from './Header.module.css';
import logoSite from '../../assets/logosite.svg';
import userVeto from '../../assets/userVetor.svg';
import cardVetor from '../../assets/cartVetor.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        {/* Logo Container */}
        <div className={styles.logoContainer}>
          <img src={logoSite} alt="Logo" className={styles.logoImage} />
          <h1 className={styles.logoText}>Furniro</h1>
        </div>

        {/* Menu Header */}
        <div className={styles.menu}>
          <a href="#" className={styles.menuItem}>Home</a>
          <a href="#" className={styles.menuItem}>Shop</a>
          <a href="#" className={styles.menuItem}>About</a>
          <a href="#" className={styles.menuItem}>Contact</a>
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
