import React from 'react';
import { Link, Element } from 'react-scroll';
import About from '../About/About';
import Services from '../Services/Services';
import { FaBars } from "react-icons/fa";



const Navbar = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center relative">
                    {/* Page content here */}
                    <Element name="about" className="section">
                        {/* Content of your services section */}
                        <About></About>
                    </Element>
                    <Element name="services" className="section">
                        <Services></Services>
                    </Element>
                    <label htmlFor="my-drawer-2" className=" top-2 left-2 text-3xl fixed drawer-button lg:hidden"><FaBars></FaBars></label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content uppercase">
                        {/* Sidebar content here */}
                        <li>
                            <Link to="home" smooth={true} duration={500}>Home</Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500}>About Me</Link>
                        </li>
                        <li>
                            <Link to="services" smooth={true} duration={500}>What I Do</Link>
                        </li>
                        <li>
                            <Link to="resume" smooth={true} duration={500}>Resume</Link>
                        </li>
                        <li>
                            <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
                        </li>
                        <li>
                            <Link to="testimonial" smooth={true} duration={500}>Testimonial</Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500}>Contact</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;