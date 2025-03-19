import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-19 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg '>What I Offer</h4>
      <h2 className='text-center text-5xl '>My Services</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quibusdam ut facilis accusantium reiciendis deserunt rem corporis maxime voluptates iste?
      </p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'>
        {serviceData.map(({icon, title, description, link}, index) => {
          return (
            <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow cursor-pointer hover:-translate-y-1 duration-500'>
              <Image src={icon} alt='' className='w-8'/>
              <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
              <p className='text-sm text-gray-600 leading-5'>{description}</p>
              <a href={link} className='flex items-center gap-2 text-sm mt-5 '>
                Read more
                <Image src={assets.right_arrow} alt='' className='w-4'/>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services