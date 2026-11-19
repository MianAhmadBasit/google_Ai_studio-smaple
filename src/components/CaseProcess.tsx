import React from 'react';
import { MessageSquare, FileText, Landmark, ShieldAlert, BadgeCheck } from 'lucide-react';

export default function CaseProcess() {
  const steps = [
    {
      step: '01',
      title: 'Strategy Consultation',
      desc: 'We analyze your legal situation (including FIR, property registries, or family disputes), review applicable PPC or CPC codes, and establish a bulletproof trial strategy.',
      icon: MessageSquare,
      color: 'border-gold'
    },
    {
      step: '02',
      title: 'Evidence Gathering & Pre-filing',
      desc: 'Our investigative associates obtain certified copies of revenue records, secure alibis, compile proof of alibis, or coordinates with FBR, SECP, or local police stations (Thana).',
      icon: FileText,
      color: 'border-gold/60'
    },
    {
      step: '03',
      title: 'Drafting Writs & Petitions',
      desc: 'Our Senior Partners draft tailored pre-arrest bail applications, written statements, partition suits, or SECP compliance papers, aligning strictly with judicial precedents.',
      icon: ShieldAlert,
      color: 'border-gold/40'
    },
    {
      step: '04',
      title: 'High-Caliber Court Advocacy',
      desc: 'We represent you aggressively before the Judges and Tribunals, presenting solid constitutional arguments, cross-examining witnesses, and dismantling opposition arguments.',
      icon: Landmark,
      color: 'border-gold/20'
    }
  ];

  return (
    <section className="bg-dark py-16 px-4 relative border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(197,160,89,0.02),transparent_40%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-gold text-xs font-bold uppercase tracking-widest">Case Lifecycle</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-light text-white mt-2 tracking-tight">How We Navigate Your Case To Victory</h3>
          <p className="text-white/70 text-sm mt-3 font-light">
            A transparent, highly coordinated timeline designed to protect you, remove procedural surprises, and fast-track court relief.
          </p>
        </div>

        {/* TIMELINE STEPS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div 
              key={index} 
              className="bg-dark-card border border-white/10 rounded-none p-6 relative group hover:border-gold/20 transition-all duration-300"
            >
              {/* STEP NUMERICAL */}
              <div className="absolute top-4 right-6 text-4xl font-extrabold text-white/5 font-mono tracking-tighter group-hover:text-gold/10 transition-colors">
                {item.step}
              </div>

              {/* ICON CONTAINER */}
              <div className="p-3 bg-dark rounded-none border border-white/10 inline-block mb-6 shadow">
                <item.icon className="w-6 h-6 text-gold" />
              </div>

              <h4 className="text-white text-lg font-serif font-bold mb-2 group-hover:text-gold transition-colors">
                {item.title}
              </h4>

              <p className="text-white/60 text-xs leading-relaxed font-light">
                {item.desc}
              </p>

              {/* CONNECTOR LINE FOR DESKTOP */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/10 z-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* TRUST ACCENT BLOCK */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-none text-emerald-400 text-xs font-semibold">
            <BadgeCheck className="w-4 h-4" />
            <span>Every proceeding stage is updated to clients via SMS, WhatsApp and secure portal logs.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
