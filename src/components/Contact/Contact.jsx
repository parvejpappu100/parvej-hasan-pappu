import React, { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { FaEnvelope, FaFacebookF, FaGithub, FaInstagramSquare, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import Footer from '../Footer/Footer';
import Swal from 'sweetalert2';

const Contact = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [sending, setSending] = useState(false);

    const onSubmit = async (data) => {
        setSending(true);
        try {
            await fetch('https://parvej-hasan-pappu-server.vercel.app/send-email', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            });
            reset();
            setSending(false);
            Swal.fire('Thank you ! I will reply your message within an hour.')
        } catch (error) {
            
        }
    }

    return (
        <div>
            <div className='bg-[#F8F9FA] text-black my-20'>
                <div className='py-28 max-w-7xl mx-auto'>
                    <SectionTitle
                        title={"Contact"}
                        subTitle={"Get in Touch"}
                    ></SectionTitle>
                    <div className='flex flex-col md:flex-row gap-10 mt-24 px-4'>
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
                            <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
                                <div className='flex flex-col md:flex-row gap-5'>
                                    <div className='w-full'>
                                        <input {...register("name", { required: true })} className='bg-white w-full py-4 px-3 rounded-lg border' placeholder='Name' type="text" />
                                        {errors.name && <span className='text-red-600'>Name is required</span>}
                                    </div>
                                    <div className='w-full'>
                                        <input {...register("email", { required: true })} className='bg-white w-full py-4 px-3 rounded-lg border' placeholder='Email' type="email" name="email" id="" />
                                        {errors.email && <span className='text-red-600'>Email is required</span>}
                                    </div>
                                </div>
                                <textarea {...register("message", { required: true })} className='bg-white w-full mt-5 p-5 rounded-lg border text-xl' name="message" placeholder='Tell me more about your needs...' id="" cols="30" rows="5"></textarea>
                                {errors.message && <span className='text-red-600'>Please write something</span>}
                                <div className='flex justify-center'>
                                    <input disabled={sending} className='bg-[#20C997] text-white font-medium px-10 mt-5 hover:bg-[#1BAA80] duration-500 hover:shadow py-4 rounded-full text-xl' type="submit" value={sending ? "Sending..." : "Send Message"} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white text-black'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Contact;