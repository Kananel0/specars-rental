import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import DatePicker from 'react-datepicker';

// Styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'react-datepicker/dist/react-datepicker.css';

// Assets
import logo from '../assets/logo.png'; 
const about = "https://i.postimg.cc/Bv8zY3Wk/about.jpg";
const carctg1 = "https://i.postimg.cc/qvvSKn1q/car-ctg-01.jpg";
const carctg2 = "https://i.postimg.cc/Bn7yB6z2/car-ctg-02.jpg";
const carctg3 = "https://i.postimg.cc/nhhgm73M/car-ctg-03.jpg";
const carctg4 = "https://i.postimg.cc/Zq9Q7mkr/car-ctg-04.jpg";
const teams1 = "https://i.postimg.cc/5N3DjpqK/test-1.jpg";
const teams2 = "https://i.postimg.cc/CLN9dJHC/test-2.jpg";
const teams3 = "https://i.postimg.cc/m2wKhVNy/test-4.jpg";
const teams4 = "https://i.postimg.cc/4NZrJjtz/test-5.jpg";

function About() {
    const [pickUpDate, setPickUpDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);
    const datePickerRef = useRef(null);
    const returnPickerRef = useRef(null);

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const openCalendar = () => datePickerRef.current?.setFocus();
    const openreturnCalendar = () => returnPickerRef.current?.setFocus();

    return (
        <div ref={containerRef} className="bg-[#050505] text-white font-bricolage selection:bg-cyan-500 selection:text-black antialiased overflow-x-hidden">
            
            {/* --- HERO SECTION --- */}
            <section className="relative min-h-screen flex flex-col justify-center px-[5%] lg:px-[8%] pt-28 pb-40 lg:pb-20">
                <div className="grid lg:grid-cols-12 w-full gap-12 items-center">
                    <div className="lg:col-span-7 z-20 text-center lg:text-left">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <span className="text-cyan-500 tracking-[0.3em] lg:tracking-[0.5em] uppercase text-xs lg:text-sm mb-6 block font-bold italic">Established in Mayfair</span>
                            <div className="mb-8 relative flex justify-center lg:justify-start">
                                <motion.img 
                                    src={logo} 
                                    alt="SPECAR" 
                                    className="w-[70%] md:w-[60%] lg:w-[80%] max-w-[500px] drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                                    initial={{ filter: 'brightness(1) blur(10px)' }}
                                    animate={{ filter: 'brightness(1.2) blur(0px)' }}
                                    transition={{ duration: 1.5 }}
                                />
                                <div className="absolute -inset-4 bg-cyan-500/10 blur-[80px] rounded-full -z-10" />
                            </div>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-8 uppercase italic">
                                LONDON'S <span className="text-cyan-500">MAYFAIR HQ</span>
                            </h2>
                        </motion.div>
                    </div>
                    
                    <motion.div 
                        className="lg:col-span-5 relative px-4 lg:px-0"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-20 animate-pulse" />
                        <img 
                            src={about} 
                            className="relative rounded-3xl h-[350px] md:h-[500px] lg:h-[550px] w-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl border border-white/10" 
                            alt="Specars Mayfair Office"
                        />
                    </motion.div>
                </div>
                
                {/* Floating Booking Bar - Mobile Responsive */}
                <motion.div 
                    className="mt-12 lg:absolute lg:bottom-10 lg:left-1/2 lg:-translate-x-1/2 w-full max-w-6xl z-30 bg-white/5 backdrop-blur-2xl border border-white/10 p-2 lg:p-4 rounded-[2.5rem] lg:rounded-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-0 shadow-2xl"
                >
                    <BookingField label="Spec" icon="ri-car-line" options={['Hypercar', 'Prestige', 'Electric']} isFirst />
                    <BookingField label="Location" icon="ri-map-pin-2-line" options={['Mayfair', 'Heathrow', 'Knightsbridge']} />
                    
                    <div className="flex flex-col px-6 py-3 lg:py-0 lg:border-r border-white/10 cursor-pointer hover:bg-white/5 transition-colors lg:rounded-none rounded-2xl" onClick={openCalendar}>
                        <label className="text-[10px] text-cyan-400 font-bold uppercase">Arrival</label>
                        <DatePicker selected={pickUpDate} onChange={d => setPickUpDate(d)} ref={datePickerRef} className="bg-transparent text-sm outline-none w-full cursor-pointer" placeholderText="Set Date" />
                    </div>

                    <div className="flex flex-col px-6 py-3 lg:py-0 lg:border-r border-white/10 cursor-pointer hover:bg-white/5 transition-colors lg:rounded-none rounded-2xl" onClick={openreturnCalendar}>
                        <label className="text-[10px] text-cyan-400 font-bold uppercase">Departure</label>
                        <DatePicker selected={returnDate} onChange={d => setReturnDate(d)} ref={returnPickerRef} className="bg-transparent text-sm outline-none w-full cursor-pointer" placeholderText="Set Date" />
                    </div>

                    <button className="h-14 lg:h-full bg-cyan-500 hover:bg-white text-black font-black rounded-[1.8rem] lg:rounded-full transition-all flex items-center justify-center gap-2 group text-xs tracking-widest mt-2 lg:mt-0 mx-2 lg:mx-0">
                        SEARCH <i className="ri-arrow-right-up-line group-hover:rotate-45 transition-transform" />
                    </button>
                </motion.div>
            </section>

            {/* --- BENTO GRID: HQ CAR CATEGORIES --- */}
            <section className="py-20 lg:py-32 px-[5%] lg:px-[8%]">
                <div className="text-center mb-12 lg:mb-20">
                    <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase">The Specars <span className="text-cyan-500">Vault</span></h2>
                    <p className="text-zinc-500 mt-3 tracking-widest uppercase text-[10px] lg:text-xs">Exclusively Curated in London</p>
                </div>
                
                {/* Grid logic fixed for mobile and image fitting */}
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 lg:gap-6 h-auto md:h-[700px] lg:h-[800px]">
                    <BentoCard title="Prestige" img={carctg1} count="25" className="md:col-span-2 md:row-span-2 min-h-[300px]" />
                    <BentoCard title="Track" img={carctg2} count="12" className="md:col-span-2 md:row-span-1 min-h-[200px]" />
                    <BentoCard title="Grand Tourer" img={carctg4} count="18" className="md:col-span-1 md:row-span-1 min-h-[200px]" />
                    <BentoCard title="Zero Emission" img={carctg3} count="15" className="md:col-span-1 md:row-span-1 min-h-[200px]" />
                </div>
            </section>

            {/* --- TEAM SLIDER --- */}
            <section className="py-20 lg:py-32 bg-black overflow-hidden">
                <div className="text-center mb-10 lg:mb-16 px-[8%]">
                    <h2 className="text-4xl lg:text-6xl font-bold uppercase">The <span className="text-cyan-500">Specialists</span></h2>
                </div>
                
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 200,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    autoplay={{ delay: 3000 }}
                    modules={[EffectCoverflow, Autoplay]}
                    className="w-full pt-10 pb-20"
                >
                    {[teams1, teams2, teams3, teams4].map((img, i) => (
                        <SwiperSlide key={i} className="w-[280px] sm:w-[350px] lg:w-[400px]">
                            <div className="relative group rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl">
                                <img 
                                    src={img} 
                                    loading="lazy"
                                    className="w-full h-[400px] lg:h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                                    alt={`Director ${i + 1}`} 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-8 left-8">
                                    <h4 className="text-xl lg:text-2xl font-bold uppercase tracking-tighter">Director {i + 1}</h4>
                                    <p className="text-cyan-400 text-[10px] lg:text-sm tracking-[0.2em] uppercase font-black">Mayfair Operations</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
    );
}

const BookingField = ({ label, icon, options, isFirst }) => (
    <div className={`flex flex-col px-6 py-3 lg:py-0 lg:border-r border-white/10 group relative cursor-pointer hover:bg-white/5 transition-colors ${isFirst ? 'lg:rounded-l-full' : ''} rounded-2xl lg:rounded-none`}>
        <label className="text-[10px] text-cyan-400 font-bold uppercase mb-1">{label}</label>
        <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-zinc-300"><i className={`${icon} mr-2`} />Select</span>
            <i className="ri-arrow-down-s-line group-hover:rotate-180 transition-transform" />
        </div>
        {/* Dropdown menu */}
        <div className="absolute top-[105%] left-0 w-full bg-[#111] border border-white/10 rounded-2xl opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all z-50 p-2 shadow-2xl">
            {options.map(opt => (
                <div key={opt} className="px-4 py-2 hover:bg-cyan-500 hover:text-black rounded-lg transition-colors text-xs font-bold uppercase">{opt}</div>
            ))}
        </div>
    </div>
);

const BentoCard = ({ title, count, img, className }) => (
    <motion.div 
        whileHover={{ scale: 0.99 }}
        className={`relative bg-zinc-900 border border-white/5 rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden group cursor-pointer ${className}`}
    >
        {/* Text Content - Always visible and readable */}
        <div className="absolute top-6 left-6 lg:top-10 lg:left-10 z-20">
            <h4 className="text-2xl lg:text-4xl font-bold group-hover:text-cyan-400 transition-colors uppercase tracking-tighter">{title}</h4>
            <p className="text-zinc-500 font-mono text-[10px]">{count}+ SECURE UNITS</p>
        </div>

        {/* Improved Image Logic: Uses object-cover to fill card, and group-hover for the 'reveal' effect */}
        <div className="absolute inset-0 w-full h-full">
            <img 
                src={img} 
                loading="lazy"
                alt={title}
                className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
            />
            {/* Overlay to ensure text stays readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        
        <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
);

export default About;