"use client";
import React, { useState, useTransition } from "react";

function Aboutsection() {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();
  const handleChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const TABDATA = [
    {
      title: "Skills",
      id: "Skills",
      content: (
        <ul>
          <li>HTML</li>
          <li>Css</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>Git</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "Education",
      content: (
        <ul>
          <li>MERN Stack Developing, Entri Elavate</li>
          <li>Post Gradution of Diploma in Computer Application</li>
          <li>Bachelor of Commerce , Kannur University</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="text-white my-4  mt-6 " id='about'>
      <div className="flex justify-center ">
        <div className="w-full ">
          <h1 className="text-2xl font-bold mb-4 md:text-3xl text-center">About Me</h1>
          <p className="text-base md:text-lg ">
            Hello! I'm Ramsheed, an enthusiastic learner and aspiring web
            developer with a Bachelor of Commerce (B.Com) degree. With a
            background in accounting and IT assistance, I've cultivated strong
            problem-solving skills and attention to detail. Now, I'm
            transitioning my career to web development, where I'm currently
            mastering the MERN stack. While I may be new to web development, my
            B.Com degree has equipped me with valuable analytical and
            organizational skills that I'm eager to apply to my coding journey.
            I'm deeply passionate about learning and growth, and I'm excited to
            leverage my diverse background to excel in the dynamic field of web
            development.
          </p>
        </div>
      </div>
      {/* <div className='flex mt-8'>
        <button
          className={`text-white mr-3 ${
            tab === 'Skills' ? 'border-b-2 border-green-500 hover:text-slate-400' : ''
          }`}
          onClick={() => handleChange('Skills')}
        >
          Skills
        </button>
        <button
          className={`text-white mr-3 ${
            tab === 'Education' ? ' border-b-2 border-green-500 hover:text-slate-400' : ''
          }`}
          onClick={() => handleChange('Education')}
        >
          Education
        </button>
        <button
          className={`text-white ${
            tab === 'Certifications' ? 'border-b-2 border-green-500 hover:text-slate-400' : ''
          }`}
          onClick={() => handleChange('Certifications')}
        >
          Certifications
        </button>
      </div>
      <div className='mt-8 '>{TABDATA.find((t)=>t.id===tab).content}</div> */}
    </div>
  );
}

export default Aboutsection;
