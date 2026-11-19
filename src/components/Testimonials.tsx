import React from 'react';
import { Star, ShieldAlert, Check, ThumbsUp } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  location: string;
  quote: string;
  caseType: string;
  outcome: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: 'Muhammad Farhan',
      role: 'Director, Prime Textile Mills',
      location: 'Faisalabad',
      caseType: 'FBR Tax Appeal & SECP Audit',
      outcome: 'PKR 120M Assessment Nullified',
      quote: 'We were hit with a highly flawed audit assessment by FBR. Barrister Mikaal J. Alvi represented us at the Appellate Tribunal and got the assessment quashed within weeks. Their understanding of corporate laws is outstanding.'
    },
    {
      name: 'Shazia Parveen',
      role: 'Overseas Pakistani Homeowner',
      location: 'London / Lahore',
      caseType: 'Property Partition & Trespass',
      outcome: 'Stay Order Granted, Plot Saved',
      quote: 'Being an overseas Pakistani, local land grabbers tried to occupy my commercial plot in Gulberg. The team at Al-Mizan filed a suit in Lahore and got a permanent stay order. They handled everything without requiring me to travel. Extremely honest.'
    },
    {
      name: 'Zubair Shah',
      role: 'Managing Director, Al-Zubair Tech',
      location: 'Islamabad',
      caseType: 'FIA Cyber Crime Wing',
      outcome: 'False PECA Accusation Quashed',
      quote: 'I was maliciously dragged into an online copyright and defamation case under PECA. Al-Mizan Chambers secured immediate pre-arrest bail, and subsequently got the FIR quashed by the High Court. Absolute professionals.'
    }
  ];

  return (
    <section className="bg-dark py-16 px-4 relative border-b border-white/10">
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/3 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-gold text-xs font-bold uppercase tracking-widest">Client Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-light text-white mt-2 tracking-tight">Stories of Relief and Restored Rights</h3>
          <p className="text-white/70 text-sm mt-3 font-light">
            Read how Al-Mizan has defended overseas Pakistanis, leading corporate entities, and local families in their most challenging times.
          </p>
        </div>

        {/* TRUST SCORE BLOCK */}
        <div className="bg-dark-card border border-white/10 rounded-none p-6 mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-gold text-dark font-black text-3xl px-4 py-2.5 rounded-none shadow-lg shadow-gold/10">
              4.9
            </div>
            <div>
              <div className="flex text-gold gap-1">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-white text-sm font-bold mt-1">Excellent Client Trust Rating</p>
              <p className="text-white/40 text-xs font-light">Based on 450+ verified court cases across Pakistan registries</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/60 border-l border-white/10 pl-6 h-full py-2 font-light">
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-500" />
              <span>Verified High Court Success</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-500" />
              <span>100% Confidentiality</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-500" />
              <span>Attested Affidavits</span>
            </div>
          </div>
        </div>

        {/* TESTIMONIALS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-dark-card border border-white/10 rounded-none p-6 hover:border-gold/20 transition-all duration-300 relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* STARS */}
                <div className="flex text-gold gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3.5 h-3.5 fill-current" />)}
                </div>

                <p className="text-white/80 text-xs md:text-sm leading-relaxed italic font-light">
                  "{t.quote}"
                </p>
              </div>

              {/* CLIENT PROFILE */}
              <div className="border-t border-white/10 pt-4 mt-6 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="text-white font-serif font-bold text-xs">{t.name}</h5>
                    <p className="text-white/40 text-[10px] font-light">{t.role} — {t.location}</p>
                  </div>
                  <ThumbsUp className="w-4 h-4 text-gold/30" />
                </div>
                
                {/* CASE INFO FOOTER */}
                <div className="bg-dark rounded-none p-2.5 border border-white/5 mt-1 flex justify-between items-center text-[10px]">
                  <div>
                    <span className="text-white/40 block uppercase font-mono text-[9px] font-light">Case Type</span>
                    <span className="text-white font-semibold">{t.caseType}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-white/40 block uppercase font-mono text-[9px] font-light">Outcome</span>
                    <span className="text-emerald-400 font-bold">{t.outcome}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
