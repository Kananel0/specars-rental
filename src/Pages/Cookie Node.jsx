import React from 'react';

const CookieNode = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-bricolage pt-40 pb-32 px-[8%] lg:px-[12%] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-cyan-500/5 blur-[150px] -z-10" />

      <div className="max-w-5xl relative z-10">
        <span className="text-cyan-500 font-black tracking-[0.5em] uppercase text-[10px] mb-4 block underline decoration-cyan-500/30 underline-offset-8">System Architecture // Node Policy</span>
        <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter mb-16 leading-[0.8]">
          Cookie <br /><span className="text-cyan-500">Node</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-4">What are Nodes?</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                In our digital ecosystem, "Cookies" are referred to as Data Nodes. These are micro-files stored on your device that allow our showroom to communicate with our fleet database efficiently. Without these nodes, the "Vault" cannot maintain a secure connection to your session.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-4">Nexus Selection Memory</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                We use Persistent Nodes to remember your preferred delivery location (e.g., London Nexus vs. Mayfair Private). This optimizes load speeds by 40%, ensuring a cinematic transition every time you enter the app.
              </p>
            </div>
          </div>

          <div className="bg-[#0d0d0d] border border-white/5 rounded-[4rem] p-12 space-y-10">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-cyan-500">Node Taxonomy</h3>
            <div className="space-y-8">
              <div className="flex justify-between items-end border-b border-white/5 pb-4">
                <span className="text-white uppercase text-xs font-bold">Strictly Necessary</span>
                <span className="text-cyan-500 text-[10px] font-black uppercase">Active</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-4">
                <span className="text-white uppercase text-xs font-bold">Performance Analytics</span>
                <span className="text-cyan-500 text-[10px] font-black uppercase">Active</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-4">
                <span className="text-white uppercase text-xs font-bold">Targeted Marketing</span>
                <span className="text-zinc-700 text-[10px] font-black uppercase">Disabled</span>
              </div>
            </div>
            <p className="text-[11px] text-zinc-600 leading-relaxed italic">
              Note: SPECAR does not utilize third-party tracking pixels. Our nodes are purely internal to maintain the integrity of the user interface and showroom performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieNode;