import { useImages } from '../hooks/useImages';
import { ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Gallery() {
  const { images, loading } = useImages();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = ['all', ...new Set(images.map(img => img.category))];
  const filtered = activeFilter === 'all' ? images : images.filter(img => img.category === activeFilter);

  const handleAddToCart = (item, e) => {
    e.stopPropagation();
    addToCart({
      id: item.public_id,
      title: item.title,
      price: item.price, // <-- Direct number
      image: item.url,
      category: item.category
    });
  };

  if (loading) {
    return (
      <div className="container-custom py-20 text-center">
        <div className="animate-spin w-8 h-8 border-2 border-[#E14749] border-t-transparent rounded-full mx-auto"></div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <div className="bg-white pt-24 pb-12 border-b">
        <div className="container-custom text-center">
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ART GALLERY
          </h1>
          <p className="font-poppins text-gray-500">
            Explore our collection of original paintings
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-6 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`font-montserrat text-xs font-semibold tracking-wider uppercase whitespace-nowrap pb-2 border-b-2 transition-colors ${
                    activeFilter === cat
                      ? 'border-[#E14749] text-[#E14749]'
                      : 'border-transparent text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <span className="font-poppins text-sm text-gray-500 hidden md:block">
              {filtered.length} products
            </span>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((item) => (
              <div
                key={item.public_id}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative overflow-hidden bg-gray-100 mb-3">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <button 
                    onClick={(e) => handleAddToCart(item, e)}
                    className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-[#E14749] hover:text-white"
                  >
                    <ShoppingBag size={18} />
                  </button>
                </div>
                <h3 className="font-montserrat text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="font-poppins text-xs text-gray-500 mb-2">{item.category}</p>
                <p className="font-montserrat text-sm font-bold text-[#E14749]">${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="grid md:grid-cols-2">
              <div className="bg-gray-100">
                <img src={selectedImage.url} alt={selectedImage.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h2>
                <p className="font-poppins text-gray-500 mb-4">{selectedImage.category}</p>
                <p className="font-montserrat text-3xl font-bold text-[#E14749] mb-6">${selectedImage.price}</p>
                <button 
                  onClick={() => {
                    addToCart({
                      id: selectedImage.public_id,
                      title: selectedImage.title,
                      price: selectedImage.price,
                      image: selectedImage.url,
                      category: selectedImage.category
                    });
                    setSelectedImage(null);
                  }}
                  className="w-full px-6 py-4 bg-[#E14749] text-white font-montserrat text-sm font-semibold tracking-wider hover:bg-[#C13535] transition-colors mb-4"
                >
                  ADD TO CART
                </button>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100" onClick={() => setSelectedImage(null)}>
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}