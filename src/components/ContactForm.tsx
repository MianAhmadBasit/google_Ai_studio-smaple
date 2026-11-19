import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Sparkles, Send, ShieldCheck, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formType, setFormType] = useState<'callback' | 'consultation' | 'evaluation'>('callback');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('Criminal Defense');
  const [city, setCity] = useState('Lahore');
  const [urgency, setUrgency] = useState('Urgent');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate inputs
    if (!name || !phone || !message) {
      alert('Please fill out all required fields.');
      return;
    }
    
    // Simulate API registration
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setIsSubmitted(false);
  };

  return (
    <section id="contact-form-section" className="bg-dark py-16 px-4 relative border-b border-white/10">
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-gold/2 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: CONTACT CHANNELS & CODES */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h2 className="text-gold text-xs font-bold uppercase tracking-widest">Connect with Us</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-light text-white tracking-tight">Our Central Contact Chambers</h3>
              <p className="text-white/70 text-sm leading-relaxed font-light">
                Contact our Advocates directly via phone, email, or WhatsApp, or complete our secure intake forms. We maintain absolute confidentiality under the Qanun-e-Shahadat Order, 1984.
              </p>
            </div>

            {/* QUICK CONTACTS CARDS */}
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-none bg-dark-card border border-white/10 hover:border-gold/20 transition-all">
                <div className="p-3 bg-dark border border-white/10 rounded-none text-gold shadow">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-white/40 text-[10px] uppercase font-mono tracking-wider block font-light">Call Direct Support</span>
                  <a href="tel:+925122281103" className="text-white hover:text-gold font-serif font-bold text-sm block mt-0.5">+92 (51) 2228 1103</a>
                  <span className="text-white/60 text-xs mt-0.5 block font-light">Toll-Free Nationwide (9:00 AM - 7:00 PM)</span>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-none bg-dark-card border border-white/10 hover:border-gold/20 transition-all">
                <div className="p-3 bg-dark border border-white/10 rounded-none text-gold shadow">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-white/40 text-[10px] uppercase font-mono tracking-wider block font-light">Send Secure Email</span>
                  <a href="mailto:consult@almizan.law" className="text-white hover:text-gold font-serif font-bold text-sm block mt-0.5 font-semibold">consult@almizan.law</a>
                  <span className="text-white/60 text-xs mt-0.5 block font-light">Replies dispatched within 2 business hours</span>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-none bg-dark-card border border-white/10 hover:border-gold/20 transition-all">
                <div className="p-3 bg-dark border border-white/10 rounded-none text-gold shadow">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-white/40 text-[10px] uppercase font-mono tracking-wider block font-light">Main Corporate Headquarters</span>
                  <span className="text-white font-serif font-bold text-sm block mt-0.5">Gulberg III, Lahore, Pakistan</span>
                  <span className="text-white/60 text-xs mt-0.5 block font-light">Opposite Lahore High Court Registry, Main Boulevard</span>
                </div>
              </div>
            </div>

            {/* TRUST DISPATCH */}
            <div className="p-4 bg-gold/5 border border-gold/20 rounded-none flex gap-3.5 items-start">
              <ShieldCheck className="w-6 h-6 text-gold shrink-0 mt-0.5" />
              <div>
                <h5 className="text-gold font-serif font-bold text-xs">Attorney-Client Privilege Protection</h5>
                <p className="text-white/60 text-[11px] leading-relaxed mt-1 font-light">
                  Your data and details of consultations are completely encrypted and strictly privileged under Article 9 of the Qanun-e-Shahadat Order, 1984.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: LEAD INTAKE FORMS */}
          <div className="lg:col-span-7 bg-dark-card border border-white/10 rounded-none p-6 md:p-8 shadow-2xl shadow-black/85">
            {!isSubmitted ? (
              <div className="space-y-6">
                
                {/* INTAKE FORM TYPE SELECTOR */}
                <div className="flex bg-dark border border-white/10 p-1 rounded-none">
                  <button
                    onClick={() => setFormType('callback')}
                    className={`flex-1 text-center py-2 text-xs font-bold rounded-none transition-all ${formType === 'callback' ? 'bg-gold text-dark' : 'text-white/50 hover:text-white'}`}
                  >
                    📞 Callback
                  </button>
                  <button
                    onClick={() => setFormType('consultation')}
                    className={`flex-1 text-center py-2 text-xs font-bold rounded-none transition-all ${formType === 'consultation' ? 'bg-gold text-dark' : 'text-white/50 hover:text-white'}`}
                  >
                    📅 Consultation
                  </button>
                  <button
                    onClick={() => setFormType('evaluation')}
                    className={`flex-1 text-center py-2 text-xs font-bold rounded-none transition-all ${formType === 'evaluation' ? 'bg-gold text-dark' : 'text-white/50 hover:text-white'}`}
                  >
                    ⚖ Case Evaluation
                  </button>
                </div>

                {/* FORM DESPATCH TEXT */}
                <div className="border-b border-white/10 pb-4">
                  <h4 className="text-white text-lg font-serif font-light flex items-center gap-1.5">
                    {formType === 'callback' && 'Request an Immediate Call Back'}
                    {formType === 'consultation' && 'Book a Private Legal Appointment'}
                    {formType === 'evaluation' && 'Request an In-depth Case Evaluation'}
                  </h4>
                  <p className="text-white/50 text-xs mt-1 font-light">
                    {formType === 'callback' && 'Enter your contact details and an advocate from our local office will call you within 15 minutes.'}
                    {formType === 'consultation' && 'Select your preferred city, date, and category to schedule a private video or in-office consultation.'}
                    {formType === 'evaluation' && 'Submit details about your legal dispute to receive a complete merits analysis report.'}
                  </p>
                </div>

                {/* INTAKE FORM */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-white/60 text-xs font-light">Your Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Muhammad Bilal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-dark border border-white/10 rounded-none p-2.5 text-white text-xs outline-none focus:border-gold transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-white/60 text-xs font-light">WhatsApp or Mobile Number *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+92 300 1234567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-dark border border-white/10 rounded-none p-2.5 text-white text-xs outline-none focus:border-gold transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-white/60 text-xs font-light">Email Address (Optional)</label>
                      <input 
                        type="email" 
                        placeholder="bilal@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-dark border border-white/10 rounded-none p-2.5 text-white text-xs outline-none focus:border-gold transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-white/60 text-xs font-light">Jurisdiction / City</label>
                      <select 
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-dark border border-white/10 rounded-none p-2.5 text-white text-xs outline-none focus:border-gold transition-all"
                      >
                        <option value="Lahore">Lahore</option>
                        <option value="Karachi">Karachi</option>
                        <option value="Islamabad">Islamabad</option>
                        <option value="Rawalpindi">Rawalpindi</option>
                        <option value="Faisalabad">Faisalabad</option>
                        <option value="Multan">Multan</option>
                        <option value="Peshawar">Peshawar</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-white/60 text-xs font-light">Legal Practice Segment</label>
                      <select 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full bg-dark border border-white/10 rounded-none p-2.5 text-white text-xs outline-none focus:border-gold transition-all"
                      >
                        <option value="Criminal Defense">Criminal Defense & Bail</option>
                        <option value="Family Law">Family Law (Khula/Custody)</option>
                        <option value="Property Disputes">Property & Partition Disputes</option>
                        <option value="Corporate Law">Corporate, Tax & SECP</option>
                        <option value="Cyber Crime">FIA Cyber Crime & PECA</option>
                      </select>
                    </div>
                    {formType === 'consultation' ? (
                      <div className="space-y-1.5">
                        <label className="text-white/60 text-xs font-light">Preferred Schedule Time</label>
                        <input 
                          type="datetime-local" 
                          required
                          className="w-full bg-dark border border-white/10 rounded-none p-2.5 text-white text-xs outline-none focus:border-gold transition-all"
                        />
                      </div>
                    ) : (
                      <div className="space-y-1.5">
                        <label className="text-white/60 text-xs font-light">Urgency Status</label>
                        <select 
                          value={urgency}
                          onChange={(e) => setUrgency(e.target.value)}
                          className="w-full bg-dark border border-white/10 rounded-none p-2.5 text-white text-xs outline-none focus:border-gold transition-all"
                        >
                          <option value="Urgent">Critical (Emergency Bail/FIR)</option>
                          <option value="High">High Priority</option>
                          <option value="Routine">Standard Consultation</option>
                        </select>
                      </div>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-white/60 text-xs font-light">Detailed Summary of Legal Issue *</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder={
                        formType === 'evaluation' 
                        ? "List relevant details (e.g., date of FIR registration, plot address, and names of individuals involved)." 
                        : "Describe your situation in details. You can write in English or Urdu."
                      }
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-dark border border-white/10 rounded-none p-2.5 text-white text-xs outline-none focus:border-gold transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-hover text-dark font-bold text-xs uppercase tracking-wider py-3.5 rounded-none flex items-center justify-center gap-2 shadow-lg shadow-gold/10 hover:shadow-gold/20 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {formType === 'callback' && 'Schedule Callback Now'}
                      {formType === 'consultation' && 'Book Private Consultation'}
                      {formType === 'evaluation' && 'Submit Case For Evaluation'}
                    </span>
                  </button>
                </form>

              </div>
            ) : (
              /* SUCCESS MESSAGE BLOCK */
              <div className="text-center py-12 space-y-6">
                <div className="inline-flex p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-none shadow-lg">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-white text-2xl font-serif font-bold">Inquiry Dispatched Successfully!</h4>
                  <p className="text-white/70 text-sm max-w-md mx-auto font-light">
                    Salam, <span className="text-white font-semibold">{name}</span>. We have securely registered your legal intake report. A Senior Advocate from our <span className="text-white font-semibold">{city}</span> Chambers will contact you at <span className="text-white font-semibold">{phone}</span> within 15 minutes to coordinate next trial actions.
                  </p>
                </div>

                <div className="bg-dark border border-white/10 rounded-none p-4 max-w-sm mx-auto text-xs text-white/40 font-mono flex items-center justify-between font-light">
                  <span>Inquiry ID:</span>
                  <span className="text-gold font-bold">ALM-2026-{(Math.floor(Math.random() * 9000) + 1000)}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <button
                    onClick={resetForm}
                    className="border border-white/10 text-white/70 hover:text-white px-5 py-2.5 rounded-none text-xs hover:border-white/20 transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                  <a
                    href={`https://wa.me/923000000000?text=Salam,%20I%20just%20submitted%20a%20form.%20My%20name%20is%20${encodeURIComponent(name)}.%20I%20need%20help%20with%20my%20${encodeURIComponent(category)}%20case%20in%20${encodeURIComponent(city)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25d366] hover:bg-[#20ba5a] text-white font-bold text-xs px-5 py-2.5 rounded-none flex items-center justify-center gap-1.5 transition-all shadow"
                  >
                    Initiate Instant WhatsApp Chat
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
