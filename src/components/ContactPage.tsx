import React from 'react';
import ContactForm from './ContactForm';
import { citiesData } from '../types';
import { MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-dark py-8">
      
      {/* OFFICES CONTACT LEDGER */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="bg-gold/5 border border-gold/20 text-gold text-[10px] font-bold px-3 py-1 rounded-none uppercase tracking-wider font-mono">
            Our Jurisdictional Chambers
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-white mt-2 tracking-tight">National Physical Offices</h2>
          <p className="text-white/40 text-xs md:text-sm mt-2 font-light">Visits by appointment only. Contact our central dispatch lines to schedule private consultations.</p>
        </div>

        {/* CITY OFFICE LEAVES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {citiesData.slice(0, 3).map((office) => (
            <div 
              key={office.slug} 
              className="bg-dark-card border border-white/10 rounded-none p-6 hover:border-gold/30 transition-all shadow-xl space-y-4"
            >
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span className="font-serif font-bold text-sm md:text-base">{office.cityName} Chambers</span>
                </div>
                <span className="bg-dark text-white/40 text-[9px] px-2 py-0.5 rounded-none border border-white/10 font-mono font-light">ACTIVE OFFICE</span>
              </div>

              <div className="space-y-3 text-xs text-white/60">
                <p className="leading-relaxed font-light"><strong className="text-white/40 font-normal">Address:</strong> {office.localOffice}</p>
                <p className="flex items-center gap-2 font-light"><strong className="text-white/40 font-normal">Tel:</strong> <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="text-white hover:text-gold font-bold">{office.phone}</a></p>
                <p className="flex items-center gap-2 font-light"><strong className="text-white/40 font-normal">Registry:</strong> <span className="font-semibold text-gold">{office.courtFocus[0]}</span></p>
              </div>

              <div className="bg-dark p-2.5 rounded-none border border-white/10 text-[10px] text-white/40 font-mono flex items-center justify-between">
                <span className="font-light">Working:</span>
                <span className="font-light">Mon - Sat (9:00 AM - 7:00 PM)</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CORE INTAKE FORMS */}
      <ContactForm />

    </div>
  );
}
