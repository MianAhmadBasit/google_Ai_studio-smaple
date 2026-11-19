import React, { useState } from 'react';
import { caseResults } from '../types';
import { Award, Landmark, CheckCircle } from 'lucide-react';

export default function CaseResultsPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Criminal Defense', 'Family Law', 'Property Litigation', 'FIA & Corporate Defense'];

  const filteredResults = selectedFilter === 'All'
    ? caseResults
    : caseResults.filter(r => r.category === selectedFilter || (selectedFilter === 'Criminal Defense' && r.category.includes('Criminal')) || (selectedFilter === 'Property Litigation' && r.category.includes('Property')));

  return (
    <div className="bg-dark py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="bg-gold/5 border border-gold/20 text-gold text-[10px] font-bold px-3 py-1 rounded-none uppercase tracking-wider">
            Chambers Success Record
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-white mt-2 tracking-tight">Landmark Trial Accomplishments</h2>
          <p className="text-white/40 text-xs md:text-sm mt-2 font-light">Explore documented legal outcomes and judgments secured by our Advocates before Pakistani courts and federal tribunals.</p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-none text-xs border transition-all ${selectedFilter === cat ? 'bg-gold text-dark border-transparent font-bold' : 'bg-dark border border-white/10 text-white/50 hover:border-white/20'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* RESULTS GRID */}
        <div className="grid md:grid-cols-2 gap-6 pt-4">
          {filteredResults.map((result) => (
            <div 
              key={result.id} 
              className="bg-dark-card border border-white/10 rounded-none p-6 hover:border-gold/30 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* CATEGORIES / META */}
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="bg-dark border border-white/10 text-white/50 text-[10px] px-2.5 py-0.5 rounded-none font-mono uppercase tracking-wide font-light">
                    {result.category}
                  </span>
                  <span className="text-[10px] text-white/30 font-mono font-light">DECISION YEAR: {result.year}</span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-white text-base md:text-lg font-serif font-bold group-hover:text-gold transition-colors leading-snug">
                    {result.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-gold/85 font-semibold">
                    <Landmark className="w-3.5 h-3.5 text-gold" />
                    <span className="font-light">{result.court}</span>
                  </div>
                </div>

                <p className="text-white/60 text-xs leading-relaxed font-light">
                  {result.description}
                </p>

              </div>

              {/* OUTCOME BOX */}
              <div className="mt-6 pt-4 border-t border-white/10 flex gap-2.5 items-start bg-dark p-3 rounded-none border border-white/10">
                <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/30 text-[9px] uppercase font-mono tracking-wider block font-light">Verifiable Court Relief</span>
                  <p className="text-gold font-serif font-bold text-xs md:text-sm mt-0.5">{result.outcome}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ACCREDITATION DISPATCH */}
        <div className="p-4 bg-gold/5 border border-gold/20 rounded-none max-w-2xl mx-auto flex gap-3.5 items-start text-center md:text-left">
          <Award className="w-6 h-6 text-gold shrink-0 mt-0.5 mx-auto md:mx-0" />
          <div className="space-y-1">
            <h5 className="text-gold font-serif font-bold text-xs">Note on Judgments & Confidentiality</h5>
            <p className="text-white/40 text-[10px] leading-relaxed font-light">
              Names of certain individual corporate entities and private family litigations have been adjusted or generalized to comply strictly with client privacy decrees, Bar ethics, and attorney-client privileges in Pakistan.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
