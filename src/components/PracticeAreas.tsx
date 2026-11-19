import React, { useState } from 'react';
import { 
  Shield, 
  Heart, 
  Home, 
  Briefcase, 
  Percent, 
  Globe,
  ArrowRight,
  Scale,
  Sparkles,
  ClipboardCheck,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { practiceAreas, PracticeArea } from '../types';

interface PracticeAreasProps {
  setCurrentPage: (page: string) => void;
}

export default function PracticeAreas({ setCurrentPage }: PracticeAreasProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTab, setActiveTab] = useState<'directory' | 'checker'>('directory');

  // Case Checker State
  const [checkerStep, setCheckerStep] = useState(1);
  const [caseType, setCaseType] = useState('');
  const [firRegistered, setFirRegistered] = useState('');
  const [oppositionAction, setOppositionAction] = useState('');
  const [propertyOwner, setPropertyOwner] = useState('');
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadCity, setLeadCity] = useState('Lahore');
  const [leadDesc, setLeadDesc] = useState('');
  const [evaluationResult, setEvaluationResult] = useState<any>(null);

  const categories = ['All', 'Criminal', 'Family', 'Property & Civil', 'Corporate & Tax', 'Specialized'];

  const filteredAreas = selectedCategory === 'All' 
    ? practiceAreas 
    : practiceAreas.filter(a => a.category === selectedCategory);

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

  const handleEvaluate = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate smart evaluation logic based on Pakistani law
    let rating = 'Medium';
    let urgency = 'Routine';
    let steps: string[] = [];
    let score = 75;

    if (caseType === 'Criminal') {
      if (firRegistered === 'Yes') {
        rating = 'Critical';
        urgency = 'Immediate Action Required';
        score = 90;
        steps = [
          'File an immediate Pre-Arrest Bail Petition under Section 498 CrPC in the Sessions Court.',
          'Secure a Protective/Transit Bail from the High Court if located outside the jurisdiction of the court.',
          'Obtain a certified copy of the FIR from the concerned Police Station (Thana).',
          'Join the Police Investigation (Tafteesh) with your legal counsel once bail is granted.'
        ];
      } else {
        rating = 'High';
        urgency = 'High Priority';
        score = 80;
        steps = [
          'Draft a preventive representation to the Senior Superintendent of Police (SSP) or CCPO.',
          'File a Petition under Section 22-A / 22-B CrPC if police are illegally registering a false case.',
          'Arrange witness testimonies and documentary proof of alibi.'
        ];
      }
    } else if (caseType === 'Family') {
      rating = 'High';
      urgency = 'Strategic Actions Needed';
      score = 85;
      steps = [
        'File an application for the dissolution of marriage (Khula) under Family Courts Act 1964.',
        'File interim claims for child maintenance to secure immediate financial support.',
        'Apply for Guardian Certificate and temporary visitation schedule in the Guardian Court.'
      ];
    } else if (caseType === 'Property') {
      if (oppositionAction === 'Qabza Attempt') {
        rating = 'Critical';
        urgency = 'Immediate Court Action Required';
        score = 95;
        steps = [
          'File a Civil Suit for Permanent and Temporary Injunction (Stay Order) under CPC.',
          'Report illegal trespass to local police and lodge a complaint under the Illegal Dispossession Act, 2005.',
          'Secure revenue records (Fard, Mutation/Intiqal) from the Patwari immediately.'
        ];
      } else {
        rating = 'Medium';
        urgency = 'Normal Procedure';
        score = 70;
        steps = [
          'Serve a formal legal notice to the opposition through an Advocate High Court.',
          'File a Civil Suit for Partition or Specific Performance of Agreement.',
          'Search revenue registry records to verify ownership chains.'
        ];
      }
    } else {
      rating = 'High';
      urgency = 'Standard Legal Process';
      score = 75;
      steps = [
        'Draft a comprehensive legal audit report of the incident.',
        'Prepare all corporate or regulatory documents (SECP/FBR records).',
        'Schedule a detailed consultation with a senior partner.'
      ];
    }

    setEvaluationResult({
      rating,
      urgency,
      score,
      steps,
      name: leadName,
      phone: leadPhone,
      city: leadCity,
      category: caseType
    });

    setCheckerStep(3);
  };

  return (
    <section id="practice-areas-section" className="bg-dark py-16 px-4 relative">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/3 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* TAB SWITCHER */}
        <div className="flex justify-center mb-10">
          <div className="bg-dark-card border border-white/10 p-1.5 rounded-none inline-flex gap-2">
            <button
              onClick={() => setActiveTab('directory')}
              className={`px-6 py-2.5 rounded-none text-xs md:text-sm font-bold transition-all ${activeTab === 'directory' ? 'bg-gold text-dark shadow-md shadow-gold/10' : 'text-white/60 hover:text-white'}`}
            >
              💼 Practice Areas Directory
            </button>
            <button
              onClick={() => setActiveTab('checker')}
              className={`px-6 py-2.5 rounded-none text-xs md:text-sm font-bold transition-all flex items-center gap-1.5 ${activeTab === 'checker' ? 'bg-gold text-dark shadow-md shadow-gold/10' : 'text-white/60 hover:text-white'}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Smart Case Eligibility Checker</span>
            </button>
          </div>
        </div>

        {activeTab === 'directory' ? (
          <div>
            {/* DIRECTORY SECTION HEADER */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-gold text-xs font-bold uppercase tracking-widest">Our Practice Jurisdictions</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-light text-white mt-2 tracking-tight">Specialized Legal Protection</h3>
              <p className="text-white/70 text-sm mt-3 font-light">
                We handle trials and appeals before the Civil Courts, Sessions Courts, specialized regulatory boards, High Courts, and the Supreme Court of Pakistan.
              </p>
            </div>

            {/* CATEGORY FILTERS */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-none text-xs font-semibold border transition-all ${selectedCategory === cat ? 'bg-gold/10 border-gold text-gold font-bold' : 'bg-transparent border-white/10 text-white/60 hover:border-white/20 hover:text-white'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* PRACTICE AREAS GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAreas.map((area) => (
                <div 
                  key={area.id}
                  className="bg-dark-card border border-white/10 rounded-none p-6 hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-black group relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gold/5 blur-xl group-hover:bg-gold/10 rounded-full transition-all"></div>
                  
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-dark rounded-none border border-white/10 shadow">
                        {getIcon(area.icon)}
                      </div>
                      <span className="text-[11px] font-mono font-bold text-gold uppercase tracking-widest bg-dark px-2 py-0.5 rounded-none border border-white/10">
                        {area.category}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-white text-lg font-serif font-bold group-hover:text-gold transition-colors">
                        {area.title}
                      </h4>
                      <h5 className="text-gold/80 text-[11px] font-semibold font-urdu tracking-wide">
                        {area.urduTitle}
                      </h5>
                    </div>

                    <p className="text-white/70 text-xs mt-3 leading-relaxed font-light">
                      {area.description}
                    </p>

                    {/* KEYWORDS */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {area.keywords.map((kw, idx) => (
                        <span key={idx} className="bg-dark text-white/50 text-[10px] px-2 py-0.5 rounded-none border border-white/5">
                          #{kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                    <button 
                      onClick={() => setCurrentPage('practice-areas')}
                      className="text-gold text-xs font-semibold hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Read Litigation Strategy</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* CALL TO ACTION */}
            <div className="mt-12 bg-dark-card border border-white/10 rounded-none p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="space-y-2 text-center md:text-left">
                <h4 className="text-white font-serif font-semibold text-lg md:text-xl">Unsure which practice area your issue falls under?</h4>
                <p className="text-white/60 text-xs md:text-sm font-light">Run our 1-minute Case Eligibility Checker to get localized expert recommendations immediately.</p>
              </div>
              <button
                onClick={() => {
                  setActiveTab('checker');
                  setCheckerStep(1);
                }}
                className="bg-gold hover:bg-gold-hover text-dark font-bold text-xs md:text-sm px-6 py-3 rounded-none shadow-lg shadow-gold/10 shrink-0 transition-all"
              >
                Launch Smart Checker
              </button>
            </div>
          </div>
        ) : (
          /* CASE ELIGIBILITY CHECKER INTERACTIVE INTERFACE */
          <div className="max-w-3xl mx-auto bg-dark-card border border-white/10 rounded-none p-6 md:p-8 shadow-2xl shadow-black relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-2xl rounded-full"></div>

            {/* PROGRESS BAR */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ClipboardCheck className="w-5 h-5 text-gold" />
                <span className="text-white text-sm font-bold font-serif uppercase tracking-wider">Case Eligibility Engine v2.4</span>
              </div>
              <div className="flex gap-1.5">
                {[1, 2, 3].map((step) => (
                  <div 
                    key={step} 
                    className={`h-2 rounded-none transition-all duration-300 ${checkerStep >= step ? 'w-8 bg-gold' : 'w-4 bg-white/10'}`}
                  ></div>
                ))}
              </div>
            </div>

            {/* STEP 1: SELECT CATEGORY & MAIN SPECIFICS */}
            {checkerStep === 1 && (
              <div className="space-y-6">
                <div className="space-y-1 text-center">
                  <h4 className="text-white font-serif text-xl font-bold">What is your Legal Concern?</h4>
                  <p className="text-white/60 text-xs font-light">Select your category to initialize custom statutory rules lookup.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                  {[
                    { id: 'Criminal', label: 'Criminal Defense', desc: 'FIR, Bail, Investigation', icon: Shield },
                    { id: 'Family', label: 'Family Matters', desc: 'Khula, Divorce, Custody', icon: Heart },
                    { id: 'Property', label: 'Property Disputes', desc: 'Qabza, Partition, Revenue', icon: Home },
                    { id: 'Corporate', label: 'Corporate & Tax', desc: 'SECP, Company Law, FBR', icon: Briefcase }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setCaseType(cat.id)}
                      className={`p-4 rounded-none border text-left transition-all relative ${caseType === cat.id ? 'bg-gold/10 border-gold' : 'bg-dark border-white/10 hover:border-white/20'}`}
                    >
                      <cat.icon className={`w-5 h-5 ${caseType === cat.id ? 'text-gold' : 'text-white/60'} mb-3`} />
                      <div className="text-white text-xs font-bold font-serif">{cat.label}</div>
                      <div className="text-white/40 text-[10px] mt-1 leading-snug font-light">{cat.desc}</div>
                    </button>
                  ))}
                </div>

                {caseType === 'Criminal' && (
                  <div className="p-4 bg-dark border border-white/10 rounded-none space-y-3 animate-fadeIn">
                    <label className="text-white/80 text-xs font-semibold block font-light">Has a Police FIR been registered in any Police Station (Thana)?</label>
                    <div className="flex gap-4">
                      {['Yes', 'No', 'Threatened'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setFirRegistered(opt)}
                          className={`flex-1 py-2 text-xs rounded-none border font-bold transition-all ${firRegistered === opt ? 'bg-gold text-dark border-transparent' : 'bg-transparent border-white/10 text-white/60 hover:border-white/20'}`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {caseType === 'Property' && (
                  <div className="p-4 bg-dark border border-white/10 rounded-none space-y-3 animate-fadeIn">
                    <label className="text-white/80 text-xs font-semibold block font-light">What is the active threat or status of the dispute?</label>
                    <div className="flex flex-col gap-2">
                      {[
                        { id: 'Qabza Attempt', label: 'Active attempt of physical land-grabbing (Qabza)' },
                        { id: 'Partition Dispute', label: 'Division of ancestral assets / property partition' },
                        { id: 'Contract Breach', label: 'Breach of registry agreement (Iqrar-nama)' }
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => setOppositionAction(opt.id)}
                          className={`w-full text-left py-2 px-3 text-xs rounded-none border font-semibold transition-all ${oppositionAction === opt.id ? 'bg-gold text-dark border-transparent' : 'bg-transparent border-white/10 text-white/60 hover:border-white/20'}`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-end pt-4">
                  <button
                    disabled={!caseType}
                    onClick={() => setCheckerStep(2)}
                    className="bg-gold hover:bg-gold-hover disabled:bg-white/5 disabled:text-white/20 text-dark font-extrabold text-xs px-6 py-3 rounded-none flex items-center gap-1 shadow transition-all"
                  >
                    <span>Proceed to Contact Info</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: LEAD CAPTURE FORM */}
            {checkerStep === 2 && (
              <form onSubmit={handleEvaluate} className="space-y-4">
                <div className="space-y-1 text-center">
                  <h4 className="text-white font-serif text-xl font-bold">Contact & Location Details</h4>
                  <p className="text-white/60 text-xs font-light">Your data is fully protected. Our Senior Partner will contact you after compiling reports.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-white/60 text-xs font-medium font-light">Your Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g., Muhammad Ali"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="w-full bg-dark border border-white/10 rounded-none p-2.5 text-white text-xs outline-none focus:border-gold transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-white/60 text-xs font-medium font-light">Active WhatsApp or Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g., +92 300 1234567"
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      className="w-full bg-dark border border-white/10 rounded-none p-2.5 text-white text-xs outline-none focus:border-gold transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-white/60 text-xs font-medium font-light">Nearest City Chamber</label>
                    <select 
                      value={leadCity}
                      onChange={(e) => setLeadCity(e.target.value)}
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
                  <div className="space-y-1.5">
                    <label className="text-white/60 text-xs font-medium font-light">Briefly Describe Your Legal Situation</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g., Family disputes over dower or false FIR threatened."
                      value={leadDesc}
                      onChange={(e) => setLeadDesc(e.target.value)}
                      className="w-full bg-dark border border-white/10 rounded-none p-2.5 text-white text-xs outline-none focus:border-gold transition-all"
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setCheckerStep(1)}
                    className="border border-white/10 text-white/60 hover:text-white px-5 py-3 rounded-none text-xs"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="bg-gold hover:bg-gold-hover text-dark font-extrabold text-xs px-6 py-3 rounded-none flex items-center gap-1 shadow transition-all"
                  >
                    <span>Generate Merit Report</span>
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3: HIGH-TECH EVALUATION RESULTS REPORT */}
            {checkerStep === 3 && evaluationResult && (
              <div className="space-y-6">
                <div className="text-center bg-dark p-4 border border-white/10 rounded-none space-y-2">
                  <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-none text-emerald-400 text-xs font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Evaluation Compiled Successfully</span>
                  </div>
                  <h4 className="text-white font-serif text-xl font-bold">Initial Case Merit Assessment</h4>
                  <p className="text-white/60 text-xs font-light">Calculated based on constitutional statues, case precedents, and local trial practices.</p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-dark p-4 rounded-none border border-white/10 text-center">
                    <span className="text-white/40 text-[10px] uppercase font-mono tracking-wider block">Urgency Priority</span>
                    <span className={`text-sm font-bold block mt-1 ${evaluationResult.rating === 'Critical' ? 'text-red-400' : 'text-gold'}`}>
                      {evaluationResult.urgency}
                    </span>
                  </div>
                  <div className="bg-dark p-4 rounded-none border border-white/10 text-center">
                    <span className="text-white/40 text-[10px] uppercase font-mono tracking-wider block">Trial Feasibility Score</span>
                    <span className="text-xl font-extrabold text-emerald-400 block mt-1">{evaluationResult.score}%</span>
                  </div>
                  <div className="bg-dark p-4 rounded-none border border-white/10 text-center">
                    <span className="text-white/40 text-[10px] uppercase font-mono tracking-wider block">Assigned Advocate Location</span>
                    <span className="text-sm font-bold text-white block mt-1">{evaluationResult.city} Chambers</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="text-white font-bold text-sm flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-gold" />
                    <span>Your Immediate Action Steps under Pakistani Law:</span>
                  </h5>
                  <ul className="space-y-2 bg-dark border border-white/10 rounded-none p-4">
                    {evaluationResult.steps.map((step: string, idx: number) => (
                      <li key={idx} className="flex gap-2.5 text-xs text-white/80 leading-relaxed font-light">
                        <span className="text-gold font-bold font-mono shrink-0">{idx + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gold/10 border border-gold/20 p-4 rounded-none text-center space-y-3">
                  <h5 className="text-gold font-bold text-sm">Do not delay legal protection. Book your active consultation now.</h5>
                  <p className="text-white/80 text-xs font-light">We have locked a priority consultation slot for **{evaluationResult.name}** in the **{evaluationResult.city}** office.</p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1.5">
                    <button
                      onClick={() => {
                        setCurrentPage('consultation');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="bg-gold hover:bg-gold-hover text-dark font-extrabold text-xs px-5 py-2.5 rounded-none transition-all shadow shadow-gold/10"
                    >
                      Confirm Booking Slot
                    </button>
                    <a
                      href={`https://wa.me/923001234567?text=Salam,%20I%20just%20completed%20the%20case%20eligibility%20test.%20My%20name%20is%20${encodeURIComponent(evaluationResult.name)}.%20I%20need%20help%20with%20my%20${encodeURIComponent(evaluationResult.category)}%20case%20in%20${encodeURIComponent(evaluationResult.city)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-5 py-2.5 rounded-none transition-all flex items-center justify-center gap-1.5"
                    >
                      WhatsApp My Merit Report
                    </a>
                  </div>
                </div>

                <div className="flex justify-start">
                  <button
                    onClick={() => {
                      setCheckerStep(1);
                      setCaseType('');
                    }}
                    className="text-white/40 hover:text-white text-xs underline font-semibold font-light"
                  >
                    Run New Evaluation
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
