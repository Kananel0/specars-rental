import React, { useState } from "react";
import cardata from "../Cars.json";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Cars() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedPickup, setSelectedPickup] = useState([]);

    // Derived from JSON
    const categories = [...new Set(cardata.map((car) => car.type))];
    
    // Updated for London focus
    const locations = ["Mayfair HQ", "Heathrow Terminal 5", "Knightsbridge", "City of London"];

    const handleCheckboxChange = (value, state, setState) => {
        state.includes(value) 
            ? setState(state.filter((item) => item !== value)) 
            : setState([...state, value]);
    };

    const filteredCars = cardata.filter((car) => {
        const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(car.type);
        // Assuming your JSON will eventually use London locations
        const matchesPickup = selectedPickup.length === 0 || selectedPickup.includes(car.pickup);
        return matchesSearch && matchesCategory && matchesPickup;
    });

    return (
        <div className="bg-[#050505] min-h-screen font-bricolage text-white">
            {/* --- LONDON FLEET HERO --- */}
            <div className="relative h-[400px] lg:h-[600px] flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black z-0" />
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="z-10 text-center"
                >
                    <h6 className="uppercase tracking-[10px] text-cyan-500 text-xs mb-4 font-bold">Specars London</h6>
                    <h1 className="text-6xl lg:text-[10rem] font-bold leading-none tracking-tighter uppercase">
                        THE <span className="text-transparent stroke-text-cyan">GARAGE</span>
                    </h1>
                </motion.div>
            </div>

            {/* --- SEARCH & QUICK FILTER RAIL --- */}
            <div className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-y border-white/5 py-6">
                <div className="max-w-[1400px] mx-auto px-[8%] flex flex-wrap gap-6 items-center justify-between">
                    <div className="relative w-full md:w-[400px]">
                        <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500" />
                        <input
                            type="text"
                            placeholder="Search our Mayfair inventory..."
                            className="w-full pl-12 pr-4 py-3 rounded-full bg-white/5 border border-white/10 focus:border-cyan-500 transition-all outline-none text-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-4 overflow-x-auto no-scrollbar">
                        {categories.map(cat => (
                            <button 
                                key={cat}
                                onClick={() => handleCheckboxChange(cat, selectedCategories, setSelectedCategories)}
                                className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-black transition-all whitespace-nowrap ${
                                    selectedCategories.includes(cat) ? 'bg-cyan-500 text-black' : 'bg-white/5 border border-white/10 hover:border-cyan-500/50'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 px-[8%] py-20">
                
                {/* --- MODERN SIDEBAR --- */}
                <aside className="lg:w-1/4 space-y-12">
                    <div>
                        <h4 className="text-xs uppercase tracking-widest text-cyan-500 font-bold mb-6">Service Zone</h4>
                        <div className="space-y-3">
                            {locations.map(loc => (
                                <label key={loc} className="flex items-center group cursor-pointer">
                                    <div className="relative flex items-center">
                                        <input 
                                            type="checkbox" 
                                            className="peer hidden" 
                                            onChange={() => handleCheckboxChange(loc, selectedPickup, setSelectedPickup)}
                                        />
                                        <div className="w-5 h-5 border-2 border-white/20 rounded-md peer-checked:bg-cyan-500 peer-checked:border-cyan-500 transition-all" />
                                        <i className="ri-check-line absolute text-black font-bold scale-0 peer-checked:scale-100 left-[2px] transition-transform" />
                                    </div>
                                    <span className="ml-3 text-sm text-zinc-400 group-hover:text-white transition-colors">{loc}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 bg-zinc-900 border border-cyan-500/20 rounded-[2.5rem] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                            <i className="ri-moped-2-line text-6xl text-cyan-500" />
                        </div>
                        <h4 className="font-black text-2xl mb-2 italic">Central London Delivery</h4>
                        <p className="text-xs font-medium mb-6 text-zinc-400">Complimentary door-to-door concierge for all Mayfair & Knightsbridge residents.</p>
                        <button className="w-full py-3 bg-cyan-500 text-black rounded-xl font-black text-xs tracking-tighter hover:bg-white transition-colors uppercase">View Terms</button>
                    </div>
                </aside>

                {/* --- CAR GRID --- */}
                <main className="lg:w-3/4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredCars.map((car, idx) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    key={car.id}
                                    className="group relative bg-[#0f0f0f] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-cyan-500/30 transition-all duration-500"
                                >
                                    <div className="p-8 pb-0">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-3xl font-bold tracking-tighter uppercase">{car.name}</h3>
                                                <p className="text-cyan-500 font-bold text-[10px] uppercase tracking-[0.2em]">{car.type}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-zinc-500 text-[9px] uppercase font-black">Daily Rate</p>
                                                <p className="text-2xl font-bold text-white italic">£{car.price}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative h-[220px] px-4">
                                        <motion.img
                                            whileHover={{ y: -10, scale: 1.05 }}
                                            src={car.image}
                                            alt={car.name}
                                            className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                                        />
                                    </div>

                                    <div className="p-8 pt-0">
                                        <div className="grid grid-cols-3 gap-2 py-6 border-y border-white/5 mb-6">
                                            <CarStat icon="ri-user-3-line" value={car.seats} />
                                            <CarStat icon="ri-settings-4-line" value={car.transmission} />
                                            <CarStat icon="ri-flashlight-line" value={car.speed} />
                                        </div>

                                        <Link to={`/car/${car.id}`}>
                                            <button className="w-full py-4 bg-white text-black rounded-2xl font-black uppercase tracking-[0.1em] text-xs group-hover:bg-cyan-500 transition-colors flex items-center justify-center gap-2">
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
                .stroke-text-cyan {
                    -webkit-text-stroke: 1.5px #22d3ee;
                    color: transparent;
                }
                .no-scrollbar::-webkit-scrollbar { display: none; }
            `}</style>
        </div>
    );
}

const CarStat = ({ icon, value }) => (
    <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/5">
        <i className={`${icon} text-cyan-500 text-lg mb-1`} />
        <span className="text-[9px] font-black text-zinc-400 uppercase tracking-tighter">{value}</span>
    </div>
);

export default Cars;