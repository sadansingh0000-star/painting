import { paintings } from '../data/paintings';
import { useState } from 'react';
import { ShoppingBag, X, ChevronRight, Filter } from 'lucide-react';

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  
  const categories = ['all', 'Traditional', 'Spiritual', 'Cultural', 'Landscape', 'Heritage', 'Wildlife', 'Wellness'];
  
  const filteredPaintings = filter === 'all' 
    ? paintings 
    : paintings.filter(p => p.category === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=1200)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-custom text-center text-white">
            <span className="inline-block px-6 py-2 bg-[#E14749] font-['Montserrat'] text-xs tracking-[0.3em] uppercase mb-6">
              OUR COLLECTION
            </span>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl mb-6">
              Art Portfolio
            </h1>
            <p className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Explore our collection of original artworks
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 lg:py-28 bg-[#FDF8F2]">
        <div className="container-custom">
          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6">
            <button 
              onClick={() => setShowMobileFilter(!showMobileFilter)}
              className="w-full px-6 py-3 bg-white border border-[#E14749] text-[#E14749] font-['Montserrat'] text-sm tracking-wider rounded-lg flex items-center justify-center gap-2"
            >
              <Filter size={18} /> FILTER CATEGORIES
            </button>
          </div>
          
          {/* Filter Bar */}
          <div className={`flex flex-wrap justify-center gap-3 mb-12 ${showMobileFilter ? 'block' : 'hidden lg:flex'}`}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setShowMobileFilter(false);
                }}
                className={`px-6 py-2.5 font-['Montserrat'] text-sm tracking-wider transition-all duration-300 rounded-full ${
                  filter === cat
                    ? 'bg-[#E14749] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-[#E14749] hover:text-white'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Artworks Grid */}
          {filteredPaintings.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-['Poppins'] text-gray-500 text-lg">No artworks found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPaintings.map((painting) => (
                <div 
                  key={painting.id} 
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedImage(painting)}
                >
                  <div className="relative overflow-hidden h-72">
                    <img 
                      src={painting.image} 
                      alt={painting.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="font-['Poppins'] text-sm opacity-90">{painting.category}</p>
                    </div>
                    <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#E14749] hover:text-white">
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-['Playfair_Display'] text-lg text-gray-900">
                        {painting.title}
                      </h3>
                      <span className="font-['Montserrat'] text-[#E14749] font-semibold text-sm">
                        {painting.price}
                      </span>
                    </div>
                    <p className="font-['Poppins'] text-gray-500 text-xs mb-2">
                      {painting.artist} • {painting.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full bg-white rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[400px] lg:h-[600px]">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <h2 className="font-['Playfair_Display'] text-3xl lg:text-4xl text-gray-900 mb-4">
                  {selectedImage.title}
                </h2>
                <p className="font-['Cormorant_Garamond'] text-xl text-gray-600 italic mb-6">
                  {selectedImage.description}
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between pb-3 border-b border-gray-200">
                    <span className="font-['Poppins'] text-gray-500">Artist</span>
                    <span className="font-['Poppins'] text-gray-900 font-semibold">{selectedImage.artist}</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-gray-200">
                    <span className="font-['Poppins'] text-gray-500">Category</span>
                    <span className="font-['Poppins'] text-gray-900">{selectedImage.category}</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-gray-200">
                    <span className="font-['Poppins'] text-gray-500">Year</span>
                    <span className="font-['Poppins'] text-gray-900">{selectedImage.year}</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-gray-200">
                    <span className="font-['Poppins'] text-gray-500">Price</span>
                    <span className="font-['Montserrat'] text-[#E14749] text-xl font-bold">{selectedImage.price}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 px-6 py-3 bg-[#E14749] text-white font-['Montserrat'] text-sm tracking-wider rounded-lg hover:bg-[#C13535] transition flex items-center justify-center gap-2">
                    <ShoppingBag size={18} /> INQUIRE NOW
                  </button>
                  <button className="flex-1 px-6 py-3 border-2 border-[#E14749] text-[#E14749] font-['Montserrat'] text-sm tracking-wider rounded-lg hover:bg-[#E14749] hover:text-white transition">
                    MAKE OFFER
                  </button>
                </div>
              </div>
            </div>
            <button 
              className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#E14749] transition-all duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[#E14749]">
        <div className="container-custom text-center">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Commission Your Own Artwork
          </h2>
          <p className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let us create a masterpiece tailored to your vision
          </p>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="px-10 py-4 bg-white text-[#E14749] font-['Montserrat'] text-sm tracking-wider rounded-lg hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-2"
          >
            START COMMISSION <ChevronRight size={18} />
          </button>
        </div>
      </section>
    </>
  );
}