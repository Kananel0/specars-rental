import React, { useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay } from "swiper/modules";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import about from '../assets/about.jpg';

import teams1 from '../assets/test-1.jpg';
import teams2 from '../assets/test-2.jpg';
import teams3 from '../assets/test-4.jpg';
import teams4 from '../assets/test-5.jpg';

import carctg1 from '../assets/car-ctg-01.png'
import carctg2 from '../assets/car-ctg-02.png'
import carctg3 from '../assets/car-ctg-03.png'
import carctg4 from '../assets/car-ctg-04.png'


function About() {

    const [pickUpDate, setPickUpDate] = useState(null);
    const datePickerRef = useRef(null);

    const openCalendar = () => {
        if (datePickerRef.current) {
            datePickerRef.current.setFocus();
        }
    };

    const [returnDate, setReturnDate] = useState(null);
    const returnPickerRef = useRef(null);

    const openreturnCalendar = () => {
        if (returnPickerRef.current) {
            returnPickerRef.current.setFocus();
        }
    };
    return (
        <>
            {/* Page Section */}
            <div className="banner-section flex justify-center items-center h-[350px] lg:h-[550px]">
                <div className="banner-section-content text-center z-10">
                    <h6 className='uppercase text-sm lg:text-xl text-white font-bricolage'>- Ridelux</h6>
                    <h1 className='text-4xl lg:text-5xl xl:text-8xl font-semibold font-bricolage text-red-600'><span className="text-white font-bricolage">About </span> Us</h1>
                </div>
            </div>

            {/* About */}
            <div className="about text-white lg:px-[10%] px-[8%] py-[50px] lg:py-[90px]">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative w-auto sm:h-[450px] lg:h-[600px]">
                        <img
                            src={about}
                            alt=""
                            className="rounded-3xl w-full h-full object-contain md:object-cover"
                        />
                        <div className="curv bg-[#111111]">
                            <div className="about-item-curv section-item-curv">
                                <i className="ri-play-line text-xl"></i>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="uppercase text-xs md:text-sm tracking-widest text-[#e8021f] mb-2">- Rentax</p>
                        <h2 className="text-3xl md:text-5xl font-bold mb-3 font-bricolage ">
                            We Are More Than <br />
                            <span className="text-[#e8021f] font-bricolage">A Car Rental Company</span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed my-6 text-sm lg:text-base">
                            Car repair quisque sodales dui ut varius vestibulum drana tortor turpis portition tellus eu euismod
                            nisl massa nutodio in the miss volume place urna lacinia eros nuntna urna mauris vehicula rutrum
                            in the miss on volume interdum.
                        </p>

                        <div className="space-y-4 mb-10">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-[#e8021f]">
                                    <i className="ri-check-double-line"></i>
                                </div>
                                <span className="text-white">Sports and Luxury Cars</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-[#e8021f]">
                                    <i className="ri-check-double-line"></i>
                                </div>
                                <span className="text-white">Economy Cars</span>
                            </div>
                        </div>

                        <button className="bg-[#e8021f] text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-black transition-colors duration-300">
                            Read More <i className="ri-arrow-right-line"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Banner */}
            <div className="banner lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">
                <div className="banner-content text-center">
                    <p className="uppercase text-sm tracking-[5px] text-white mb-2">- Rent Now</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white font-bricolage ">
                        Book Auto Rental
                    </h2>
                    {/* Book option */}
                    <div className="bg-[#1f1f1f] text-white w-[90%] max-w-[1200px]
                                               mx-auto mt-[70px] rounded-3xl px-6 py-4 
                                               grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4
                                               shadow-lg z-50"
                    >
                        {/* Cars type */}
                        <div className="relative w-full lg:w-auto px-4 py-3 group border-r border-gray-600">
                            <button className="flex items-center gap-2 w-full justify-between text-gray-400">
                                Choose Car Type <i className="ri-arrow-down-s-line text-[#e8021f]"></i>
                            </button>
                            <div className="absolute top-[110%] left-0 w-48 bg-[#1f1f1f] border border-[#e8021f] rounded-sm shadow-md 
                                               opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible 
                                               transition-all duration-300 ease-out z-50">
                                <ul className="divide-y divide-gray-700">
                                    <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">Choose Car Type</li>
                                    <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">Sport Cars</li>
                                    <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">Convertible</li>
                                    <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">Luxury Cars</li>
                                    <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">Small Cars</li>
                                </ul>
                            </div>
                        </div>
                        {/* Pick Location */}
                        <div className="relative w-full lg:w-auto px-4 py-3 group border-r border-gray-600">
                            <button className="flex items-center gap-2 w-full justify-between text-gray-400">
                                Pick Up Location <i className="ri-arrow-down-s-line text-[#e8021f]"></i>
                            </button>

                            <div className="absolute top-[110%] left-0 w-48 bg-[#1f1f1f] border border-[#e8021f] rounded-sm shadow-md 
                                               opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible 
                                               transition-all duration-300 ease-out z-50">
                                <ul className="divide-y divide-gray-700">
                                    <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">Abu Dhabi</li>
                                    <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">Alain</li>
                                    <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">Dubai</li>
                                    <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">Sharjah</li>
                                </ul>
                            </div>
                        </div>
                        {/* Pick Date */}
                        <div
                            className="relative w-full lg:w-auto px-4 py-3 flex items-center  border-r border-gray-600 cursor-pointer"
                            onClick={openCalendar}
                        >
                            <DatePicker
                                selected={pickUpDate}
                                onChange={(date) => setPickUpDate(date)}
                                dateFormat="dd MMM yyyy"
                                placeholderText="Pick Up Date"
                                ref={datePickerRef}
                                className={`bg-[#1f1f1f] text-white outline-none cursor-pointer w-full ${!pickUpDate ? 'text-gray-400' : ''}`}
                                calendarclassName="dark-datepicker"
                                popperPlacement="bottom-start"
                            />

                            <i className="ri-calendar-line text-[#e8021f] pointer-events-none"></i>
                        </div>
                        {/* Drop Location */}
                        <div className="relative w-full lg:w-auto px-4 py-3 group border-r border-gray-600">
                            <button className="flex items-center gap-2 w-full justify-between text-gray-400">
                                Drop Off Location <i className="ri-arrow-down-s-line text-[#e8021f]"></i>
                            </button>
                            <div className="absolute top-[110%] left-0 w-48 bg-[#1f1f1f] border border-[#e8021f] rounded-sm shadow-md 
                                               opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible 
                                               transition-all duration-300 ease-out z-50">
                                <ul className="divide-y divide-gray-700">
                                    <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">Drop Off Location</li>
                                    <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">Abu Dhabi</li>
                                    <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">Alain</li>
                                    <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">Dubai</li>
                                    <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">Sharjah</li>
                                </ul>
                            </div>
                        </div>
                        {/* Return date */}
                        <div
                            className="relative w-full lg:w-auto px-4 py-3 flex items-center cursor-pointer lg:border-0 border-r border-gray-600"
                            onClick={openreturnCalendar}
                        >
                            <DatePicker
                                selected={returnDate}
                                onChange={(date) => setReturnDate(date)}
                                dateFormat="dd MMM yyyy"
                                placeholderText="Return Date"
                                ref={returnPickerRef}
                                className={`bg-[#1f1f1f] text-white outline-none cursor-pointer w-full ${!returnDate ? 'text-gray-400' : ''}`}
                                calendarclassName="dark-datepicker"
                                popperPlacement="bottom-start"
                            />

                            <i className="ri-calendar-line text-[#e8021f] pointer-events-none"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* car categories */}
            <div className='car-categories lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]'>
                <div className="car-categories-content text-center mb-10 lg:mb-14">
                    <p className="uppercase text-sm tracking-[5px] mb-2 text-[#e8021f]">- Car Categories</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white font-bricolage ">
                        Choose the Right Car for Your Trip
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                    <div className='bg-[#1e1e23] h-auto md:h-[400px] car-ctg-item relative flex justify-between items-start flex-col overflow-hidden w-full'>
                        <div className="car-ctg-info p-4">
                            <h4 className='text-white text-3xl xxl:text-4xl font-semibold font-bricolage pb-1'>Luxury Cars</h4>
                            <span className='text-gray-400 text-lg xxl:text-xl font-bricolage'>40+ Cars Ready</span>
                        </div>

                        <div className="car-ctg w-full h-full">
                            <img src={carctg1} alt="car-ctg-image" className='w-[100%] h-full object-cover translate-x-10 translate-y-10' />
                        </div>
                    </div>

                    <div className='bg-[#1e1e23] h-auto md:h-[400px] car-ctg-item relative flex justify-between items-start flex-col overflow-hidden w-full'>
                        <div className="car-ctg-info p-4">
                            <h4 className='text-white text-3xl xxl:text-4xl font-semibold font-bricolage pb-1'>SUVs</h4>
                            <span className='text-gray-400 text-lg xxl:text-xl font-bricolage'>70+ Cars Ready</span>
                        </div>

                        <div className="car-ctg w-full h-full">
                            <img src={carctg2} alt="car-ctg-image" className='w-[100%] h-full object-cover translate-x-10 translate-y-10' />
                        </div>
                    </div>

                    <div className='bg-[#1e1e23] h-auto md:h-[400px] car-ctg-item relative flex justify-between items-start flex-col overflow-hidden w-full'>
                        <div className="car-ctg-info p-4">
                            <h4 className='text-white text-3xl xxl:text-4xl font-semibold font-bricolage pb-1'>Economy Cars</h4>
                            <span className='text-gray-400 text-lg xxl:text-xl font-bricolage'>100+ Cars Ready</span>
                        </div>

                        <div className="car-ctg w-full h-full">
                            <img src={carctg3} alt="car-ctg-image" className='w-[100%] h-full object-cover translate-x-10 translate-y-10' />
                        </div>
                    </div>

                    <div className='bg-[#1e1e23] h-auto md:h-[400px] car-ctg-item relative flex justify-between items-start flex-col overflow-hidden w-full'>
                        <div className="car-ctg-info p-4">
                            <h4 className='text-white text-3xl xxl:text-4xl font-semibold font-bricolage pb-1'>Vans & MPVs</h4>
                            <span className='text-gray-400 text-lg xxl:text-xl font-bricolage'>34+ Cars Ready</span>
                        </div>

                        <div className="car-ctg w-full h-full">
                            <img src={carctg4} alt="car-ctg-image" className='w-[100%] h-full object-cover translate-x-10 translate-y-10' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Service */}
            <div className="our-service lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">
                <div className="our-service-content mb-20 text-center text-white">
                    <p className="uppercase text-sm tracking-[5px] text-[#e8021f] mb-2">- What We Do</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-3 font-bricolage ">
                        Other Services
                    </h2>
                </div>

                <div className="our-service-wrapper">
                    <div className='grid w-full gap-12 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3'>
                        <div className="service-item relative text-white rounded-[30px] bg-[#222222] w-full">
                            <h5 className='font-semibold text-3xl mb-3 font-bricolage'>Daily Car Rental</h5>
                            <p className='text-[#999] text-lg'>
                                Lorem ipsum dolor sit amet the consectetur adipiscing elit entesque hendrerit elit nisan lacinia feugiat nunc eu aucton.
                            </p>
                            <div className="curv">
                                <div className="service-item-curv section-item-curv">
                                    1.
                                </div>
                            </div>
                        </div>

                        <div className="service-item relative text-white rounded-[30px] bg-[#222222] w-full">
                            <h5 className='font-semibold text-3xl mb-3 font-bricolage'>Monthly Car Rental</h5>
                            <p className='text-[#999] text-lg'>
                                Lorem ipsum dolor sit amet the consectetur adipiscing elit entesque hendrerit elit nisan lacinia feugiat nunc eu aucton.
                            </p>
                            <div className="curv">
                                <div className="service-item-curv section-item-curv">
                                    2.
                                </div>
                            </div>
                        </div>

                        <div className="service-item relative text-white rounded-[30px] bg-[#222222] w-full">
                            <h5 className='font-semibold text-3xl mb-3 font-bricolage'>Annual Car Rental</h5>
                            <p className='text-[#999] text-lg'>
                                Lorem ipsum dolor sit amet the consectetur adipiscing elit entesque hendrerit elit nisan lacinia feugiat nunc eu aucton.
                            </p>
                            <div className="curv">
                                <div className="service-item-curv section-item-curv">
                                    3.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Teams */}
            <div className="lg:px-[12%] px-[8%] py-[150px] section-effect">
                <div className="text-center">
                    <p className='uppercase text-sm tracking-[5px] text-red-600 mb-2'>- Certified Team</p>
                    <h2 className='text-4xl md:text-5xl font-bold mb-3 text-white font-bricolage'>
                        Our Experts<span className='text-red-600'> Team</span>
                    </h2>
                </div>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    spaceBetween={40}
                    autoplay={{
                        delay: 3000,
                    }}
                    pagination={true}
                    breakpoints={{
                        1400: { slidesPerView: 3 },
                        1199: { slidesPerView: 2 },
                        767: { slidesPerView: 1.5 },
                        0: { slidesPerView: 1 },
                    }}
                    className='mt-[70px]'
                >
                    {/* slide 1 */}
                    <SwiperSlide>
                        <div className="our-team relative rounded-2xl overflow-hidden group shadow-md cursor-pointer">
                            <img src={teams1} alt="" className="w-full h-72 object-cover z-[5]" />
                            <div className="absolute z-[5]">
                                <div className="curv">
                                    <div className="section-item-curv our-team-curv">
                                        <i class="fa-solid fa-info"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="team-info">
                                <h4 className='text-xl lg:text-2xl mb-1 font-semibold font-bricolage'>Margaret Nancy</h4>
                                <h6 className='text-[#f2f2f2] xl:text-lg text-sm'>Sales Department</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* slide 2 */}
                    <SwiperSlide>
                        <div className="our-team relative rounded-2xl overflow-hidden group shadow-md cursor-pointer">
                            <img src={teams2} alt="" className="w-full h-72 object-cover z-[5]" />
                            <div className="absolute z-[5]">
                                <div className="curv">
                                    <div className="section-item-curv our-team-curv">
                                        <i class="fa-solid fa-info"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="team-info">
                                <h4 className='text-xl lg:text-2xl mb-1 font-semibold font-bricolage'>Dan Martin</h4>
                                <h6 className='text-[#f2f2f2] xl:text-lg text-sm'>Sales Department</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* slide 3 */}
                    <SwiperSlide>
                        <div className="our-team relative rounded-2xl overflow-hidden group shadow-md cursor-pointer">
                            <img src={teams3} alt="" className="w-full h-72 object-cover z-[5]" />
                            <div className="absolute z-[5]">
                                <div className="curv">
                                    <div className="section-item-curv our-team-curv">
                                        <i class="fa-solid fa-info"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="team-info">
                                <h4 className='text-xl lg:text-2xl mb-1 font-semibold font-bricolage'>Mia Jane</h4>
                                <h6 className='text-[#f2f2f2] xl:text-lg text-sm'>Sales Department</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* slide 4 */}
                    <SwiperSlide>
                        <div className="our-team relative rounded-2xl overflow-hidden group shadow-md cursor-pointer">
                            <img src={teams4} alt="" className="w-full h-72 object-cover z-[5]" />
                            <div className="absolute z-[5]">
                                <div className="curv">
                                    <div className="section-item-curv our-team-curv">
                                        <i class="fa-solid fa-info"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="team-info">
                                <h4 className='text-xl lg:text-2xl mb-1 font-semibold font-bricolage'>Micheal Brown</h4>
                                <h6 className='text-[#f2f2f2] xl:text-lg text-sm'>Sales Department</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default About