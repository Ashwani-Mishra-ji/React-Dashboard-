import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
        <span className='text-black'>Hello Ashwani 👋</span>
           
        </div>
        <div className='header-right text-black'>
        <div className="flex  bg-white">
        <BsSearch  className='icon'/>
        <input className=' flex flex-colpy-2' type="text" placeholder='Search'/>
        </div>
          
        </div>
    </header>
  )
}

export default Header