import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Product from './Pages/Product'

const App = () => {
  return (
  <>
 
  <Routes> 
    <Route path='/' element={<Home/>} />
    <Route path='/product/:id' element={<Product/>} />
  </Routes>

   </>
  )
}

export default App