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
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Heart className="w-4 h-4" />
            Show Your Appreciation
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved the Book?
            <span className="block text-purple-600">Appreciate the Author</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            If Bhagwad Geeta 2.0 has added value to your life and you'd like to show appreciation for the author's effort, you can contribute as a token of gratitude.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Why Appreciate */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Readers Appreciate</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Content</h4>
                    <p className="text-gray-600 text-sm">For the time, effort, and expertise put into creating this book</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Personal Transformation</h4>
                    <p className="text-gray-600 text-sm">When the teachings have genuinely impacted your life</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Coffee className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Author's Dedication</h4>
                    <p className="text-gray-600 text-sm">To acknowledge the years of study and writing behind this work</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Gift className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Future Projects</h4>
                    <p className="text-gray-600 text-sm">Encourage the author to continue sharing wisdom</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Appreciation Payment */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Express Your Gratitude</h3>
            
        

     

            {/* Payment Methods - Only render interactive elements on client */}
            {isClient && (
              <div className="space-y-4">
        

                {showQR && (
                  <div className="bg-gray-50 rounded-xl p-6 text-center">
                    <div className="w-48 h-48 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center border border-gray-200 overflow-hidden">
                      <img 
                        src="/QR_CODE.jpeg" 
                        alt="UPI QR Code for Author Appreciation" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Scan with any UPI app to send appreciation</p>
                    
                    <div className="flex items-center gap-2 bg-white rounded-lg p-3 border">
                      <span className="text-sm text-gray-600 flex-1">UPI ID: {upiId}</span>
                      <button
                        onClick={copyUPIId}
                        className="flex items-center gap-1 text-purple-600 hover:text-purple-700 text-sm font-medium min-w-[70px] justify-center"
                        disabled={!isClient}
                      >
                        {copiedUPI ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                <p className="text-xs text-gray-500 text-center">
                  This is purely voluntary appreciation for the author's work • No obligation whatsoever
                </p>
              </div>
            )}

            {/* Loading state for SSR */}
            {!isClient && (
              <div className="space-y-4">
                <div className="w-full bg-gray-200 animate-pulse px-6 py-4 rounded-xl h-14"></div>
                <p className="text-xs text-gray-500 text-center">
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