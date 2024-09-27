/* eslint-disable no-unused-vars */
import React from 'react'
import { mainPage_URL } from './utils/Constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {

  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.from('#name>h1',{
      bottom:5,
      opacity:0,
      stagger:0.5,
      duration:0.4,
      delay:3
    })

    tl.from('#image',{
      opacity:0,
      right:5,
      duration:0.85
    })
  })

  return (
    <div className='pt-14 h-screen w-screen flex gap-2'>
      <div id='name' className='w-1/2 h-full flex items-center justify-center gap-4 flex-col'>
        <h1 className='text-5xl text-white font-semibold'>I am</h1>
        <h1 className='text-5xl text-white font-semibold'>Amogh Kashyap S N</h1>
      </div>
      <div id='image' className='h-full w-1/2 relative'>
        <img className='object-contain h-full absolute right-0 z-20' src={mainPage_URL} alt='photo'/>
      </div>
    </div>
  )
}

export default App
