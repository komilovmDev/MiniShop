import { useState } from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import ProductDeatil from './pages/ProductDetail'

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product/:productId' element={<ProductDeatil/>}/> 
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
