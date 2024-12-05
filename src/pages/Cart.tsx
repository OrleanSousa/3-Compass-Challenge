import React from 'react'
import CartPage from '../components/cartPage/Cartpage'
import Header from '../components/header/Header'
import SubHeader from '../components/subHeader/SubHeader'
import Qualitys from '../components/qualitys/Qualitys'
import Footer from '../components/footer/Footer'
import logoSite from '../assets/logosite.svg'

const Cart = () => {
  return (
    <>
      <Header/>
      <SubHeader title='Cart' breadcrumb={["Home", "Cart "]} logo={logoSite}/>
      <CartPage/>
      <Qualitys/>
      <Footer/>
    </>
  )
}

export default Cart