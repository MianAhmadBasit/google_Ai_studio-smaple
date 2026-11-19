import React, { useState } from 'react';
import { lawyers } from '../types';
import { Calendar, Clock, Landmark, ShieldCheck, CheckCircle, ArrowRight, Sparkles, AlertTriangle } from 'lucide-react';

export default function ConsultationPage() {
  const [step, setStep] = useState(1);
  const [selectedOffice, setSelectedOffice] = useState('Lahore');
  const [selectedAdvocate, setSelectedAdvocate] = useState('barrister-ahmad');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [caseSummary, setCaseSummary] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const activeAdvocateObj = lawyers.find(l => l.id === selectedAdvocate) || lawyers[0];

  const handleNextStep = () => {
    if (step === 1 && (!selectedOffice || !selectedAdvocate)) return;
    if (step === 2 && (!selectedDate || !selectedTime)) return;
    setStep(step + 1);
  };

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone || !caseSummary) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }
    setErrorMessage('');
    setIsBooked(true);
  };

  const timeSlots = [
    '10:00 AM - 11:00 AM',
    '11:30 AM - 12:30 PM',
    '02:00 PM - 03:00 PM',
    '03:30 PM - 04:30 PM',
    '05:00 PM - 06:00 PM'
  ];

  const resetBooking = () => {
    setStep(1);
    setSelectedDate('');
    setSelectedTime('');
    setClientName('');
    setClientPhone('');
    setClientEmail('');
    setCaseSummary('');
    setIsBooked(false);
    setErrorMessage('');
  };

  return (
    <div className="bg-dark py-16 px-4">
      <div className="max-w-4xl mx-auto bg-dark-card border border-white/10 rounded-none overflow-hidden shadow-2xl shadow-black/80 relative">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 blur-3xl"></div>

        {/* HEADER BAR */}
        <div className="bg-dark p-6 border-b border-white/10 text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-gold/5 border border-gold/20 px-3 py-1 rounded-none text-gold text-[10px] font-bold uppercase tracking-wider font-mono">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>AI-Priority Scheduling Portal</span>
          </div>
          <h2 className="text-white text-2xl font-serif font-light tracking-tight">Schedule Your Private Consultation</h2>
          <p className="text-white/40 text-xs max-w-lg mx-auto font-light">Lock an in-office or secure remote consultation with our senior advocates. All intakes are highly protected.</p>
        </div>

        {/* STEP STATUS INDICATOR */}
        {!isBooked && (
          <div className="flex bg-dark border-b border-white/10 px-6 py-3 text-[11px] font-mono justify-between text-white/30">
            <span className={step === 1 ? 'text-gold font-bold' : step > 1 ? 'text-gold/60' : ''}>1. Office & Advocate</span>
            <span>/</span>
            <span className={step === 2 ? 'text-gold font-bold' : step > 2 ? 'text-gold/60' : ''}>2. Select Date & Slot</span>
            <span>/</span>
            <span className={step === 3 ? 'text-gold font-bold' : ''}>3. Intake Form</span>
          </div>
        )}

        {/* BODY INTAKE CONTENT */}
        <div className="p-6 md:p-8">
          {!isBooked ? (
            <div className="space-y-6">
              
              {/* STEP 1: OFFICE & ADVOCATE */}
              {step === 1 && (
                <div className="space-y-6">
                  
                  {/* OFFICE SELECTOR */}
                  <div className="space-y-3">
                    <label className="text-white text-xs font-bold uppercase tracking-wider block font-mono">1. Select Jurisdiction Office</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['Lahore', 'Karachi', 'Islamabad', 'Video Consultation'].map((off) => (
                        <button
                          key={off}
                          onClick={() => setSelectedOffice(off)}
                          className={`p-3.5 rounded-none border text-center transition-all ${selectedOffice === off ? 'bg-gold/10 border-gold text-gold font-bold' : 'bg-dark border border-white/10 text-white/50 hover:border-white/20'}`}
                        >
                          <Landmark className="w-4 h-4 mx-auto mb-2 text-gold" />
                          <span className="text-xs block font-light">{off}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* ADVOCATE SELECTOR */}
                  <div className="space-y-3 pt-2">
                    <label className="text-white text-xs font-bold uppercase tracking-wider block font-mono">2. Assign Counsel Advocate</label>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {lawyers.map((lawyer) => (
                        <button
                          key={lawyer.id}
                          onClick={() => setSelectedAdvocate(lawyer.id)}
                          className={`p-4 rounded-none border text-left transition-all ${selectedAdvocate === lawyer.id ? 'bg-gold/5 border-gold shadow shadow-gold/5' : 'bg-dark border border-white/10 text-white/50 hover:border-white/20'}`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-none overflow-hidden bg-dark border border-white/10">
                              <img src={lawyer.image} alt={lawyer.name} className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
                            </div>
                            <div>
                              <div className="text-white text-xs font-serif font-bold leading-tight">{lawyer.name.split(' ')[1]}</div>
                              <div className="text-[10px] text-gold font-semibold font-mono font-light">{lawyer.role.split(' ')[0]}</div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* ADVOCATE BIO BIO */}
                  <div className="bg-dark p-4 border border-white/10 rounded-none flex gap-4 items-center">
                    <div className="w-14 h-14 rounded-none overflow-hidden bg-dark shrink-0 border border-white/10">
                      <img src={activeAdvocateObj.image} alt={activeAdvocateObj.name} className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-white/40 text-[9px] uppercase font-mono tracking-wider font-light">Assigned Counsel Profile</span>
                      <h4 className="text-white font-serif font-bold text-xs">{activeAdvocateObj.name}</h4>
                      <p className="text-white/60 text-[11px] leading-relaxed line-clamp-1 font-light">{activeAdvocateObj.education}</p>
                    </div>
                  </div>

                  <div className="flex justify-end pt-4 border-t border-white/10">
                    <button
                      onClick={handleNextStep}
                      className="bg-gold hover:bg-gold-hover text-dark font-bold text-xs px-6 py-3 rounded-none flex items-center gap-1 transition-all shadow"
                    >
                      <span>Proceed to Schedule</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: SELECT DATE & TIME */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* DATE SELECTOR */}
                    <div className="space-y-3">
                      <label className="text-white text-xs font-bold uppercase tracking-wider block font-mono">Select Consultation Date</label>
                      <input 
                        type="date" 
                        required
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full bg-dark border border-white/10 rounded-none p-3 text-white text-xs outline-none focus:border-gold transition-all font-mono"
                      />
                      <span className="text-white/40 text-[10px] block font-light">We offer bookings up to 14 days in advance. Closed Sundays.</span>
                    </div>

                    {/* TIME SLOTS SELECTOR */}
                    <div className="space-y-3">
                      <label className="text-white text-xs font-bold uppercase tracking-wider block font-mono">Select Available Time Slot</label>
                      <div className="flex flex-col gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={`w-full text-left p-3 rounded-none border text-xs font-semibold transition-all flex items-center gap-2 ${selectedTime === slot ? 'bg-gold/10 border-gold text-gold font-bold' : 'bg-dark border border-white/10 text-white/50 hover:border-white/20'}`}
                          >
                            <Clock className="w-4 h-4 text-gold shrink-0" />
                            <span className="font-light">{slot}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4 border-t border-white/10">
                    <button
                      onClick={() => setStep(1)}
                      className="border border-white/10 text-white/60 hover:text-white px-5 py-3 rounded-none text-xs"
                    >
                      Back
                    </button>
                    <button
                      disabled={!selectedDate || !selectedTime}
                      onClick={handleNextStep}
                      className="bg-gold hover:bg-gold-hover disabled:bg-white/5 disabled:text-white/20 text-dark font-bold text-xs px-6 py-3 rounded-none flex items-center gap-1 transition-all shadow"
                    >
                      <span>Proceed to Intake</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: CLIENT INTAKE FORM */}
              {step === 3 && (
                <form onSubmit={handleBookAppointment} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs rounded-none font-light">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-white/60 text-xs font-medium font-light">Your Full Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g., Muhammad Harris"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full bg-dark border border-white/10 rounded-none p-2.5 text-white text-xs outline-none focus:border-gold transition-all placeholder-white/25 font-light"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-white/60 text-xs font-medium font-light">WhatsApp or Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="e.g., +92 321 4567890"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full bg-dark border border-white/10 rounded-none p-2.5 text-white text-xs outline-none focus:border-gold transition-all placeholder-white/25 font-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-white/60 text-xs font-medium font-light">Email Address (Optional)</label>
                    <input 
                      type="email" 
                      placeholder="harris@example.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full bg-dark border border-white/10 rounded-none p-2.5 text-white text-xs outline-none focus:border-gold transition-all placeholder-white/25 font-light"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-white/60 text-xs font-medium font-light">Briefly outline your case elements (Highly confidential) *</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="e.g., Family custody claims, false FIR defense, or commercial land stay order requirement."
                      value={caseSummary}
                      onChange={(e) => setCaseSummary(e.target.value)}
                      className="w-full bg-dark border border-white/10 rounded-none p-2.5 text-white text-xs outline-none focus:border-gold transition-all resize-none placeholder-white/25 font-light"
                    ></textarea>
                  </div>

                  <div className="p-3 bg-gold/5 border border-gold/15 rounded-none flex gap-3 text-[11px] text-white/50 leading-relaxed font-light">
                    <AlertTriangle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>Providing false statements or concealing pending warrants will immediately void legal counsel agreements. Protect your privilege.</span>
                  </div>

                  <div className="flex justify-between pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="border border-white/10 text-white/60 hover:text-white px-5 py-3 rounded-none text-xs"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-gold hover:bg-gold-hover text-dark font-bold text-xs px-6 py-3 rounded-none flex items-center gap-1 shadow transition-all"
                    >
                      <span>Secure Private Booking</span>
                      <ShieldCheck className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

            </div>
          ) : (
            /* BOOKING SUCCESS SCREEN */
            <div className="text-center py-10 space-y-6">
              <div className="inline-flex p-4 bg-gold/10 border border-gold/20 text-gold rounded-none shadow-lg">
                <CheckCircle className="w-12 h-12" />
              </div>

              <div className="space-y-2">
                <h3 className="text-white text-2xl font-serif font-light">Priority Consultation Slot Reserved!</h3>
                <p className="text-white/60 text-xs max-w-md mx-auto font-light">
                  Salam, **{clientName}**. Your priority consultation slot is successfully secured with **{activeAdvocateObj.name}**.
                </p>
              </div>

              {/* TICKET DETAILS */}
              <div className="bg-dark border border-white/10 rounded-none p-5 max-w-sm mx-auto grid grid-cols-2 gap-4 text-left text-xs">
                <div>
                  <span className="text-white/30 text-[10px] uppercase font-mono block font-light">Chambers Location</span>
                  <span className="text-white font-serif font-bold">{selectedOffice} Office</span>
                </div>
                <div>
                  <span className="text-white/30 text-[10px] uppercase font-mono block font-light">Counsel Assigned</span>
                  <span className="text-white font-serif font-bold">{activeAdvocateObj.name.split(' ')[1]}</span>
                </div>
                <div className="border-t border-white/10 pt-2.5 col-span-2">
                  <span className="text-white/30 text-[10px] uppercase font-mono block font-light font-light">Selected Schedule</span>
                  <span className="text-gold font-bold font-mono">{selectedDate} @ {selectedTime}</span>
                </div>
              </div>

              <div className="bg-dark border border-white/10 p-4 rounded-none text-[11px] text-white/50 max-w-sm mx-auto font-light">
                <p>A coordinator will dispatch the secure video meeting URL or physical office pass to **{clientPhone}** via WhatsApp within 15 minutes.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  onClick={resetBooking}
                  className="border border-white/10 text-white/60 hover:text-white px-5 py-2.5 rounded-none text-xs"
                >
                  Book Another Slot
                </button>
                <a
                  href={`https://wa.me/923000000000?text=Salam,%20I%20just%20scheduled%20a%20priority%20consultation.%20My%20name%20is%20${encodeURIComponent(clientName)}.%20Assigned%20counsel:%20${encodeURIComponent(activeAdvocateObj.name)}.%20Schedule:%20${encodeURIComponent(selectedDate)}%20at%20${encodeURIComponent(selectedTime)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25d366] hover:bg-[#20ba5a] text-white font-bold text-xs px-5 py-2.5 rounded-none flex items-center justify-center gap-1.5 transition-all shadow"
                >
                  WhatsApp My Schedule Ticket
                </a>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
