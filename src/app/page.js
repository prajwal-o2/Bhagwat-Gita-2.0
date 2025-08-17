"use client";
import AboutSection from "@/components/AboutSection";
import AuthorSection from "@/components/AuthorSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState({});
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [bookFormat, setBookFormat] = useState("hardcover");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      text: "Bhagwat Gita 2.0 gave me clarity in chaos. It doesn't just inspire — it transforms. Every chapter felt like a conversation with my higher self.",
      author: "Aarav Mehta",
      role: "Yoga Practitioner & Entrepreneur",
      rating: 5,
    },
    {
      text: "Prajwal Sharma has distilled deep spiritual wisdom into beautifully simple words. This book reminded me to trust life, do my karma, and let go.",
      author: "Riya Kapoor",
      role: "Wellness Blogger",
      rating: 5,
    },
    {
      text: "Not just a book — an awakening. It's modern, relatable, and soul-stirring. I found joy and peace where I never thought to look.",
      author: "Kabir Joshi",
      role: "Mindfulness Coach",
      rating: 5,
    },
    {
      text: "This book brought me back to my center. Reading it felt like coming home to my truth. Absolutely profound yet gracefully simple.",
      author: "Nivedita Rao",
      role: "Psychologist",
      rating: 5,
    },
  ];
  
  const formatPrices = {
    hardcover: 24.99,
    paperback: 16.99,
    ebook: 9.99,
    audiobook: 19.99,
  };

  const handlePurchase = () => {
    // Simulate payment gateway integration
    const totalPrice = (formatPrices[bookFormat] * quantity).toFixed(2);
    alert(
      `Redirecting to payment gateway...\nFormat: ${bookFormat}\nQuantity: ${quantity}\nTotal: $${totalPrice}`
    );
  };



  return (
    <div className="relative">
      <HeroSection
        formatPrices={formatPrices}
        bookFormat={bookFormat}
        setBookFormat={setBookFormat}
        quantity={quantity}
        setQuantity={setQuantity}
        handlePurchase={handlePurchase}
      />
    
      <AboutSection isVisible={isVisible} />
      <AuthorSection isVisible={isVisible} />
      <TestimonialsSection testimonials={testimonials} currentTestimonial={currentTestimonial} setCurrentTestimonial={setCurrentTestimonial} />

      <ContactSection isVisible={isVisible} />
      <Footer />
    </div>
  );
}
