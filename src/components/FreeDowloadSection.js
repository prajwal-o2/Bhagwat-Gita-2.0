import { BookOpen, Download, Gift, Star } from "lucide-react";

const { useState } = require("react");

const FreeDownloadSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadCount, setDownloadCount] = useState(20);

  const handleFreeDownload = async () => {
    setIsDownloading(true);

    setTimeout(() => {
      const pdfUrl = "/Original_book.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Bhagwad-Geeta-2.0-Complete-Free.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadCount((prev) => prev + 1);
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Gift className="w-4 h-4" />
            Complete Book - Free Download
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get The Complete Book
            <span className="block text-orange-600">Absolutely Free</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Download the complete Bhagwad Geeta 2.0 with all chapters and
            discover the timeless teachings that thousands are using to find
            peace, clarity, and purpose in their lives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Book Preview */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-8 h-8" />
                  <div>
                    <h3 className="text-xl font-bold">Complete Book</h3>
                    <p className="text-orange-100">All Chapters Included</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span>PDF</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pages:</span>
                    <span>149 Pages</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-green-200 font-semibold">
                      Complete Edition
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border">
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {downloadCount.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500">Downloads</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Download CTA */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Complete Book Includes
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>24 Transformative Chapters</strong> - From The
                    Rhythm of Nature to The Four Yogas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>Mind Mastery:</strong> Belief, Imagination,
                    Concentration & Present Moment Awareness
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>Emotional Freedom:</strong> Attachment, Detachment,
                    Ego Understanding & Even-mindedness
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>Life Mastery:</strong> Tools of Right Living, Flow
                    State & Unconditional Acceptance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>The Four Yogas:</strong> Jnana, Raja, Karma & Bhakti
                    - Complete spiritual pathways
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>Practical Wisdom:</strong> Health, Habits, Love &
                    Overcoming Suffering
                  </span>
                </li>
              </ul>

              <button
                onClick={handleFreeDownload}
                disabled={isDownloading}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isDownloading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Preparing Download...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Download Complete Book Free
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center mt-3">
                No email required • Instant download • Safe & secure • 149 pages
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeDownloadSection;
