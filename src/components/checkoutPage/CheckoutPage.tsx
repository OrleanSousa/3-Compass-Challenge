import React from 'react'
import Header from '../header/Header'
import SubHeader from '../subHeader/SubHeader'
import Footer from '../footer/Footer'
import logoSite from '../../assets/logosite.svg';

const CheckoutPage = () => {
  return (
    <>
      <Header/>
      <SubHeader title='Cart' breadcrumb={["Home", "Cart"]} logo={logoSite}/>
      <Footer/>
    </>
  )
}

export default CheckoutPage