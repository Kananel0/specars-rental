import React from 'react';

const DataPrivacy = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-bricolage pt-40 pb-32 px-[8%] lg:px-[12%] relative overflow-hidden">
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] -z-10" />

      <div className="max-w-5xl relative z-10">
        <span className="text-cyan-500 font-black tracking-[0.5em] uppercase text-[10px] mb-4 block underline decoration-cyan-500/30 underline-offset-8">Privacy Protocol // Stealth First</span>
        <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter mb-16 leading-[0.8]">
          Data <br /><span className="text-cyan-500">Privacy</span>
        </h1>

        <div className="space-y-24">
          <section>
            <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 text-white">The Biometric Shield</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-zinc-400 text-sm leading-relaxed">
              <p>
                Our "Request Access" system utilizes advanced biometric verification. This data is processed through a proprietary "Zero-Knowledge Proof" protocol. This means we verify you are you without ever storing your actual biological signature on our central servers.
              </p>
              <p>
                Once a rental session is initiated, your biometric key is moved to the vehicle's local hardware node. Upon return and final diagnostic scan, the key is wiped using a Department of Defense-standard 7-pass overwrite.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 text-white">Telemetry & Movement</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-zinc-400 text-sm leading-relaxed">
              <p>
                We collect "High-Frequency Telemetry" to ensure the safety of our machines. This includes engine RPM, brake wear, and suspension load. We do not correlate this data with your personal identity for any purpose other than maintenance and safety.
              </p>
              <p>
                Your GPS history is classified as "Level 5 Sensitive." It is only accessed in the event of an accident or theft. We do not provide movement data to marketing agencies, insurance brokers, or third-party analytic firms. Your location is your business.
              </p>
            </div>
          </section>

          <section className="bg-[#0d0d0d] p-12 rounded-[4rem] border border-white/5">
            <h2 className="text-xl font-black uppercase tracking-widest mb-6 text-cyan-500">Your Right to Stealth</h2>
            <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
              Under the GDPR and UK Data Protection Act 2018, you have the right to request a full "Data Purge." This includes all historical rental records, communication with our Mayfair Concierge, and digital footprints within our showroom app. To initiate a purge, contact our Data Stealth Officer at privacy@specars.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DataPrivacy;