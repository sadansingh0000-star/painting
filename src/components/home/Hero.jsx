import { useState, useEffect } from 'react';
import { IMAGES } from '../../api/cloudinary';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentImage, setCurrentImage] = useState(0);
  
  // 4 images for background
  const bgImages = IMAGES.slice(0, 4);

  // Mouse move effect for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto change background
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/919027352937?text=Hi!%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20artworks.', '_blank');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Images with Parallax */}
      {bgImages.map((img, index) => (
        <div
          key={img.public_id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          <img
            src={img.url}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        </div>
      ))}

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full min-h-screen flex items-center">
        <div className="container-custom text-white">
          <div className="max-w-3xl">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8 animate-fade-in">
              <Sparkles size={16} className="text-[#E14749]" />
              <span className="text-sm font-montserrat tracking-wider">AARTI ART STUDIO</span>
            </div>

            {/* Main Title with Gradient */}
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl mb-6 animate-slide-up">
              Where Art
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E14749] to-orange-400">
                Comes Alive
              </span>
            </h1>

            {/* Description */}
            <p className="font-poppins text-lg md:text-xl text-white/80 mb-8 max-w-2xl animate-slide-up animation-delay-200">
              Discover original paintings that blend traditional Indian art with contemporary expressions. Each piece tells a unique story.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
              <button 
                onClick={() => window.location.href = '/gallery'}
                className="group px-8 py-4 bg-[#E14749] text-white font-montserrat text-sm rounded-lg hover:bg-[#C13535] transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
              >
                <span className="relative z-10">EXPLORE GALLERY</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 opacity-20" />
              </button>
              
              <button 
                onClick={handleWhatsApp}
                className="group px-8 py-4 border-2 border-white text-white font-montserrat text-sm rounded-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                CHAT ON WHATSAPP
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/20 animate-fade-in animation-delay-600">
              <div>
                <div className="font-playfair text-2xl text-white">70+</div>
                <div className="font-poppins text-sm text-white/60">Artworks</div>
              </div>
              <div>
                <div className="font-playfair text-2xl text-white">15+</div>
                <div className="font-poppins text-sm text-white/60">Categories</div>
              </div>
              <div>
                <div className="font-playfair text-2xl text-white">10+</div>
                <div className="font-poppins text-sm text-white/60">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-scroll" />
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        {bgImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentImage ? 'w-8 bg-[#E14749]' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}