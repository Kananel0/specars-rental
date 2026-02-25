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

// Image Links
const IMG_CAR_CTG_01 = "https://i.postimg.cc/qvvSKn1q/car-ctg-01.jpg";
const IMG_CAR_CTG_03 = "https://i.postimg.cc/nhhgm73M/car-ctg-03.jpg";

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
            <section className="relative h-[90vh] md:h-screen w-full overflow-hidden">
                <Swiper
                    modules={[Autoplay, EffectFade, Parallax]}
                    effect="fade"
                    speed={2500}
                    parallax={true}
                    autoplay={{ delay: 7000 }}
                    loop={true}
                    className="h-full w-full"
                >
                    {[1, 2, 3].map((num) => (
                        <SwiperSlide key={num}>
                            <div className={`hero-slide hero-slide${num} relative h-full w-full flex items-center px-6 md:px-[8%] lg:px-[12%]`}>
                                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
                                
                                <div className="relative z-20 max-w-5xl">
                                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                                        <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-xl text-cyan-400 text-[8px] md:text-[9px] uppercase tracking-[0.4em] font-black rounded-full">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                                            </span>
                                            Live // 2026 Fleet
                                        </span>
                                    </motion.div>

                                    <div className="overflow-hidden">
                                        <motion.h1 
                                            initial={{ y: "100%" }}
                                            animate={{ y: 0 }}
                                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                            className="text-5xl md:text-7xl lg:text-[9vw] font-black leading-[0.9] mb-6 italic tracking-tighter uppercase"
                                        >
                                            Unrivaled <br />
                                            <span className="text-transparent stroke-text opacity-70">Velocity.</span>
                                        </motion.h1>
                                    </div>

                                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.8 }} className="text-zinc-400 text-sm md:text-xl max-w-md md:max-w-xl mb-10 font-light leading-relaxed border-l border-cyan-500/50 pl-6 md:pl-8">
                                        The restricted vault is now open. Procure hyper-machines through our stealth concierge.
                                    </motion.p>

                                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.2 }}>
                                        <Link to="/Cars" className="group relative inline-flex items-center gap-4 md:gap-8 px-8 md:px-12 py-4 md:py-5 bg-white text-black rounded-full overflow-hidden transition-all duration-500">
                                            <span className="relative z-10 font-black uppercase text-[10px] md:text-[11px] tracking-widest">Enter Showroom</span>
                                            <div className="h-2 w-2 bg-cyan-500 rounded-full group-hover:scale-[15] transition-transform duration-700" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* --- 02. HUD SEARCH BAR --- */}
            <div className="relative z-30 px-4 md:px-[8%] lg:px-[12%] -mt-12 md:-mt-20">
                <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 p-3 md:p-4 rounded-[2rem] md:rounded-[3rem] shadow-2xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-3">
                        <div className="bg-white/5 p-4 md:p-6 rounded-2xl md:rounded-[2.5rem] flex flex-col justify-center">
                            <label className="text-[8px] uppercase tracking-widest text-cyan-500 font-black mb-1">Prototype</label>
                            <select className="bg-transparent outline-none font-bold text-xs md:text-sm appearance-none cursor-pointer">
                                <option className="bg-[#0d0d0d]">All Models</option>
                                <option className="bg-[#0d0d0d]">Hyper Class</option>
                            </select>
                        </div>
                        <div className="bg-white/5 p-4 md:p-6 rounded-2xl md:rounded-[2.5rem] flex flex-col justify-center">
                            <label className="text-[8px] uppercase tracking-widest text-cyan-500 font-black mb-1">Nexus</label>
                            <select className="bg-transparent outline-none font-bold text-xs md:text-sm appearance-none cursor-pointer">
                                <option className="bg-[#0d0d0d]">Global HQ</option>
                            </select>
                        </div>
                        <div className="bg-white/5 p-4 md:p-6 rounded-2xl md:rounded-[2.5rem]">
                            <label className="text-[8px] uppercase tracking-widest text-cyan-500 font-black mb-1 block">Collect</label>
                            <DatePicker selected={pickUpDate} onChange={setPickUpDate} placeholderText="Set Date" className="bg-transparent w-full outline-none font-bold text-xs md:text-sm" />
                        </div>
                        <div className="bg-white/5 p-4 md:p-6 rounded-2xl md:rounded-[2.5rem]">
                            <label className="text-[8px] uppercase tracking-widest text-cyan-500 font-black mb-1 block">Return</label>
                            <DatePicker selected={returnDate} onChange={setReturnDate} placeholderText="Set Date" className="bg-transparent w-full outline-none font-bold text-xs md:text-sm" />
                        </div>
                        <button className="h-14 lg:h-full bg-cyan-500 text-black font-black uppercase tracking-widest text-[10px] md:text-[11px] rounded-2xl md:rounded-[2.5rem] hover:bg-white transition-all">
                            Check Vault
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* --- 03. BENTO GRID CATEGORIES --- */}
            <section className="py-24 md:py-40 px-6 md:px-[8%] lg:px-[12%]">
                <motion.div {...fadeUp} className="mb-12 md:mb-20">
                    <h2 className="text-5xl md:text-8xl lg:text-9xl font-black italic tracking-tighter uppercase leading-[0.8]">
                        The <span className="text-cyan-500">Vault</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 h-auto md:h-[600px] lg:h-[800px]">
                    <motion.div whileHover={{ scale: 0.99 }} className="md:col-span-8 relative h-[350px] md:h-full bg-[#0d0d0d] rounded-3xl md:rounded-[4rem] overflow-hidden group border border-white/5">
                        <img src={IMG_CAR_CTG_01} alt="Hyper" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                        <div className="absolute top-8 left-8 md:top-16 md:left-16 z-30">
                            <p className="text-cyan-500 font-black tracking-[0.5em] text-[8px] md:text-[10px] uppercase mb-2 md:mb-4">Level // 01</p>
                            <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">Hyper Class</h3>
                        </div>
                    </motion.div>

                    <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 md:gap-8">
                        <motion.div whileHover={{ scale: 0.98 }} className="h-[250px] md:h-full bg-[#111] rounded-3xl md:rounded-[4rem] relative overflow-hidden group border border-white/5">
                            <img src={IMG_CAR_CTG_03} alt="Stealth" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute top-8 left-8 z-10">
                                <h3 className="text-2xl md:text-3xl font-black italic uppercase">Stealth</h3>
                            </div>
                        </motion.div>
                        <motion.div whileHover={{ scale: 0.98 }} className="h-[200px] md:h-full bg-cyan-500 rounded-3xl md:rounded-[4rem] p-8 md:p-12 group flex flex-col justify-between">
                            <i className="ri-arrow-right-up-line text-4xl md:text-5xl text-black/20 group-hover:text-black transition-colors" />
                            <h3 className="text-3xl md:text-4xl font-black italic uppercase text-black">Elite SUV</h3>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- 04. PRIME SELECTION --- */}
            <section className="py-24 md:py-40 bg-[#030303]">
                <div className="px-6 md:px-[8%] lg:px-[12%] flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">Prime<br />Selection</h2>
                    <Link to="/cars" className="text-cyan-500 font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] border-b border-cyan-500 pb-2">View Full Fleet</Link>
                </div>

                {/* Mobile Scroll Area */}
                <div className="flex gap-6 md:gap-10 overflow-x-auto px-6 md:px-[8%] lg:px-[12%] pb-10 scrollbar-hide">
                    {cardata.slice(0, 6).map((car, i) => (
                        <motion.div 
                            key={car.id}
                            className="min-w-[85vw] md:min-w-[400px] bg-[#0d0d0d] rounded-[2.5rem] md:rounded-[4rem] border border-white/5 p-3 md:p-4 group"
                        >
                            <div className="h-[300px] md:h-[400px] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative">
                                <img src={carLinks[i % carLinks.length]} alt={car.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                                <div className="absolute top-6 right-6 h-12 w-12 md:h-16 md:w-16 bg-black/80 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/10">
                                    <i className="ri-share-forward-line text-cyan-500" />
                                </div>
                            </div>
                            <div className="p-6 md:p-10 text-center">
                                <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter mb-6 md:mb-8">{car.name}</h3>
                                <div className="flex justify-around mb-8 md:mb-10 opacity-40 text-[8px] md:text-[10px] font-black uppercase tracking-widest">
                                    <span>{car.transmission}</span>
                                    <span>{car.fuel}</span>
                                    <span>{car.seats} Seats</span>
                                </div>
                                <Link to={`/car/${car.id}`} className="block w-full py-4 md:py-6 bg-white text-black font-black uppercase text-[9px] md:text-[11px] tracking-widest rounded-xl md:rounded-2xl hover:bg-cyan-500 transition-all">
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