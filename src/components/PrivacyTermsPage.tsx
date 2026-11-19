import React from 'react';
import { Lock, ShieldCheck, Scale } from 'lucide-react';

export default function PrivacyTermsPage() {
  return (
    <div className="bg-dark py-16 px-4">
      <div className="max-w-4xl mx-auto bg-dark-card border border-white/10 rounded-none p-6 md:p-8 shadow-2xl space-y-8">
        
        {/* PRIVACY POLICY SECTION */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5 text-white pb-3 border-b border-white/10">
            <Lock className="w-5 h-5 text-gold" />
            <h2 className="text-xl font-serif font-bold">Privacy Policy & Client Data Protection</h2>
          </div>
          <p className="text-white/75 text-xs md:text-sm leading-relaxed font-light">
            At Al-Mizan Advocates, client privacy is not just a digital policy—it is a sacred legal obligation. All details of your consultations, case intakes, uploads, or contact parameters are strictly protected under Article 9 of the Qanun-e-Shahadat Order, 1984 (Law of Evidence in Pakistan).
          </p>
          <p className="text-white/40 text-xs leading-relaxed font-light">
            We employ enterprise-grade 256-Bit SSL encryptions to handle communications. Your personal name, WhatsApp contact, or case summary is never shared with third-party advertising companies or marketing registries. Data is purely utilized by our senior advocates and associates to design your trial strategy.
          </p>
        </div>

        {/* TERMS OF SERVICE SECTION */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2.5 text-white pb-3 border-b border-white/10">
            <Scale className="w-5 h-5 text-gold" />
            <h2 className="text-xl font-serif font-bold">Terms of Representation & Vakalatnama</h2>
          </div>
          <p className="text-white/75 text-xs md:text-sm leading-relaxed font-light">
            By scheduling a consultation or using our Case Eligibility Checker, you acknowledge that your submitted details are accurate and true. Providing false statements regarding criminal records or active arrest warrants may result in the immediate voiding of legal representation.
          </p>
          <p className="text-white/40 text-xs leading-relaxed font-light">
            The use of our simulated AI Legal Assistant Chatbot is intended to provide helpful statutory context under Pakistan laws (PPC and CPC) and does not replace a formal, signed Vakalatnama agreement. A formal attorney-client relationship is only established upon formal mutual signings and retainer settlements.
          </p>
        </div>

        {/* ACCREDITATION DISPATCH */}
        <div className="p-4 bg-dark border border-white/10 rounded-none flex gap-3 text-xs text-white/40 leading-relaxed font-mono font-light">
          <ShieldCheck className="w-4 h-4 text-gold shrink-0 mt-0.5" />
          <span>These rules are updated for the 2026 judicial cycle. If you have any compliance questions, please contact our Managing Partner at consult@almizan.law.</span>
        </div>

      </div>
    </div>
  );
}
