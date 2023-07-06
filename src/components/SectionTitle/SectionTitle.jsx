import React from 'react';

const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className='text-center relative'>
            <h4 className='text-3xl md:text-5xl lg:text-9xl uppercase font-bold text-[#e1e4e4]'>{title}</h4>
            <div className='absolute inset-0 top-16'>
                <h6 className='text-3xl font-bold '>{subTitle}</h6>
                <p className='border-b-4 w-[100px] mt-2 border-green-500 mx-auto'></p>
            </div>
        </div>
    );
};

export default SectionTitle;