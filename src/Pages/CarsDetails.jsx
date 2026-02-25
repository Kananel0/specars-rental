import { useParams } from 'react-router-dom';
import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CarDetail = () => {
    const { id } = useParams();
    const car = carData.find((c) => c.id === id);
    const [openIndex, setOpenIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    // Form States
    const [pickUpDate, setPickUpDate] = useState(null);
    const [dropOffDate, setDropOffDate] = useState(null);

    if (!car) return <div className="text-white text-center mt-20 font-bricolage">Vehicle not found.</div>;

    const rentalConditions = [
        { title: 'Contract and Annexes', description: 'Beyond the standard digital agreement, we require a valid credit card for individual security. Commercial clients must provide tax certification and ID photocopies.' },
        { title: 'Driving License and Age', description: "Elite status requires the tenant to be at least 25 years of age with a minimum 5-year driving history on a UK or recognized International license." },
        { title: 'London Territory', description: 'Rates include London Congestion Charge and ULEZ compliance. Fuel is provided at full-to-full status. Professional chauffeurs available for Mayfair & City zones.' },
        { title: 'Secured Payments', description: 'Fees are secured at the point of booking. The minimum duration is 48 hours for our London fleet to ensure a full premium experience.' },
    ];

    return (
        <div className="bg-[#050505] text-white font-bricolage min-h-screen">
            
            {/* --- CINEMATIC HERO --- */}
            <div className="relative h-[80vh] w-full overflow-hidden flex items-end">
                <motion.div 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${car.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/20 to-transparent" />
                
                <div className="relative z-10 px-[10%] pb-20 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h6 className='uppercase text-xs lg:text-sm tracking-[10px] text-cyan-500 font-bold mb-4'>- SPECIFICATION SHEET -</h6>
                        <h1 className="text-5xl lg:text-8xl font-black uppercase leading-none italic tracking-tighter">
                            {car.name}
                        </h1>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-[8%] py-20 flex flex-col lg:flex-row gap-16">
                
                {/* --- LEFT CONTENT: SPECS & ACCORDION --- */}
                <div className="flex-1 space-y-16">
                    <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <SpecItem icon="ri-speed-up-line" label="Top Speed" value={car.speed} />
                        <SpecItem icon="ri-user-6-line" label="Capacity" value={`${car.seats} Seats`} />
                        <SpecItem icon="ri-settings-5-line" label="Gearbox" value={car.transmission} />
                        <SpecItem icon="ri-suitcase-line" label="Luggage" value={car.Bages || '2 Large'} />
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 uppercase tracking-tighter">
                            <span className="w-12 h-[1px] bg-cyan-500" /> Rental Protocol
                        </h2>
                        <div className="space-y-4">
                            {rentalConditions.map((item, index) => (
                                <div key={index} className="border-b border-white/10 pb-4">
                                    <button 
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full flex justify-between items-center py-4 text-left group"
                                    >
                                        <span className={`text-lg font-bold transition-colors uppercase tracking-tight ${openIndex === index ? 'text-cyan-500' : 'text-white'}`}>
                                            0{index + 1}. {item.title}
                                        </span>
                                        <i className={`ri-add-line text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-45 text-cyan-500' : 'text-white/30'}`} />
                                    </button>
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div 
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="pb-6 text-zinc-400 leading-relaxed text-sm">
                                                    {item.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* --- RIGHT SIDEBAR: FLOATING PRICE CARD --- */}
                <aside className="lg:w-[400px]">
                    <div className="sticky top-24 bg-[#0f0f0f] border border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
                        <div className="mb-10">
                            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Daily Investment</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-6xl font-black text-white">£{car.price}</span>
                                <span className="text-zinc-400 font-bold text-xs uppercase">GBP</span>
                            </div>
                        </div>

                        <div className="space-y-6 mb-10">
                            <div className="flex justify-between items-center text-sm border-b border-white/5 pb-4">
                                <span className="text-zinc-500">Concierge Delivery</span>
                                <span className="text-white font-bold">Included</span>
                            </div>
                            <div className="flex justify-between items-center text-sm border-b border-white/5 pb-4">
                                <span className="text-zinc-500">Security Deposit</span>
                                <span className="text-white font-bold">£2,500 <span className='text-[10px] opacity-40'>(HOLD)</span></span>
                            </div>
                        </div>

                        <button 
                            onClick={() => setShowModal(true)}
                            className="w-full py-5 bg-cyan-500 text-black font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(34,211,238,0.3)]"
                        >
                            Request Reservation
                        </button>
                    </div>
                </aside>
            </div>

            {/* --- PREMIUM BOOKING MODAL --- */}
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/95 backdrop-blur-md" 
                            onClick={() => setShowModal(false)}
                        />
                        <motion.div 
                            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                            className="relative bg-[#0d0d0d] border border-white/10 w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-2xl"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="hidden md:block relative">
                                    <img src={car.image} className="h-full w-full object-cover grayscale opacity-30" alt="modal" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent p-12 flex flex-col justify-end">
                                        <h3 className="text-3xl font-black italic uppercase">{car.name}</h3>
                                        <p className="text-cyan-500 font-bold uppercase tracking-widest text-[10px]">Awaiting Deployment</p>
                                    </div>
                                </div>
                                <div className="p-12">
                                    <h2 className="text-2xl font-black mb-8 uppercase tracking-tighter">Reservation Request</h2>
                                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowModal(false); setShowSuccessModal(true); }}>
                                        <input type="text" placeholder="Full Name" required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-cyan-500 outline-none text-sm" />
                                        <input type="email" placeholder="Email Address" required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-cyan-500 outline-none text-sm" />
                                        
                                        <div className="grid grid-cols-2 gap-4">
                                            <DatePicker 
                                                selected={pickUpDate} 
                                                onChange={d => setPickUpDate(d)} 
                                                placeholderText="Pick Up Date" 
                                                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none text-sm" 
                                            />
                                            <DatePicker 
                                                selected={dropOffDate} 
                                                onChange={d => setDropOffDate(d)} 
                                                placeholderText="Drop Off Date" 
                                                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none text-sm" 
                                            />
                                        </div>

                                        <button className="w-full py-5 bg-white text-black font-black uppercase tracking-widest text-xs mt-6 rounded-xl hover:bg-cyan-500 transition-colors">
                                            Send Concierge Request
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* --- SUCCESS MODAL --- */}
            <AnimatePresence>
                {showSuccessModal && (
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="fixed inset-0 z-[110] flex items-center justify-center bg-black/98 backdrop-blur-2xl"
                    >
                        <div className="text-center p-10">
                            <div className="w-24 h-24 border-2 border-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(34,211,238,0.2)]">
                                <i className="ri-check-line text-5xl text-cyan-500" />
                            </div>
                            <h2 className="text-5xl font-black italic mb-4 uppercase tracking-tighter">Request Logged.</h2>
                            <p className="text-zinc-400 max-w-xs mx-auto mb-10 text-sm">Your vehicle is being prepared. Our Mayfair concierge will contact you shortly.</p>
                            <button onClick={() => setShowSuccessModal(false)} className="px-12 py-4 border border-white/20 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Dismiss</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const SpecItem = ({ icon, label, value }) => (
    <div className="bg-[#0f0f0f] border border-white/5 p-6 rounded-[2rem] flex flex-col items-center text-center group hover:border-cyan-500/30 transition-colors">
        <i className={`${icon} text-cyan-500 text-2xl mb-2`} />
        <p className="text-[9px] text-zinc-500 font-black uppercase tracking-[0.2em]">{label}</p>
        <p className="text-sm font-bold uppercase tracking-tighter">{value}</p>
    </div>
);

export default CarDetail;