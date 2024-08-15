import React from 'react'
import { LogoLight } from '../../assets'
// https://drive.google.com/drive/u/0/folders/1_PylJQrfQTMVvC2kwM9rY46EYjeo-zW5
const Navbar = () => {
  return (
    <div className='w-full flex justify-center h-[64px] '>
        <div className='w-full bg-white hidden lg:flex'></div>
        <div className='max-w-[1204px] w-full flex justify-between  md:min-w-[1240px]'>
            <div className='flex flex-1 items-center'>
                <div className='h-12 px-5'>
                    <img className='object-cover h-full w-full object-center' src={LogoLight}/>
                </div>
            </div>
            <div className='relative bg-[#4041E6] md:max-w-[300px] rounded-l-full pl-4 flex justify-center items-center'>
                <div className='w-auto md:w-[120px] h-[64px] absolute -left-16 top-0 bg-[#4041E6] -skew-x-[55deg]'>
                </div>
                <div className='bg-white px-8 py-1 font-semibold rounded-xl '>
                    Certificate
                </div>
            </div>
        </div>
        <div className='w-full bg-[#4041E6] hidden lg:flex'></div>
    </div>
  )
}

export default Navbar