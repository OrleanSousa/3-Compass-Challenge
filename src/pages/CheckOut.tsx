import CheckoutPage from '../components/checkoutPage/CheckoutPage'
import Header from '../components/header/Header'
import SubHeader from '../components/subHeader/SubHeader'
import logoSite from '../assets/logosite.svg';
import Qualitys from '../components/qualitys/Qualitys';
import Footer from '../components/footer/Footer';

const CheckOut = () => {
  return (
    <>
        <Header/>
        <SubHeader title='Checkout' breadcrumb={["Home", "Checkout"]} logo={logoSite}/>
        <CheckoutPage />
        <Qualitys/>
        <Footer/>
    </>
  )
}

export default CheckOut