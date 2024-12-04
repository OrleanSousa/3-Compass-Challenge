import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import MainSection from '../components/homepage/mainsection/MainSection'
import SecondSection from '../components/homepage/secondsection/SecondSection'
import OutProducts from '../components/homepage/outproducts/OutProducts'
import Carousel from '../components/homepage/carousel/Carousel'
import Gallery from '../components/homepage/gallery/Gallery'

const Home = () => {
  return (
    <>
    <Header/>
    <MainSection/>
    <SecondSection/>
    <OutProducts/>
    <Carousel/>
    <Gallery/>
    <Footer/>
    </>
  )
}

export default Home