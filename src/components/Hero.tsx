import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  PhoneCall, 
  Lock,
  MessageSquare
} from 'lucide-react';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  const stats = [
    { label: 'Combined Legal Experience', value: '50+ Yrs', icon: Award, color: 'text-gold' },
    { label: 'Case Success Rate', value: '98.6%', icon: ShieldCheck, color: 'text-gold' },
    { label: 'Advocates in Supreme Court', value: 'Senior', icon: Users, color: 'text-gold' },
    { label: 'Consultations Completed', value: '15,000+', icon: CheckCircle, color: 'text-gold' }
  ];

  return (
    <section className="relative bg-dark py-16 lg:py-24 px-4 overflow-hidden border-b border-white/10">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-gold/3 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* HERO LEFT: TEXT AND CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 px-3.5 py-1.5 rounded-none text-gold text-xs font-semibold tracking-wider uppercase">
            <span className="flex h-2 w-2 rounded-full bg-gold animate-pulse"></span>
            <span>Pakistan's Premier Multi-Practice Law Firm</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-tight tracking-tight">
            Uncompromising Defense.<br />
            <span className="text-gold font-normal">
              Unyielding Justice.
            </span>
          </h1>

          <p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed font-light">
            Protecting your rights, families, and businesses across Pakistan. Led by elite Advocates of the Supreme Court and High Courts. We combine traditional legal excellence with cutting-edge technology to secure your future.
          </p>

          {/* BADGES OF AUTHORITY */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-xs text-white/60 border-l-2 border-gold pl-4">
            <div className="flex items-center gap-1.5">
              <span className="text-gold">✔</span>
              <span>Trial Court Experts</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-gold">✔</span>
              <span>Supreme Court Advocates</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-gold">✔</span>
              <span>Confidential & Secure Counsel</span>
            </div>
          </div>

          {/* DYNAMIC CALL TO ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => {
                setCurrentPage('consultation');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-gold hover:bg-gold-hover text-dark font-bold text-sm px-8 py-4 rounded-none shadow-xl shadow-gold/10 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Book Appointment Online</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="tel:+925122281103"
              className="border border-white/10 hover:border-gold bg-transparent text-white hover:text-dark hover:bg-gold font-bold text-sm px-8 py-4 rounded-none transition-all duration-300 flex items-center justify-center gap-2.5"
            >
              <PhoneCall className="w-5 h-5 text-gold hover:text-dark" />
              <span>Call Advocate Now</span>
            </a>
          </div>

          <div className="flex items-center gap-2.5 text-xs text-white/40 pt-2 font-light">
            <Lock className="w-3.5 h-3.5 text-gold" />
            <span>Attorney-Client Privilege strictly maintained under Pakistani Law.</span>
          </div>
        </div>

        {/* HERO RIGHT: GRAPHIC TRUST CARD & CASE DISPATCH */}
        <div className="lg:col-span-5 relative">
          <div className="relative bg-dark-card border border-white/10 rounded-none p-6 shadow-2xl shadow-black/80 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full"></div>
            
            <div className="flex justify-between items-center pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse"></div>
                <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">Active Chambers Live</span>
              </div>
              <span className="text-[11px] font-mono text-gold font-bold">202Term Active</span>
            </div>

            <div className="py-5 space-y-4">
              <h4 className="text-white font-serif font-bold text-lg">Instant Merit Evaluation</h4>
              <p className="text-white/60 text-xs leading-relaxed font-light">
                Want to know if you have a valid case? Use our automated eligibility checker backed by Pakistani civil and penal codes.
              </p>

              <div className="bg-dark rounded-none p-4 border border-white/5 space-y-3">
                <div className="flex justify-between text-xs text-white/60">
                  <span>Current Evaluation Delay:</span>
                  <span className="text-gold font-bold font-mono">0.02 Seconds</span>
                </div>
                <div className="flex justify-between text-xs text-white/60">
                  <span>Pre-Bail Eligibility Rating:</span>
                  <span className="text-gold font-bold font-mono">Instant PPC Lookup</span>
                </div>
                <div className="flex justify-between text-xs text-white/60">
                  <span>Local Court Filing Coverage:</span>
                  <span className="text-gold font-bold font-mono">All High Courts</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setCurrentPage('consultation');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full bg-transparent hover:bg-gold text-gold hover:text-dark font-bold text-xs py-3 rounded-none border border-gold/30 hover:border-transparent transition-all duration-300 flex items-center justify-center gap-1.5"
              >
                <span>Launch Case Eligibility Checker</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* STATS STRIP */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-none bg-dark-card border border-white/5 hover:border-gold/20 transition-all">
              <div className="p-2.5 bg-dark border border-white/10 shadow">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <div className="text-2xl font-serif font-semibold text-white tracking-tight">{stat.value}</div>
                <div className="text-xs text-white/60 mt-0.5 leading-snug font-light">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
