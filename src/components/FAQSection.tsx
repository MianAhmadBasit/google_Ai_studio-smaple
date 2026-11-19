import React, { useState } from 'react';
import { faqs } from '../types';
import { HelpCircle, ChevronDown, ChevronRight, Search } from 'lucide-react';

export default function FAQSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openId, setOpenId] = useState<string | null>('f1'); // Keep first open by default

  const categories = ['All', 'Criminal Defense', 'Family Law', 'Property & Civil', 'Corporate Law'];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="bg-dark py-16 px-4 border-b border-white/10">
      <div className="max-w-4xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-gold text-xs font-bold uppercase tracking-widest">Legal Knowledge</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-light text-white mt-2 tracking-tight">Frequently Asked Legal Questions</h3>
          <p className="text-white/70 text-sm mt-3 font-light">
            Read immediate professional advice regarding complex litigation, bail procedures, and regulatory disputes under Pakistan statutes.
          </p>
        </div>

        {/* SEARCH BAR & CATEGORIES */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search specific questions or topics (e.g., 'FIR', 'Bail', 'Overseas')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-card border border-white/10 hover:border-gold/30 focus:border-gold text-white placeholder-white/30 rounded-none py-3.5 pl-12 pr-4 outline-none text-sm transition-all shadow-inner"
            />
            <Search className="w-5 h-5 text-white/40 absolute left-4 top-3.5" />
          </div>

          <div className="flex flex-wrap gap-1.5 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-none text-xs font-semibold border transition-all ${selectedCategory === cat ? 'bg-gold/10 border-gold text-gold font-bold' : 'bg-transparent border-white/10 text-white/60 hover:border-white/20 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQS ACCORDION */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <div 
                key={faq.id} 
                className={`bg-dark-card border rounded-none overflow-hidden transition-all ${openId === faq.id ? 'border-gold/40 shadow-lg shadow-black/30' : 'border-white/10 hover:border-white/20'}`}
              >
                {/* QUESTION ACCORDION HEADER */}
                <button
                  onClick={() => toggleOpen(faq.id)}
                  className="w-full text-left p-5 flex justify-between items-center gap-4 text-white hover:text-gold transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="font-serif font-bold text-xs md:text-sm leading-relaxed">{faq.question}</span>
                  </div>
                  <div className="p-1 bg-dark border border-white/10 rounded-none shadow shrink-0">
                    {openId === faq.id ? (
                      <ChevronDown className="w-4 h-4 text-gold" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-white/40" />
                    )}
                  </div>
                </button>

                {/* ANSWER ACCORDION CONTENT */}
                {openId === faq.id && (
                  <div className="px-5 pb-5 pt-3 border-t border-white/10 text-xs md:text-sm text-white/70 leading-relaxed bg-dark/30 font-sans font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center p-8 bg-dark-card border border-white/10 rounded-none">
              <p className="text-white/60 text-sm font-light">No specific FAQ found matching "{searchQuery}". Try searching for general terms like "Bail" or "FBR".</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
