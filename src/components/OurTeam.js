import Image from 'next/image'
import React from 'react'

const OurTeam = () => {
  return (
    <div className='w-[95%] max-w-[1340px] mx-auto py-[151px]'>
        <h2 className='text-center heading'>Meet Our Team Of Experts</h2>
        <p className='mt-[10px] text-center  text-sm md:text-lg text-pretty'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className='mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[40px] mx-auto'>
            {teammates.map((teammate , i) => 
                <div key={i} className='flex flex-col' >
                    <div className='relative rounded-[20px] overflow-hidden bg-gray-200 aspect-[3/3.5]' >
                        <Image fill={true} alt={teammate.name} src={teammate.img} objectFit='cover'/>
                    </div>
                    <p className='mt-[10px] font-[500]  text-sm md:text-lg text-pretty'>
                        {teammate.name}
                    </p>
                    <p className='mt-[10px]   text-xs md:text-sm text-pretty'>
                        {teammate.position}
                    </p>
                </div>
            )}
        </div>    
    </div>
  )
}

const teammates  = [
    {
        img: "/images/team-1.png",
        name: "Joe Powell",
        position: "Service Support"
    },
    {
        img: "/images/team-2.jpg.png",
        name: "Thomas Powell",
        position: "Marketing"
    },
    {
        img: "/images/team-3.jpg.png",
        name: "Tom Wilson",
        position: "Designer"
    },
    {
        img: "/images/team-4.jpg.png",
        name: "Samuel Palmer",
        position: "Marketing"
    },
]

export default OurTeam