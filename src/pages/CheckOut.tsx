import CheckoutPage from '../components/checkoutPage/CheckoutPage'
import logoSite from '../assets/logosite.svg'
import Header from '../components/header/Header'
import SubHeader from '../components/subHeader/SubHeader'
import Qualitys from '../components/qualitys/Qualitys'
import Footer from '../components/footer/Footer'


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