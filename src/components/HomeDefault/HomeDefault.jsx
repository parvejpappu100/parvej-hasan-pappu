import React from 'react';
import myImg from "../../assets/images/bg-lady.png"
import { TypeAnimation } from 'react-type-animation';
import Lottie from "lottie-react";
import animation3 from "../../assets/139020-unlock-bigger-scroll-down-animation.json"
import ResumePDF from "../../assets/resume/Resume of Parvej Hasan.pdf"

const HomeDefault = () => {
  return (
    <div className='lg:h-screen relative' >
      <img className='h-full w-full object-cover ' src={myImg} alt="" />
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
        <div className='text-white'>
          <div className=''>
            <h5 className='text-xl md:text-3xl text-center font-semibold'>Welcome</h5>
            <h2>
              <TypeAnimation
                sequence={[
                  "I'm a Web Developer",
                  1000,
                  "I'm a MERN Stack Developer",
                  1000,
                  "I'm a ReactJS Developer",
                  1000,
                  "I'm a Front End Developer",
                  1000
                ]}
                wrapper="span"
                speed={20}
                style={{ fontWeight: 'bold', display: 'inline-block' }}
                repeat={Infinity}
                className='text-2xl md:text-4xl lg:text-5xl'
              />
            </h2>
            <p className='text-xl text-center'>based is Dhaka, Bangladesh</p>
            <div className='flex justify-center mt-8'>
              <a href={ResumePDF}
                download="Resume-PDF-document"
                target="_blank"
                rel="noreferrer">
                <button
                  className='border-2 border-green-500 rounded-full px-4 py-3 text-green-500 font-semibold uppercase hover:text-white hover:bg-[#1FB88B] duration-500'
                >
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden md:block w-[96px] mx-auto -mt-16'>
        <Lottie animationData={animation3} loop={true}></Lottie>
      </div>
    </div>
  );
};

export default HomeDefault;