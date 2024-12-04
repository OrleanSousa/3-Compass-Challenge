import React from 'react'
import Header from '../header/Header'
import SubHeader from '../subHeader/SubHeader'
import logoSite from '../../assets/logosite.svg';
import Footer from '../footer/Footer';

const Cart = () => {
  return (
    <>
      <Header/>
      <SubHeader title='Cart' breadcrumb={["Home", "Cart"]} logo={logoSite}/>
      <Footer/>
    </>
  )
}

export default Cart