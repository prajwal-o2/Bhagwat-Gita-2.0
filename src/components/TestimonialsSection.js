import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = ({ testimonials, currentTestimonial, setCurrentTestimonial }) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-16">What Readers Are Saying</h2>
        
        <div className="relative">
          <TestimonialCard testimonial={testimonials[currentTestimonial]} />
          <TestimonialDots 
            testimonials={testimonials}
            currentTestimonial={currentTestimonial}
            setCurrentTestimonial={setCurrentTestimonial}
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
    <div className="flex justify-center mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
      ))}
    </div>
    <blockquote className="text-2xl text-white font-light leading-relaxed mb-6">
      "{testimonial.text}"
    </blockquote>
    <div className="text-amber-300 font-semibold">{testimonial.author}</div>
    <div className="text-amber-200 text-sm">{testimonial.role}</div>
  </div>
);

const TestimonialDots = ({ testimonials, currentTestimonial, setCurrentTestimonial }) => (
  <div className="flex justify-center mt-6 space-x-2">
    {testimonials.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentTestimonial(index)}
        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
          index === currentTestimonial ? 'bg-amber-400' : 'bg-white/30'
        }`}
      />
    ))}
  </div>
);

export default TestimonialsSection;