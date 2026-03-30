import { Heart, Menu, Search, ShoppingBag,User2,X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

  return (
   <section>
    {/* desktop navbar */}
    <nav className='bg-white px-8 py-4 h-auto hidden md:flex items-center justify-between'>
        {/* logo */}
        <div className='flex justify-center items-center gap-x-2'>
            <img src="/logo.png" alt="logo" className='w-20 object-cover'/>
            <h1 className='font-bold text-xl'>Shopping.</h1>
        </div>
  {/* links */}
     <ul className='flex items-center justify-center gap-x-4 text-lg font-normal'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/collection">Collection</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
     </ul>
  {/* icons */}
        <div className='flex items-center justify-center gap-x-6'>
       <Search strokeWidth={1}/>
       <Heart strokeWidth={1}/>
       <ShoppingBag strokeWidth={1}/>
       <User2 strokeWidth={1}/>
        </div>
    </nav>

    {/* mobile and tablet */}
    <nav className='bg-white px-8 py-4 h-auto flex md:hidden items-center justify-between'>
        {/* logo */}
        <div className='flex justify-center items-center gap-x-2'>
            <img src="/logo.png" alt="logo" className='w-20 object-cover'/>
            <h1 className='font-bold text-xl'>Shopping</h1>
        </div>
    {/* icons */}
        <div className='flex items-center justify-center gap-x-6'>
       <Heart strokeWidth={1}/>
       <ShoppingBag strokeWidth={1}/>
       <User2 strokeWidth={1}/>
       <Menu strokeWidth={1} className='active:scale-95 active:text-amber-600' onClick={()=>{
        setShowMenu(true);
       }}/>
        </div>
    </nav>
     
     {/* side bar/panel */}
     {showMenu && ( <section className='relative flex justify-end md:hidden'>
        <div className='w-[70%] z-200 bg-white/30 backdrop-blur-sm h-screen fixed top-0 flex items-center justify-center'>
          <div className='absolute top-2 right-4'>
            <X className='w-10 h-10' strokeWidth={4} onClick={()=>{
                setShowMenu(false);
            }}/>
        </div>
        {/* links */}
       <ul className='flex flex-col items-center justify-center gap-y-16 text-3xl font-semibold'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/collection">Collection</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
     </ul>
        </div>
     </section>)}
    
   </section>
  )
}
