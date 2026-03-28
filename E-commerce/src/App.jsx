import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Product from './Pages/Product'
// import Chatgpt from './Pages/Chatgpt'
import { Navbar } from './Layout/Navbar'
import Footer from './Layout/Footer'

const App = () => {
  return (
  <>
  <Navbar/>
  <Routes> 
    <Route path='/' element={<Home/>} />
    <Route path='/product/:id' element={<Product/>} />
     {/* <Route path='/chatgpt' element={<Chatgpt/>} /> */}
  </Routes>

  <Footer/>

   </>
  )
}

export default App