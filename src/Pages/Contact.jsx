import React, { useState } from 'react';

function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Encrypting & Sending...");
        const formData = new FormData(event.target);

        // Add your Web3Forms Access Key
        formData.append("access_key", "192a88e2-ca18-46c5-b777-f4df8f89bd2b");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Transmission Successful. Our concierge will contact you shortly.");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="bg-[#050505] min-h-screen font-bricolage text-white">
            {/* --- HERO SECTION --- */}
            <div className="relative flex justify-center items-center h-[400px] lg:h-[650px] overflow-hidden">
                <div className="absolute inset-0 opacity-10" 
                     style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #22d3ee 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                </div>
                
                <div className="relative text-center z-10 space-y-4 px-6">
                    <h6 className="uppercase tracking-[10px] text-cyan-500 font-bold text-[10px] lg:text-xs animate-pulse">
                        - MAYFAIR HEADQUARTERS -
                    </h6>
                    <h1 className="text-6xl lg:text-[10rem] font-black italic tracking-tighter uppercase leading-none">
                        <span className="text-white">GET IN </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-cyan-700">TOUCH</span>
                    </h1>
                </div>
            </div>

            {/* --- INFO CARDS --- */}
            <div className="lg:px-[12%] px-[8%] pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    <ContactCard icon="ri-mail-send-line" title="Concierge" detail="bookings@specars.co.uk" />
                    <ContactCard icon="ri-map-pin-2-line" title="London Office" detail="Berkeley Square, Mayfair, W1J" />
                    <ContactCard icon="ri-time-line" title="Service Hours" detail="24/7 Priority Support" />
                    <ContactCard icon="ri-customer-service-2-line" title="VIP Hotline" detail="+44 20 7946 0123" />
                </div>
            </div>

            {/* --- FORM & MAP SECTION --- */}
            <div className="lg:px-[12%] px-[8%] pb-[150px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Dark Mode Form */}
                    <div className="bg-[#0f0f0f] border border-white/5 p-10 rounded-[2.5rem] shadow-2xl">
                        <h2 className="text-white text-3xl font-black mb-2 italic tracking-tight uppercase">Transmission <span className="text-cyan-500">Center</span></h2>
                        <p className="text-zinc-500 text-sm mb-10 font-medium">Request a private viewing or fleet consultation.</p>
                        
                        <form onSubmit={onSubmit} className="space-y-6">
                            {/* Hidden field for subject or honeycomb if needed */}
                            <input type="hidden" name="subject" value="New Fleet Inquiry - Specars" />
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input type="text" name="name" required placeholder="Identity Name*" className="contact-input" />
                                <input type="email" name="email" required placeholder="Email Address*" className="contact-input" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input type="text" name="phone" placeholder="Phone Number*" className="contact-input" />
                                <input type="text" name="vehicle" placeholder="Preferred Vehicle*" className="contact-input" />
                            </div>
                            <textarea name="message" required rows="5" placeholder="Your specific requirements..." className="contact-input resize-none"></textarea>
                            
                            <button type="submit" className="group relative w-full py-5 bg-cyan-500 text-black font-black uppercase tracking-[0.2em] text-xs rounded-2xl overflow-hidden transition-all hover:bg-white">
                                <span className="relative z-10">Deploy Message</span>
                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </button>

                            {/* Status Message */}
                            {result && (
                                <p className="text-center text-xs uppercase tracking-widest font-black text-cyan-500 animate-pulse mt-4">
                                    {result}
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Styled Dark Map */}
                    <div className="w-full h-full min-h-[500px] rounded-[3rem] overflow-hidden border border-white/5 relative group">
                        <div className="absolute inset-0 bg-cyan-500/10 pointer-events-none z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                        <iframe
                            className="w-full h-full grayscale invert contrast-[1.2] brightness-[0.7] sepia-[0.2] hue-rotate-[180deg]"
                            title="Specars London Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9051833054593!2d-0.1471199233816112!3d51.509461171813425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760529d201a65d%3A0xc6222c92e92c47ee!2sBerkeley%20Square!5e0!3m2!1sen!2suk!4v1709123456789!5m2!1sen!2suk"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>

                </div>
            </div>

            <style jsx>{`
                .contact-input {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    color: white;
                    border-radius: 1.25rem;
                    padding: 1.25rem 1.5rem;
                    width: 100%;
                    outline: none;
                    font-size: 0.875rem;
                    transition: all 0.3s ease;
                }
                .contact-input:focus {
                    border-color: #22d3ee;
                    background: rgba(34, 211, 238, 0.05);
                    box-shadow: 0 0 25px rgba(34, 211, 238, 0.1);
                }
            `}</style>
        </div>
    );
}

const ContactCard = ({ icon, title, detail }) => (
    <div className="group bg-[#0f0f0f] border border-white/5 p-10 rounded-[2.5rem] hover:border-cyan-500/50 transition-all duration-500 flex flex-col items-center text-center">
        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors duration-500">
            <i className={`${icon} text-2xl text-cyan-500 group-hover:text-black transition-colors duration-500`}></i>
        </div>
        <h4 className="text-zinc-500 uppercase tracking-[0.2em] text-[10px] font-black mb-3">{title}</h4>
        <p className="text-white text-md font-bold italic tracking-tight">{detail}</p>
    </div>
);

export default Contact;