import { useImages } from '../hooks/useImages';
import { MessageCircle, X, Grid, LayoutGrid } from 'lucide-react';
import { useState } from 'react';

export default function Gallery() {
  const { images, loading } = useImages();
  const [selectedImage, setSelectedImage] = useState(null);
  const [layout, setLayout] = useState('grid'); // grid or masonry

  const handleWhatsApp = (image) => {
    const message = `Hi! I'm interested in the artwork "${image.title}". Can you share more details?`;
    window.open(`https://wa.me/919027352937?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#E14749]"></div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={images[0]?.url}
          alt="Gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center">
          <div className="container-custom">
            <h1 className="font-playfair text-5xl md:text-7xl text-white mb-4 animate-fade-in">
              Art <span className="text-[#E14749]">Gallery</span>
            </h1>
            <p className="font-poppins text-white/80 text-xl max-w-2xl">
              Explore our collection of original paintings
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Controls */}
      <div className="border-b sticky top-16 bg-white/95 backdrop-blur-md z-40">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <p className="font-poppins text-gray-600">
              <span className="font-semibold text-[#E14749]">{images.length}</span> artworks
            </p>
            <button
              onClick={() => setLayout(layout === 'grid' ? 'masonry' : 'grid')}
              className="p-2 bg-gray-100 rounded-lg hover:bg-[#E14749] hover:text-white transition-colors"
            >
              {layout === 'grid' ? <LayoutGrid size={20} /> : <Grid size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className={`grid gap-6 ${
            layout === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}>
            {images.map((image, index) => (
              <div
                key={image.public_id}
                className={`group relative overflow-hidden rounded-xl cursor-pointer transform hover:scale-[1.02] transition-all duration-500 ${
                  layout === 'masonry' && index % 3 === 1 ? 'row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-playfair text-white text-lg">{image.title}</h3>
                    <p className="font-poppins text-white/80 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-8 rounded-b-2xl">
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="font-playfair text-white text-2xl mb-2">{selectedImage.title}</h2>
                  <p className="font-poppins text-white/80">{selectedImage.category}</p>
                </div>
                <button
                  onClick={() => handleWhatsApp(selectedImage)}
                  className="px-6 py-3 bg-[#25D366] text-white rounded-xl hover:bg-[#128C7E] transition-colors flex items-center gap-2"
                >
                  <MessageCircle size={18} />
                  Inquire
                </button>
              </div>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#E14749] transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}