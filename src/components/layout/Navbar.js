"use client"

import React, { useState } from 'react'
import NavLinks from './NavbarComponents/NavLinks'
import NavRight from './NavbarComponents/NavRight'
import HamburgerMenu from './NavbarComponents/HamburgerMenu'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset'
  }

  return (
    <div className='fixed z-30 top-0 left-0 w-full'>
      <div className='w-full lg:w-[95%] mx-auto relative px-[20px] md:px-[40px] font-roboto flex justify-between items-center md:rounded-full mt-0 md:mt-[40px] h-[62px] md:h-[82px] bg-white text-accent'>
        <div className='flex gap-[12.86px] items-center'>
          <img src='/images/icons/logo.svg' className='w-[15px] md:w-[30px]' alt='logo' />
          <p className='font-medium text-lg lg:text-xl tracking-wider'>JustHome</p>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:block'>
          <NavLinks />
        </div>
        <div className='hidden lg:block'>
          <NavRight />
        </div>

        {/* Hamburger Menu */}
        <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white lg:hidden transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '62px' }}
        >
          <div className='flex flex-col p-6 h-[calc(100vh-62px)] overflow-y-auto'>
            {/* Mobile NavLinks */}
            <div className='flex flex-col space-y-6 mb-8'>
              <NavLinks isMobile={true} />
            </div>

            {/* Separator */}
            <div className='w-full h-[1px] bg-gray-100 my-4'></div>

            {/* Mobile NavRight */}
            <div className='flex flex-col space-y-6'>
              <NavRight isMobile={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar