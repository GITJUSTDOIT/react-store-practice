
import './App.css'
import { Routes, Route } from 'react-router'
import AllProducts from './pages/AllProducts'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Layout from './components/Layout/Layout'
import ShowProduct from './pages/ShowProduct'



function App() {

  return (
    
    <Layout>
      <Routes>
        <Route path='/login' element={ <Login/> } />
        <Route path='/products' element={ <AllProducts/> } />
        <Route path='/cart' element={ <Cart/> } />
        <Route path='/products' element={ <Register/> } />
        <Route path='/products/:productId' element={ <ShowProduct/> } />
      </Routes>
    </Layout>
  )
}

export default App
