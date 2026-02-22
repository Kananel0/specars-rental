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
import logo from '../assets/logo.png'; // Ensure your logo is saved here
import about from '../assets/about.jpg';
import teams1 from '../assets/test-1.jpg';
import teams2 from '../assets/test-2.jpg';
import teams3 from '../assets/test-4.jpg';
import teams4 from '../assets/test-5.jpg';
import carctg1 from '../assets/car-ctg-01.png';
import carctg2 from '../assets/car-ctg-02.png';
import carctg3 from '../assets/car-ctg-03.png';
import carctg4 from '../assets/car-ctg-04.png';

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
        <div ref={containerRef} className="bg-[#050505] text-white font-bricolage selection:bg-cyan-500 selection:text-black">
            
            {/* --- WOW HERO: SPECAR RENTAL BRANDING --- */}
            <section className="relative min-h-screen flex items-center px-[8%] pt-20">
                <div className="grid lg:grid-cols-12 w-full gap-8 items-center">
                    <div className="lg:col-span-7 z-20">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <span className="text-cyan-500 tracking-[0.5em] uppercase text-sm mb-6 block font-bold italic">Established in Mayfair</span>
                            
                            {/* --- INTEGRATED LOGO --- */}
                            <div className="mb-10 relative">
                                <motion.img 
                                    src={logo} 
                                    alt="SPECAR" 
                                    className="w-[80%] max-w-[500px] drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                                    initial={{ filter: 'brightness(1) blur(10px)' }}
                                    animate={{ filter: 'brightness(1.2) blur(0px)' }}
                                    transition={{ duration: 1.5 }}
                                />
                                <div className="absolute -inset-4 bg-cyan-500/10 blur-[80px] rounded-full -z-10" />
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter mb-8 uppercase italic">
                                LONDON'S <span className="text-cyan-500">MAYFAIR HQ</span>
                            </h2>
                            <p className="text-zinc-400 max-w-xl text-lg mb-4 font-light italic">
                                Specars.co.uk — Defining automotive excellence in the heart of the capital.
                            </p>
                        </motion.div>
                    </div>
                    
                    <motion.div 
                        className="lg:col-span-5 relative"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-30 animate-pulse" />
                        <img src={about} className="relative rounded-3xl h-[550px] w-full object-cover grayscale active:grayscale-0 transition-all duration-1000 shadow-2xl" />
                    </motion.div>
                </div>
                
                {/* Floating Booking Bar */}
                <motion.div 
                    style={{ y: useTransform(scrollYProgress, [0, 0.2], [0, -100]) }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-30 bg-black/40 backdrop-blur-2xl border border-white/10 p-4 rounded-3xl lg:rounded-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                >
                    <BookingField label="Spec" icon="ri-car-line" options={['Hypercar', 'Prestige', 'Electric']} />
                    <BookingField label="London Location" icon="ri-map-pin-2-line" options={['Mayfair (Main)', 'Heathrow VIP', 'Knightsbridge']} />
                    
                    <div className="flex flex-col px-6 border-r border-white/10 cursor-pointer" onClick={openCalendar}>
                        <label className="text-[10px] text-cyan-400 font-bold uppercase">Arrival</label>
                        <DatePicker selected={pickUpDate} onChange={d => setPickUpDate(d)} ref={datePickerRef} className="bg-transparent text-sm outline-none w-full" placeholderText="Set Date" />
                    </div>

                    <div className="flex flex-col px-6 border-r border-white/10 cursor-pointer" onClick={openreturnCalendar}>
                        <label className="text-[10px] text-cyan-400 font-bold uppercase">Departure</label>
                        <DatePicker selected={returnDate} onChange={d => setReturnDate(d)} ref={returnPickerRef} className="bg-transparent text-sm outline-none w-full" placeholderText="Set Date" />
                    </div>

                    <button className="bg-cyan-500 hover:bg-white text-black font-black rounded-full transition-all flex items-center justify-center gap-2 group text-xs tracking-widest">
                        CHECK AVAILABILITY <i className="ri-arrow-right-up-line group-hover:rotate-45 transition-transform" />
                    </button>
                </motion.div>
            </section>

            {/* --- BENTO GRID: SPECARS COLLECTION --- */}
            <section className="py-32 px-[8%]">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-bold tracking-tighter uppercase">The Specars <span className="text-cyan-500">Vault</span></h2>
                    <p className="text-zinc-500 mt-2 tracking-widest uppercase text-xs">Exclusively Curated in London</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[800px]">
                    <BentoCard title="Prestige" img={carctg1} count="25" className="md:col-span-2 md:row-span-2" />
                    <BentoCard title="Track" img={carctg2} count="12" className="md:col-span-2 md:row-span-1" />
                    <BentoCard title="Grand Tourer" img={carctg4} count="18" className="md:col-span-1 md:row-span-1" />
                    <BentoCard title="Zero Emission" img={carctg3} count="15" className="md:col-span-1 md:row-span-1" />
                </div>
            </section>

            {/* --- LONDON MARQUEE --- */}
            <div className="py-10 bg-cyan-500 overflow-hidden whitespace-nowrap flex border-y-4 border-black">
                {[1, 2, 3].map(i => (
                    <motion.h3 
                        key={i}
                        animate={{ x: [0, -1000] }} 
                        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                        className="text-black text-6xl font-black italic uppercase px-10"
                    >
                        Mayfair HQ • Central London Delivery • +44 20 7946 0123 • Specars.co.uk • 
                    </motion.h3>
                ))}
            </div>

            {/* --- SERVICES: THE SPECARS EXPERIENCE --- */}
            <section className="py-32 px-[8%] bg-[#080808]">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="sticky top-40">
                        <p className="text-cyan-500 font-bold tracking-widest mb-4">// THE SPECARS STANDARD</p>
                        <h2 className="text-6xl font-bold mb-8 uppercase">London’s Finest <br/><span className="text-transparent stroke-text-white">Concierge</span></h2>
                        <p className="text-zinc-500 max-w-md text-lg">
                            Operating from our boutique location in Mayfair, we provide a seamless door-to-door experience across Greater London.
                        </p>
                        <div className="mt-10 p-6 border-l-2 border-cyan-500 bg-white/5">
                            <p className="text-sm font-bold uppercase text-cyan-500">Visit Us</p>
                            <p className="text-zinc-300">1 Berkeley Square, Mayfair<br/>London W1J 6EB</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {['Bespoke Daily', 'Corporate Nexus', 'Event Prestige', 'Enclosed Transport'].map((service, idx) => (
                            <motion.div 
                                key={service}
                                whileHover={{ x: 20 }}
                                className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-cyan-500/50 transition-all cursor-pointer group"
                            >
                                <span className="text-cyan-500 font-bold mb-2 block font-mono">CODE_{idx + 1}</span>
                                <h4 className="text-3xl font-bold group-hover:text-cyan-400 transition-colors uppercase tracking-tighter">{service}</h4>
                                <p className="text-zinc-400 mt-2">White-glove delivery service to all London postcodes and private airfields.</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- TEAM: THE SPECARS AGENTS --- */}
            <section className="py-32 bg-black overflow-hidden">
                <div className="text-center mb-16 px-[8%]">
                    <h2 className="text-6xl font-bold uppercase">The <span className="text-cyan-500">Specialists</span></h2>
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
                        <SwiperSlide key={i} className="w-[300px] sm:w-[400px]">
                            <div className="relative group rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/10">
                                <img src={img} className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-8 left-8">
                                    <h4 className="text-2xl font-bold uppercase tracking-tighter">Director {i + 1}</h4>
                                    <p className="text-cyan-400 text-sm tracking-[0.2em] uppercase font-black">Mayfair Operations</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <style jsx>{`
                .stroke-text-white {
                    -webkit-text-stroke: 1px white;
                    color: transparent;
                }
            `}</style>
        </div>
    );
}

const BookingField = ({ label, icon, options }) => (
    <div className="flex flex-col px-6 border-r border-white/10 group relative cursor-pointer">
        <label className="text-[10px] text-cyan-400 font-bold uppercase mb-1">{label}</label>
        <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-zinc-300"><i className={`${icon} mr-2`} />Select</span>
            <i className="ri-arrow-down-s-line group-hover:rotate-180 transition-transform" />
        </div>
        <div className="absolute top-[120%] left-0 w-full bg-[#111] border border-white/10 rounded-2xl opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all z-50 p-2 shadow-2xl">
            {options.map(opt => (
                <div key={opt} className="px-4 py-2 hover:bg-cyan-500 hover:text-black rounded-lg transition-colors text-sm font-bold uppercase">{opt}</div>
            ))}
        </div>
    </div>
);

const BentoCard = ({ title, count, img, className }) => (
    <motion.div 
        whileHover={{ scale: 0.98 }}
        className={`relative bg-zinc-900/50 border border-white/5 rounded-[2.5rem] overflow-hidden group cursor-pointer ${className}`}
    >
        <div className="absolute top-10 left-10 z-20">
            <h4 className="text-4xl font-bold group-hover:text-cyan-400 transition-colors uppercase tracking-tighter">{title}</h4>
            <p className="text-zinc-500 font-mono text-xs">{count}+ SECURE UNITS</p>
        </div>
        <img 
            src={img} 
            className="absolute bottom-0 right-0 w-[80%] h-auto object-contain translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 pointer-events-none" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
);

export default About;