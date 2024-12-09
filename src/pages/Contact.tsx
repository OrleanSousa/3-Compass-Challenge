import Contacts from '../components/contacts/Contacts'
import Header from '../components/header/Header'
import SubHeader from '../components/subHeader/SubHeader'
import Qualitys from '../components/qualitys/Qualitys'
import Footer from '../components/footer/Footer'
import logoSite from '../assets/logosite.svg'

const Contact = () => {
  return (
    <>
    <Header/>
      <SubHeader title='Contact' breadcrumb={["Home", "Contact "]} logo={logoSite}/>
      <Contacts/>
      <Qualitys/>
      <Footer/>
    </>
  )
}

export default Contact