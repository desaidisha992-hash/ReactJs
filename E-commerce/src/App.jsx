import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Product from './Pages/Product'
// import Chatgpt from './Pages/Chatgpt'
import { Navbar } from './Layout/Navbar'
import Footer from './Layout/Footer'
import Shop from './Pages/Shop'
import Collection from './Pages/Collection'
import About from './Pages/About'
import ConcatUs from './Pages/ConcatUs'


const App = () => {
  return (
  <>
  <Navbar/>
  <Routes> 
    <Route path='/' element={<Home/>} />
    <Route path='/product/:id' element={<Product/>} />
     {/* <Route path='/chatgpt' element={<Chatgpt/>} /> */}
      <Route path='/collection' element={<Collection /> } />
      <Route path='shop' element={<Shop/>}/>
     <Route path='/shop/:collection' element={<Shop /> } />
     <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<ConcatUs/>}/>
  </Routes>

  <Footer/>

   </>
  )
}

export default App