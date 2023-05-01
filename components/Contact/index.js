import React from 'react'

export default function Contact() {
  return (
    <div className='relative bg-primary flex flex-col justify-center'>
        <div className='relative translate-y-36'>
            <img src="/wavesNegative.svg" alt="" className='absolute -bottom-10 z-10'/>
            <img src="/wave.svg" alt="" className='absolute bottom-0'/>
        </div>
        <div className="flex flex-col bg-white h-32 mt-44 z-10">
            <h1 className='text-secondary text-2xl font-ubuntu font-extrabold mx-auto sm:-translate-y-10 md:-translate-y-24'>Contact Me</h1>
            <p className='text-third text-sm font-ubuntu font-thin mx-auto sm:-translate-y-10 md:-translate-y-24'>You can contact me in these social media</p>
            <div className='mx-auto sm:-translate-y-10 md:-translate-y-24 mt-6'>
                <a className='mx-4 text-fourth px-4 py-[13px] text-lg hover:shadow-[0_12px_12px_0_rgb(0,0,0,0.4)] bg-primary rounded-full hover:bg-fourth hover:text-primary transition-all' href='https://www.instagram.com/triputraharza/'><i class="fa-brands fa-instagram"></i></a>
                <a className='mx-4 text-fourth px-4 py-[13px] text-lg hover:shadow-[0_12px_12px_0_rgb(0,0,0,0.4)] bg-primary rounded-full hover:bg-fourth hover:text-primary transition-all' href='mailto:trahmadisyawal@gmail.com'><i class="fa-regular fa-envelope"></i></a>
                <a className='mx-4 text-fourth px-4 py-[13px] text-lg hover:shadow-[0_12px_12px_0_rgb(0,0,0,0.4)] bg-primary rounded-full hover:bg-fourth hover:text-primary transition-all' href='https://www.youtube.com/channel/UCjAXAchLJdboa9e85sXgHRQ'><i class="fa-brands fa-youtube"></i></a>
                <a className='mx-4 text-fourth px-4 py-[13px] text-lg hover:shadow-[0_12px_12px_0_rgb(0,0,0,0.4)] bg-primary rounded-full hover:bg-fourth hover:text-primary transition-all' href='https://wa.me/6295337277773'><i class="fa-brands fa-whatsapp"></i></a>
                <a className='mx-4 text-fourth px-4 py-[13px] text-lg hover:shadow-[0_12px_12px_0_rgb(0,0,0,0.4)] bg-primary rounded-full hover:bg-fourth hover:text-primary transition-all' href='https://github.com/THRG1170/'><i class="fa-brands fa-github"></i></a>
            </div>
        </div>
    </div>
  )
}
