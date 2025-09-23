import React from 'react';
import { User, BookOpen } from 'lucide-react';

const AuthorSection = ({ isVisible }) => {
  return (
    <section 
      id="author" 
      data-animate 
      className={`py-20 px-6 bg-gradient-to-r from-orange-50 to-red-50 transition-all duration-1000 ${
        isVisible.author ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AuthorAvatar />
          <AuthorInfo />
        </div>
      </div>
    </section>
  );
};

const AuthorAvatar = () => (
  <div className="relative">
    <div className="w-80 h-80 mx-auto bg-gradient-to-br from-amber-400 to-red-500 rounded-full p-1">
      <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
        <User className="w-32 h-32 text-gray-500" />
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 bg-amber-500 p-4 rounded-full">
      <BookOpen className="w-8 h-8 text-white" />
    </div>
  </div>
);
const AuthorInfo = () => (
  <div className="space-y-6">
    <h2 className="text-4xl font-bold text-gray-900">Meet the Author</h2>
    <h3 className="text-2xl font-semibold text-amber-600">Prajwal Sharma</h3>
    
    <p className="text-lg text-gray-700 leading-relaxed">
      Prajwal Sharma is a spiritual thinker, seeker, and storyteller who weaves the timeless truths of the Bhagavad Geeta into the modern human experience. With a deep-rooted belief in <span className="text-amber-600 font-medium">karma</span> and the art of <span className="text-orange-500 font-medium">surrender</span>, his words resonate with authenticity and inner peace.
    </p>

    <p className="text-lg text-gray-700 leading-relaxed">
      Whether it's a moment of silence or a burst of laughter, Prajwal embraces life with full presence and gratitude. Through <em>Bhagwad Geeta 2.0</em>, he invites readers to pause, reflect, and rediscover the joy of being — right here, right now.
    </p>

    <div className="grid grid-cols-3 gap-4 pt-6">
      <StatCard number="1" label="Life-Changing Book" />
      <StatCard number="50K+" label="Readers Inspired" />
      <StatCard number="∞" label="Moments Embraced" />
    </div>
  </div>
);


const StatCard = ({ number, label }) => (
  <div className="text-center p-4 bg-white/60 rounded-lg">
    <div className="text-2xl font-bold text-amber-600">{number}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

export default AuthorSection;