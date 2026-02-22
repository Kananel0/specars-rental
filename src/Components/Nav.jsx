import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
// Import your generated logo image here
import Logo from '../assets/logo.png'; 

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active Link Logic with Specars Cyan Glow
  const navLinkClasses = ({ isActive }) => 
    `group relative text-[10px] uppercase tracking-[0.4em] font-black transition-all duration-500 ${
      isActive ? 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]' : 'text-zinc-400 hover:text-white'
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-700 px-[5%] lg:px-[8%] ${
        isScrolled ? 'py-4' : 'py-10'
      }`}
    >
      {/* The Floating Dock */}
      <div className={`
        max-w-[1600px] mx-auto flex items-center justify-between px-10 py-4 rounded-[2rem]
        transition-all duration-700 border
        ${isScrolled 
          ? 'bg-black/80 backdrop-blur-2xl border-cyan-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent border-transparent'}
      `}>
        
        {/* --- LOGO: Image Based --- */}
        <Link to='/' className="relative group">
          <img 
            src={Logo} 
            alt="SPECAR Logo" 
            className="h-8 md:h-10 w-auto object-contain transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]"
          />
        </Link>

        {/* --- DESKTOP MENU --- */}
        <ul className="hidden lg:flex items-center gap-10">
          {['Home', 'About', 'Cars', 'Contact'].map((item) => (
            <li key={item}>
              <NavLink to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className={navLinkClasses}>
                {item}
                <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-cyan-500 shadow-[0_0_15px_#22d3ee] group-hover:w-full group-hover:left-0 transition-all duration-500"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* --- ACTION AREA --- */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:block h-6 w-[1px] bg-white/10 mx-2"></div>
          
          <div className="hidden xl:flex items-center gap-4">
            <div className="text-right">
              <p className="text-[9px] text-cyan-500 font-black uppercase tracking-[0.3em] animate-pulse">Link Established</p>
              <p className="text-xs font-black tracking-widest text-white">+44 20 7946 0123</p>
            </div>
          </div>

          <Link to="/contact" className="hidden lg:block bg-cyan-500 text-black text-[10px] font-black uppercase tracking-widest px-8 py-3.5 rounded-xl hover:bg-white transition-all duration-500 shadow-[0_0_20px_rgba(34,211,238,0.3)] active:scale-95">
            Request Access
          </Link>

          {/* Mobile Menu Trigger */}
          <button 
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`h-[2px] w-6 bg-white transition-all duration-500 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-[2px] w-6 bg-cyan-500 shadow-[0_0_8px_#22d3ee] transition-all duration-500 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-[2px] w-6 bg-white transition-all duration-500 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* --- MOBILE OVERLAY --- */}
      <div className={`
        fixed inset-0 bg-[#050505] z-[-1] transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] lg:hidden
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
      `}>
        {/* Large Watermark Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-cyan-500/[0.02] select-none italic tracking-tighter">
          SPECAR
        </div>

        <div className="flex flex-col items-start justify-center h-full space-y-8 px-12 relative z-10">
          <p className="text-cyan-500 text-[10px] font-black tracking-[0.5em] uppercase mb-4 drop-shadow-[0_0_5px_#22d3ee]">Navigation Hub</p>
          {['Home', 'About', 'Cars', 'Contact'].map((item, index) => (
            <Link 
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="group overflow-hidden"
            >
              <h2 className={`text-6xl font-black font-bricolage text-white group-hover:text-cyan-500 group-hover:pl-4 transition-all duration-500 tracking-tighter uppercase italic ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}>
                {item}
              </h2>
            </Link>
          ))}
          
          <div className="pt-12 mt-12 border-t border-white/5 w-full flex flex-col gap-3">
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Global Concierge</p>
            <p className="text-2xl font-black font-bricolage text-white hover:text-cyan-500 transition-colors cursor-pointer">+44 20 7946 0123</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;