import React from 'react';

const TabItem = ({ project }) => {

    const { _id, category, name, details, image, technology, client_link, server_link, live_link } = project;
    console.log(image)

    return (
        <div>
            <div className='relative mt-12'>
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
                        <button className="btn btn-ghost normal-case text-base bg-none border-2 border-gray-600 mt-1">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabItem;