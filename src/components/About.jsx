/* eslint-disable no-unused-vars */
import React from 'react'
import { userImage_URL } from './utils/Constants'

const About = () => {
  return (
    <div className='pt-16 px-5 h-screen w-screen '>
      <img className='my-5 mx-auto object-cover rounded-full' src={userImage_URL} alt='userImage' />
      <div className='p-10 text-2xl'>
        Hello! My name is Amogh Kashyap S N, and I’m presently studying engineering at a Siddaganga Institution of Technology. I have a strong inclination towards technological studies, particularly web development and programming. I enjoy exploring new tools and technologies, applying them to projects that help enhance my skills. Alongside my studies, I work on personal projects to sharpen my abilities and stay in tune with the latest trends in tech. I’m passionate about continuous learning and improving my problem-solving abilities.
      </div>
    </div>
  )
}

export default About
