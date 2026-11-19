import React, { useState } from 'react';
import { blogPosts } from '../types';
import { Calendar, Clock, User, ArrowLeft, ShieldAlert } from 'lucide-react';

export default function BlogPage() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const activePost = blogPosts.find((p) => p.id === selectedPostId);

  return (
    <div className="bg-dark py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {!selectedPostId ? (
          /* BLOG LIST VIEW */
          <div className="space-y-12">
            
            {/* HEADER */}
            <div className="text-center max-w-2xl mx-auto">
              <span className="bg-gold/5 border border-gold/20 text-gold text-[10px] font-bold px-3 py-1 rounded-none uppercase tracking-wider">
                Law Chambers Resources
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-white mt-2 tracking-tight">Legal Guides & Court Audits</h2>
              <p className="text-white/40 text-xs md:text-sm mt-2 font-light">Analytical guides regarding judicial trials, SECP corporate procedures, and family court codes in Pakistan.</p>
            </div>

            {/* LIST GRIDS */}
            <div className="space-y-6">
              {blogPosts.map((post) => (
                <div 
                  key={post.id} 
                  onClick={() => setSelectedPostId(post.id)}
                  className="bg-dark-card border border-white/10 rounded-none p-6 hover:border-gold/30 transition-all duration-300 cursor-pointer shadow-xl flex flex-col md:flex-row justify-between gap-6 group"
                >
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-white/40 font-mono font-light">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gold" />
                        <span>{post.date}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gold" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-white text-lg font-serif font-bold group-hover:text-gold transition-colors leading-snug">
                      {post.title}
                    </h3>
                    
                    <p className="text-white/60 text-xs leading-relaxed line-clamp-2 font-light">
                      {post.excerpt}
                    </p>

                    <div className="flex gap-2">
                      {post.tags.map((tag, i) => (
                        <span key={i} className="bg-dark border border-white/10 text-white/50 text-[9px] font-mono px-2 py-0.5 rounded-none font-light">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between items-end border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 shrink-0">
                    <div className="flex items-center gap-2 text-right">
                      <div className="text-right">
                        <span className="text-white/30 text-[8px] uppercase font-mono block">Author</span>
                        <span className="text-white font-serif font-bold text-[10px]">{post.author}</span>
                      </div>
                      <div className="p-1.5 bg-dark border border-white/10 rounded-none text-gold">
                        <User className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <span className="text-gold text-xs font-bold hover:underline mt-4 hidden md:inline-flex items-center gap-1">
                      <span>Read Guide</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ) : (
          /* BLOG DETAIL VIEW */
          activePost && (
            <article className="bg-dark-card border border-white/10 rounded-none p-6 md:p-8 shadow-2xl space-y-6">
              
              {/* BACK BTN */}
              <button 
                onClick={() => setSelectedPostId(null)}
                className="inline-flex items-center gap-1.5 text-white/60 hover:text-gold text-xs font-serif font-bold transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Knowledge Index</span>
              </button>

              {/* POST HEADER */}
              <div className="border-b border-white/10 pb-5 space-y-4">
                <span className="bg-dark text-gold border border-gold/20 px-2.5 py-1 rounded-none text-[10px] uppercase font-bold tracking-wider font-mono">
                  {activePost.category}
                </span>

                <h1 className="text-2xl md:text-3xl font-serif font-light text-white leading-tight">
                  {activePost.title}
                </h1>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] text-white/40 font-mono font-light">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span>Published: {activePost.date}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-gold" />
                    <span>Estimated: {activePost.readTime}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4 text-gold" />
                    <span>Counsel: {activePost.author}</span>
                  </span>
                </div>
              </div>

              {/* FULL CONTENT BODY */}
              <div className="text-white/80 text-xs md:text-sm leading-relaxed space-y-4 whitespace-pre-line font-light">
                {activePost.content}
              </div>

              {/* STATUTORY RULES HIGHLIGHT */}
              <div className="p-4 bg-dark border border-white/10 rounded-none flex gap-3.5 items-start">
                <ShieldAlert className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-white font-serif font-bold text-xs">Note on Legal Application</h5>
                  <p className="text-white/40 text-[11px] leading-relaxed mt-1 font-light">
                    The details contained in this analytical report are for general informational purposes under Pakistani civil and criminal statutes and do not constitute formal legal vakalatnama agreements. Consult our partners regarding your specific trial merits.
                  </p>
                </div>
              </div>

              {/* FOOTER */}
              <div className="pt-6 border-t border-white/10 flex justify-between items-center flex-wrap gap-4">
                <div className="flex gap-2">
                  {activePost.tags.map((t, idx) => (
                    <span key={idx} className="bg-dark text-white/40 border border-white/10 text-[10px] px-2 py-1 rounded-none font-light">
                      #{t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedPostId(null)}
                  className="border border-white/10 text-white/60 hover:text-white px-4 py-2 rounded-none text-xs"
                >
                  Close Article
                </button>
              </div>

            </article>
          )
        )}

      </div>
    </div>
  );
}
