import Header from '../header/Header'
import SubHeader from '../subHeader/SubHeader'
import logoSite from '../../assets/logosite.svg';
import Footer from '../footer/Footer';
import Qualitys from '../qualitys/Qualitys';

const CartPage = () => {
  return (
    <>
      <Header/>
      <SubHeader title='Cart' breadcrumb={["Home", "Cart"]} logo={logoSite}/>
      <Qualitys/>
      <Footer/>
    </>
  )
}

export default CartPage