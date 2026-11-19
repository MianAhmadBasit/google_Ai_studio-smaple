import React from 'react';
import { citiesData, practiceAreas } from '../types';
import { MapPin, Phone, Landmark, Scale, ShieldAlert, Sparkles, PhoneCall } from 'lucide-react';

interface LocalSeoProps {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  setCurrentPage: (page: string) => void;
}

export default function LocalSeo({ selectedCity, setSelectedCity, setCurrentPage }: LocalSeoProps) {
  const currentCityData = citiesData.find(c => c.slug === selectedCity) || citiesData[0];

  const handleCityChange = (slug: string) => {
    setSelectedCity(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-dark py-16 px-4 relative">
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* SELECTOR STRIP */}
        <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-dark-card border border-white/10 rounded-none gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-gold animate-pulse" />
            <span className="text-white font-serif font-bold text-xs md:text-sm">Active City Jurisdictions:</span>
          </div>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {citiesData.map((c) => (
              <button
                key={c.slug}
                onClick={() => handleCityChange(c.slug)}
                className={`px-3 py-1.5 text-xs rounded-none border transition-all ${selectedCity === c.slug ? 'bg-gold text-dark border-transparent font-bold' : 'bg-dark border border-white/10 text-white/50 hover:border-white/20'}`}
              >
                {c.cityName}
              </button>
            ))}
          </div>
        </div>

        {/* CITY HERO BANNER */}
        <div className="grid lg:grid-cols-12 gap-8 items-center pt-4">
          
          {/* BANNER CONTENT */}
          <div className="lg:col-span-7 space-y-5">
            <span className="bg-gold/5 border border-gold/20 text-gold text-[10px] font-bold px-3 py-1 rounded-none uppercase tracking-wider inline-flex items-center gap-1 font-mono">
              <span>📍 Provincial Registry:</span>
              <span className="font-extrabold">{currentCityData.cityName}</span>
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight leading-tight">
              {currentCityData.title}
            </h2>

            <p className="text-white/70 text-sm md:text-base leading-relaxed font-light">
              {currentCityData.description} Our senior trial advocates offer uncompromised defense and strategic civil consultations directly before local registries and sessions compounds.
            </p>

            {/* LOCATION CONTACT CARDS */}
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="bg-dark-card p-4 rounded-none border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-gold font-bold text-xs">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Local Office</span>
                </div>
                <p className="text-white/60 text-[11px] leading-relaxed font-light">{currentCityData.localOffice}</p>
              </div>

              <div className="bg-dark-card p-4 rounded-none border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-gold font-bold text-xs">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Direct Line</span>
                </div>
                <a href={`tel:${currentCityData.phone.replace(/\s+/g, '')}`} className="text-white hover:text-gold font-bold text-sm block">{currentCityData.phone}</a>
                <span className="text-white/30 text-[9px] block font-light">Dispatched directly to local on-duty advocate</span>
              </div>
            </div>

            <button
              onClick={() => {
                setCurrentPage('consultation');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-gold hover:bg-gold-hover text-dark font-bold text-xs md:text-sm px-6 py-3 rounded-none shadow-lg transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact {currentCityData.cityName} Office Now</span>
            </button>
          </div>

          {/* LOCAL JURISDICTION PANEL */}
          <div className="lg:col-span-5 bg-dark-card border border-white/10 rounded-none p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-2xl"></div>
            
            <h3 className="text-white font-serif font-bold text-base flex items-center gap-2 border-b border-white/10 pb-3">
              <Landmark className="w-5 h-5 text-gold" />
              <span>Primary Local Courts Covered</span>
            </h3>

            <div className="py-4 space-y-3">
              <p className="text-white/40 text-xs font-light">We provide active vakalatnama filings and daily legal representation in the following registries:</p>
              
              <ul className="space-y-2">
                {currentCityData.courtFocus.map((court, idx) => (
                  <li key={idx} className="flex gap-2.5 items-center text-xs text-white/70">
                    <span className="w-5 h-5 bg-dark border border-white/10 rounded-none flex items-center justify-center text-[10px] text-gold font-bold font-mono">{idx+1}</span>
                    <span className="font-semibold font-light">{court}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 bg-dark border border-white/10 rounded-none flex gap-3">
              <ShieldAlert className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-serif font-bold text-xs block">Emergency Arrest Protection?</span>
                <p className="text-white/40 text-[10px] leading-relaxed mt-0.5 font-light">If local police in {currentCityData.cityName} are threatening arrest, we can arrange emergency protective bail in High Court benches immediately.</p>
              </div>
            </div>
          </div>

        </div>

        {/* LOCAL PRACTICE AREAS HIGHLIGHT */}
        <div className="border-t border-white/10 pt-12">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h4 className="text-gold text-xs font-serif font-bold uppercase tracking-wider">Local Litigations</h4>
            <h3 className="text-2xl font-serif font-light text-white mt-1">High-Converting Legal Solutions in {currentCityData.cityName}</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {practiceAreas.slice(0, 3).map((area) => (
              <div key={area.id} className="bg-dark-card border border-white/10 p-5 rounded-none space-y-3 hover:border-gold/30 transition-all">
                <div className="flex justify-between items-center">
                  <h5 className="text-white font-serif font-bold text-sm">{area.title}</h5>
                  <Scale className="w-4 h-4 text-gold" />
                </div>
                <p className="text-white/60 text-xs leading-relaxed font-light">Experienced handling before {currentCityData.cityName} tribunals. Standard procedural filing delays estimated at under 24 hours.</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
