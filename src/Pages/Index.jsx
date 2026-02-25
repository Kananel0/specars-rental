import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Parallax } from "swiper/modules";
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';

// Styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'react-datepicker/dist/react-datepicker.css';

// Data
import cardata from '../Cars.json';

// Bento Category Image Links
const IMG_CAR_CTG_01 = "https://i.postimg.cc/qvvSKn1q/car-ctg-01.jpg";
const IMG_CAR_CTG_03 = "https://i.postimg.cc/nhhgm73M/car-ctg-03.jpg";

// Hero Slider & Prime Selection Links
const carLinks = [
    "https://i.postimg.cc/D0zpG3cW/cars-slide-01.jpg",
    "https://i.postimg.cc/9MbNzQyw/cars-slide-02.jpg",
    "https://i.postimg.cc/90fg9HBy/cars-slide-03.jpg",
    "https://i.postimg.cc/50bRxCQJ/cars-slide-04.jpg",
    "https://i.postimg.cc/mDB5bHzp/cars-slide-05.jpg",
    "https://i.postimg.cc/SKWPFrst/cars-slide-06.jpg"
];

function Index() {
    const [pickUpDate, setPickUpDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);

    const fadeUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    };

    return (
        <div className="bg-[#050505] text-white selection:bg-cyan-500 selection:text-black font-bricolage overflow-x-hidden">
            
            {/* --- 01. CINEMATIC HERO --- */}
            <section className="relative h-screen w-full overflow-hidden">
                <Swiper
                    modules={[Autoplay, EffectFade, Parallax]}
                    effect="fade"
                    speed={2000}
                    parallax={true}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    className="h-full w-full"
                >
                    {carLinks.map((imgUrl, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative h-full w-full flex items-center px-[8%] lg:px-[12%]">
                                <div 
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] scale-110"
                                    style={{ backgroundImage: `url(${imgUrl})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
                                
                                <div className="relative z-20 max-w-5xl">
                                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                                        <span className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-xl text-cyan-400 text-[9px] uppercase tracking-[0.5em] font-black rounded-full">
                                            System Live // 2026 Fleet
                                        </span>
                                    </motion.div>
                                    <h1 className="text-7xl md:text-[9vw] font-black leading-[0.85] mb-8 italic tracking-tighter uppercase">
                                        Unrivaled <span className="block text-transparent stroke-text opacity-70">Velocity.</span>
                                    </h1>
                                    <Link to="/Cars" className="group relative inline-flex items-center gap-8 px-12 py-5 bg-white text-black rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.15)]">
                                        <span className="relative z-10 font-black uppercase text-[11px] tracking-widest">Enter Showroom</span>
                                        <div className="h-2 w-2 bg-cyan-500 rounded-full group-hover:scale-[10] transition-transform duration-700" />
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* --- 02. HUD SEARCH BAR --- */}
            <div className="relative z-30 px-[8%] lg:px-[12%] -mt-20">
                <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="bg-[#0a0a0a]/90 backdrop-blur-3xl border border-white/10 p-4 rounded-[3rem] shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                        <div className="bg-white/5 p-6 rounded-[2.5rem] flex flex-col justify-center">
                            <label className="text-[9px] uppercase tracking-widest text-cyan-500 font-black mb-2">Prototype</label>
                            <select className="bg-transparent outline-none font-bold text-sm appearance-none cursor-pointer">
                                <option className="bg-[#0d0d0d]">All Models</option>
                                <option className="bg-[#0d0d0d]">Hyper</option>
                            </select>
                        </div>
                        <div className="bg-white/5 p-6 rounded-[2.5rem]">
                            <label className="text-[9px] uppercase tracking-widest text-cyan-500 font-black mb-2 block">Collect</label>
                            <DatePicker selected={pickUpDate} onChange={setPickUpDate} placeholderText="Set Date" className="bg-transparent w-full outline-none font-bold text-sm" />
                        </div>
                        <div className="bg-white/5 p-6 rounded-[2.5rem]">
                            <label className="text-[9px] uppercase tracking-widest text-cyan-500 font-black mb-2 block">Return</label>
                            <DatePicker selected={returnDate} onChange={setReturnDate} placeholderText="Set Date" className="bg-transparent w-full outline-none font-bold text-sm" />
                        </div>
                        <button className="lg:col-span-2 h-full bg-cyan-500 text-black font-black uppercase tracking-widest text-[11px] rounded-[2.5rem] hover:bg-white transition-all duration-500">
                            Check Vault
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* --- 03. BENTO GRID CATEGORIES --- */}
            <section className="py-40 px-[8%] lg:px-[12%]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[800px]">
                    <motion.div whileHover={{ scale: 0.99 }} className="md:col-span-8 relative bg-[#0d0d0d] rounded-[4rem] overflow-hidden group border border-white/5">
                        <img src={IMG_CAR_CTG_01} alt="Hyper" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                        <div className="absolute top-16 left-16 z-20">
                            <p className="text-cyan-500 font-black tracking-[0.5em] text-[10px] uppercase mb-4">Level // 01</p>
                            <h3 className="text-6xl font-black italic uppercase tracking-tighter">Hyper Class</h3>
                        </div>
                    </motion.div>

                    <div className="md:col-span-4 grid grid-rows-2 gap-8">
                        <motion.div whileHover={{ scale: 0.98 }} className="relative bg-[#111] rounded-[4rem] overflow-hidden group border border-white/5">
                            <img src={IMG_CAR_CTG_03} alt="Stealth" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                            <div className="absolute top-12 left-12 z-10">
                                <h3 className="text-3xl font-black italic uppercase">Stealth</h3>
                            </div>
                        </motion.div>
                        <motion.div whileHover={{ scale: 0.98 }} className="bg-cyan-500 rounded-[4rem] p-12 group flex flex-col justify-between">
                            <i className="ri-arrow-right-up-line text-5xl text-black/20 group-hover:text-black transition-colors" />
                            <h3 className="text-4xl font-black italic uppercase text-black">Elite SUV</h3>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- 04. PRIME SELECTION (UPDATED WITH LINKS) --- */}
            <section className="py-40 bg-[#030303]">
                <div className="px-[8%] lg:px-[12%] flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">Prime<br />Selection</h2>
                    <Link to="/cars" className="text-cyan-500 font-black uppercase tracking-[0.4em] text-[10px] border-b border-cyan-500 pb-2">View Full Fleet</Link>
                </div>

                <div className="flex gap-10 overflow-x-auto px-[8%] lg:px-[12%] pb-20 no-scrollbar">
                    {cardata.slice(0, 6).map((car, i) => (
                        <motion.div 
                            key={car.id}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="min-w-[400px] bg-[#0d0d0d] rounded-[4rem] border border-white/5 p-4 group"
                        >
                            <div className="h-[400px] rounded-[3rem] overflow-hidden relative">
                                {/* OVERRIDE: Using the carLinks array to replace the JSON local path */}
                                <img 
                                    src={carLinks[i % carLinks.length]} 
                                    alt={car.name} 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                                />
                                <div className="absolute top-8 right-8 h-16 w-16 bg-black/80 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/10">
                                    <i className="ri-share-forward-line text-cyan-500" />
                                </div>
                            </div>
                            <div className="p-10 text-center">
                                <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-8">{car.name}</h3>
                                <div className="flex justify-around mb-10 opacity-40 text-[10px] font-black uppercase tracking-widest">
                                    <span>{car.transmission}</span>
                                    <span>{car.fuel}</span>
                                    <span>{car.seats} Seats</span>
                                </div>
                                <Link to={`/car/${car.id}`} className="block w-full py-6 bg-white text-black font-black uppercase text-[11px] tracking-widest rounded-2xl hover:bg-cyan-500 transition-all">
                                    Request Access
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Index;