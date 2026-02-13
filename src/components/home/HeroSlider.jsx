import { useState, useEffect } from 'react';
import { paintings } from '../../data/paintings';
import { ChevronLeft, ChevronRight, Pause, Play, ShoppingBag } from 'lucide-react';

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    let progressInterval;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % paintings.length);
        setProgress(0);
      }, 6000);
      
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + (100/60);
        });
      }, 100);
    }
    
    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isPlaying, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % paintings.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + paintings.length) % paintings.length);
    setProgress(0);
  };

  return (
    <div className="relative h-screen max-h-[900px] min-h-[700px] w-full overflow-hidden bg-black">
      {/* Background with Parallax Effect */}
      <div 
        className="absolute inset-0 transition-transform duration-[8000ms] ease-out"
        style={{
          backgroundImage: `url(${paintings[currentIndex].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.1)',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container-custom text-center text-white px-4">
          <div className="animate-fade-in-down">
            <span className="inline-block px-6 py-2 bg-[#E14749] font-['Montserrat'] text-xs tracking-[0.3em] uppercase mb-6">
              FEATURED ARTWORK
            </span>
          </div>
          
          <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl lg:text-8xl xl:text-9xl mb-6 animate-fade-in-up leading-tight">
            {paintings[currentIndex].title}
          </h1>
          
          <p className="font-['Cormorant_Garamond'] text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 max-w-3xl mx-auto">
            "{paintings[currentIndex].description}"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <button 
              onClick={() => window.location.href = '/portfolio'}
              className="group relative px-8 py-4 bg-[#E14749] text-white font-['Montserrat'] text-sm tracking-wider overflow-hidden hover:bg-[#C13535] transition-all duration-300 flex items-center gap-2"
            >
              <ShoppingBag size={18} />
              VIEW COLLECTION
              <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-20"></span>
            </button>
            
            <button 
              onClick={() => window.location.href = '/contact'}
              className="px-8 py-4 border-2 border-white text-white font-['Montserrat'] text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              COMMISSION ARTWORK
            </button>
          </div>
          
          {/* Artist Info */}
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 bg-black/30 backdrop-blur-md px-8 py-4 border-l-4 border-[#E14749]">
            <p className="font-['Cormorant_Garamond'] text-white text-lg">
              {paintings[currentIndex].artist} • {paintings[currentIndex].year} • {paintings[currentIndex].price}
            </p>
          </div>
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <button 
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#E14749] transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft size={28} />
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#E14749] transition-all duration-300 hover:scale-110"
      >
        <ChevronRight size={28} />
      </button>
      
      {/* Play/Pause Button */}
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-32 left-6 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#E14749] transition-all duration-300"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-[#E14749] transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Dots */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-3">
        {paintings.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setProgress(0);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-[#E14749]' : 'w-2 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}