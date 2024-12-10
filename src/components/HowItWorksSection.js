import React from 'react'

const HowItWorksSection = () => {
  return (
    <div className='min-h-screen max-w-[1340px] w-[95%] mx-auto items-center flex flex-wrap justify-between' >
        <img src='/images/howitworks.png' className="w-full lg:w-1/2 h-auto" />
        <div className='w-full lg:w-1/2 mt-[40px] lg:mt-0  flex justify-center items-start flex-col gap-[20px] px-[60px]' >
            <h3 className='text-center lg:text-start heading w-full'>How It works? <br/>
            Find a perfect home</h3>
            <p className='text-xs  lg:text-sm lg:max-w-[470px]'>Pellentesque egestas elementum egestas faucibus sem. Velit
            nunc egestas ut morbi. Leo diam diam.</p>
            <div className='mt-[10px] w-full  flex flex-col items-center   gap-[20px] lg:max-w-[300px]' >
            {works.map((works, i) => 
            <div className='flex gap-[20px] items-start ' key={i}  >
                <img src={works.icon} alt={works.text} />
                <div className='flex flex-col gap-[10px]'>
                    <p className='text-sm  lg:text-lg font-[500]'>{works.text}</p>
                    <p className='text-xs  lg:text-sm' >{works.subtext}</p>
                </div>
            </div>
            )}
            </div>
        </div>
    </div>
  )
}

export default HowItWorksSection

const works = [
    {
        text: "Find Real Estate",
        subtext: "Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco",
        icon: "/images/icons/home.svg"
    },
    {
        text: "Meet Realtor",
        subtext: "Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco",
        icon: "/images/icons/realtor.svg"
    },
    {
        text: "Take The Keys",
        subtext: "Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco",
        icon: "/images/icons/keys.svg"
    },
]