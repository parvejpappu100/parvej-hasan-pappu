import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';
import About from '../About/About';
import Services from '../Services/Services';
import { FaBars, FaFacebookF, FaGithub, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import pappu from "../../assets/images/pappu_linkedin.png"
import HomeDefault from '../HomeDefault/HomeDefault';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';


const Navbar = () => {

    const [activeLink, setActiveLink] = useState('');
    
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
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
                    <Element name="contact" className="section">
                        <Contact></Contact>
                    </Element>
                    <label htmlFor="my-drawer-2" className="text-green-400 top-2 left-2 text-3xl fixed drawer-button lg:hidden"><FaBars></FaBars></label>

                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-black text-white font-semibold text-[16px]  items-center justify-between ">
                        {/* Sidebar content here */}
                        <div className='md:w-[100px]  lg:w-full font-semibold pt-10 md:pt-0 lg:pt-10 flex flex-col items-center'>
                            <div className="tooltip md:tooltip-right lg:tooltip normal-case" data-tip={"I'm Parvej Hasan Pappu"}>
                                <img className='md:w-[100px] md:h-[100px] w-60 lg:w-60 h-60 lg:h-60 rounded-full border-8 border-[#343A40]' src={pappu} alt="" />
                            </div>
                            <p className='text-center  text-xl md:hidden lg:block   mt-3'>Parvej Hasan Pappu</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <li>
                                <Link style={activeLink === 'home' ? { color: '#20C99A', backgroundColor: "black" } : {}}
                                    className='hover:text-green-500'
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onSetActive={() => setActiveLink('home')}>Home</Link>
                            </li>
                            <li>
                                <Link style={activeLink === 'about' ? { color: '#20C99A', backgroundColor: "black" } : {}}
                                    className='hover:text-green-500'
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onSetActive={() => setActiveLink('about')}>About Me</Link>
                            </li>
                            <li>
                                <Link style={activeLink === 'services' ? { color: '#20C99A', backgroundColor: "black" } : {}}
                                    className='hover:text-green-500'
                                    to="services" spy={true}
                                    smooth={true}
                                    duration={500}
                                    onSetActive={() => setActiveLink('services')}>What I Do</Link>
                            </li>
                            <li>
                                <Link style={activeLink === 'skills' ? { color: '#20C99A', backgroundColor: "black" } : {}} className='hover:text-green-500'
                                    to="skills" spy={true}
                                    smooth={true}
                                    duration={500}
                                    onSetActive={() => setActiveLink('skills')}>Skills</Link>
                            </li>
                            <li>
                                <Link style={activeLink === 'portfolio' ? { color: '#20C99A', backgroundColor: "black" } : {}} className='hover:text-green-500'
                                    to="portfolio" spy={true}
                                    smooth={true}
                                    duration={500}
                                    onSetActive={() => setActiveLink('portfolio')}>Portfolio</Link>
                            </li>
                            <li>
                                <Link style={activeLink === 'contact' ? { color: '#20C99A', backgroundColor: "black" } : {}} className='hover:text-green-500'
                                    to="contact" spy={true}
                                    smooth={true}
                                    duration={500}
                                    onSetActive={() => setActiveLink('contact')}>Contact</Link>
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