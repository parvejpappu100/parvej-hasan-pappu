import React, { useEffect } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { FaCloudUploadAlt, FaCode, FaCodeBranch, FaServer } from "react-icons/fa";
import { MdBuild, MdWeb } from 'react-icons/md';
import { AiOutlineMobile } from 'react-icons/ai';
import { GiDatabase } from 'react-icons/gi';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Services = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='bg-[#F8F9FA] text-black'>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className='py-28   max-w-7xl mx-auto'>
                <SectionTitle
                    title={"Services"}
                    subTitle={"What I Do"}
                ></SectionTitle>
                <div className='grid px-2 md:px-4 lg:px-0 lg:grid-cols-2 gap-8 mt-24'>
                    <div className='flex gap-5'>
                        <div className='rounded shadow-md w-32 h-20 p-5 bg-white text-3xl text-[#20C997]'>
                            <FaCode></FaCode>
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold'>Full-Stack Web Development</h4>
                            <p>Develop end-to-end web applications using the MERN (MongoDB, Express, React, Node.js) stack, ensuring seamless integration between the frontend and backend.</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='rounded shadow-md w-32 h-20 p-5 bg-white text-3xl text-[#20C997]'>
                            <MdWeb></MdWeb>
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold'>Custom Web Application Development</h4>
                            <p>Build customized web applications tailored to your specific business needs, leveraging the power of the MERN stack to deliver high-performance and scalable solutions.</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='rounded shadow-md w-32 h-20 p-5 bg-white text-3xl text-[#20C997]'>
                            <AiOutlineMobile></AiOutlineMobile>
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold'>Responsive UI/UX Design</h4>
                            <p>Create intuitive and visually appealing user interfaces that adapt smoothly across different devices, providing an exceptional user experience on desktops, tablets, and mobile devices.</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='rounded shadow-md w-32 h-20 p-5 bg-white text-3xl text-[#20C997]'>
                            <FaServer></FaServer>
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold'>RESTful API Development</h4>
                            <p>Design and develop robust APIs using Express and Node.js, allowing smooth communication between your frontend and backend components and enabling seamless data flow.</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='rounded shadow-md w-28 h-20 p-5 bg-white text-3xl text-[#20C997]'>
                            <GiDatabase></GiDatabase>
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold'>Database Integration and Management</h4>
                            <p>Implement MongoDB as the database solution for your web applications, ensuring efficient data storage, retrieval, and management.</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='rounded shadow-md w-32 h-20 p-5 bg-white text-3xl text-[#20C997]'>
                            <FaCodeBranch></FaCodeBranch>
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold'>Third-Party API Integration</h4>
                            <p>Integrate third-party APIs to add additional functionality and enhance the capabilities of your web applications, enabling seamless integration with external services and platforms.</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='rounded shadow-md w-28 h-20 p-5 bg-white text-3xl text-[#20C997]'>
                            <FaCloudUploadAlt></FaCloudUploadAlt>
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold'>Deployment and Hosting</h4>
                            <p>Deploy and host your MERN stack applications on cloud platforms such as Heroku or AWS, ensuring scalability, security, and reliability.</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='rounded shadow-md w-32 h-20 p-5 bg-white text-3xl text-[#20C997]'>
                            <MdBuild></MdBuild>
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold'>Maintenance and Support</h4>
                            <p>Provide ongoing maintenance, updates, and support for your MERN stack applications, ensuring their smooth operation and addressing any issues that may arise.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;