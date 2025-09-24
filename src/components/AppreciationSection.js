import { BookOpen, Copy, Gift, Heart, QrCode, Check, Coffee, Star } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const AppreciationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [showQR, setShowQR] = useState(true);
  const [copiedUPI, setCopiedUPI] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const suggestedAmounts = [99, 199, 499, 999, 1999];
  const upiId = "prajwalsharma001@oksbi";

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const copyUPIId = useCallback(async () => {
    if (!isClient) return; // Prevent execution during SSR
    
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(upiId);
        setCopiedUPI(true);
        setTimeout(() => setCopiedUPI(false), 2000);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = upiId;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setCopiedUPI(true);
        setTimeout(() => setCopiedUPI(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }, [isClient, upiId]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-medium mb-4">
            <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
            Show Your Appreciation
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Loved the Book?
            <span className="block text-purple-600">Appreciate the Author</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            If Bhagwad Geeta 2.0 has added value to your life and you'd like to show appreciation for the author's effort, you can contribute as a token of gratitude.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left side - Why Appreciate */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Why Readers Appreciate</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Quality Content</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">For the time, effort, and expertise put into creating this book</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Personal Transformation</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">When the teachings have genuinely impacted your life</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Author's Dedication</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">To acknowledge the years of study and writing behind this work</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Future Projects</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">Encourage the author to continue sharing wisdom</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Appreciation Payment */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Express Your Gratitude</h3>
            
            {/* Payment Methods - Only render interactive elements on client */}
            {isClient && (
              <div className="space-y-4">
                {showQR && (
                  <div className="bg-gray-50 rounded-xl p-4 sm:p-6 text-center">
                    <div className="w-40 h-40 sm:w-48 sm:h-48 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center border border-gray-200 overflow-hidden">
                      <img 
                        src="/QR_CODE.jpeg" 
                        alt="UPI QR Code for Author Appreciation" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3">Scan with any UPI app to send appreciation</p>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-2 bg-white rounded-lg p-3 border">
                      <span className="text-xs sm:text-sm text-gray-600 flex-1 break-all">UPI ID: {upiId}</span>
                      <button
                        onClick={copyUPIId}
                        className="flex items-center gap-1 text-purple-600 hover:text-purple-700 text-xs sm:text-sm font-medium min-w-[70px] justify-center mt-2 sm:mt-0 px-3 py-1 sm:px-0 sm:py-0 rounded bg-purple-50 sm:bg-transparent"
                        disabled={!isClient}
                      >
                        {copiedUPI ? (
                          <>
                            <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                <p className="text-xs text-gray-500 text-center px-2">
                  This is purely voluntary appreciation for the author's work • No obligation whatsoever
                </p>
              </div>
            )}

            {/* Loading state for SSR */}
            {!isClient && (
              <div className="space-y-4">
                <div className="w-full bg-gray-200 animate-pulse px-6 py-4 rounded-xl h-14"></div>
                <p className="text-xs text-gray-500 text-center px-2">
                  This is purely voluntary appreciation for the author's work • No obligation whatsoever
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppreciationSection;