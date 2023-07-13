import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


const Testimonial = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("/testimonial.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className=' my-24 max-w-7xl mx-auto'>
            <SectionTitle
                title={"Testimonial"}
                subTitle={"Client Speak"}
            ></SectionTitle>
            <div className='mt-20' >
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <div className='bg-white'>
                        {
                            reviews.map(review => <SwiperSlide
                                key={review._id}
                            >
                                <div className='bg-[#F8F9FA] p-4 lg:p-8 rounded-md h-[400px]'>
                                    <div className='flex items-center gap-5'>
                                        <img className='h-[64px] w-[64px] rounded-full' src={review.img} alt="" />
                                        <div>
                                            <h3 className='text-xl font-semibold'>{review.name}</h3>
                                            <h6 className='font-semibold'>{review.from}</h6>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='my-5 font-semibold'>{review.details}</p>
                                    </div>
                                    <div>
                                        <Rating style={{ maxWidth: 100 }} value={review.rating} readOnly />
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }

                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;