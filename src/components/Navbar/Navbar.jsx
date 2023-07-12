import React from 'react';
import { Link, Element } from 'react-scroll';
import About from '../About/About';
import Services from '../Services/Services';
import { FaBars, FaFacebookF, FaGithub, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import pappu from "../../assets/images/my-pic.jpeg"
import HomeDefault from '../HomeDefault/HomeDefault';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Testimonial from '../TestTimonial/Testimonial';



const Navbar = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  relative">
                    {/* Page content here */}
                    <Element name="home" className="section">
                        <HomeDefault></HomeDefault>
                    </Element>
                    <Element name="about" className="section">
                        <About></About>
                    </Element>
                    <Element name="services" className="section">
                        <Services></Services>
                    </Element>
                    <Element name="skills" className="section">
                        <Skills></Skills>
                    </Element>
                    <Element name="portfolio" className="section">
                        <Projects></Projects>
                    </Element>
                    <Element name="testimonial" className="section">
                        <Testimonial></Testimonial>
                    </Element>
                    <label htmlFor="my-drawer-2" className="text-green-400 top-2 left-2 text-3xl fixed drawer-button lg:hidden"><FaBars></FaBars></label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-black text-white font-semibold text-[16px]  items-center justify-between ">
                        {/* Sidebar content here */}
                        <div className='md:hidden lg:block font-semibold pt-10 flex flex-col items-center'>
                            <div className="tooltip normal-case" data-tip={"I'm Parvej Hasan Pappu"}>
                                <img className='w-60 h-60 rounded-full border-8 border-[#343A40]' src={pappu} alt="" />
                            </div>
                            <p className='text-center  text-xl  mt-3'>Parvej Hasan Pappu</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <li>
                                <Link className='hover:text-green-500' to="home" smooth={true} duration={500}>Home</Link>
                            </li>
                            <li>
                                <Link className='hover:text-green-500' to="about" smooth={true} duration={500}>About Me</Link>
                            </li>
                            <li>
                                <Link className='hover:text-green-500' to="services" smooth={true} duration={500}>What I Do</Link>
                            </li>
                            <li>
                                <Link className='hover:text-green-500' to="skills" smooth={true} duration={500}>Skills</Link>
                            </li>
                            <li>
                                <Link className='hover:text-green-500' to="portfolio" smooth={true} duration={500}>Portfolio</Link>
                            </li>
                            <li>
                                <Link className='hover:text-green-500' to="testimonial" smooth={true} duration={500}>Testimonial</Link>
                            </li>
                            <li>
                                <Link className='hover:text-green-500' to="contact" smooth={true} duration={500}>Contact</Link>
                            </li>
                        </div>
                        <div className='text-[#AAB1B8] flex gap-4 text-xl justify-center'>
                            <div className='tooltip' data-tip="Facebook">
                                <a href="https://www.facebook.com/pappu.parvejhasan/" target='_blank'><FaFacebookF></FaFacebookF></a>
                            </div>
                            <div className='tooltip' data-tip="GitHub">
                                <a href="https://github.com/parvejpappu100" target='_blank'><FaGithub></FaGithub></a>
                            </div>
                            <div className='tooltip' data-tip="Linkedin">
                                <a href="https://www.linkedin.com/in/parvej-hasan-pappu-569730278/" target='_blank'><FaLinkedinIn></FaLinkedinIn></a>
                            </div>
                            <div className='tooltip' data-tip="Instagram">
                                <a href="https://www.instagram.com/parvejhasanpappu100/" target='_blank'><FaInstagramSquare></FaInstagramSquare></a>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;