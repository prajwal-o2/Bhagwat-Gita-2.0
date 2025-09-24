import React from 'react';
import { ChevronDown, Star, BookOpen, Heart, ShoppingCart, Share2 } from 'lucide-react';


const HeroSection = ({ 
  bookFormat, 
  setBookFormat, 
  quantity, 
  setQuantity, 
  formatPrices, 
  handlePurchase 
}) => {
  return (
    <section className="relative min-h-screen flex items-center  px-6 py-10  pt-[80px] overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-400 rounded-full animate-pulse opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Book and Title in horizontal layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Floating Book */}
          <div className="flex justify-center ">
            <FloatingBook />
          </div>
          
          {/* Right side - Epic Title */}
          <div className="text-center lg:text-left">
            <BookTitle />
          </div>
        </div>

        {/* Purchase Cards - Below both */}
        <div className="text-center">
          {/* <FormatSelector 
            formatPrices={formatPrices}
            bookFormat={bookFormat}
            setBookFormat={setBookFormat}
          /> */}

          {/* Quantity and Purchase */}
          {/* <PurchaseSection 
            quantity={quantity}
            setQuantity={setQuantity}
            formatPrices={formatPrices}
            bookFormat={bookFormat}
            handlePurchase={handlePurchase}
          /> */}
        </div>

        {/* Scroll Indicator */}
        {/* <ScrollIndicator /> */}
      </div>
    </section>
  );
};

const FloatingBook = () => (
  <div className="relative">
    <div className="relative inline-block transform hover:scale-110 transition-all duration-700">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-red-400/30 rounded-full blur-2xl scale-150 animate-pulse"></div>

      {/* Floating Book Container */}
      <div className="relative bg-gradient-to-br from-amber-800 via-orange-900 to-red-900 p-6 rounded-lg shadow-2xl transform rotate-6 hover:rotate-3 transition-all duration-500">
        <div className="w-64 h-80 rounded-md border-4 border-amber-700 relative overflow-hidden">
          
       
          {/* Your Book Cover Image */}
          <img
            src={"FinalCoverPage.png"} 
            alt="Bhagwad Geeta 2.0 Cover"
            style={{width:"100%", height:"100%"}}
            className="object-cover"
          />
        </div>
      </div>

      {/* Orbiting Elements */}
      <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-bounce">
        <Star className="w-8 h-8 text-yellow-800" />
      </div>
      <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-red-400 to-pink-400 rounded-full flex items-center justify-center animate-pulse">
        <Heart className="w-6 h-6 text-red-800" />
      </div>
    </div>
  </div>
);

const BookTitle = () => (
    <div className="space-y-8">
  
      <h2 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight">
        <span className="block">Bhagwad Geeta</span>
        <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent animate-pulse">2.0</span>
      </h2>
  
      <p className="text-xl lg:text-2xl text-amber-200 leading-relaxed max-w-2xl font-light">
        A soulful journey through <span className="text-amber-400 font-semibold">Karma</span>, 
        <span className="text-orange-400 font-semibold"> Joy</span>, and 
        <span className="text-red-400 font-semibold"> Surrender</span> — reimagining ancient wisdom for the modern world. 
        <br />
        Discover a book that helps you not just live, but live meaningfully.
      </p>
  
      {/* <div className="flex items-center justify-center lg:justify-start space-x-8">
        <div className="flex items-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
          <span className="ml-3 text-amber-200 text-xl font-semibold">4.9/5 (3,200+ reviews)</span>
        </div>
      </div> */}
    </div>
  );
  

const FormatSelector = ({ formatPrices, bookFormat, setBookFormat }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
    {Object.entries(formatPrices).map(([format, price]) => (
      <div
        key={format}
        onClick={() => setBookFormat(format)}
        className={`cursor-pointer p-6 rounded-2xl backdrop-blur-sm border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
          bookFormat === format
            ? 'bg-gradient-to-br from-amber-500/30 to-red-500/30 border-amber-400 shadow-lg shadow-amber-400/25'
            : 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-amber-300'
        }`}
      >
        <div className="text-center space-y-3">
          <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
            bookFormat === format 
              ? 'bg-gradient-to-br from-amber-400 to-orange-400' 
              : 'bg-gradient-to-br from-slate-600 to-slate-700'
          }`}>
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white capitalize">{format}</h3>
          <div className="text-3xl font-bold text-amber-400">${price}</div>
          {bookFormat === format && (
            <div className="text-amber-300 text-sm font-semibold">✓ Selected</div>
          )}
        </div>
      </div>
    ))}
  </div>
);

const PurchaseSection = ({ quantity, setQuantity, formatPrices, bookFormat, handlePurchase }) => (
  <>
    <div className="flex items-center justify-center space-x-8 mb-8">
      <div className="flex items-center space-x-4">
        <label className="text-xl font-semibold text-amber-200">Quantity:</label>
        <select
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="px-6 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-xl text-white text-lg font-semibold focus:border-amber-400 focus:outline-none"
        >
          {[1,2,3,4,5].map(n => (
            <option key={n} value={n} className="bg-slate-800">{n}</option>
          ))}
        </select>
      </div>
      
      <div className="text-center">
        <div className="text-amber-200 text-lg">Total</div>
        <div className="text-4xl font-bold text-amber-400">
          ${(formatPrices[bookFormat] * quantity).toFixed(2)}
        </div>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
      <button
        onClick={handlePurchase}
        className="group relative px-12 py-6 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white rounded-2xl font-bold text-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative flex items-center space-x-3">
          <ShoppingCart className="w-8 h-8" />
          <span>BUY NOW</span>
        </div>
        <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </button>

      <div className="flex space-x-4">
        <button className="p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white hover:bg-white/30 transition-all duration-200 group">
          <Heart className="w-6 h-6 group-hover:text-red-400 transition-colors" />
        </button>
        <button className="p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white hover:bg-white/30 transition-all duration-200 group">
          <Share2 className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
        </button>
      </div>
    </div>
  </>
);

const ScrollIndicator = () => (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="flex flex-col items-center space-y-2">
      <span className="text-amber-200 text-sm font-semibold">Discover More</span>
      <ChevronDown className="w-8 h-8 text-amber-400" />
    </div>
  </div>
);

export default HeroSection;