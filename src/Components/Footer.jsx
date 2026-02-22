import React from 'react';
import { Link } from 'react-router-dom';
// Import your logo image
import Logo from '../assets/logo.png'; 

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#050505] text-white pt-24 pb-10 px-[8%] lg:px-[12%] border-t border-cyan-500/10 relative overflow-hidden">
            
            {/* Background Kinetic Text - Watermark */}
            <div className="absolute -bottom-10 -right-10 text-[18rem] font-black text-cyan-500/[0.02] select-none pointer-events-none tracking-tighter italic">
                SPECAR
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                
                {/* --- TOP SECTION: CYAN NEON NEWSLETTER --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black font-bricolage mb-6 leading-none italic uppercase tracking-tighter">
                            The future of <br />
                            <span className="text-cyan-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">prestige is here.</span>
                        </h2>
                        <p className="text-gray-500 max-w-sm font-medium text-sm leading-relaxed">
                            Join the Specars inner circle for exclusive access to our global hyper-car fleet and private track events.
                        </p>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-cyan-500 rounded-[2rem] blur opacity-5 group-hover:opacity-15 transition duration-1000"></div>
                        <div className="relative flex items-center bg-[#0d0d0d] border border-white/5 rounded-[2rem] p-2 pr-4">
                            <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                className="bg-transparent border-none outline-none text-white px-6 py-4 flex-1 font-bricolage text-sm placeholder:text-zinc-700"
                            />
                            <button className="bg-cyan-500 text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white transition-all duration-500 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <hr className="border-white/5 mb-20" />

                {/* --- MIDDLE SECTION --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    
                    {/* Brand Identity */}
                    <div className="space-y-8">
                        <Link to='/' className="block group">
                            <img 
                                src={Logo} 
                                alt="SPECAR Logo" 
                                className="h-10 w-auto object-contain brightness-110 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)] group-hover:scale-105 transition-transform duration-500"
                            />
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                            The world's premier automotive concierge. Our curated fleet represents the peak of performance, luxury, and stealth engineering.
                        </p>
                        <div className="flex gap-3">
                            {['ri-instagram-line', 'ri-twitter-x-line', 'ri-youtube-fill', 'ri-linkedin-fill'].map((icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-500 group">
                                    <i className={`${icon} text-zinc-500 group-hover:text-black`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="lg:pl-10">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-cyan-500 mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {['About', 'Cars', 'Fleet', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase()}`} className="text-zinc-500 hover:text-cyan-500 transition-all duration-300 font-bricolage text-sm flex items-center group">
                                        <span className="h-[1px] w-0 bg-cyan-500 mr-0 group-hover:w-4 group-hover:mr-3 transition-all duration-300"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal / Policy Links */}
                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-cyan-500 mb-8">Legal Portal</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Terms of Service', path: '/terms' },
                                { name: 'Privacy Protocol', path: '/privacy' },
                                { name: 'Rental Agreement', path: '/agreement' },
                                { name: 'Cookie Policy', path: '/cookies' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className="text-zinc-500 hover:text-cyan-500 transition-all duration-300 font-bricolage text-sm flex items-center group">
                                        <span className="h-[1px] w-0 bg-cyan-500 mr-0 group-hover:w-4 group-hover:mr-3 transition-all duration-300"></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* High-Tech Contact Card */}
                    <div className="bg-[#0d0d0d] p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group hover:border-cyan-500/20 transition-colors">
                        <div className="absolute -top-2 -right-2 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <i className="ri-roadster-line text-6xl text-cyan-500"></i>
                        </div>
                        <h4 className="text-[10px] uppercase tracking-[0.4em] font-black mb-6">HQ Concierge</h4>
                        <address className="not-italic text-sm text-zinc-500 space-y-1 leading-relaxed font-medium">
                            <p>Berkeley Square,</p>
                            <p>Mayfair, London W1J</p>
                            <p className="text-cyan-500 font-black pt-2 tracking-widest">+44 20 7946 0123</p>
                        </address>
                    </div>
                </div>

                {/* --- BOTTOM SECTION --- */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-600 text-[9px] uppercase tracking-[0.4em] font-black">
                        © {currentYear} SPECAR. OPERATED BY PRIVÉ GROUP. ALL SYSTEMS OPERATIONAL.
                    </p>
                    <div className="flex gap-8 text-[9px] uppercase tracking-[0.3em] font-black text-zinc-600">
                        <Link to="/terms" className="hover:text-cyan-500 transition-colors">Legal Terms</Link>
                        <Link to="/privacy" className="hover:text-cyan-500 transition-colors">Data Privacy</Link>
                        <Link to="/cookies" className="hover:text-cyan-500 transition-colors">Cookie Node</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;