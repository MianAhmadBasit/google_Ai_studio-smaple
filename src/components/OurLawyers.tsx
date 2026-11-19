import React from 'react';
import { lawyers } from '../types';
import { Award, GraduationCap, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';

interface OurLawyersProps {
  setCurrentPage: (page: string) => void;
}

export default function OurLawyers({ setCurrentPage }: OurLawyersProps) {
  return (
    <section id="our-lawyers-section" className="bg-dark py-16 px-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-gold text-xs font-bold uppercase tracking-widest">Our Senior Partners</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-light text-white mt-2 tracking-tight">The Legal Minds Leading Al-Mizan</h3>
          <p className="text-white/70 text-sm mt-3 font-light">
            Our advocates are members of prestigious bars globally, including Lincoln's Inn (London), Harvard Law Association, and the Supreme Court Bar of Pakistan.
          </p>
        </div>

        {/* LAWYERS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lawyers.map((lawyer) => (
            <div 
              key={lawyer.id} 
              className="bg-dark-card border border-white/10 rounded-none overflow-hidden hover:border-gold/30 transition-all duration-300 hover:shadow-2xl hover:shadow-black group flex flex-col justify-between"
            >
              <div>
                {/* PHOTO CONTAINER */}
                <div className="relative aspect-[4/5] overflow-hidden bg-dark border-b border-white/10">
                  <img 
                    src={lawyer.image} 
                    alt={lawyer.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                  
                  {/* FLOATING LOCATION */}
                  <div className="absolute bottom-4 left-4 bg-dark-card/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded-none text-[10px] text-white font-bold tracking-wider uppercase flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gold" />
                    <span>{lawyer.location}</span>
                  </div>
                </div>

                {/* INFO CONTENT */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h4 className="text-white text-xl font-serif font-bold group-hover:text-gold transition-colors">
                      {lawyer.name}
                    </h4>
                    <p className="text-gold/90 text-xs font-semibold tracking-wide">
                      {lawyer.role}
                    </p>
                  </div>

                  <p className="text-white/60 text-xs leading-relaxed line-clamp-3 italic font-light">
                    "{lawyer.bio}"
                  </p>

                  <div className="space-y-2 border-t border-white/10 pt-4">
                    <div className="flex gap-2 text-xs text-white/70 font-light">
                      <GraduationCap className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>{lawyer.education}</span>
                    </div>
                    <div className="flex gap-2 text-xs text-white/70 font-light">
                      <Award className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>{lawyer.experience}</span>
                    </div>
                  </div>

                  {/* SPECIALITIES */}
                  <div className="space-y-2">
                    <h5 className="text-[10px] font-bold text-white/40 uppercase tracking-wider font-mono">Expert Jurisdictions:</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {lawyer.specialties.map((spec, i) => (
                        <span key={i} className="bg-dark border border-white/10 text-[10px] text-white/70 px-2 py-0.5 rounded-none flex items-center gap-1">
                          <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />
                          <span>{spec}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* BOOK SPECIFIC PARTNER CTA */}
              <div className="p-6 pt-0 mt-auto">
                <button
                  onClick={() => {
                    setCurrentPage('consultation');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full bg-transparent hover:bg-gold text-white/80 hover:text-dark font-bold text-xs py-3 rounded-none border border-white/10 hover:border-transparent transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Request Consultation with {lawyer.name.split(' ')[1]}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
