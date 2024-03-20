'use client'
import React, { useState } from 'react'
import ProjectCard from './PojectsCard'

function ProjectSection() {
    const [tag,setTag]=useState('All')
    const [selected,setSelected]=useState('All')
    const handleChange=(newTag)=>{
      setTag(newTag)
    }
    const ButtonStyles= selected ? "text-white b-yellow-500" : "text-white border-slate-500 ";
const projectsData = [
    {
      id: 1,
      title: "Mern Stack Ecommerce Website",
      description: "Project 1 description",
      image: "/images/ecommerce.jpg",
      tag: ["All", "MERN Stack"],
      gitUrl: "https://github.com/ramsheedrahman/ecommerce2023",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "MERN Stack Movie Subtitle Download Website",
      description: "Project 2 description",
      image: "/images/msub.jpg",
      tag: ["All", "MERN Stack"],
      gitUrl: "https://github.com/ramsheedrahman/M.subtitle",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Python Calculator",
      description: "Project 3 description",
      image: "/images/pythoncalculator.png",
      tag: ["All", "Python"],
      gitUrl: "https://github.com/ramsheedrahman/pythoncalculator",
      previewUrl: "/",
    },{

    id: 4,
    title: "Clock",
    description: "Project 3 description",
    image: "/images/clock.png",
    tag: ["All", "HTML,CSS,JAVASCRIPT"],
    gitUrl: "https://github.com/ramsheedrahman/pythoncalculator",
    previewUrl: "/",
  },]

    const filterProducts=projectsData.filter((project)=>
      project.tag.includes(tag)
    )
  return (
    <div>
        <h1 className='text-center text-4xl mt-4 mb-4 text-white font-bold py-6'>My Projects</h1>
        <div className="text-white flex flex-row justify-center gap-2 mb-9">
            <button className={`${ButtonStyles} rounded-full  bg-gray-600 px-4 py-2 border border-white`} selected={tag==='All'} onClick={()=>handleChange('All')}>All</button>
            <button className={`${ButtonStyles} rounded-full  bg-gray-600 px-4 border border-white`} selected={tag==='MERN Stack'} onClick={()=>handleChange('MERN Stack')}>MERN Stack</button>
            <button className={`${ButtonStyles} rounded-full  bg-gray-600 px-4 border border-white`} selected={tag==='Python'} onClick={()=>handleChange('Python')}>Python</button>
            <button className={`${ButtonStyles} rounded-full  bg-gray-600 px-4 border border-white`} selected={tag==='HTML,CSS,JAVASCRIPT'} onClick={()=>handleChange('HTML,CSS,JAVASCRIPT')}>Javascript</button>

        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12 m-4'>
  {filterProducts.map((project) => (
    <ProjectCard 
      imgUrl={project.image}
      title={project.title}
      tag={project.tag}
      gitUrl={project.gitUrl}
      previewUrl={project.previewUrl}
    />
  ))}
</div>

    </div>
  )
}

export default ProjectSection