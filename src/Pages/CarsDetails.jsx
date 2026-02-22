import { useParams } from 'react-router-dom';
import { useRef, useState } from 'react';
import carData from '../Cars.json';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CarDetail = () => {
    const { id } = useParams();
    const car = carData.find((c) => c.id === id);
    const [openIndex, setOpenIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);


    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const rentalConditions = [
        {
            title: 'Contract and Annexes',
            description:
                'In addition to the car rental contract to be signed at the time of delivery, a credit card is required from our individual customers. We request our commercial customers to submit their company documents (tax plate, signature slip, ID photocopy).',
        },
        {
            title: 'Driving License and Age',
            description:
                "The tenant must be 25 years of age and have a 5-year local or valid international driver's license for group A, B, C, D vehicles at the time of the rental agreement.",
        },
        {
            title: 'Prices',
            description:
                'Prices include maintenance and insurance guarantee against third parties (within legal policy limits). 18% VAT (value added tax) is not included. Fuel belongs to the renter. Chauffeur driven service and translator guide are available upon request.',
        },
        {
            title: 'Payments',
            description:
                'The total rental fee is collected at the time of rental. The shortest rental period is 72 hours. A delay beyond 3 hours is counted as a full day. Deposit required from valid credit card.',
        },
        {
            title: 'Delivery',
            description:
                'Delivery is free where our company is located. For other cities, delivery fees apply at €0.2/km. Prior notice needed for hotel, port, or workplace delivery.',
        },
        {
            title: 'Traffic Fines',
            description:
                'Traffic fines are the customer’s responsibility. Detainment time is counted in the rental period. Terms may change without notice.',
        },
    ];

    if (!car) return <div className="text-white text-center mt-20">Car not found</div>;

    const [pickUpDate, setPickUpDate] = useState(null);
    const [dropOffDate, setDropOffDate] = useState(null);
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
        <div className="bg-[#121212] text-white font-sans">
            <div
                className="relative h-[70vh] bg-cover bg-center flex items-end px-[12%] py-20"
                style={{ backgroundImage: `url(${car.image})` }}
            >

                <div className="absolute inset-0 cars-det-section"></div>
                <div className="relative z-10 ">
                    <h6 className='uppercase text-xl tracking-widest text-red-500 font-bricolage'>Luxury Cars</h6>
                    <h1 className="text-4xl lg:text-6xl font-bold font-bricolage">{car.name}</h1>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 px-[12%] py-14">
                {/* Left Section */}
                <div className="flex-1 space-y-12">
                    {/* General Info */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-bricolage">General Information</h2>
                        <p className="text-gray-400 text-sm mb-4">
                            Enjoy a premium car rental experience with top-notch services and flexible conditions.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-center hover:text-white transition"><i className="ri-check-line text-red-600 mr-2" />24/7 Roadside Assistance</li>
                            <li className="flex items-center hover:text-white transition"><i className="ri-check-line text-red-600 mr-2" />Free Cancellation & Return</li>
                            <li className="flex items-center hover:text-white transition"><i className="ri-check-line text-red-600 mr-2" />Pay at Arrival</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-bricolage">Rental Conditions</h2>
                        <div className="space-y-4">
                            {rentalConditions.map((item, index) => (
                                <div key={index} className="bg-[#1a1a1a] rounded-xl overflow-hidden">
                                    <div
                                        onClick={() => toggleAccordion(index)}
                                        className="cursor-pointer px-6 py-4 flex justify-between items-center hover:bg-[#2a2a2a] transition duration-300"
                                    >
                                        <span className="font-medium text-sm">{index + 1}. {item.title}</span>
                                        <i className={`ri-arrow-${openIndex === index ? 'up' : 'down'}-s-line text-red-600`} />
                                    </div>
                                    <div
                                        className={`px-6 text-sm text-gray-400 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[300px] pt-5 pb-4' : 'max-h-0 pt-0'
                                            }`}
                                    >
                                        {openIndex === index && <div>{item.description}</div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Info Box */}
                <div className="w-full lg:w-[320px] space-y-6 bg-[#1a1a1a] rounded-2xl p-6 shadow-md h-full">
                    <div className="text-center">
                        <p className="text-5xl font-bold text-white font-bricolage">
                            ${car.price} <span className="text-sm font-medium font-bricolage text-white">/ Rent Per Day</span>
                        </p>
                    </div>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li className="flex justify-between"><span><i className="ri-door-line text-red-600 mr-2" />Doors</span><span>{car.door}</span></li>
                        <li className="flex justify-between"><span><i className="ri-user-line text-red-600 mr-2" />Passengers</span><span>{car.passengers}</span></li>
                        <li className="flex justify-between"><span><i className="ri-settings-2-line text-red-600 mr-2" />Transmission</span><span>{car.transmission}</span></li>
                        <li className="flex justify-between"><span><i className="ri-suitcase-line text-red-600 mr-2" />Luggage</span><span>{car.Bages}</span></li>
                        <li className="flex justify-between"><span><i className="ri-snowflake-line text-red-600 mr-2" />Air Condition</span><span>Yes</span></li>
                        <li className="flex justify-between"><span><i className="ri-user-star-line text-red-600 mr-2" />Age</span><span>25</span></li>
                    </ul>
                    <div className="flex gap-3">
                        <button onClick={() => setShowModal(true)} className="flex-1 bg-red-600 text-white text-[20px] rounded-xl py-2 hover:bg-red-600/90 transition font-bricolage">Rent Now</button>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
                    <div className="bg-[#0d0d0d]/90 border border-red-600/30 rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden">

                        <div className="bg-red-600 px-6 py-4 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white font-bricolage"> Book Your Dream Car</h2>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-whiet text-2xl hover:scale-110 transition"
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        <form className="p-6 space-y-6 my-2 popup-form"
                            onSubmit={(e) => {
                                e.preventDefault();
                                setShowModal(false);
                                setShowSuccessModal(true);
                            }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                <div className="relative">
                                    <input
                                        type="text"
                                        required
                                        placeholder="Full Name"
                                        className="w-full h-[50px] ps-3 bg-[#121212] text-white rounded-md border"
                                    />
                                </div>

                                <div className="relative">
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter Your Email.."
                                        className="w-full h-[50px] ps-3 bg-[#121212] text-white rounded-md border"
                                    />
                                </div>

                                <div className="relative">
                                    <input
                                        type="text"
                                        required
                                        placeholder="Enter Your Number.."
                                        className="w-full h-[50px] ps-3 bg-[#121212] text-white rounded-md border"
                                    />
                                </div>

                                <div className="relative">
                                    <select
                                        required
                                        className="w-full h-[50px] appearance-none ps-3 bg-[#121212] text-white rounded-md border"
                                    >
                                        <option hidden>Choose Car Type</option>
                                        <option>Lamborghini</option>
                                        <option>Rolls Royce</option>
                                        <option>Bentley</option>
                                    </select>
                                </div>

                                <div className="relative">
                                    <select
                                        required
                                        className="w-full h-[50px] ps-3 bg-[#121212] text-white rounded-md appearance-none border"
                                    >
                                        <option hidden>Pick-Up Location</option>
                                        <option>Dubai</option>
                                        <option>Abu Dhabi</option>
                                    </select>
                                </div>

                                <div
                                    className="relative w-full flex items-center  border-r border-gray-600 cursor-pointer"
                                    onClick={openCalendar}
                                >
                                    <DatePicker
                                        selected={pickUpDate}
                                        onChange={(date) => setPickUpDate(date)}
                                        dateFormat="dd MMM yyyy"
                                        placeholderText="Pick Up Date"
                                        ref={datePickerRef}
                                        className={`w-full h-[50px] ps-3 bg-[#121212] text-white rounded-md appearance-none border ${!pickUpDate ? 'text-gray-400' : ''}`}
                                        calendarclassName="dark-datepicker"
                                        popperPlacement="bottom-start"
                                    />
                                    <i className="ri-calendar-line absolute right-3 text-red-500 pointer-events-none"></i>
                                </div>

                                <div className="relative">
                                    <select
                                        required
                                        className="w-full h-[50px] ps-3 bg-[#121212] text-white rounded-md appearance-none border"
                                    >
                                        <option hidden>Drop-Off Location</option>
                                        <option>Sharjah</option>
                                        <option>Alain</option>
                                    </select>
                                </div>

                                <div className="relative w-full flex items-center cursor-pointer">
                                    <DatePicker
                                        selected={dropOffDate}
                                        onChange={(date) => setDropOffDate(date)}
                                        dateFormat="dd MMM yyyy"
                                        placeholderText="Drop Off Date"
                                        className={`w-full h-[50px] ps-3 bg-[#121212] text-white rounded-md appearance-none border ${!dropOffDate ? 'text-gray-400' : ''}`}
                                        calendarClassName="dark-datepicker"
                                        popperPlacement="bottom-start"
                                    />
                                    <i className="ri-calendar-line absolute right-3 text-red-500 pointer-events-none"></i>
                                </div>
                            </div>

                            <div className="relative">
                                <textarea
                                    rows="3"
                                    placeholder="Send Message"
                                    className="w-full p-3 bg-[#121212] text-white rounded-md appearance-none border"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 text-lg rounded-full bg-red-600 text-white hover:bg-black font-bricolage transition"
                            >
                                Rent Now
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {showSuccessModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
                    <div className="bg-[#0d0d0d]/90 border border-green-500/30 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
                        <div className="bg-green-500 px-6 py-4 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-black font-bricolage">Success!</h2>
                            <button
                                onClick={() => setShowSuccessModal(false)}
                                className="text-black text-2xl hover:scale-110 transition"
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div className="p-6 text-center text-white space-y-4">
                            <p className="text-lg font-semibold">Your car booking was successful.</p>
                            <p className="text-sm text-gray-300">We’ll contact you shortly with confirmation details.</p>
                            <button
                                onClick={() => setShowSuccessModal(false)}
                                className="mt-4 px-6 py-2 rounded-full bg-green-500 hover:bg-green-600 text-black font-bold"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CarDetail;
