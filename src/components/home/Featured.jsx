import { useImages } from '../../hooks/useImages';
import { ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function Featured() {
  const { images, loading } = useImages();
  const { addToCart, isInCart, getItemQuantity } = useCart();
  const featured = images.slice(0, 8);

  const handleAddToCart = (item, e) => {
    e.stopPropagation();
    addToCart({
      id: item.public_id,
      title: item.title,
      price: item.price,
      image: item.url,
      category: item.category
    });
  };

  if (loading) {
    return (
      <div className="container-custom py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4,5,6,7,8].map(n => (
            <div key={n} className="bg-gray-100 animate-pulse h-80"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            FEATURED ARTWORKS
          </h2>
          <p className="font-poppins text-gray-500 max-w-2xl mx-auto">
            Discover our handpicked selection of original paintings
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featured.map((item) => {
            const inCart = isInCart(item.public_id);
            const quantity = getItemQuantity(item.public_id);
            
            return (
              <div key={item.public_id} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-gray-100 mb-3">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* In Cart Badge */}
                  {inCart && (
                    <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-montserrat px-2 py-1 rounded-full flex items-center gap-1">
                      <Check size={12} />
                      {quantity} in cart
                    </div>
                  )}
                  
                  <button 
                    onClick={(e) => handleAddToCart(item, e)}
                    className={`absolute bottom-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                      inCart 
                        ? 'bg-green-500 text-white hover:bg-green-600' 
                        : 'bg-white text-gray-900 hover:bg-[#E14749] hover:text-white'
                    }`}
                  >
                    <ShoppingBag size={18} />
                  </button>
                </div>
                <h3 className="font-montserrat text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="font-poppins text-xs text-gray-500 mb-2">{item.category}</p>
                <p className="font-montserrat text-sm font-bold text-[#E14749]">${item.price}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/gallery"
            className="inline-block px-8 py-3 border-2 border-[#E14749] text-[#E14749] font-montserrat text-sm font-semibold tracking-wider hover:bg-[#E14749] hover:text-white transition-colors"
          >
            VIEW ALL ARTWORKS
          </Link>
        </div>
      </div>
    </section>
  );
}