/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { logo_URL } from './utils/Constants'
import 'remixicon/fonts/remixicon.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Header = () => {

  const [isOpen,setIsOpen] = useState(false)

  const manageClick = () =>{
    setIsOpen(!isOpen)
  }

  useGSAP(()=>{
    const tl1 = gsap.timeline();

    tl1.from('#header>img',{
      top:4,
      opacity:0,
      scale:0.75,
      delay:1,
      duration:0.9
    })

    tl1.from('#header>i',{
      opacity:0,
      top:5,
    })
  })

  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.to("#menubar",{
      right:0,
      duration:1,
    })

    tl.from('#menubar>h1',{
      right:5,
      opacity:0,
      duration:0.25,
      stagger:0.2
    })

    tl.from('#menubar>i',{
      opacity:0,
      right:5,
      scale:0.5,
    })
  },[isOpen])

  return (
    <div id='header' className='px-5 lg:px-10 h-12 w-full flex items-center justify-between fixed z-30 bg-inherit'>
        <img className="h-3/4 object-cover rounded-lg" src={logo_URL} alt="logo"/>
        {!isOpen && 
          <i className="ri-menu-line text-white text-xl cursor-pointer" onClick={manageClick}></i>
        }
        {isOpen && 
          <div id='menubar' className='p-3 absolute top-10 -right-1/2 bg-black text-white h-fit w-1/4'>
            <h1 className='text-4xl my-3 cursor-pointer'>Home</h1>
            <h1 className='text-4xl my-3 cursor-pointer'>About</h1>
            <i className="ri-arrow-right-line my-8 text-3xl hover:bg-white hover:text-black hover:rounded-lg hover:p-2" onClick={manageClick}></i>
          </div>
        }
    </div>
  )
}

export default Header
