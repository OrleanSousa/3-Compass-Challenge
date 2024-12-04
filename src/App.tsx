import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './components/shoppage/Shop'
import Contacts from './components/contacts/Contacts'
import Cart from './components/cartPage/Cart'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/contact' element={<Contacts/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
      
    </>
  )
}

export default App
