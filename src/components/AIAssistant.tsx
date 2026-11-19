import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Scale, ShieldAlert, Sparkles, Phone, ArrowRight } from 'lucide-react';

interface AIAssistantProps {
  setCurrentPage: (page: string) => void;
}

interface Message {
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  action?: { label: string; page: string };
}

export default function AIAssistant({ setCurrentPage }: AIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: 'Assalam-o-Alaikum! I am your AI Legal Assistant from Al-Mizan Chambers. How can I help you today? You can ask me about Bail Procedures, Child Custody (Hizanat), Property disputes (Qabza), or SECP Business Registration in Pakistan.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    setMessages(prev => [...prev, { sender: 'user', text: userText, timestamp: time }]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking and smart keyword analysis under Pakistani Law
    setTimeout(() => {
      let responseText = '';
      let action: any = null;
      const normalizedText = userText.toLowerCase();

      if (normalizedText.includes('bail') || normalizedText.includes('arrest') || normalizedText.includes('police') || normalizedText.includes('fir')) {
        responseText = 'Under Pakistani Law, criminal arrest matters are highly urgent. If an FIR has been registered or is threatened, we recommend seeking Pre-Arrest Bail under Section 498 CrPC immediately to prevent arrest. If an individual is already arrested, we must file a Post-Arrest Bail under Section 497 CrPC before Sessions Court or High Court. Would you like to run our Case Eligibility Checker or book a high-priority call with our Criminal Defense team?';
        action = { label: 'Check Bail Eligibility', page: 'consultation' };
      } else if (normalizedText.includes('custody') || normalizedText.includes('child') || normalizedText.includes('guardian') || normalizedText.includes('minor')) {
        responseText = 'In Pakistan, child custody is governed by the Guardians and Wards Act, 1890. The custody (Hizanat) of a young child typically belongs to the mother (boys till 7 years, girls till puberty) unless she marries a stranger or lacks characters. However, the welfare of the minor is the absolute supreme factor. The father is legally bound to pay for child maintenance monthly. Would you like to schedule an online appointment with Advocate Ayesha Chaudhry (Family Specialist)?';
        action = { label: 'Book Family Consultation', page: 'consultation' };
      } else if (normalizedText.includes('khula') || normalizedText.includes('divorce') || normalizedText.includes('marriage')) {
        responseText = 'Dissolution of marriage through Khula is a fast-track process in Pakistani Family Courts. Once filed, the court issues notices. If reconciliation attempts fail, a decree of Khula is mandatory, taking about 2 to 4 months. The wife may have to surrender her dower (Mehar) if requested. Our partners can file this with ultimate confidentiality on your behalf.';
        action = { label: 'Consult Divorce Advocate', page: 'contact' };
      } else if (normalizedText.includes('property') || normalizedText.includes('land') || normalizedText.includes('qabza') || normalizedText.includes('partition') || normalizedText.includes('stay')) {
        responseText = 'Land disputes and illegal possession (Qabza) are very common. Under civil procedure (CPC), we can file for a Temporary Injunction (Stay Order) to freeze current possession status. If you are dispossessed illegally, we can invoke the Illegal Dispossession Act, 2005. For inherited estates, a Suit for Partition (Taqseem) must be filed. We advise searching the land registry (Fard/Intiqal) records immediately.';
        action = { label: 'Submit Land Dispute Info', page: 'consultation' };
      } else if (normalizedText.includes('company') || normalizedText.includes('secp') || normalizedText.includes('register') || normalizedText.includes('business')) {
        responseText = 'We specialize in corporate setup with the Securities and Exchange Commission of Pakistan (SECP) under the Companies Act, 2017. Registration is done online and takes 3 to 7 business days, involving name reservation, memo preparation, and statutory filings. Once registered, we will assist you in obtaining your NTN from FBR. Would you like to consult our Corporate Partner, Barrister Alvi?';
        action = { label: 'Contact Corporate Partner', page: 'contact' };
      } else {
        responseText = 'I have recorded your query. Under Pakistani civil, criminal, and corporate jurisprudence, custom evaluations are key. To protect your rights and obtain legal remedies, we advise a private consultation with our Senior Partners. Would you like to schedule an immediate call back?';
        action = { label: 'Request Call Back', page: 'contact' };
      }

      setMessages(prev => [...prev, { sender: 'ai', text: responseText, timestamp: time, action }]);
      setIsTyping(false);
    }, 1200);
  };

  const handleActionClick = (page: string) => {
    setCurrentPage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* FLOATING ACTION BUTTON */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-dark hover:bg-gold text-gold hover:text-dark p-4 rounded-none shadow-2xl shadow-black border border-gold/20 z-50 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
        >
          <div className="relative">
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
            <MessageSquare className="w-6 h-6" />
          </div>
          <span className="hidden md:inline font-bold text-xs pr-1">Legal AI Assistant</span>
        </button>
      )}

      {/* CHAT WINDOW */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[340px] sm:w-[380px] h-[500px] bg-dark-card border border-white/10 rounded-none shadow-2xl shadow-black z-50 flex flex-col justify-between overflow-hidden animate-slideUp">
          
          {/* HEADER BAR */}
          <div className="bg-dark p-4 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <div className="bg-gold p-2 rounded-none text-dark shadow-md">
                <Scale className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-white font-serif font-bold text-xs flex items-center gap-1.5">
                  <span>Al-Mizan Legal AI</span>
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                </h4>
                <div className="flex items-center gap-1 text-[9px] text-white/40 font-mono font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Active Jurisdictions Lookup</span>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/40 hover:text-white p-1 hover:bg-white/10 rounded-none transition-all"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* CHAT MESSAGES CONTAINER */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-dark/20">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[85%] rounded-none p-3.5 text-xs leading-relaxed ${m.sender === 'user' ? 'bg-gold text-dark font-semibold' : 'bg-dark text-white/90 border border-white/10'}`}>
                  {m.text}

                  {/* INTERACTIVE LINK IN CHAT */}
                  {m.action && (
                    <button
                      onClick={() => handleActionClick(m.action!.page)}
                      className="mt-3 w-full bg-gold hover:bg-gold-hover text-dark font-bold py-2 rounded-none text-[10px] uppercase tracking-wider flex items-center justify-center gap-1 transition-all"
                    >
                      <span>{m.action.label}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
                <span className="text-[9px] text-white/30 font-mono mt-1 px-1 font-light">{m.timestamp}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex flex-col items-start">
                <div className="bg-dark text-white/40 rounded-none p-3 border border-white/10 flex gap-1">
                  <span className="h-1.5 w-1.5 bg-white/40 rounded-full animate-bounce"></span>
                  <span className="h-1.5 w-1.5 bg-white/40 rounded-full animate-bounce delay-100"></span>
                  <span className="h-1.5 w-1.5 bg-white/40 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef}></div>
          </div>

          {/* CHAT INPUT BAR */}
          <form onSubmit={handleSendMessage} className="p-3 bg-dark-card border-t border-white/10 flex gap-2">
            <input 
              type="text" 
              placeholder="Ask about bail, custody, property..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-dark border border-white/10 rounded-none px-3.5 py-2 text-white placeholder-white/30 text-xs outline-none focus:border-gold transition-all"
            />
            <button 
              type="submit"
              className="bg-gold hover:bg-gold-hover text-dark p-2 rounded-none shadow transition-all shrink-0"
            >
              <Send className="w-4.5 h-4.5" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
