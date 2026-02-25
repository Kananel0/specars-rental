import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Ensure you have Remix Icons: <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">

function Cars() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedPickup, setSelectedPickup] = useState([]);

    // HIGH-QUALITY ASSETS
    const newLondonFleet = [
        "https://i.postimg.cc/D0zpG3cW/cars-slide-01.jpg",
        "https://i.postimg.cc/9MbNzQyw/cars-slide-02.jpg",
        "https://i.postimg.cc/90fg9HBy/cars-slide-03.jpg",
        "https://i.postimg.cc/50bRxCQJ/cars-slide-04.jpg",
        "https://i.postimg.cc/mDB5bHzp/cars-slide-05.jpg",
        "https://i.postimg.cc/SKWPFrst/cars-slide-06.jpg"
    ];

    const categories = [...new Set(cardata.map((car) => car.type))];
    const locations = ["Mayfair HQ", "Heathrow T5", "Knightsbridge", "City"];

    const handleFilterChange = (value, state, setState) => {
        state.includes(value) 
            ? setState(state.filter((item) => item !== value)) 
            : setState([...state, value]);
    };

    const filteredCars = cardata.filter((car) => {
        const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(car.type);
        const matchesPickup = selectedPickup.length === 0 || selectedPickup.includes(car.pickup);
        return matchesSearch && matchesCategory && matchesPickup;
    });

    return (
        <div className="bg-[#050505] min-h-screen font-bricolage text-white overflow-x-hidden">
            
            {/* --- HERO SECTION --- */}
            <div className="relative h-[40vh] lg:h-[60vh] flex flex-col justify-center items-center px-4 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black z-0" />
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="z-10 text-center"
                >
                    <h6 className="uppercase tracking-[4px] lg:tracking-[10px] text-cyan-500 text-[10px] lg:text-xs mb-4 font-bold">Specars London</h6>
                    <h1 className="text-5xl lg:text-[10rem] font-bold leading-none tracking-tighter uppercase">
                        THE <span className="text-transparent stroke-text-cyan">GARAGE</span>
                    </h1>
                </motion.div>
            </div>

            {/* --- STICKY FILTER BAR --- */}
            <div className="sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-xl border-y border-white/5 py-4">
                <div className="max-w-[1400px] mx-auto px-[5%] lg:px-[8%] flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative w-full md:w-[400px]">
                        <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500" />
                        <input
                            type="text"
                            placeholder="Search fleet inventory..."
                            className="w-full pl-12 pr-4 py-3 rounded-full bg-white/5 border border-white/10 focus:border-cyan-500 transition-all outline-none text-xs"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex gap-2 overflow-x-auto no-scrollbar w-full pb-2 md:pb-0">
                        {categories.map(cat => (
                            <button 
                                key={cat}
                                onClick={() => handleFilterChange(cat, selectedCategories, setSelectedCategories)}
                                className={`px-5 py-2 rounded-full text-[9px] uppercase tracking-widest font-black transition-all whitespace-nowrap ${
                                    selectedCategories.includes(cat) ? 'bg-cyan-500 text-black' : 'bg-white/5 border border-white/10'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 px-[5%] lg:px-[8%] py-10 lg:py-20">
                
                {/* --- SIDEBAR: COMMAND CENTER --- */}
                <aside className="w-full lg:w-1/4">
                    <div className="bg-[#0f0f0f] p-8 rounded-[2.5rem] border border-white/5 lg:sticky lg:top-32">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h4 className="text-[10px] uppercase tracking-widest text-cyan-500 font-bold">Service Zone</h4>
                                <p className="text-[9px] text-zinc-500 uppercase mt-1">Availability Hub</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                                </span>
                                <span className="text-[8px] font-black uppercase tracking-tighter text-zinc-400">Live</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {locations.map((loc) => {
                                const isActive = selectedPickup.includes(loc);
                                return (
                                    <button
                                        key={loc}
                                        onClick={() => handleFilterChange(loc, selectedPickup, setSelectedPickup)}
                                        className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 group ${
                                            isActive 
                                            ? 'bg-cyan-500/10 border-cyan-500/50 text-white' 
                                            : 'bg-white/5 border-white/5 text-zinc-500 hover:border-white/20'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-1.5 h-1.5 rounded-full transition-all ${
                                                isActive ? 'bg-cyan-500 shadow-[0_0_10px_#22d3ee]' : 'bg-zinc-700'
                                            }`} />
                                            <span className="text-[11px] font-bold uppercase tracking-wider">{loc}</span>
                                        </div>
                                        {isActive ? <i className="ri-map-pin-2-fill text-cyan-500 text-sm" /> : <i className="ri-add-line text-zinc-700 group-hover:text-zinc-400" />}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/5">
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5">
                                <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center text-black">
                                    <i className="ri-customer-service-2-line text-xl" />
                                </div>
                                <div>
                                    <p className="text-[8px] uppercase font-black text-zinc-500">24/7 Support</p>
                                    <p className="text-[10px] font-bold">LONDON OFFICE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* --- CAR GRID --- */}
                <main className="w-full lg:w-3/4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredCars.map((car, idx) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    key={car.id}
                                    className="group relative bg-[#0f0f0f] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-cyan-500/30 transition-all duration-500"
                                >
                                    {/* Header Section */}
                                    <div className="p-8 pb-0">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-2xl lg:text-3xl font-bold tracking-tighter uppercase leading-none text-white italic">
                                                    SPEC <span className="text-cyan-500">FLEET</span>
                                                </h3>
                                                <p className="text-cyan-500/60 font-bold text-[9px] uppercase tracking-[0.2em] mt-2">{car.type}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-zinc-500 text-[8px] uppercase font-black">Daily Rate</p>
                                                <p className="text-xl lg:text-2xl font-bold text-white italic">£{car.price}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Container - Fixed Fit */}
                                    <div className="relative h-[250px] lg:h-[300px] w-full mt-4 overflow-hidden">
                                        <motion.img
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.8, ease: "circOut" }}
                                            src={newLondonFleet[idx % newLondonFleet.length]} 
                                            alt="Luxury Fleet"
                                            className="w-full h-full object-cover z-10" 
                                        />
                                        {/* Bottom Fade Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent z-20" />
                                    </div>

                                    {/* Stats & Actions */}
                                    <div className="p-8 pt-4 relative z-30">
                                        <div className="grid grid-cols-3 gap-2 py-5 border-y border-white/5 mb-6">
                                            <CarStat icon="ri-user-3-line" value={car.seats} />
                                            <CarStat icon="ri-settings-4-line" value={car.transmission} />
                                            <CarStat icon="ri-flashlight-line" value={car.speed} />
                                        </div>

                                        <Link to={`/car/${car.id}`}>
                                            <button className="w-full py-4 bg-white text-black rounded-2xl font-black uppercase tracking-[0.1em] text-[10px] hover:bg-cyan-500 hover:text-white transition-all flex items-center justify-center gap-2">
                                                Request Quote <i className="ri-arrow-right-up-line" />
                                            </button>
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </main>
            </div>

            <style jsx>{`
                .stroke-text-cyan { -webkit-text-stroke: 1.5px #22d3ee; color: transparent; }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                @media (max-width: 768px) { .stroke-text-cyan { -webkit-text-stroke: 1px #22d3ee; } }
            `}</style>
        </div>
    );
}

const CarStat = ({ icon, value }) => (
    <div className="flex flex-col items-center justify-center p-2 rounded-2xl bg-white/5 border border-white/5">
        <i className={`${icon} text-cyan-500 text-sm lg:text-lg mb-1`} />
        <span className="text-[8px] lg:text-[9px] font-black text-zinc-400 uppercase tracking-tighter">{value}</span>
    </div>
);

export default Cars;