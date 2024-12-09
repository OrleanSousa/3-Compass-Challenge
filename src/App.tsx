import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contacts from './pages/Contact'
import Shop from './pages/Shop'
import CheckOut from './pages/CheckOut'
import Product from './pages/Product'
import Cart from './pages/Cart'
import ProtectedRoute from './components/ProtectRoute'; // Ajuste o caminho conforme necessário



function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path="/product/:id" element={<Product />} />
      <Route path='/contact' element={<Contacts/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route
          path='/checkout'
          element={
            <ProtectedRoute>
              <CheckOut />
            </ProtectedRoute>
          }
        />
      <Route path='/product' element={<Product/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
      
    </>
  )

  function NotFound() {
    return <h1>404 - Página não encontrada</h1>;
  }
}

export default App
