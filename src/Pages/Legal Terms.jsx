import React from 'react';

const LegalTerms = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-bricolage pt-40 pb-32 px-[8%] lg:px-[12%] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] -z-10" />
      
      <div className="max-w-5xl relative z-10">
        <span className="text-cyan-500 font-black tracking-[0.5em] uppercase text-[10px] mb-4 block underline decoration-cyan-500/30 underline-offset-8">Master Service Agreement // V.2026.04</span>
        <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter mb-16 leading-[0.8]">
          Legal <br /><span className="text-cyan-500">Terms</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/5 pt-16">
          <div className="md:col-span-1">
            <h3 className="text-white font-black uppercase text-xs tracking-widest sticky top-40">01 // Access Protocols</h3>
          </div>
          <div className="md:col-span-2 space-y-8 text-zinc-400 leading-relaxed">
            <p>
              By engaging with the SPECAR platform, you acknowledge that you are entering an exclusive agreement for the temporary procurement of high-performance automotive machinery. This is a binding contract between the User and Privé Group Holdings.
            </p>
            <p>
              Membership is not a right, but a privilege. We reserve the absolute right to deny access to the "Hyper" or "Stealth" vaults based on driving history, insurance risk profiling, or internal security assessments. Any attempt to bypass our biometric verification systems will result in an immediate and permanent blacklist across all global Nexus locations.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-white font-black uppercase text-xs tracking-widest sticky top-40">02 // Operational Governance</h3>
          </div>
          <div className="md:col-span-2 space-y-8 text-zinc-400 leading-relaxed">
            <p>
              Every vehicle in the SPECAR fleet is equipped with "Active Telemetry Monitoring" (ATM). This system records gravitational force (G-force), rotational torque, and tire temperature in real-time. 
            </p>
            <p>
              Usage is restricted to public roadways unless a "Track Calibration" package has been purchased. Engaging in unauthorized street racing, drifting, or high-velocity maneuvers outside of specified safety parameters will trigger a remote speed-governor and notify HQ. In such cases, the security deposit is forfeited immediately, and the vehicle may be remotely immobilized for safety.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-white font-black uppercase text-xs tracking-widest sticky top-40">03 // Liability & Insurance</h3>
          </div>
          <div className="md:col-span-2 space-y-8 text-zinc-400 leading-relaxed">
            <p>
              While all vehicles carry comprehensive specialized insurance, the User remains personally liable for any deductible amounts, which range from £5,000 to £50,000 depending on the vehicle class (Hyper/Elite/Stealth).
            </p>
            <p>
              SPECAR is not liable for personal injury resulting from the misuse of launch control systems or the deactivation of traction control. The User acknowledges that hyper-cars possess extreme acceleration capabilities and accepts all inherent risks associated with high-performance driving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalTerms;