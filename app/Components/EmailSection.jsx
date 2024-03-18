'use client'
import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    console.log(data);
    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/send';
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
        toast.success("Email sent successfully!", { position: "top-right" });
      } else {
        throw new Error("Failed to send email.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send email!", { position: "top-right" });
    }
  };

  return (
    <section className='grid md:grid-cols-2 my-12 gap-24' id='contact'>
      <div>
        <h5 className='text-xl text-white'>Connect With Me</h5>
        <p className='text-gray-400'>I'm on a passionate journey to dive into the dynamic world of web development and eager to seize exciting opportunities. If you're a hiring professional, I'd love to connect and explore how my skills and enthusiasm could contribute to your team. My inbox is always open for discussions, whether you have a job opportunity, want to discuss my projects, or simply want to say hello. I'm committed to responding promptly and engaging in meaningful conversations. Let's connect, collaborate, and create something awesome!</p>
        <div className="socials flex flex-row gap-3 mt-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className='text-white text-xl'/>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='text-white text-xl'/>
          </a>
        </div>
      </div>
      <div>
       <ToastContainer/>
          <form action="" className='flex flex-col gap-6' onSubmit={handleSubmit}>
            <label htmlFor="email" className='text-white text-sm font-medium'>Your Email</label>
            <input name='email' type='email' id='email' className='bg-gray-800 border border-red-400 text-gray-400 text-sm rounded-lg block w-full py-2' required />
            <label htmlFor="subject" className='text-white text-sm font-medium'>Subject</label>
            <input name='subject' type='text' id='subject' className='bg-gray-800 border border-red-400 text-gray-400 text-sm rounded-lg block w-full py-2' required />
            <label htmlFor="message" className='text-white text-sm font-medium'>Message</label>
            <textarea name='message' type='text' id='message' className='bg-gray-800 border border-red-400 text-gray-400 text-sm rounded-lg block w-full py-2' required />
            <button type="submit" className="bg-red-400 text-white text-sm font-medium py-2 rounded-lg hover:bg-red-500 transition duration-300">
              Send Message
            </button>
          </form>
        
      </div>
    </section>
  );
}

export default EmailSection;
