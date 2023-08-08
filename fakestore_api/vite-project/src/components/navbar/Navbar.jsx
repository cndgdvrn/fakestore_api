import React from 'react'
import NavbarLeftside from './navbarItem/NavbarLeftside'
import NavbarRightside from './navbarItem/navbarRightside'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between mt-3'>
      <NavbarLeftside/>
      <NavbarRightside/>
    </div>
  )
}

export default Navbar