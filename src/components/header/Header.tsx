import React, { useState } from 'react';
import styles from './Header.module.css'; // Importe o arquivo de estilo
import logoSite from '../../assets/logosite.svg';
import userVeto from '../../assets/userVetor.svg';
import cardVetor from '../../assets/cartVetor.svg';
import { Link } from 'react-router-dom';
import CartModal from '../modal/Modal'; // Importar o modal
import { SignedIn, SignedOut, SignInButton, UserButton} from '@clerk/clerk-react';
 


const Header: React.FC = () => {
  
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          {/* Logo aqui */}
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
      {/* Exibe a foto do usuário logado */}
      <SignedIn>
        <UserButton />
      </SignedIn>

      {/* Botão para login, exibido apenas se não estiver logado */}
      <SignedOut>
        <SignInButton mode="modal">
          <img src={userVeto} alt="User" className={styles.icon} />
        </SignInButton>
      </SignedOut>  

      {/* Ícone do carrinho */}
      <a href="#" onClick={openModal}>
        <img src={cardVetor} alt="Cart" className={styles.icon} />
      </a>
    </div>


      </div>

      {/* Modal */}
      <CartModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Header;
