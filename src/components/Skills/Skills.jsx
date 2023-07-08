import React, { useEffect } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import 'react-progress-bar-plus/lib/progress-bar.css';
import { FaDownload } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="500" className='py-28  max-w-7xl mx-auto mt-24'>
            <SectionTitle
                title={"Skills"}
                subTitle={"My Skills"}
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 px-3 md:px-5'>
                <div>
                    <div className='flex justify-between'>
                        <h5 className='text-xl font-semibold'>HTML/CSS</h5>
                        <p className='text-xl font-medium'>95%</p>
                    </div>
                    <div>
                        <progress className="progress progress-success " value="95" max="100"></progress>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <h5 className='text-xl font-semibold'>Tailwind CSS</h5>
                        <p className='text-xl font-medium'>90%</p>
                    </div>
                    <div>
                        <progress className="progress progress-success " value="90" max="100"></progress>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <h5 className='text-xl font-semibold'>Bootstrap</h5>
                        <p className='text-xl font-medium'>80%</p>
                    </div>
                    <div>
                        <progress className="progress progress-success " value="80" max="100"></progress>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <h5 className='text-xl font-semibold'>JavaScript</h5>
                        <p className='text-xl font-medium'>60%</p>
                    </div>
                    <div>
                        <progress className="progress progress-success " value="60" max="100"></progress>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <h5 className='text-xl font-semibold'>ReactJS</h5>
                        <p className='text-xl font-medium'>90%</p>
                    </div>
                    <div>
                        <progress className="progress progress-success " value="90" max="100"></progress>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <h5 className='text-xl font-semibold'>MongoDB</h5>
                        <p className='text-xl font-medium'>75%</p>
                    </div>
                    <div>
                        <progress className="progress progress-success " value="75" max="100"></progress>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <h5 className='text-xl font-semibold'>Node</h5>
                        <p className='text-xl font-medium'>55%</p>
                    </div>
                    <div>
                        <progress className="progress progress-success " value="55" max="100"></progress>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <h5 className='text-xl font-semibold'>Express</h5>
                        <p className='text-xl font-medium'>75%</p>
                    </div>
                    <div>
                        <progress className="progress progress-success " value="75" max="100"></progress>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <h5 className='text-xl font-semibold'>Firebase</h5>
                        <p className='text-xl font-medium'>80%</p>
                    </div>
                    <div>
                        <progress className="progress progress-success " value="80" max="100"></progress>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <h5 className='text-xl font-semibold'>Figma</h5>
                        <p className='text-xl font-medium'>90%</p>
                    </div>
                    <div>
                        <progress className="progress progress-success " value="90" max="100"></progress>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <h5 className='text-xl font-semibold'>Graphics Design</h5>
                        <p className='text-xl font-medium'>50%</p>
                    </div>
                    <div>
                        <progress className="progress progress-success " value="50" max="100"></progress>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <h5 className='text-xl font-semibold'>Communication</h5>
                        <p className='text-xl font-medium'>90%</p>
                    </div>
                    <div>
                        <progress className="progress progress-success " value="90" max="100"></progress>
                    </div>
                </div>
            </div>
            <div className=' mt-12'>
                <button className='hover:bg-[#6C757D] hover:text-white border-2 border-black px-8 py-3 rounded-full text-xl font-semibold hover:border-[#6C757D] duration-1000 flex items-center gap-3 mx-auto'><span>Download Resume</span> <FaDownload></FaDownload></button>
            </div>
        </div>
    );
};

export default Skills;