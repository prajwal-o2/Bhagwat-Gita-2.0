"use client";
import AboutSection from "@/components/AboutSection";
import AuthorSection from "@/components/AuthorSection";
import ContactSection from "@/components/ContactSection";
import AppreciationSection from "@/components/AppreciationSection";
import Footer from "@/components/Footer";
import FreeDownloadSection from "@/components/FreeDowloadSection";
import HeroSection from "@/components/HeroSection";
import QuotesSection from "@/components/QuotesSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState({});
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

  const quotes = [
    {
      text: "True love begins where ego, power politics and possessiveness dissolve.",
    },
    {
      text: "A man has the power to change his beliefs and hence also the power to change his reality.",
    },
    {
      text: "Only permanent peace that is there in life is to totally experience and accept the life as it has come without avoiding, resisting or escaping",
    },
    { text: "Abundance comes to those, who live abundantly for others." },
    {
      text: "Life is meant to be experienced in its complete glory with desirable and undesirable experiences complementing each other.",
    },
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  const formatPrices = {
    // hardcover: 24.99,
    // paperback: 16.99,
    ebook: 9.99,
    // audiobook: 19.99,
  };

  const handlePurchase = () => {
   
    const totalPrice = (formatPrices[bookFormat] * quantity).toFixed(2);
    alert(
      `Redirecting to payment gateway...\nFormat: ${bookFormat}\nQuantity: ${quantity}\nTotal: $${totalPrice}`
    );
  };

  return (
    <div className="relative overflow-x-hidden w-[100vw]">
  
      <HeroSection
        formatPrices={formatPrices}
        bookFormat={bookFormat}
        setBookFormat={setBookFormat}
        quantity={quantity}
        setQuantity={setQuantity}
        handlePurchase={handlePurchase}
      />

      <FreeDownloadSection />

      <AppreciationSection />

      <AboutSection isVisible={isVisible} />

      <QuotesSection
        currentQuote={currentQuote}
        setCurrentQuote={setCurrentQuote}
        quotes={quotes}
      />
      <ContactSection isVisible={isVisible} />
      <Footer />
    </div>
  );
}
