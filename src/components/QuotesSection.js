import React, { useEffect } from 'react';
import { Quote } from 'lucide-react';

const QuotesSection = ({ quotes, currentQuote, setCurrentQuote }) => {

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-16">Wisdom from the Book</h2>
        
        <div className="relative">
          <QuoteCard quote={quotes[currentQuote]} />
          <QuoteDots 
            quotes={quotes}
            currentQuote={currentQuote}
            setCurrentQuote={setCurrentQuote}
          />
        </div>
      </div>
    </section>
  );
};

const QuoteCard = ({ quote }) => (
  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
    <div className="flex justify-center mb-6">
      <Quote className="w-12 h-12 text-amber-400" />
    </div>
    <blockquote className="text-2xl text-white font-light leading-relaxed mb-6 italic">
      "{quote.text}"
    </blockquote>
    <div className="w-16 h-0.5 bg-amber-400 mx-auto"></div>
  </div>
);

const QuoteDots = ({ quotes, currentQuote, setCurrentQuote }) => (
  <div className="flex justify-center mt-6 space-x-2">
    {quotes.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentQuote(index)}
        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
          index === currentQuote ? 'bg-amber-400' : 'bg-white/30'
        }`}
      />
    ))}
  </div>
);

export default QuotesSection;