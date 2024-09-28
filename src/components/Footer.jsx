/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { gitHub_URL, LinkedIn_URL } from './utils/Constants';

const Footer = () => {

  const navigate = useNavigate()  ;

  return (
    <div className='text-white py-4 px-9 border-t-2 border-slate-400 border-solid flex items-center justify-between'>
      <div className='px-3 flex gap-4 lg:gap-10'>
        <Link to={LinkedIn_URL} target='blank'><i className="ri-linkedin-box-fill text-xl lg:text-4xl cursor-pointer"></i></Link>
        <Link to={gitHub_URL} target='blank'><i className="ri-github-fill text-xl lg:text-4xl cursor-pointer"></i></Link>
      </div>
      <div className='flex gap-1 items-center'>
        <i className="ri-copyright-line text-xl lg:text-4xl cursor-pointer"></i><span className='text-xl'>amoghkashyapsn</span>
      </div>
    </div>
  )
}

export default Footer
