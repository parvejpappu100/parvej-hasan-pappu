import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import 'react-progress-bar-plus/lib/progress-bar.css';
import { FaDownload } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch("/skills.json")
            .then(res => res.json())
            .then(data => setSkills(data))
        AOS.init();
    }, []);

    return (
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className='py-28  max-w-7xl mx-auto mt-24'>
            <SectionTitle
                title={"Skills"}
                subTitle={"My Skills"}
            ></SectionTitle>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 px-3 md:px-5'>
                    {
                        skills.map(skill => <div key={skill._id}>
                            <div className='flex justify-between'>
                                <h5 className='text-xl font-semibold'>{skill.name}</h5>
                                <p className='text-xl font-medium'>{skill.percent}%</p>
                            </div>
                            <div>
                                <progress className="progress progress-success " value={skill.percent} max="100"></progress>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div className=' mt-12'>
                <button className='hover:bg-[#6C757D] hover:text-white border-2 border-black px-8 py-3 rounded-full text-xl font-semibold hover:border-[#6C757D] duration-1000 flex items-center gap-3 mx-auto'><span>Download Resume</span> <FaDownload></FaDownload></button>
            </div>
        </div>
    );
};

export default Skills;