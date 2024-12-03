import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import MainSection from '../components/homepage/mainsection/MainSection'
import SecondSection from '../components/homepage/secondsection/SecondSection'
import OutProducts from '../components/homepage/outproducts/OutProducts'

const Home = () => {
  return (
    <>
    <Header/>
    <MainSection/>
    <SecondSection/>
    <OutProducts/>
    <Footer/>
    </>
  )
}

export default Home