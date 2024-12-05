import React from 'react'
import Header from '../header/Header'
import SubHeader from '../subHeader/SubHeader'
import Footer from '../footer/Footer'
import logoSite from '../../assets/logosite.svg';
import Qualitys from '../qualitys/Qualitys';

const CheckoutPage = () => {
  return (
    <>
      <Header/>
      <SubHeader title='Cart' breadcrumb={["Home", "Checkout"]} logo={logoSite}/>
      <Qualitys/>
      <Footer/>
    </>
  )
}

export default CheckoutPage