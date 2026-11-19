import React, { useState } from 'react';
import { practiceAreas } from '../types';
import { Shield, Heart, Home, Briefcase, Percent, Globe, Scale, ArrowRight, BookOpen, AlertTriangle } from 'lucide-react';

interface PracticeAreasPageProps {
  setCurrentPage: (page: string) => void;
}

export default function PracticeAreasPage({ setCurrentPage }: PracticeAreasPageProps) {
  const [selectedArea, setSelectedArea] = useState<string>('criminal-defense');

  const getIcon = (name: string) => {
    switch(name) {
      case 'Shield': return <Shield className="w-6 h-6 text-gold" />;
      case 'Heart': return <Heart className="w-6 h-6 text-gold" />;
      case 'Home': return <Home className="w-6 h-6 text-gold" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-gold" />;
      case 'Percent': return <Percent className="w-6 h-6 text-gold" />;
      case 'Globe': return <Globe className="w-6 h-6 text-gold" />;
      default: return <Scale className="w-6 h-6 text-gold" />;
    }
  };

  const activeAreaObj = practiceAreas.find(a => a.id === selectedArea) || practiceAreas[0];

  return (
    <div className="bg-dark py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="bg-gold/5 border border-gold/20 text-gold text-[10px] font-bold px-3 py-1 rounded-none uppercase tracking-wider font-mono">
            Practice Jurisdictions
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-white mt-2 tracking-tight">Full Practice Directory</h2>
          <p className="text-white/40 text-xs md:text-sm mt-2 font-light">Explore complete details of our trial litigation and regulatory compliance practices under Pakistan statutes.</p>
        </div>

        {/* INTERACTIVE BENTO LAYOUT */}
        <div className="grid lg:grid-cols-12 gap-8 items-start pt-4">
          
          {/* LEFT: SELECTOR PANEL */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-white/40 font-mono text-[10px] uppercase font-bold tracking-wider block">Select Practice Area</span>
            
            <div className="space-y-2">
              {practiceAreas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setSelectedArea(area.id)}
                  className={`w-full text-left p-4 rounded-none border flex items-center justify-between transition-all ${selectedArea === area.id ? 'bg-dark border-gold shadow-lg shadow-black/40' : 'bg-dark-card border-white/10 text-white/50 hover:border-white/20'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-dark border border-white/10 rounded-none text-gold">
                      {getIcon(area.icon)}
                    </div>
                    <div>
                      <h4 className="text-white text-xs md:text-sm font-serif font-bold">{area.title}</h4>
                      <h5 className="text-gold text-[10px] font-bold font-urdu font-light">{area.urduTitle}</h5>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 text-white/30 transition-transform ${selectedArea === area.id ? 'translate-x-1 text-gold' : ''}`} />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: COMPREHENSIVE DETAIL SCREEN */}
          <div className="lg:col-span-8 bg-dark-card border border-white/10 rounded-none p-6 md:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-2xl"></div>
            
            {/* DETAILS CONTAINER */}
            <div className="space-y-6">
              <div className="flex justify-between items-start gap-4 border-b border-white/10 pb-5">
                <div className="space-y-1">
                  <span className="bg-dark text-white/40 text-[10px] uppercase font-mono px-2 py-0.5 rounded-none border border-white/10 font-light">{activeAreaObj.category} JURISDICTION</span>
                  <h3 className="text-white font-serif font-bold text-xl md:text-2xl mt-1.5">{activeAreaObj.title}</h3>
                  <h4 className="text-gold text-xs md:text-sm font-bold font-urdu tracking-wide font-light">{activeAreaObj.urduTitle}</h4>
                </div>
                <div className="p-4 bg-dark border border-white/10 rounded-none shadow shrink-0 text-gold">
                  {getIcon(activeAreaObj.icon)}
                </div>
              </div>

              {/* DESCRIPTION TEXT */}
              <div className="space-y-4">
                <h5 className="text-white font-serif font-bold text-sm flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-gold" />
                  <span>Substantive Strategy Overview</span>
                </h5>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed whitespace-pre-line font-light">
                  {activeAreaObj.extendedDescription}
                </p>
              </div>

              {/* STATUTORY RULES HIGHLIGHT */}
              <div className="p-4 bg-dark border border-white/10 rounded-none flex gap-3.5 items-start">
                <AlertTriangle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-gold font-serif font-bold text-xs">Applicable Precedents & Civil Codes</h5>
                  <p className="text-white/40 text-xs mt-1 leading-relaxed font-light">
                    Our litigations strictly adhere to parameters defined by the **Pakistan Penal Code (PPC)**, the **Criminal Procedure Code (CrPC) 1898**, or the **Companies Act, 2017**, depending on active proceedings. We provide complete drafting of briefs, writs, stay petitions, and appeals.
                  </p>
                </div>
              </div>

              {/* CORE HIGHLIGHT TAGS */}
              <div className="space-y-2 pt-2">
                <span className="text-white/30 font-mono text-[9px] uppercase font-bold tracking-wider block font-light">Procedural Keywords:</span>
                <div className="flex flex-wrap gap-2">
                  {activeAreaObj.keywords.map((kw, i) => (
                    <span key={i} className="bg-dark text-white/60 border border-white/10 text-[10px] font-mono px-3 py-1 rounded-none font-light">
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* CALL TO ACTION */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-white text-xs font-bold">Have an active legal issue regarding this?</p>
                  <p className="text-white/40 text-[11px] mt-0.5 font-light">Contact us today to lock a consultation with our specialty partners.</p>
                </div>
                <button
                  onClick={() => {
                    setCurrentPage('consultation');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-gold hover:bg-gold-hover text-dark font-bold text-xs px-5 py-2.5 rounded-none shadow-md transition-all shrink-0"
                >
                  Consult Specialists
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
