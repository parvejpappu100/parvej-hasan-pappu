// import React, { useEffect, useState } from 'react';
// import SectionTitle from '../SectionTitle/SectionTitle';
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// // import { Pagination } from 'swiper';

// const Testimonial = () => {

//     const [reviews, setReviews] = useState([]);

//     useEffect(() => {
//         fetch("/testimonial.json")
//             .then(res => res.json())
//             .then(data => setReviews(data))
//     }, [])

//     return (
//         <div className='py-28   max-w-7xl mx-auto'>
//             <SectionTitle
//                 title={"Testimonial"}
//                 subTitle={"Client Speak"}
//             ></SectionTitle>
//             <div>
//                 <Swiper
//                     slidesPerView={2}
//                     spaceBetween={20}
//                     pagination={{
//                         clickable: true,
//                     }}
//                     // modules={[Pagination]}
//                     className="mySwiper"
//                 >
//                     <SwiperSlide>
//                         {
//                             reviews.map(review => <div
//                             key={review._id}
//                             >
//                                 <div>
//                                     <img src={review.img} alt="" />
//                                 </div>
//                             </div>)
//                         }
//                     </SwiperSlide>
//                 </Swiper>
//             </div>
//         </div>
//     );
// };

// export default Testimonial;