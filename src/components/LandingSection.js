"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

const LandingSection = () => {
    const containerRef = React.useRef(null)
    const inputRef = React.useRef(null)
    useEffect(() => {
        if(inputRef?.current){
            inputRef.current.focus()
        }
    } , [])

    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ['start start', 'end start '],
    })

    const y = useTransform(scrollYProgress , [0 ,1]  ,  ["0%" , "80%"])

  return (
    <div className='w-full h-screen overflow-hidden'>
    <motion.div ref={containerRef} style={{y}} className='w-full  h-full  text-primary font-medium flex flex-col items-center gap-[20px] justify-center  min-h-[600px] relative bg-gray-400'>
        <Image src={"/images/home.png"} fill={true} alt='home' className='object-cover brightness-90 pointer-events-none' />
        <div className='px-[25px] rounded-[30px] h-[38px]  flex items-center relative border-[1px] border-primary' >
            <p className='text-xs md:text-sm'>LET US GUIDE YOUR HOME</p>
        </div>
        <h1 className='leading-[1em] relative font-medium heading'>Believe in finding it</h1>
        <p className='text-xs md:text-sm relative'>Search properties for sale and to rent in the UK</p>
        <div className='w-[90%] relative px-[20px]   max-w-[690px] h-[70px] bg-white overflow-hidden rounded-full' >
            <input ref={inputRef} type='text' placeholder='Enter Name, Keywords...' className=' w-full h-full outline-none  isolate rounded-md px-[10px]' />
            <div className='absolute cursor-pointer right-[5px] rounded-full top-[5px] bottom-[5px]  grid place-items-center bg-secondary z-10 w-[60px]' >
                <img src='/images/icons/search.svg' />
            </div>
        </div>
        <p className='text-xs md:text-sm relative text-white'>What are you looking for?</p>
        <div className='grid gap-[10px] grid-cols-1  md:grid-cols-3' >
            {services.map((service , i) => 
            <div key={i} className='rounded-[30px]  backdrop-blur-[30px] text-white p-[5] h-[50px] w-[147px] flex items-center gap-[10px]'>
                <div className='h-full rounded-full w-[40px] bg-white grid place-items-center'>
                    <img src={service.icon} alt={service.text} />
                </div>
                <p className='text-xs md:text-sm' >
                    {service.text}
                </p>
            </div>
            )}
        </div>
    </motion.div>
    </div>
  )
}

export default LandingSection

const services = [
    {
        text: "Modern Villa",
        icon:"/images/icons/villa.svg"
    },
    {
        text: "Apartment",
        icon:"/images/icons/apartment.svg"
    },
    {
        text: "Town House",
        icon:"/images/icons/town.svg"
    },
    
]