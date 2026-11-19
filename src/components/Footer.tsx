import React, { useState } from 'react';
import { 
  Scale, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle, 
  Globe, 
  Lock,
  ExternalLink,
  ShieldCheck,
  ChevronUp
} from 'lucide-react';
import { citiesData } from '../types';

interface FooterProps {
  setCurrentPage: (page: string) => void;
  setSelectedCity: (city: string) => void;
}

export default function Footer({ setCurrentPage, setSelectedCity }: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activeMapIndex, setActiveMapIndex] = useState(0);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setEmail('');
  };

  const handleCitySelect = (slug: string) => {
    setSelectedCity(slug);
    setCurrentPage('local-seo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mapLocations = [
    { name: 'Lahore Head Office', address: '32-A, Main Boulevard, Gulberg III, Lahore', mapUrl: 'https://maps.google.com/?q=Gulberg+III+Lahore' },
    { name: 'Islamabad Federal Chambers', address: 'Al-Anayat Mall, G-11 Markaz, Islamabad', mapUrl: 'https://maps.google.com/?q=G-11+Markaz+Islamabad' },
    { name: 'Karachi Regional Chambers', address: 'Block 9, KDA Scheme 5, Clifton, Karachi', mapUrl: 'https://maps.google.com/?q=Clifton+Karachi' }
  ];

  return (
    <footer className="bg-dark text-white/50 pt-16 border-t border-white/10 relative z-10">
      
      {/* UPPER NEWSLETTER & MAP */}
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
        
        {/* NEWSLETTER CAPTURE */}
        <div className="lg:col-span-5 space-y-5">
          <div className="flex items-center gap-2 text-white">
            <Scale className="text-gold w-5 h-5" />
            <h4 className="font-serif font-light text-base md:text-lg">Al-Mizan Law Dispatch</h4>
          </div>
          <p className="text-xs leading-relaxed max-w-sm text-white/60 font-light">
            Subscribe to receive our monthly analytical audits of landmark Supreme Court judgments, new PPC revisions, and SECP/FBR tax alerts.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
              <input 
                type="email" 
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-dark border border-white/10 rounded-none px-3.5 py-2.5 text-white text-xs outline-none focus:border-gold transition-all placeholder-white/30"
              />
              <button 
                type="submit"
                className="bg-gold hover:bg-gold-hover text-dark px-4 py-2.5 rounded-none text-xs font-bold shadow transition-all flex items-center gap-1 shrink-0"
              >
                <span>Subscribe</span>
                <Send className="w-3 h-3" />
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-2 text-emerald-400 text-xs bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-none max-w-sm">
              <CheckCircle className="w-4 h-4 shrink-0" />
              <span>Awesome! You are subscribed to our monthly legal dispatch.</span>
            </div>
          )}
        </div>

        {/* INTERACTIVE OFFICES MAP */}
        <div className="lg:col-span-7 bg-dark-card border border-white/10 rounded-none p-5 shadow-2xl relative overflow-hidden">
          <div className="flex justify-between items-center pb-3 border-b border-white/10 mb-4 gap-3 flex-wrap">
            <span className="text-white font-bold text-xs">📍 Court Registry Proximity Maps</span>
            <div className="flex gap-1.5 flex-wrap">
              {mapLocations.map((loc, i) => (
                <button
                  key={i}
                  onClick={() => setActiveMapIndex(i)}
                  className={`px-2.5 py-1 text-[10px] rounded-none border font-bold transition-all ${activeMapIndex === i ? 'bg-gold text-dark border-transparent' : 'bg-dark border border-white/10 text-white/50 hover:border-white/20'}`}
                >
                  {loc.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-dark border border-white/10 rounded-none p-4 flex justify-between items-center gap-4">
              <div className="space-y-0.5">
                <span className="text-white/40 text-[9px] uppercase font-mono tracking-wider block font-light">{mapLocations[activeMapIndex].name}</span>
                <p className="text-white text-xs font-serif font-bold">{mapLocations[activeMapIndex].address}</p>
              </div>
              <a 
                href={mapLocations[activeMapIndex].mapUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-dark hover:bg-gold text-white/60 hover:text-dark border border-white/10 hover:border-transparent rounded-none shadow transition-all shrink-0 flex items-center gap-1 text-[10px] font-bold"
              >
                <span>Navigate</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Simulated Satellite Map Grid Frame */}
            <div className="relative aspect-[16/6] bg-dark border border-white/10 rounded-none overflow-hidden shadow-inner flex items-center justify-center">
              {/* Fake satellite view backdrop */}
              <div className="absolute inset-0 bg-[#061026] opacity-30 bg-[radial-gradient(#C5A059_1px,transparent_1px)] bg-[size:16px_16px]"></div>
              {/* Overlay graphics resembling coordinate pins */}
              <div className="relative z-10 flex flex-col items-center gap-1.5 text-center">
                <div className="relative">
                  <span className="absolute inset-0 w-8 h-8 bg-gold/20 rounded-full animate-ping"></span>
                  <div className="w-6 h-6 bg-gold rounded-full border-2 border-dark flex items-center justify-center font-bold text-[9px] text-dark shadow">
                    ⚖
                  </div>
                </div>
                <span className="text-[10px] text-white/80 font-mono tracking-wider">COURT JURISDICTION BOUNDARIES IN VIEW</span>
                <span className="text-white/40 text-[9px] font-mono">LAT: 31.5204° N | LON: 74.3587° E (ESTABLISHED REGISTRY)</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* MID SITEMAP & SERVICES LINKS */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 border-b border-white/10">
        
        {/* LOGO DESCRIPTION */}
        <div className="col-span-2 space-y-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="bg-gold p-2 rounded-none text-dark shadow-lg shadow-gold/10">
              <Scale className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-serif font-bold text-sm tracking-wide">AL-MIZAN ADVOCATES</span>
              <span className="text-[9px] text-white/40 tracking-wider font-mono">LEGAL CHAMBERS OF PAKISTAN</span>
            </div>
          </div>
          <p className="text-xs leading-relaxed text-white/50 max-w-sm font-light">
            Al-Mizan is a full-service corporate and trial law firm. We handle complex civil petitions, commercial arbitration, family disputes, and supreme court trials across all provincial registers.
          </p>
          <div className="flex gap-2 text-xs text-white/40 font-mono items-center font-light">
            <Lock className="w-3.5 h-3.5 text-gold" />
            <span>Encrypted with 256-Bit SSL protection</span>
          </div>
        </div>

        {/* JURISDICTIONS SITEMAP */}
        <div className="space-y-4">
          <h5 className="text-white text-xs font-serif font-bold uppercase tracking-wider border-b border-white/10 pb-1.5">Site Directory</h5>
          <ul className="space-y-2 text-xs font-light">
            {['Home', 'About Us', 'Our Advocates', 'Case Results', 'Legal Blog', 'FAQ', 'Contact Us'].map((page) => (
              <li key={page}>
                <button 
                  onClick={() => handleNavClick(page === 'Our Advocates' ? 'lawyers' : page === 'Legal Blog' ? 'blog' : page === 'About Us' ? 'about' : page === 'Contact Us' ? 'contact' : page.toLowerCase())}
                  className="hover:text-gold transition-colors"
                >
                  {page}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* CITIES JURISDICTIONS */}
        <div className="space-y-4">
          <h5 className="text-white text-xs font-serif font-bold uppercase tracking-wider border-b border-white/10 pb-1.5">City Chambers</h5>
          <ul className="space-y-2 text-xs grid grid-cols-2 gap-x-4 font-light">
            {citiesData.slice(0, 10).map((city) => (
              <li key={city.slug} className="py-0.5">
                <button 
                  onClick={() => handleCitySelect(city.slug)}
                  className="hover:text-gold transition-colors text-left"
                >
                  📍 {city.cityName}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* TRUST BADGE ACCENT */}
        <div className="col-span-2 md:col-span-1 space-y-4">
          <h5 className="text-white text-xs font-serif font-bold uppercase tracking-wider border-b border-white/10 pb-1.5">Affiliations</h5>
          <div className="space-y-2 bg-dark-card border border-white/10 p-4 rounded-none text-[10px] text-white/50 leading-relaxed font-mono">
            <div className="flex items-center gap-1.5 text-gold font-bold mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>BAR REGISTERED</span>
            </div>
            <span>Licensed by Pakistan Bar Council, Lahore High Court Bar Association & Sindh High Court Bar.</span>
          </div>
        </div>

      </div>

      {/* LOWER COPYRIGHTS BAR */}
      <div className="bg-black py-6 px-4 text-xs font-mono">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-white/30 font-light">
          <div>
            <p>© 2026 Al-Mizan Advocates & Corporate Solicitors. All Rights Reserved.</p>
            <p className="text-[10px] mt-0.5 text-white/20">Created in collaboration with AI Innovation Lab.</p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => handleNavClick('privacy')} className="hover:text-gold transition-colors">Privacy Policy</button>
            <button onClick={() => handleNavClick('terms')} className="hover:text-gold transition-colors">Terms of Service</button>
            <span>v2.4.1 SECURE</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
