import React from 'react'

function Contact() {
    return (
        <>
             <div className="banner-section flex justify-center items-center h-[350px] lg:h-[550px]">
                <div className="banner-section-content text-center z-10">
                    <h6 className="uppercase text-sm lg:text-xl text-white font-bricolage">
                        - Get In Touch
                    </h6>
                    <h1 className="text-4xl lg:text-5xl xl:text-8xl font-semibold font-bricolage text-red-600">
                        <span className="text-white font-bricolage">Contact </span> Us
                    </h1>
                </div>
            </div>

            <div className="contact-wrapper lg:px-[12%] px-[8%] pb-[150px]">
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 w-full gap-12">
                    <div className="contact-item w-full group overflow-hidden relative bg-[#222222] p-12 text-white rounded-xl">
                        <i className="fa-solid fa-envelope text-red-600 text-5xl group-hover:text-white transition-colors duration-300"></i>
                        <h4 className="font-bricolage text-2xl xl:text-4xl font-semibold mt-8 mb-2 group-hover:text-white">
                            Email us
                        </h4>
                        <p className="text-[#999] text-base xl:text-xl group-hover:text-white">info@drivora.com</p>
                        <i className="fa-solid fa-envelope contact-item-icon"></i>
                    </div>

                    <div className="contact-item w-full group overflow-hidden relative bg-[#222222] p-12 text-white rounded-xl">
                        <i className="fa-solid fa-location-dot text-red-600 text-5xl group-hover:text-white transition-colors duration-300"></i>
                        <h4 className="font-bricolage text-2xl xl:text-4xl font-semibold mt-8 mb-2 group-hover:text-white">
                            Our address
                        </h4>
                        <p className="text-[#999] text-base xl:text-xl group-hover:text-white">Vadodara, Water Tower, Office 123</p>
                        <i className="fa-solid fa-location-dot contact-item-icon"></i>
                    </div>

                    <div className="contact-item w-full group overflow-hidden relative bg-[#222222] p-12 text-white rounded-xl">
                        <i className="fa-regular fa-clock text-red-600 text-5xl group-hover:text-white transition-colors duration-300"></i>
                        <h4 className="font-bricolage text-2xl xl:text-4xl font-semibold mt-8 mb-2 group-hover:text-white">
                            Opening Hours
                        </h4>
                        <p className="text-[#999] text-base xl:text-xl group-hover:text-white">Mon-Sun: 8 AM - 7 PM</p>
                        <i className="fa-regular fa-clock contact-item-icon"></i>
                    </div>

                    <div className="contact-item w-full group overflow-hidden relative bg-[#222222] p-12 text-white rounded-xl">
                        <i className="fa-solid fa-phone text-red-600 text-5xl group-hover:text-white transition-colors duration-300"></i>
                        <h4 className="font-bricolage text-2xl xl:text-4xl font-semibold mt-8 mb-2 group-hover:text-white">
                            Call us
                        </h4>
                        <p className="text-[#999] text-base xl:text-xl group-hover:text-white">+91 0324-242-342</p>
                        <i className="fa-solid fa-phone contact-item-icon"></i>
                    </div>
                </div>
            </div>

            <div className="lg:px-[12%] px-[8%] pb-[150px]">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-white text-3xl font-semibold mb-8 text-center">Get In Touch</h2>
                        <form className="space-y-5 contact-inputs">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Your Name*" className="bg-[#222222] text-white placeholder-gray-400 rounded-md px-6 py-5 w-full outline-none" />
                                <input type="email" placeholder="Your Email*" className="bg-[#222222] text-white placeholder-gray-400 rounded-md px-6 py-5 w-full outline-none" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Your Number*" className="bg-[#222222] text-white placeholder-gray-400 rounded-md px-6 py-5 w-full outline-none" />
                                <input type="text" placeholder="Subject*" className="bg-[#222222] text-white placeholder-gray-400 rounded-md px-6 py-5 w-full outline-none" />
                            </div>
                            <textarea rows="5" placeholder="Message*" className="bg-[#222222] text-white placeholder-gray-400 rounded-md px-6 py-4 w-full outline-none"></textarea>
                            <button type="submit" className="bg-red-500 hover:bg-white hover:text-black text-white font-bricolage px-14 py-4 text-xl rounded-full font-normal transition duration-300">
                                Submit
                            </button>
                        </form>
                    </div>

                    <div className="w-full h-[400px] rounded-2xl overflow-hidden">
                        <iframe
                            className="w-full h-full"
                            title="Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.58331783483!2d73.09068536311617!3d22.322240635404626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1750826469265!5m2!1sen!2sin"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact
