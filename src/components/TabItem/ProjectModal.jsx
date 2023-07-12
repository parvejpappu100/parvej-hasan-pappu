import React from 'react';
import { FaXmark } from "react-icons/fa6";


const ProjectModal = ({ project, closeModal }) => {

    const { _id, category, name, details, image, technology, client_link, server_link, live_link } = project;

    return (
        <div className='relative'>
            <div className='absolute top-0 right-4'>
                <button
                    className=" text-2xl rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
                    onClick={closeModal}
                >
                    <FaXmark></FaXmark>
                </button>
            </div>
            <h3 className='text-center text-2xl font-semibold'>{name}</h3>
            <div className='flex flex-col-reverse lg:flex-row gap-5 my-12 px-4 lg:px-12'>
                <div className='w-full flex justify-center items-center'>
                    <div className="relative max-w-full h-[450px] lg:h-[600px] overflow-hidden ">
                        <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                            <img
                                src={image}
                                alt={name}
                                className="w-[450px] object-cover object-top border"
                            />
                        </div>
                    </div>
                </div>
                <div className='w-full text-xl'>
                    <h5><strong>Project Info :</strong> {details}</h5>
                    <h4 className=' my-5 font-semibold text-2xl'>Project Details:</h4>
                    <h3><strong>Category :</strong> {category}</h3>
                    <p><strong>Technology :</strong> {technology}</p>
                    <p><strong>Client Link :</strong> <a className='underline' href={client_link}>{client_link}</a></p>
                    <p><strong>Server Link :</strong> <a className='underline' href={server_link ? server_link : "#"}>{server_link ? server_link : "No Server"}</a></p>
                    <p><strong>Live Link :</strong> <a className='text-green-600 font-semibold' href={live_link}>{live_link}</a></p>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;