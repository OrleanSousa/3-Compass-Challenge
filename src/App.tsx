import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contacts from './pages/Contact'
import Cart from './components/cartPage/Cart'
import Shop from './pages/Shop'

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
