import React from 'react';
import { Scale, ShieldCheck, Award, Landmark } from 'lucide-react';

export default function AboutPage() {
  const coreValues = [
    { title: 'Absolute Integrity', desc: 'No false promises. We provide realistic, honest merit analyses under Pakistani law and stand unyielding during trials.', icon: ShieldCheck },
    { title: 'Relentless Advocacy', desc: 'We represent clients aggressively before judicial panels, specialized tribunals, High Courts and the Supreme Court.', icon: Scale },
    { title: 'AI-Enabled Precision', desc: 'Partnering with the AI Innovation Lab, we leverage machine learning algorithms to perform comprehensive PPC case researches.', icon: Award }
  ];

  const milestones = [
    { year: '2001', title: 'Chambers Founded', desc: 'Al-Mizan Advocates set up its first trial office compound in Lahore, focusing on civil and criminal defense cases.' },
    { year: '2009', title: 'High Court & Federal expansions', desc: 'Expanded physical branches to Islamabad and Karachi, establishing deep judicial trial experience.' },
    { year: '2018', title: 'Corporate Registry Integration', desc: 'Began representing multinational giants, registering over 350 companies with SECP and managing FBR audits.' },
    { year: '2026', title: 'AI Innovation Lab Partnership', desc: 'Fully integrated predictive AI algorithms, releasing automated merit-qualifiers to the public.' }
  ];

  return (
    <div className="bg-dark py-16 px-4 space-y-16">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* HERO INTRO */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="bg-gold/5 border border-gold/20 text-gold text-[10px] font-bold px-3 py-1 rounded-none uppercase tracking-wider">
              About Al-Mizan Advocates
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight leading-tight">
              A High-Caliber Trial Legacy <br />
              <span className="text-gold font-normal">
                Meets Futuristic Legal AI
              </span>
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed font-light">
              Established in 2001, Al-Mizan Legal Chambers has risen to become Pakistan's most respected full-service law firm. We serve individuals, families, and high-net-worth commercial companies across all provinces, providing trial advocacy that is highly precise and strategically superior.
            </p>
            <p className="text-white/60 text-xs md:text-sm leading-relaxed font-light">
              In 2026, we made history by partnering with the **AI Innovation Lab** to deploy specialized, automated algorithms that cross-reference active court files, civil procedures (CPC), and criminal codes (PPC), offering clients instant merit qualifiers and reducing standard litigation research delays by 92%.
            </p>
          </div>

          <div className="lg:col-span-5 bg-dark-card border border-white/10 rounded-none p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-xl"></div>
            <Landmark className="w-12 h-12 text-gold mb-4" />
            <h3 className="text-white font-serif font-bold text-lg mb-2">Our Mission & Mandate</h3>
            <p className="text-white/60 text-xs leading-relaxed font-light">
              To defend our clients rights aggressively, uphold the balance of justice (Mizan), and deliver elite professional representation across Pakistan, backed by unmatched academic credentials and modern AI tools.
            </p>
            <ul className="space-y-2 mt-4 text-xs text-white/80 font-light">
              {['Licensed Supreme Court Advocacy', 'National Trial Chambers Compound', 'Exclusive Overseas Desk Service'].map((v, i) => (
                <li key={i} className="flex gap-2 items-center">
                  <span className="text-gold font-bold">✓</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CORE INSTITUTIONAL VALUES */}
        <div className="border-t border-white/10 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-serif font-light text-white tracking-tight">Our Core Institutional Pillars</h3>
            <p className="text-white/40 text-xs md:text-sm mt-2 font-light">Every proceeding and legal opinion delivered from our chambers is guided by three non-negotiable principles.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-dark-card border border-white/10 p-6 rounded-none space-y-4 hover:border-gold/30 transition-all">
                <div className="p-3 bg-dark border border-white/10 rounded-none inline-block shadow text-gold">
                  <val.icon className="w-6 h-6" />
                </div>
                <h4 className="text-white font-serif font-bold text-base">{val.title}</h4>
                <p className="text-white/60 text-xs leading-relaxed font-light">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TIMELINE HISTORICAL */}
        <div className="border-t border-white/10 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-serif font-light text-white tracking-tight">Our Journey Over 25 Years</h3>
            <p className="text-white/40 text-xs md:text-sm mt-2 font-light">How we evolved from a localized civil chambers to Pakistan's premier legal AI trial firm.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((item, idx) => (
              <div key={idx} className="bg-dark-card border border-white/10 p-5 rounded-none space-y-2 relative hover:border-gold/30 transition-all">
                <span className="text-gold font-mono font-bold text-lg block">{item.year}</span>
                <h5 className="text-white font-serif font-bold text-sm">{item.title}</h5>
                <p className="text-white/40 text-xs leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
