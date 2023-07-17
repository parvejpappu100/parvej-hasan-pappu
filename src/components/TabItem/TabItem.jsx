import React, { useState } from 'react';
import Modal from 'react-modal';
import "./TabItem.css"
import ProjectModal from './ProjectModal';


const TabItem = ({ project }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const bg = {
        overlay: {
            background: "#46423E"
        }
    };

    const { category, name, image } = project;

    return (
        <div className='text-black'>
            <div onClick={openModal} className='relative mt-12 cursor-pointer'>
                <div className="relative max-w-full h-[450px] overflow-hidden ">
                    <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                        <img
                            src={image}
                            alt={name}
                            className="w-[450px] object-cover object-top border"
                        />
                    </div>
                </div>
                <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-gray-200 absolute inset-0 flex justify-center items-center text-center transition-opacity duration-1000'>
                    <div>
                        <h3 className='text-2xl mb-3'>{name}</h3>
                        <p className='text-xl'>{category}</p>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="max-w-7xl bg-white mx-auto my-16 shadow-md py-4"
                style={bg}
            >
                <ProjectModal project={project} closeModal={closeModal}></ProjectModal>
            </Modal>
        </div>
    );
};

export default TabItem;