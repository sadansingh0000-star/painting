import { ArrowRight, MessageCircle } from 'lucide-react';
import { IMAGES } from '../../api/cloudinary';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = IMAGES.slice(0, 4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/918019574565?text=Hi!%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20artworks.', '_blank');
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Hero Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.public_id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.url}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-screen flex items-center justify-center text-center text-white">
        <div className="container-custom">
          <h1 className="font-montserrat text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            AARTI<span className="text-[#E14749]">ART</span>
          </h1>
          <p className="font-poppins text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Original paintings that bring beauty and emotion to your space
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/gallery'}
              className="px-8 py-4 bg-[#E14749] text-white font-montserrat text-sm font-semibold tracking-wider hover:bg-[#C13535] transition-all duration-300"
            >
              SHOP COLLECTION
            </button>
            <button 
              onClick={handleWhatsApp}
              className="px-8 py-4 bg-white text-gray-900 font-montserrat text-sm font-semibold tracking-wider hover:bg-gray-100 transition-all duration-300"
            >
              CHAT ON WHATSAPP
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-[#E14749]' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}