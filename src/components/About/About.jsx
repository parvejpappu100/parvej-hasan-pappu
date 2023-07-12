import React, { useEffect } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';

const About = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className='py-28 max-w-7xl mx-auto'>
            <SectionTitle
                title={"About Me"}
                subTitle={"Know Me More"}
            ></SectionTitle>
            <div className='flex lg:items-center flex-col lg:flex-row px-2 gap-8 mt-20 '>
                <div className='lg:w-3/5'>
                    <h3 className='text-3xl font-bold'>I'm <span className='text-[#20C99A]'>Parvej Hasan Pappu,</span> a Web Developer</h3>
                    <p className='my-5 text-[18px]'>Hello, I'm a versatile MERN stack developer with a passion for crafting extraordinary web experiences. I excel in frontend and backend development, creating captivating user interfaces and robust server-side functionality. With expertise in HTML, CSS, and JavaScript, I build visually stunning and responsive websites. Let's collaborate to bring your vision to life and make an impact in the digital realm.</p>
                    <p className='text-[18px]'>Let's collaborate and transform your ideas into remarkable web experiences that leave a lasting impression.</p>
                </div>
                <div className='lg:w-2/5 text-[18px]'>
                    <h3 className='border-b mt-2 pb-2'><strong>Name :</strong> Parvej Hasan Pappu</h3>
                    <p className='border-b mt-2 pb-2'><strong>Email :</strong> <span className='text-green-400 font-semibold'>parvejhasanpappu100@gmail.com</span></p>
                    <p className='border-b mt-2 pb-2'><strong>Age :</strong> 20</p>
                    <p className='border-b mt-2 pb-2'><strong>From :</strong> Dhaka , Bangladesh</p>
                    <Link to="contact" smooth={true} duration={1000}>
                        <button className='bg-[#20C997] text-white font-semibold px-10 mt-5 hover:bg-[#1BAA80] duration-500 hover:shadow py-2 rounded-full'>Hire Me</button>
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 mt-16 text-center'>
                <div className=' border-r-2 border-[#E0DEDE]'>
                    <h1 className='text-5xl text-[#6C757D] font-semibold'>1+</h1>
                    <p className='text-xl'>Years Experience</p>
                </div>
                <div className='lg:border-r-2 border-[#E0DEDE]'>
                    <h1 className='text-5xl text-[#6C757D] font-semibold'>36+</h1>
                    <p className='text-xl'>Happy Clients</p>
                </div>
                <div className='border-r-2 border-[#E0DEDE]'>
                    <h1 className='text-5xl text-[#6C757D] font-semibold'>50+</h1>
                    <p className='text-xl'>Projects Done</p>
                </div>
                <div className=''>
                    <h1 className='text-5xl text-[#6C757D] font-semibold'>24</h1>
                    <p className='text-xl'>Get Awards</p>
                </div>
            </div>
        </div>
    );
};

export default About;