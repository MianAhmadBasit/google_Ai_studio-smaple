import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import OurLawyers from './components/OurLawyers';
import CaseProcess from './components/CaseProcess';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import RecentBlogs from './components/RecentBlogs';
import ContactForm from './components/ContactForm';
import LocalSeo from './components/LocalSeo';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';

// PAGE VIEWS
import AboutPage from './components/AboutPage';
import PracticeAreasPage from './components/PracticeAreasPage';
import CaseResultsPage from './components/CaseResultsPage';
import ConsultationPage from './components/ConsultationPage';
import BlogPage from './components/BlogPage';
import FAQPage from './components/FAQPage';
import ContactPage from './components/ContactPage';
import PrivacyTermsPage from './components/PrivacyTermsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedCity, setSelectedCity] = useState<string>('islamabad');

  // Smooth scroll to top on page switches
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <PracticeAreas setCurrentPage={setCurrentPage} />
            <OurLawyers setCurrentPage={setCurrentPage} />
            <CaseProcess />
            <Testimonials />
            <FAQSection />
            <RecentBlogs setCurrentPage={setCurrentPage} />
            <ContactForm />
          </>
        );
      case 'about':
        return <AboutPage />;
      case 'practice-areas':
        return <PracticeAreasPage setCurrentPage={setCurrentPage} />;
      case 'lawyers':
        return <OurLawyers setCurrentPage={setCurrentPage} />;
      case 'case-results':
        return <CaseResultsPage />;
      case 'blog':
        return <BlogPage />;
      case 'faq':
        return <FAQPage />;
      case 'consultation':
        return <ConsultationPage />;
      case 'contact':
        return <ContactPage />;
      case 'local-seo':
        return (
          <LocalSeo 
            selectedCity={selectedCity} 
            setSelectedCity={setSelectedCity} 
            setCurrentPage={setCurrentPage} 
          />
        );
      case 'privacy':
      case 'terms':
        return <PrivacyTermsPage />;
      default:
        return (
          <div className="bg-dark py-24 text-center space-y-4">
            <h2 className="text-gold font-serif font-light text-3xl">404 — Page Not Found</h2>
            <p className="text-white/60 text-sm font-light">The legal resource you requested could not be located in our registries.</p>
            <button 
              onClick={() => setCurrentPage('home')}
              className="bg-gold hover:bg-gold-hover text-dark font-bold px-6 py-2.5 rounded-none text-xs transition-all"
            >
              Return Home
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white/90 selection:bg-gold selection:text-dark flex flex-col justify-between overflow-x-hidden antialiased font-sans">
      <div>
        <Header 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          selectedCity={selectedCity} 
          setSelectedCity={setSelectedCity} 
        />
        <main className="w-full">
          {renderActivePage()}
        </main>
      </div>

      <Footer 
        setCurrentPage={setCurrentPage} 
        setSelectedCity={setSelectedCity} 
      />

      {/* FLOATING SMART CHAT ASSISTANT */}
      <AIAssistant setCurrentPage={setCurrentPage} />
    </div>
  );
}
