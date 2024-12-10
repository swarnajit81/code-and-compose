import React from 'react'

const NavRight = ({ isMobile }) => {
  return (
    <div className={`${
      isMobile 
        ? 'flex flex-col space-y-4 w-full' 
        : 'hidden lg:flex gap-[20px] font-medium text-sm items-center'
    }`}>
      <a href='#' className='flex gap-[10px] items-center'>
        <img src='/images/icons/phone.svg' className='w-[20px]' alt='phone' />
        <p className={`${isMobile ? 'text-lg' : ''}`}>+68 685 88666</p>
      </a>
      <div className={`${
        isMobile ? 'flex justify-center' : ''
      } w-[40px] cursor-pointer transition-all h-[40px] border-[1px] border-black rounded-full grid place-items-center`}>
        <img src='/images/icons/profile.svg' className='w-[20px] group-hover:fill-white' alt='profile' />
      </div>
      <div className={`${
        isMobile ? 'w-full text-center' : ''
      } hover:bg-black border-[1px] cursor-pointer border-black rounded-[30px] hover:text-white transition-all px-[26px] py-[6px]`}>
        <p className={`${isMobile ? 'text-lg' : ''}`}>Add Property</p>
      </div>
    </div>
  )
}

export default NavRight