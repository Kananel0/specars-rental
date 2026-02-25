import React, { useState } from "react";
import cardata from "../Cars.json"; 
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Cars() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedPickup, setSelectedPickup] = useState([]);

    // --- YOUR NEW HIGH-QUALITY LINKS ---
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

    const handleCheckboxChange = (value, state, setState) => {
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
                            placeholder="Search Mayfair inventory..."
                            className="w-full pl-12 pr-4 py-3 rounded-full bg-white/5 border border-white/10 focus:border-cyan-500 transition-all outline-none text-xs"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex gap-2 overflow-x-auto no-scrollbar w-full pb-2 md:pb-0">
                        {categories.map(cat => (
                            <button 
                                key={cat}
                                onClick={() => handleCheckboxChange(cat, selectedCategories, setSelectedCategories)}
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
                
                {/* --- SIDEBAR --- */}
                <aside className="w-full lg:w-1/4 space-y-6">
                    <div className="bg-white/5 p-6 rounded-[2rem] border border-white/5">
                        <h4 className="text-[10px] uppercase tracking-widest text-cyan-500 font-bold mb-6">Service Zone</h4>
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                            {locations.map(loc => (
                                <label key={loc} className="flex items-center group cursor-pointer">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" className="peer hidden" onChange={() => handleCheckboxChange(loc, selectedPickup, setSelectedPickup)}/>
                                        <div className="w-4 h-4 border-2 border-white/20 rounded peer-checked:bg-cyan-500 peer-checked:border-cyan-500 transition-all" />
                                        <i className="ri-check-line absolute text-black font-bold text-xs scale-0 peer-checked:scale-100 left-[2px]" />
                                    </div>
                                    <span className="ml-3 text-xs text-zinc-400 group-hover:text-white transition-colors">{loc}</span>
                                </label>
                            ))}
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
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    key={car.id}
                                    className="group relative bg-[#0f0f0f] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-cyan-500/30 transition-all duration-500"
                                >
                                    <div className="p-6 lg:p-8 pb-0">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-2xl lg:text-3xl font-bold tracking-tighter uppercase leading-none">{car.name}</h3>
                                                <p className="text-cyan-500 font-bold text-[9px] uppercase tracking-[0.2em] mt-2">{car.type}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-zinc-500 text-[8px] uppercase font-black">Daily</p>
                                                <p className="text-xl lg:text-2xl font-bold text-white italic">£{car.price}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* IMAGE CONTAINER - Uses the new links based on index */}
                                    <div className="relative h-[200px] lg:h-[250px] px-6 mt-4 flex items-center justify-center">
                                        <motion.img
                                            whileHover={{ y: -10, scale: 1.1 }}
                                            src={newLondonFleet[idx % newLondonFleet.length]} 
                                            alt={car.name}
                                            className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] z-10"
                                        />
                                        {/* Glow effect behind new images */}
                                        <div className="absolute w-1/2 h-1/2 bg-cyan-500/10 blur-[60px] rounded-full z-0" />
                                    </div>

                                    <div className="p-6 lg:p-8 pt-0">
                                        <div className="grid grid-cols-3 gap-2 py-5 border-y border-white/5 mb-6">
                                            <CarStat icon="ri-user-3-line" value={car.seats} />
                                            <CarStat icon="ri-settings-4-line" value={car.transmission} />
                                            <CarStat icon="ri-flashlight-line" value={car.speed} />
                                        </div>

                                        <Link to={`/car/${car.id}`}>
                                            <button className="w-full py-4 bg-white text-black rounded-2xl font-black uppercase tracking-[0.1em] text-[10px] hover:bg-cyan-500 transition-all flex items-center justify-center gap-2">
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