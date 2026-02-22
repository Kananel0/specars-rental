import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Parallax } from "swiper/modules";
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';

// Styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'react-datepicker/dist/react-datepicker.css';

// Assets (Assuming these paths remain the same in your project)
import about from '../assets/about.jpg';
import carctg1 from '../assets/car-ctg-01.png';
import carctg2 from '../assets/car-ctg-02.png';
import carctg3 from '../assets/car-ctg-03.png';
import carctg4 from '../assets/car-ctg-04.png';
import cardata from '../Cars.json';
import blogdata from '../Blog.json';

function Index() {
    const [pickUpDate, setPickUpDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);

    return (
        <div className="bg-[#050505] text-white selection:bg-cyan-500 selection:text-black font-bricolage">
            
            {/* --- 01. CINEMATIC HERO --- */}
            <section className="relative h-[100vh] w-full overflow-hidden">
                <Swiper
                    modules={[Autoplay, EffectFade, Parallax]}
                    effect="fade"
                    speed={2500}
                    autoplay={{ delay: 6000 }}
                    loop={true}
                    className="h-full w-full"
                >
                    {[1, 2, 3].map((num) => (
                        <SwiperSlide key={num}>
                            <div className={`hero-slide hero-slide${num} relative h-full w-full flex items-center px-[8%] lg:px-[12%]`}>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-black/40 to-transparent z-10" />
                                
                                <div className="relative z-20 max-w-4xl">
                                    <span className="inline-block px-4 py-1 mb-6 border border-cyan-500/30 text-cyan-500 text-[10px] uppercase tracking-[0.4em] font-black rounded-full shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                                        Mayfair HQ • London 2026
                                    </span>
                                    <h1 className="text-6xl md:text-[9rem] font-black leading-[0.85] mb-6 italic tracking-tighter uppercase">
                                        Precision <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Defined.</span>
                                    </h1>
                                    <p className="text-zinc-400 text-lg md:text-xl max-w-xl mb-10 font-medium leading-relaxed">
                                        London's elite automotive concierge. Access an unparalleled fleet of stealth-tuned hypercars and performance EVs.
                                    </p>
                                    <div className="flex flex-wrap gap-6">
                                        <Link to="/Cars" className="group relative px-14 py-5 bg-cyan-500 overflow-hidden rounded-2xl transition-all shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                                            <span className="relative z-10 font-black uppercase text-[10px] tracking-[0.2em] text-black">Enter Showroom</span>
                                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* --- 02. FLOATING SEARCH BOX --- */}
            <div className="relative z-30 px-[8%] lg:px-[12%] -mt-24">
                <div className="bg-[#0d0d0d]/90 backdrop-blur-3xl border border-white/5 p-10 rounded-[3rem] shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 items-end">
                        <div className="space-y-3">
                            <label className="text-[10px] uppercase tracking-[0.3em] text-cyan-500 font-black">Class</label>
                            <select className="bg-transparent border-b border-white/10 w-full py-3 outline-none focus:border-cyan-500 transition-colors appearance-none font-bold text-sm">
                                <option className="bg-[#0d0d0d]">All Prototypes</option>
                                <option className="bg-[#0d0d0d]">Hyper Performance</option>
                                <option className="bg-[#0d0d0d]">Stealth SUV</option>
                            </select>
                        </div>
                        <div className="space-y-3 text-white">
                            <label className="text-[10px] uppercase tracking-[0.3em] text-cyan-500 font-black">Nexus</label>
                            <select className="bg-transparent border-b border-white/10 w-full py-3 outline-none focus:border-cyan-500 transition-colors appearance-none font-bold text-sm">
                                <option className="bg-[#0d0d0d]">London Nexus</option>
                                <option className="bg-[#0d0d0d]">Mayfair Private</option>
                            </select>
                        </div>
                        <div className="space-y-3 custom-datepicker">
                            <label className="text-[10px] uppercase tracking-[0.3em] text-cyan-500 font-black">Collection</label>
                            <DatePicker selected={pickUpDate} onChange={setPickUpDate} placeholderText="Select Date" className="bg-transparent border-b border-white/10 w-full py-3 outline-none cursor-pointer font-bold text-sm" />
                        </div>
                        <div className="space-y-3 custom-datepicker">
                            <label className="text-[10px] uppercase tracking-[0.3em] text-cyan-500 font-black">Return</label>
                            <DatePicker selected={returnDate} onChange={setReturnDate} placeholderText="Select Date" className="bg-transparent border-b border-white/10 w-full py-3 outline-none cursor-pointer font-bold text-sm" />
                        </div>
                        <button className="h-[60px] w-full bg-cyan-500 text-black font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white transition-all duration-500 shadow-xl">
                            Verify Availability
                        </button>
                    </div>
                </div>
            </div>

            {/* --- 03. ASYMMETRIC ABOUT --- */}
            <section className="py-40 px-[8%] lg:px-[12%] overflow-hidden">
                <div className="flex flex-col lg:flex-row items-center gap-24">
                    <div className="w-full lg:w-1/2 relative">
                        <div className="absolute -top-16 -left-16 text-[20rem] font-black text-cyan-500/[0.03] select-none italic">01</div>
                        <div className="relative z-10 border border-white/5 p-4 rounded-[3rem] bg-white/[0.02] backdrop-blur-md">
                            <img src={about} alt="About" className="w-full h-[700px] object-cover rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-1000 brightness-75 hover:brightness-100" />
                        </div>
                        <div className="absolute -bottom-10 -right-8 bg-cyan-500 p-12 rounded-[2.5rem] hidden lg:block shadow-2xl">
                            <p className="text-6xl font-black text-black italic tracking-tighter">100%</p>
                            <p className="uppercase text-[10px] font-black tracking-widest mt-2 text-black/60">Electric Vision</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-10">
                        <h2 className="text-6xl md:text-8xl font-black italic leading-[0.85] tracking-tighter uppercase">
                            Engineered <br />
                            <span className="text-cyan-500">For The Few.</span>
                        </h2>
                        <p className="text-zinc-400 text-xl font-medium leading-relaxed max-w-lg">
                            We don't just provide transportation. We provide the pinnacle of automotive engineering. Our collection is curated for those who demand stealth, speed, and absolute luxury.
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {['Biometric Access', 'Stealth Delivery', 'Mayfair Concierge', 'Track Calibrated'].map((text, i) => (
                                <li key={i} className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-white">
                                    <span className="h-2 w-2 bg-cyan-500 rounded-full shadow-[0_0_10px_#00f2ff]" /> {text}
                                </li>
                            ))}
                        </ul>
                        <button className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500 hover:text-white transition-all">
                            Our Heritage <i className="ri-arrow-right-line group-hover:translate-x-3 transition-transform"></i>
                        </button>
                    </div>
                </div>
            </section>

            {/* --- 04. CATEGORY CARDS --- */}
            <section className="py-32 bg-[#080808] px-[8%] lg:px-[12%]">
                <div className="mb-20 flex justify-between items-end border-b border-white/5 pb-10">
                    <h2 className="text-5xl font-black italic tracking-tighter uppercase">The <span className="text-cyan-500">Vault</span></h2>
                    <p className="text-zinc-600 uppercase text-[10px] tracking-[0.5em] font-black">System Browse</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Hyper", img: carctg1, count: 12 },
                        { title: "Elite", img: carctg2, count: 8 },
                        { title: "Stealth", img: carctg3, count: 15 },
                        { title: "Urban", img: carctg4, count: 22 },
                    ].map((item, i) => (
                        <div key={i} className="group relative bg-[#0d0d0d] p-12 rounded-[3.5rem] h-[520px] overflow-hidden flex flex-col justify-between border border-white/5 hover:border-cyan-500/30 transition-all duration-700">
                            <div className="relative z-10">
                                <span className="text-white/[0.03] text-[10rem] font-black absolute -top-10 -left-10 group-hover:text-cyan-500/[0.05] transition-colors italic">0{i+1}</span>
                                <h3 className="text-3xl font-black mt-10 uppercase italic tracking-tighter">{item.title}</h3>
                            </div>
                            <img src={item.img} className="absolute bottom-16 right-[-20%] w-[130%] object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-1000 pointer-events-none z-10" />
                            <div className="relative z-20 flex justify-between items-center">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-black">{item.count} Prototypes</span>
                                <div className="h-14 w-14 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-all">
                                    <i className="ri-arrow-right-up-line text-2xl" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- 05. MOST WANTED --- */}
            <section className="py-40 px-[8%] lg:px-[12%] relative">
                <div className="text-center mb-24">
                    <span className="text-cyan-500 font-black tracking-[0.6em] uppercase text-[10px] drop-shadow-[0_0_10px_#00f2ff]">Top Performance</span>
                    <h2 className="text-7xl md:text-[6rem] font-black mt-6 tracking-tighter uppercase italic leading-none">Prime Selection</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
                    {cardata.slice(0, 3).map((car) => (
                        <div key={car.id} className="group relative bg-[#0d0d0d] rounded-[4rem] overflow-hidden border border-white/5 hover:border-cyan-500/20 transition-all duration-700">
                            <div className="h-[450px] relative overflow-hidden">
                                <img src={car.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 brightness-[0.6] group-hover:brightness-100" />
                                <div className="absolute top-10 left-10 bg-black/90 backdrop-blur-2xl px-8 py-4 rounded-2xl border border-white/5">
                                    <span className="text-cyan-500 font-black tracking-tighter text-2xl">£{car.price}</span> <span className="text-[10px] text-zinc-500 font-black uppercase ml-2">/ Day</span>
                                </div>
                            </div>
                            <div className="p-14 -mt-24 relative z-10 bg-[#0d0d0d] rounded-t-[4rem] space-y-10">
                                <h3 className="text-4xl font-black tracking-tighter uppercase italic">{car.name}</h3>
                                <div className="flex justify-between items-center border-y border-white/5 py-10">
                                    <div className="text-center">
                                        <p className="text-[10px] text-cyan-500 uppercase font-black tracking-[0.2em] mb-2">Drive</p>
                                        <p className="text-sm font-bold text-zinc-400">{car.transmission}</p>
                                    </div>
                                    <div className="h-10 w-[1px] bg-white/5" />
                                    <div className="text-center">
                                        <p className="text-[10px] text-cyan-500 uppercase font-black tracking-[0.2em] mb-2">Source</p>
                                        <p className="text-sm font-bold text-zinc-400">{car.fuel}</p>
                                    </div>
                                    <div className="h-10 w-[1px] bg-white/5" />
                                    <div className="text-center">
                                        <p className="text-[10px] text-cyan-500 uppercase font-black tracking-[0.2em] mb-2">Limit</p>
                                        <p className="text-sm font-bold text-zinc-400">{car.seats} PAX</p>
                                    </div>
                                </div>
                                <Link to={`/CarDetails/${car.id}`} className="w-full block text-center py-6 bg-white text-black font-black uppercase text-[10px] tracking-[0.3em] rounded-[1.5rem] hover:bg-cyan-500 transition-all duration-500">
                                    Request Access
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- 06. JOURNAL --- */}
            <section className="py-40 bg-[#050505] px-[8%] lg:px-[12%]">
                <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-8">
                    <h2 className="text-5xl font-black italic tracking-tighter uppercase">The <span className="text-cyan-500">Intel.</span></h2>
                    <div className="h-[1px] flex-grow bg-white/5 mx-10 hidden md:block" />
                    <button className="uppercase text-[10px] tracking-[0.5em] font-black text-cyan-500 hover:text-white transition-all">Show Archive</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {blogdata.slice(0, 2).map((blog) => (
                        <div key={blog.id} className="group flex flex-col xl:flex-row gap-10 bg-[#0d0d0d] p-10 rounded-[3.5rem] border border-white/5 hover:border-cyan-500/30 transition-all duration-700">
                            <div className="w-full xl:w-1/2 h-80 rounded-[2.5rem] overflow-hidden relative">
                                <div className="absolute inset-0 bg-cyan-500/10 group-hover:opacity-0 transition-opacity z-10" />
                                <img src={blog.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-75 group-hover:brightness-100" />
                            </div>
                            <div className="w-full xl:w-1/2 flex flex-col justify-center space-y-6">
                                <span className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.4em]">{blog.date}</span>
                                <h3 className="text-3xl font-black leading-[1.1] tracking-tighter uppercase italic">{blog.title}</h3>
                                <p className="text-zinc-500 text-sm font-medium line-clamp-2 leading-relaxed">{blog.excerpt}</p>
                                <Link to="/Blog" className="group/link flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-cyan-500 transition-all">
                                    Analyze <i className="ri-add-line group-hover/link:rotate-90 transition-transform"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Index;