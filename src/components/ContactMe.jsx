/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useRef } from 'react';
import checkValid from './utils/Validate';
import { useNavigate } from 'react-router-dom';

const ContactMe = () => {

  const email = useRef(null);
  const navigate = useNavigate();
  const [errorMessage,setErrorMessage] = useState(null)

  const manageClick = () =>{

    const res = checkValid(email.current.value);
    setErrorMessage(res)

    if(res)
      return

    navigate('/')
  }

  return (
    <div className='pt-14 px-5 bg-black h-screen '>
      <div className='h-full w-full relative'>
        <form className='text-center h-fit w-full lg:w-3/12 bg-slate-900 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-5 px-2 text-white rounded-lg'>
            <div className='font-serif text-5xl underline underline-offset-4'>Contact</div>
            <div className='text-left pl-2 lg:px-5'>
              <label>Name:</label>
              <br/>
              <input type='name' placeholder='Enter your name' required className='w-full h-8 p-2 mb-8 bg-slate-100 text-black font-serif' />
              <br/>
              <label>Email:</label>
              <br/>
              <input ref={email} type='email' placeholder='Enter the EmailAddress' required className='w-full h-8 p-2 mb-8 bg-slate-100 text-black font-serif' />
              <br></br>
              <textarea rows={8} cols={25} placeholder='Enter the content' required className='w-full p-2 mb-8 bg-slate-100 text-black font-serif'></textarea>
            </div>
            {errorMessage && 
              <div className='text-red-600 font-bold'>{errorMessage}</div>
            }
            <button className='bg-green-800 px-3 py-1 rounded-md' onClick={manageClick}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
