import { useState } from 'react';
import { useImages } from '../../hooks/useImages';
import { MessageCircle, Eye } from 'lucide-react';

export default function Featured() {
  const { images, loading } = useImages();
  const [hoveredId, setHoveredId] = useState(null);
  
  // 8 featured images
  const featuredImages = images.slice(0, 8);

  const handleWhatsApp = (image) => {
    const message = `Hi! I'm interested in the artwork "${image.title}". Can you share more details?`;
    window.open(`https://wa.me/919027352937?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (loading) {
    return (
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1,2,3,4,5,6,7,8].map((n) => (
            <div key={n} className="bg-gray-200 animate-pulse h-80 rounded-xl"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h5 className="font-montserrat text-[#E14749] text-sm tracking-[0.3em] uppercase mb-4">
            COLLECTION
          </h5>
          <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 mb-4">
            Featured Artworks
          </h2>
          <div className="w-20 h-1 bg-[#E14749] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredImages.map((image) => (
            <div
              key={image.public_id}
              className="group relative overflow-hidden rounded-xl shadow-lg"
              onMouseEnter={() => setHoveredId(image.public_id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay with effects */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${
                hoveredId === image.public_id ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-playfair text-white text-lg mb-1">{image.title}</h3>
                  <p className="font-poppins text-white/80 text-sm mb-3">{image.category}</p>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => window.location.href = `/gallery?img=${image.public_id}`}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-[#E14749] transition-colors"
                    >
                      <Eye size={18} />
                    </button>
                    <button 
                      onClick={() => handleWhatsApp(image)}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-[#25D366] transition-colors"
                    >
                      <MessageCircle size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button 
            onClick={() => window.location.href = '/gallery'}
            className="px-8 py-3 border-2 border-[#E14749] text-[#E14749] font-montserrat text-sm rounded-lg hover:bg-[#E14749] hover:text-white transition-all duration-300"
          >
            View All Artworks
          </button>
        </div>
      </div>
    </section>
  );
}