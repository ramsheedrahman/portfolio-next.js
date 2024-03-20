"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

function Homepage() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 items-center">
      <div className="md:col-span-7 sm:col-span-12 place-self-center">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Hello, I'm
          </span>{" "}
          <br />
          <TypeAnimation
            sequence={["Ramsheed K K", 1000, "Full Stack Developer", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
      </div>

      <div className="md:col-span-5 sm:col-span-12 place-self-center mt-4 ">
        <div className="rounded-full bg-[#181818] w-[400px] h-[400px] lg:h-[400px] lg:w-[400px] relative overflow-hidden">
          <Image src="/images/myImage2.png" width={400} height={400} />
        </div>
      </div>

      <div className=" flex justify-center md:col-span-12">
        <Link
          href="mailto:ramsheedkk06@gmail.com"
          className="px-6  py-3 w-full sm:w-fit rounded-full mr-4 "
        >
          <span className="block rounded-full px-5 py-2 bg-gray-900 text-white font-semibold border-2 border-yellow-500 ">
            Hire me
          </span>{" "}
        </Link>
        <Link href="/resume/myResume.pdf" download={'Ramsheed-Resume.pdf'} className=" w-full sm:w-fit rounded-full">
          <span className="block rounded-full bg-gray-900 text-white mt-3 px-5 py-2 font-semibold border-2 border-yellow-500 ">
            Download CV
          </span>
        </Link>
      </div>
    </section>
  );
}

export default Homepage;
