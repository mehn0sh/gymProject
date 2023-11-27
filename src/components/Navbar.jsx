import React from 'react'
import Logo from '../assets/images/Logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div >
      <div className='flex items-center lg:gap-[220px] sm:gap-[122px] gap-[40px] mt-4 px-[20px] justify-evenly lg:justify-start'>

      <div>
        <Link to='/' >
        <img src={Logo} alt="" className='px-3 my-0 mx-[20px]' />
        </Link>
      </div>
      <div>
        <div className='flex gap-6 text-[#3A1212] text-lg '>
          <Link to='/' className='group flex flex-col group'  >      
            Home
          <span className='w-3 bg-red-800 h-1 group-hover:w-[52px] transition-all'></span>
          </Link>
          <a href="#exercise"> Exercises </a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar