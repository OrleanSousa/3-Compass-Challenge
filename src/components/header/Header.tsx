import logoSite from '../../assets/logosite.svg'
import userVeto from '../../assets/userVetor.svg'
import CardVetor from '../../assets/cartVetor.svg'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.containerNav}>
        <div className={styles.logoContainer}>
          <img src={logoSite} alt="" className={styles.icon}/>
          <h1 className={styles.nameShop}>Furniro</h1>
        </div>
        <div className={styles.menuHeader}>
          <a href="" className={styles.itemMenu}>Home</a>
          <a href="" className={styles.itemMenu}>Shop</a>
          <a href="" className={styles.itemMenu}>About</a>  
          <a href="" className={styles.itemMenu}>Contact</a>
        </div>
        <div className='flex gap-[35px]'>
          <img src={userVeto} alt="" className=' '/>
          <img src={CardVetor} alt="" className=' '/>
        </div>
      </div>
    </div>
  )
}

export default Header