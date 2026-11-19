import React from 'react';
import { blogPosts } from '../types';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

interface RecentBlogsProps {
  setCurrentPage: (page: string) => void;
}

export default function RecentBlogs({ setCurrentPage }: RecentBlogsProps) {
  return (
    <section id="recent-blogs-section" className="bg-dark py-16 px-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div className="max-w-xl">
            <h2 className="text-gold text-xs font-bold uppercase tracking-widest">Law & Precedent Resources</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-light text-white mt-2 tracking-tight">Recent Legal Guides & Audits</h3>
            <p className="text-white/70 text-sm mt-3 font-light">
              Stay updated with our analytical breakdowns of landmark Supreme Court judgments, FBR regulatory changes, and family court amendments.
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentPage('blog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-gold hover:text-gold-hover font-bold text-xs md:text-sm flex items-center gap-1 shrink-0 border border-gold/20 px-4 py-2 rounded-none hover:bg-gold/10 transition-all"
          >
            <span>View All Legal Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-dark-card border border-white/10 rounded-none p-6 hover:border-gold/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* META INFO */}
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[10px] text-white/40 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gold/70" />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold/70" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="bg-dark text-gold border border-gold/15 px-2.5 py-0.5 rounded-none text-[10px] uppercase font-bold tracking-wider">
                    {post.category}
                  </span>
                  <h4 className="text-white text-base md:text-lg font-serif font-bold group-hover:text-gold transition-colors leading-snug">
                    {post.title}
                  </h4>
                </div>

                <p className="text-white/60 text-xs leading-relaxed line-clamp-3 font-light">
                  {post.excerpt}
                </p>
              </div>

              {/* FOOTER */}
              <div className="border-t border-white/10 pt-4 mt-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-dark border border-white/10 rounded-none text-gold">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-white/40 text-[9px] uppercase font-mono block">Written By</span>
                    <span className="text-white/80 font-bold text-[10px]">{post.author}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setCurrentPage('blog');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-1.5 bg-dark hover:bg-gold text-white/60 hover:text-dark border border-white/10 hover:border-transparent rounded-none shadow transition-all"
                  title="Read Article"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
