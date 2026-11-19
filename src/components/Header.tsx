import React, { useState } from 'react';
import { 
  Scale, 
  Phone, 
  Mail, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  MessageSquare, 
  Globe, 
  Award,
  BookOpen,
  Shield,
  ArrowRight
} from 'lucide-react';
import { practiceAreas, citiesData } from '../types';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

export default function Header({ 
  currentPage, 
  setCurrentPage, 
  selectedCity, 
  setSelectedCity 
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPracticeDropdownOpen, setIsPracticeDropdownOpen] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchBox, setShowSearchBox] = useState(false);

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    setIsPracticeDropdownOpen(false);
    setIsCityDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCitySelect = (slug: string) => {
    setSelectedCity(slug);
    setCurrentPage('local-seo');
    setIsCityDropdownOpen(false);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeClass = (page: string) => 
    currentPage === page 
      ? "text-gold font-semibold border-b-2 border-gold pb-1" 
      : "text-white/80 hover:text-gold transition-colors duration-200 pb-1";

  return (
    <header className="w-full bg-dark border-b border-white/10 z-50">
      {/* REQUIRED BANNER: AI INNOVATION LAB BANNER AT THE TOP OF THE SITE */}
      <div id="top-banner" className="w-full bg-gradient-to-r from-dark to-dark-card relative overflow-hidden py-3 px-4 border-b border-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.08),transparent_60%)]"></div>
        {/* Futuristic circuit grid lines behind banner content */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 gap-3">
          <div className="flex items-center gap-3">
            <span className="bg-gold/20 text-gold border border-gold/30 font-bold px-2 py-0.5 rounded text-[10px] tracking-wider uppercase shadow-md shadow-gold/10">
              Tech Partnership
            </span>
            <div className="flex flex-col">
              <h2 className="text-white text-sm md:text-base font-extrabold tracking-wide flex items-center gap-2">
                <span className="text-gold font-mono">⚡</span> AI INNOVATION LAB
              </h2>
              <p className="text-white/60 text-[10px] md:text-xs font-light">Future of Intelligence — Integrated Smart Legal Counsel</p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-xs text-white/70">
              <Shield className="w-3.5 h-3.5 text-gold" />
              <span>Automated Eligibility Checking</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white/70">
              <Award className="w-3.5 h-3.5 text-gold" />
              <span>98.6% Precision Qualifying</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => handleNavClick('consultation')}
              className="bg-gold hover:bg-gold-hover text-dark text-xs font-bold px-3 py-1.5 rounded transition-all duration-300 shadow-lg shadow-gold/10 hover:scale-105 flex items-center gap-1"
            >
              <span>Try AI Case Checker</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* TOP HEADER UTILITY BAR */}
      <div className="bg-[#050505] border-b border-white/5 text-white/60 py-2 px-4 text-xs font-light">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:+925122281103" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span className="hidden sm:inline">Call Toll-Free:</span> +92 (51) 2228 1103
            </a>
            <a href="mailto:consult@almizan.law" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Mail className="w-3.5 h-3.5 text-gold" />
              <span className="hidden sm:inline">Email Support:</span> consult@almizan.law
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-white/40">⏰ Mon - Sat: 9:00 AM - 7:00 PM</span>
            <div className="flex items-center gap-2 border-l border-white/10 pl-4">
              <span className="text-white/40">Region:</span>
              <button 
                onClick={() => handleCitySelect('islamabad')} 
                className="hover:text-gold transition-colors font-medium text-gold"
              >
                Pakistan (National)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* STICKY HEADER HERO BAR */}
      <div className="sticky top-0 bg-dark-card/95 backdrop-blur-md border-b border-white/10 transition-all duration-300 py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* LOGO */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="border-2 border-gold w-10 h-10 flex items-center justify-center bg-transparent group-hover:scale-105 transition-all duration-300">
              <span className="text-gold font-serif text-xl font-bold leading-none">M</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-white text-base md:text-lg font-serif tracking-tight font-semibold">MALIK & ASSOCIATES</span>
              </div>
              <span className="text-[8px] tracking-[0.25em] text-gold uppercase font-mono">ADVOCATES & LEGAL CONSULTANTS</span>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-6">
            <button onClick={() => handleNavClick('home')} className={activeClass('home')}>Home</button>
            <button onClick={() => handleNavClick('about')} className={activeClass('about')}>About Us</button>

            {/* Practice Areas Dropdown / Mega Menu */}
            <div className="relative">
              <button 
                onClick={() => {
                  setIsPracticeDropdownOpen(!isPracticeDropdownOpen);
                  setIsCityDropdownOpen(false);
                }}
                className="flex items-center gap-1 text-white/80 hover:text-gold transition-colors duration-200 pb-1"
              >
                <span>Practice Areas</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {isPracticeDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-[560px] bg-dark-card border border-white/10 rounded-none shadow-2xl shadow-black p-5 grid grid-cols-2 gap-4 z-50 animate-fadeIn">
                  <div className="col-span-2 pb-2 border-b border-white/10 mb-2">
                    <h4 className="text-gold font-serif font-bold text-xs uppercase tracking-wider">Expertise Segments</h4>
                  </div>
                  {practiceAreas.map((area) => (
                    <div 
                      key={area.id}
                      onClick={() => {
                        handleNavClick('practice-areas');
                        setIsPracticeDropdownOpen(false);
                      }}
                      className="p-2.5 hover:bg-white/5 rounded-none cursor-pointer transition-all border border-transparent hover:border-gold/20"
                    >
                      <h5 className="text-white text-sm font-semibold hover:text-gold transition-colors flex items-center justify-between">
                        <span>{area.title}</span>
                      </h5>
                      <p className="text-white/60 text-[11px] mt-1 line-clamp-1">{area.description}</p>
                    </div>
                  ))}
                  <div className="col-span-2 pt-2 border-t border-white/10 mt-2 text-center">
                    <button 
                      onClick={() => handleNavClick('practice-areas')}
                      className="text-gold text-xs font-semibold hover:underline flex items-center justify-center gap-1 mx-auto"
                    >
                      <span>Explore Full Directory</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* City Jurisdictions Dropdown */}
            <div className="relative">
              <button 
                onClick={() => {
                  setIsCityDropdownOpen(!isCityDropdownOpen);
                  setIsPracticeDropdownOpen(false);
                }}
                className="flex items-center gap-1 text-white/80 hover:text-gold transition-colors duration-200 pb-1"
              >
                <span>City Chambers</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {isCityDropdownOpen && (
                <div className="absolute left-0 mt-3 w-64 bg-dark-card border border-white/10 rounded-none shadow-2xl shadow-black p-4 grid grid-cols-2 gap-2 z-50 animate-fadeIn">
                  <div className="col-span-2 pb-1 border-b border-white/10 mb-1">
                    <h4 className="text-gold font-serif font-bold text-[10px] uppercase tracking-wider">Local Offices</h4>
                  </div>
                  {citiesData.map((city) => (
                    <button
                      key={city.slug}
                      onClick={() => handleCitySelect(city.slug)}
                      className="text-left text-xs text-white/70 hover:text-gold hover:bg-white/5 p-1.5 transition-all"
                    >
                      {city.cityName}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => handleNavClick('lawyers')} className={activeClass('lawyers')}>Our Advocates</button>
            <button onClick={() => handleNavClick('case-results')} className={activeClass('case-results')}>Case Results</button>
            <button onClick={() => handleNavClick('blog')} className={activeClass('blog')}>Legal Resources</button>
            <button onClick={() => handleNavClick('faq')} className={activeClass('faq')}>FAQ</button>
            <button onClick={() => handleNavClick('contact')} className={activeClass('contact')}>Contact</button>
          </nav>

          {/* ACTION BUTTONS */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => setShowSearchBox(!showSearchBox)} 
              className="p-2 text-white/60 hover:text-gold hover:bg-white/5 rounded-full transition-all"
              title="Search Site"
            >
              <Search className="w-4 h-4" />
            </button>
            <button 
              onClick={() => handleNavClick('consultation')}
              className="bg-transparent border border-gold text-gold px-6 py-2.5 text-xs font-bold hover:bg-gold hover:text-dark transition-all duration-300"
            >
              <span>BOOK CONSULTATION</span>
            </button>
          </div>

          {/* MOBILE MENU TOGGLER */}
          <div className="flex items-center gap-3 lg:hidden">
            <button 
              onClick={() => setShowSearchBox(!showSearchBox)} 
              className="p-2 text-white/60 hover:text-gold hover:bg-white/5 rounded-full transition-all"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="p-2 text-white/60 hover:text-gold hover:bg-white/5 rounded-lg transition-all"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* SEARCH BOX EXPANDABLE */}
      {showSearchBox && (
        <div className="bg-dark-card border-b border-white/10 py-4 px-4 transition-all duration-300">
          <div className="max-w-2xl mx-auto flex gap-2">
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="Search legal practice areas, lawyers, procedures (e.g., 'Bail process', 'SECP', 'Custody')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#050505] border border-white/10 hover:border-gold/40 focus:border-gold text-white placeholder-gray-500 rounded-none py-2.5 pl-10 pr-4 outline-none text-sm transition-all"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleNavClick('faq');
                    setShowSearchBox(false);
                  }
                }}
              />
              <Search className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" />
            </div>
            <button 
              onClick={() => {
                handleNavClick('faq');
                setShowSearchBox(false);
              }}
              className="bg-gold hover:bg-gold-hover text-dark font-bold px-4 py-2.5 rounded-none text-sm transition-all"
            >
              Search
            </button>
            <button 
              onClick={() => setShowSearchBox(false)}
              className="border border-white/10 hover:border-white/20 text-white/60 hover:text-white px-3 py-2.5 rounded-none text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* MOBILE DRAWER MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-full bg-dark border-b border-white/10 absolute left-0 right-0 z-40 p-5 space-y-4 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={() => handleNavClick('home')} 
              className={`text-left p-2.5 rounded-none text-sm font-medium ${currentPage === 'home' ? 'bg-gold/10 text-gold font-bold' : 'text-white/80 hover:bg-white/5'}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className={`text-left p-2.5 rounded-none text-sm font-medium ${currentPage === 'about' ? 'bg-gold/10 text-gold font-bold' : 'text-white/80 hover:bg-white/5'}`}
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavClick('practice-areas')} 
              className={`text-left p-2.5 rounded-none text-sm font-medium ${currentPage === 'practice-areas' ? 'bg-gold/10 text-gold font-bold' : 'text-white/80 hover:bg-white/5'}`}
            >
              Practice Areas
            </button>
            <button 
              onClick={() => handleNavClick('lawyers')} 
              className={`text-left p-2.5 rounded-none text-sm font-medium ${currentPage === 'lawyers' ? 'bg-gold/10 text-gold font-bold' : 'text-white/80 hover:bg-white/5'}`}
            >
              Our Advocates
            </button>
            <button 
              onClick={() => handleNavClick('case-results')} 
              className={`text-left p-2.5 rounded-none text-sm font-medium ${currentPage === 'case-results' ? 'bg-gold/10 text-gold font-bold' : 'text-white/80 hover:bg-white/5'}`}
            >
              Case Results
            </button>
            <button 
              onClick={() => handleNavClick('blog')} 
              className={`text-left p-2.5 rounded-none text-sm font-medium ${currentPage === 'blog' ? 'bg-gold/10 text-gold font-bold' : 'text-white/80 hover:bg-white/5'}`}
            >
              Legal Blog
            </button>
            <button 
              onClick={() => handleNavClick('faq')} 
              className={`text-left p-2.5 rounded-none text-sm font-medium ${currentPage === 'faq' ? 'bg-gold/10 text-gold font-bold' : 'text-white/80 hover:bg-white/5'}`}
            >
              FAQ
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className={`text-left p-2.5 rounded-none text-sm font-medium ${currentPage === 'contact' ? 'bg-gold/10 text-gold font-bold' : 'text-white/80 hover:bg-white/5'}`}
            >
              Contact Us
            </button>
          </div>

          <div className="border-t border-white/10 pt-4">
            <h4 className="text-gold font-serif font-bold text-[10px] uppercase tracking-wider mb-2">City Jurisdictions</h4>
            <div className="grid grid-cols-2 gap-2">
              {citiesData.map((city) => (
                <button
                  key={city.slug}
                  onClick={() => handleCitySelect(city.slug)}
                  className="text-left text-xs text-white/60 hover:text-gold py-1"
                >
                  📍 {city.cityName}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
            <button 
              onClick={() => handleNavClick('consultation')}
              className="w-full bg-gold hover:bg-gold-hover text-dark font-bold text-center py-3 rounded-none text-sm transition-all"
            >
              Book Free Consultation
            </button>
            <a 
              href="https://wa.me/923001234567" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-center py-3 rounded-none text-sm transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.51 5.284 3.508 8.49-.005 6.66-5.341 11.999-11.952 11.999-2.005-.001-3.973-.505-5.716-1.463L0 24zm6.09-3.235c1.621.962 3.2 1.488 4.909 1.489 5.485 0 9.947-4.461 9.951-9.949.002-2.659-1.031-5.159-2.909-7.04C16.218 3.385 13.725 2.35 11.01 2.35 5.525 2.35 1.063 6.811 1.059 12.299c0 1.748.468 3.456 1.353 4.962L1.383 21.851l4.764-1.251zM16.5 13.3c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.4.1-.1.2-.5.7-.6.8-.1.1-.2.1-.4 0-.6-.3-1.3-.6-1.8-1.1-.4-.4-.7-.9-.8-1.1-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1 0-.3-.1-.4-.1-.2-.4-.9-.5-1.2-.1-.3-.2-.3-.3-.3h-.3c-.2 0-.5.1-.7.3-.2.2-.8.8-.8 2 0 1.2.9 2.4 1 2.5.1.1 1.7 2.6 4.1 3.6.6.2 1.1.4 1.4.5.6.2 1.1.2 1.5.1.4-.1 1.2-.5 1.4-1 .2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3z"/>
              </svg>
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
