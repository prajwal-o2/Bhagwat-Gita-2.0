"use client"

import React from 'react';
import { Quote, User } from 'lucide-react';

const AboutSection = ({ isVisible }) => {
  return (
    <section 
      id="about" 
      data-animate 
      className={`relative py-20 px-6 bg-gradient-to-r from-amber-100 to-orange-100 transition-all duration-1000 overflow-hidden ${
        isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Animated Sanskrit Background */}
      <SanskritBackground />
      
      <div className="max-w-6xl mx-auto relative z-20">
        <SectionHeader 
          title="About The Book"
          subtitle="A Modern Journey Through Timeless Wisdom"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <BookDescription />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
};

const SanskritBackground = () => {
  const sanskritShlokas = [
    "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
    "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय",
    "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज",
    "तत्त्वमसि श्वेतकेतो तत्त्वमसि",
    "वासुदेवः सर्वमिति स महात्मा सुदुर्लभः",
    "अहं वैश्वानरो भूत्वा प्राणिनां देहमाश्रितः",
    "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत",
    "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्"
  ];

  const topMarqueeText = sanskritShlokas.slice(0, 4).join(" • ");
  const bottomMarqueeText = sanskritShlokas.slice(4, 8).join(" • ");

  return (
    <>
      <style jsx global>{`
        @keyframes marquee-ltr {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes marquee-rtl {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .marquee-container {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }
        
        .marquee-content-ltr {
          display: inline-block;
          animation: marquee-ltr 30s linear infinite;
          opacity: 0.3;
        }
        
        .marquee-content-rtl {
          display: inline-block;
          animation: marquee-rtl 30s linear infinite;
          opacity: 0.3;
        }
      `}</style>
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Marquee - Left to Right */}
        <div className="absolute top-4 left-0 w-full">
          <div className="marquee-container">
            <div className="marquee-content-ltr text-orange-800 font-serif text-lg font-bold select-none">
              {topMarqueeText} • {topMarqueeText} • {topMarqueeText} • {topMarqueeText}
            </div>
          </div>
        </div>

        {/* Bottom Marquee - Right to Left */}
        <div className="absolute bottom-4 left-0 w-full">
          <div className="marquee-container">
            <div className="marquee-content-rtl text-orange-800 font-serif text-lg font-bold select-none">
              {bottomMarqueeText} • {bottomMarqueeText} • {bottomMarqueeText} • {bottomMarqueeText}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-gray-900 mb-6">{title}</h2>
    <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-red-500 mx-auto mb-8"></div>
  </div>
);

const BookDescription = () => (
  <div className="space-y-6">
    <h3 className="text-3xl font-bold text-gray-900">Transform Your Mind, Transform Your Reality</h3>
    <p className="text-lg text-gray-700 leading-relaxed">
      <strong>Bhagwad Geeta 2.0</strong> takes you on a profound journey through 24 transformative chapters that explore the deepest aspects of human consciousness and spiritual awakening. From understanding the rhythm of nature to mastering the four yogas, this book bridges ancient wisdom with modern living.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed">
      Discover practical insights on concentration, brahmacharya, flow states, and the art of even-mindedness. Learn to transcend victimhood, embrace unconditional acceptance, and find union with your higher self through the timeless paths of Jnana, Raja, Karma, and Bhakti Yoga.
    </p>

    <div className="grid grid-cols-2 gap-6 pt-6">
      <StatCard number="24" label="Life-Changing Chapters" />
      <StatCard number="149" label="Pages of Wisdom" />
    </div>
  </div>
);

const StatCard = ({ number, label }) => (
  <div className="text-center p-4 bg-white/60 rounded-lg">
    <div className="text-3xl font-bold text-amber-600">{number}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

const TestimonialCard = () => (
  <div className="relative">
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
      <Quote className="w-12 h-12 text-amber-500 mb-4" />
      <blockquote className="text-xl text-gray-800 font-medium leading-relaxed mb-6">
        "A man has the power to change his beliefs and hence also the power to change his reality."
      </blockquote>
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-red-400 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </div>
        <div>
          <div className="font-semibold text-gray-900">Bhagwad Geeta 2.0</div>
          <div className="text-sm text-gray-600">From the book</div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutSection;