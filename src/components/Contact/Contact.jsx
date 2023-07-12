import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { FaEnvelope, FaFacebookF, FaGithub, FaInstagramSquare, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='bg-[#F8F9FA] mt-24'>
            <div className='py-28 max-w-7xl mx-auto'>
                <SectionTitle
                    title={"Contact"}
                    subTitle={"Get in Touch"}
                ></SectionTitle>
                <div className='flex flex-col md:flex-row gap-10 mt-24 px-2 lg:px-0'>
                    <div className='text-xl '>
                        <h3 className='text-2xl font-semibold uppercase'>Address</h3>
                        <p className='my-4'>Dhaka , Bangladesh</p>
                        <div className='flex items-center gap-4 my-4'>
                            <div>
                                <FaEnvelope className='text-green-500 mt-2'></FaEnvelope>
                            </div>
                            <p>parvejhasanpappu100@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-4 '>
                            <div className='text-green-500'>
                                <FaPhoneAlt></FaPhoneAlt>
                            </div>
                            <p>01974190770 (What's Up , Telegram) <br /> 01608190770</p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold my-4'>Follow Me</h3>
                            <div className='flex gap-4'>
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
                        </div>
                    </div>
                    <div className='w-full'>
                        <h3 className='text-2xl font-semibold uppercase'>Send Me a Message</h3>
                        <div className='mt-4'>
                            <div className='flex flex-col md:flex-row gap-5'>
                                <input className='w-full py-4 px-3 rounded-lg border' placeholder='Name' type="text" />
                                <input className='w-full py-4 px-3 rounded-lg border' placeholder='Email' type="email" name="email" id="" />
                            </div>
                            <textarea className='w-full mt-5 p-5 rounded-lg border text-xl' name="message" placeholder='Tell me more about your needs...' id="" cols="30" rows="5"></textarea>
                            <div className='flex justify-center'>
                                <input className='bg-[#20C997] text-white font-medium px-10 mt-5 hover:bg-[#1BAA80] duration-500 hover:shadow py-4 rounded-full text-xl' type="submit" value="Send Message" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;