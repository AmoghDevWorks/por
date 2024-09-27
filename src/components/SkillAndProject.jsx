/* eslint-disable no-unused-vars */
import React from 'react'
import { netflix_clone_URL,rockPaperScissors_URL, spotifyClone_URL } from './utils/Constants'
import { Link, useNavigate } from 'react-router-dom'

const SkillAndProject = () => {

  const navigate = useNavigate();

  return (
    <div className='pt-24 px-5 h-screen'>
      <h1 className='text-5xl font-semibold underline underline-offset-2'>Skills</h1>
      <p className='mt-10 px-16 font-serif text-xl font-medium'>I have a strong foundation in web development, with expertise in HTML, CSS, Tailwind, and React for building dynamic and responsive websites. I’ve successfully cloned both Netflix and Swiggy websites using React, ensuring they are fully responsive across various devices. My programming knowledge extends to C++, with a deep understanding of data structures and algorithms. I’ve also solved 300+ questions on LeetCode, enhancing my problem-solving abilities. I'm constantly striving to learn new technologies, take on challenging projects, and continuously improve my technical skills.</p>
      <h1 className='text-5xl font-semibold underline underline-offset-2 my-8'>Projects</h1>
      <div className='px-16 flex flex-col'>
        <Link to={rockPaperScissors_URL} target='blank' className='text-lg hover:underline hover:font-bold hover:text-xl'>Rock,Papers and Scissors</Link>
        <Link to={netflix_clone_URL} target='blank' className='text-lg hover:underline hover:font-bold hover:text-xl'>Netflix-clone</Link>
        <Link to={spotifyClone_URL} target='blank' className='text-lg hover:underline hover:font-bold hover:text-xl'>Spotify-clone</Link>
      </div>
    </div>
  )
}

export default SkillAndProject
