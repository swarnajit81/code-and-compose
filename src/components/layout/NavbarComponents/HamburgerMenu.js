import React from 'react'

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <button 
      className="lg:hidden flex flex-col justify-center items-center w-[30px] h-[30px] relative z-50"
      onClick={toggleMenu}
    >
      <span className={`w-full h-[2px] bg-accent rounded-lg transition-all duration-300 ease-in-out 
        ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
      
      <span className={`w-full h-[2px] bg-accent rounded-lg transition-all duration-300 ease-in-out mt-[5px]
        ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
      
      <span className={`w-full h-[2px] bg-accent rounded-lg transition-all duration-300 ease-in-out mt-[5px]
        ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
    </button>
  )
}

export default HamburgerMenu 