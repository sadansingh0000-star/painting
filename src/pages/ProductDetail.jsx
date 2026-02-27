import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { 
  ShoppingBag, Heart, Share2, ChevronLeft, Truck, Shield, 
  RotateCcw, MessageCircle, Minus, Plus, Check, Star,
  Package, Palette, Ruler, Frame, IndianRupee, Award,
  Clock, Camera
} from 'lucide-react';
import { IMAGES } from '../api/cloudinary';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('description');
  const [addedToCart, setAddedToCart] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [zoom, setZoom] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0); // Scroll to top on page load
    
    setTimeout(() => {
      const found = IMAGES.find(img => img.public_id === id);
      if (found) {
        setProduct(found);
        setSelectedImage(found.url);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  const handleAddToCart = () => {
    addToCart({
      id: product.public_id,
      title: product.title,
      price: product.price,
      image: product.url,
      category: product.category,
      quantity: quantity
    });
    
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in "${product.title}" (${product.category}). Price: ₹${product.price}. Can you share more details?`;
    window.open(`https://wa.me/918019574565?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-[#E14749]/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-[#E14749] border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="font-poppins text-gray-500 animate-pulse">Loading artwork...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <Package size={64} className="mx-auto text-gray-300 mb-4" />
          <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="font-poppins text-gray-500 mb-8">The artwork you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/gallery" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E14749] text-white font-montserrat text-sm rounded-lg hover:bg-[#C13535] transition-all hover:scale-105"
          >
            <ChevronLeft size={18} />
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  const productDetails = {
    ...product,
    sku: product.public_id.split('_')[0],
    medium: "Acrylic on Canvas Board",
    size: "8 x 10 inches",
    frame: "Optional - ₹199 extra",
    shipping: "Free within India",
    inStock: true,
    originalPrice: Math.round(product.price * 1.3), // 30% higher for MRP
    description: "Beautiful artwork created with premium quality materials. Each piece is hand-painted by skilled artists, ensuring unique character and attention to detail. Perfect for home decor, office spaces, or as a thoughtful gift for art lovers.",
    highlights: [
      "Original hand-painted artwork",
      "Premium quality canvas board",
      "Certificate of authenticity included",
      "Signed by artist on front",
      "Ready to hang",
      "Free shipping across India"
    ],
    specifications: {
      "Material": "Canvas Board",
      "Technique": "Acrylic Painting",
      "Dimensions": "8 x 10 inches",
      "Frame": "Not Included (Optional)",
      "Year": "2024",
      "Artist": "Aarti Kumar Singh",
      "Subject": product.category
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 md:pt-24">
      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 md:mb-8 overflow-x-auto pb-2 whitespace-nowrap">
          <Link to="/" className="hover:text-[#E14749] transition-colors flex items-center gap-1">
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <Link to="/gallery" className="hover:text-[#E14749] transition-colors">
            Gallery
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-900 font-medium truncate max-w-[200px]">
            {productDetails.title}
          </span>
        </nav>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 p-4 md:p-6 lg:p-8">
            
            {/* Left Column - Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div 
                className="relative bg-gray-100 rounded-xl overflow-hidden group aspect-square cursor-zoom-in"
                onMouseEnter={() => setZoom(true)}
                onMouseLeave={() => setZoom(false)}
              >
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                )}
                <img 
                  src={selectedImage} 
                  alt={productDetails.title}
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    zoom ? 'scale-150' : 'scale-100'
                  } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  style={{ 
                    transformOrigin: 'center',
                    transition: 'transform 0.5s ease-out'
                  }}
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-[#E14749] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                    New
                  </span>
                  <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                    In Stock
                  </span>
                </div>

                {/* Zoom Indicator */}
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera size={14} className="inline mr-1" />
                  Hover to zoom
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                <button 
                  onClick={() => setSelectedImage(productDetails.url)}
                  onMouseEnter={() => setSelectedImage(productDetails.url)}
                  className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === productDetails.url 
                      ? 'border-[#E14749] ring-2 ring-[#E14749]/20' 
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img src={productDetails.url} alt="" className="w-full h-full object-cover" />
                </button>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6 lg:space-y-8 mt-6 lg:mt-0">
              
              {/* Title & Price */}
              <div>
                <h1 className="font-montserrat text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                  {productDetails.title}
                </h1>
                
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-1 bg-[#E14749]/10 px-4 py-2 rounded-full">
                    <IndianRupee size={20} className="text-[#E14749]" />
                    <span className="font-montserrat text-2xl lg:text-3xl font-bold text-[#E14749]">
                      {productDetails.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="text-gray-400 line-through text-lg">
                    ₹{productDetails.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                    Save 30%
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-3 mt-4">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-poppins text-sm text-gray-500">(12 reviews)</span>
                </div>
              </div>

              {/* SKU */}
              <p className="font-poppins text-sm text-gray-400 flex items-center gap-2">
                <Package size={14} />
                SKU: <span className="text-gray-600">{productDetails.sku}</span>
              </p>

              {/* Highlights */}
              <div className="bg-gradient-to-r from-[#E14749]/5 to-transparent p-5 lg:p-6 rounded-xl">
                <h3 className="font-montserrat font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Award size={18} className="text-[#E14749]" />
                  Key Highlights
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {productDetails.highlights.map((item, index) => (
                    <li 
                      key={index} 
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 bg-[#E14749] rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-gray-50 p-3 lg:p-4 rounded-xl hover:shadow-md transition-all group">
                  <Palette size={18} className="text-[#E14749] mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-poppins text-xs text-gray-500">Medium</p>
                  <p className="font-montserrat text-xs lg:text-sm font-semibold text-gray-900">
                    Acrylic
                  </p>
                </div>
                <div className="bg-gray-50 p-3 lg:p-4 rounded-xl hover:shadow-md transition-all group">
                  <Ruler size={18} className="text-[#E14749] mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-poppins text-xs text-gray-500">Size</p>
                  <p className="font-montserrat text-xs lg:text-sm font-semibold text-gray-900">
                    8 x 10"
                  </p>
                </div>
                <div className="bg-gray-50 p-3 lg:p-4 rounded-xl hover:shadow-md transition-all group">
                  <Frame size={18} className="text-[#E14749] mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-poppins text-xs text-gray-500">Frame</p>
                  <p className="font-montserrat text-xs lg:text-sm font-semibold text-gray-900">
                    Optional
                  </p>
                </div>
              </div>

              {/* Description Tabs */}
              <div className="border-b">
                <div className="flex gap-6">
                  <button
                    onClick={() => setActiveTab('description')}
                    className={`pb-3 font-montserrat text-sm font-semibold transition-all relative ${
                      activeTab === 'description' 
                        ? 'text-[#E14749]' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Description
                    {activeTab === 'description' && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E14749]"></span>
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab('details')}
                    className={`pb-3 font-montserrat text-sm font-semibold transition-all relative ${
                      activeTab === 'details' 
                        ? 'text-[#E14749]' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Details
                    {activeTab === 'details' && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E14749]"></span>
                    )}
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="min-h-[120px]">
                {activeTab === 'description' ? (
                  <p className="font-poppins text-gray-600 leading-relaxed text-sm lg:text-base">
                    {productDetails.description}
                  </p>
                ) : (
                  <div className="space-y-2">
                    {Object.entries(productDetails.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-poppins text-sm text-gray-500">{key}:</span>
                        <span className="font-montserrat text-sm font-medium text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Quantity & Actions */}
              <div className="space-y-4 pt-4">
                {/* Quantity Selector */}
                <div className="flex items-center justify-between">
                  <label className="font-poppins text-sm text-gray-600">Quantity</label>
                  <div className="flex items-center gap-2 border rounded-lg w-fit bg-white">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-gray-100 transition-colors rounded-l-lg group"
                    >
                      <Minus size={16} className="group-hover:scale-110 transition-transform" />
                    </button>
                    <span className="w-12 text-center font-montserrat font-semibold">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-gray-100 transition-colors rounded-r-lg group"
                    >
                      <Plus size={16} className="group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 px-6 py-4 bg-[#E14749] text-white font-montserrat text-sm font-semibold rounded-xl hover:bg-[#C13535] transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 relative overflow-hidden group"
                  >
                    {addedToCart ? (
                      <>
                        <Check size={18} className="animate-bounce" />
                        ADDED TO CART!
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={18} className="group-hover:animate-bounce" />
                        ADD TO CART
                      </>
                    )}
                  </button>
                  <button 
                    onClick={handleWhatsApp}
                    className="flex-1 px-6 py-4 bg-[#25D366] text-white font-montserrat text-sm font-semibold rounded-xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group"
                  >
                    <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" />
                    BUY ON WHATSAPP
                  </button>
                </div>

                {/* Action Icons */}
                <div className="flex items-center gap-6 pt-4">
                  <button className="flex items-center gap-2 text-gray-500 hover:text-[#E14749] transition-colors group">
                    <Heart size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="font-poppins text-sm hidden sm:inline">Add to Wishlist</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-[#E14749] transition-colors group">
                    <Share2 size={18} className="group-hover:rotate-12 transition-transform" />
                    <span className="font-poppins text-sm hidden sm:inline">Share</span>
                  </button>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="grid grid-cols-3 gap-2 lg:gap-4 pt-6 border-t">
                <div className="text-center group">
                  <Truck size={20} className="mx-auto text-[#E14749] mb-2 group-hover:animate-bounce" />
                  <p className="font-poppins text-xs text-gray-600">Free Shipping</p>
                </div>
                <div className="text-center group">
                  <Shield size={20} className="mx-auto text-[#E14749] mb-2 group-hover:animate-pulse" />
                  <p className="font-poppins text-xs text-gray-600">Authenticity</p>
                </div>
                <div className="text-center group">
                  <RotateCcw size={20} className="mx-auto text-[#E14749] mb-2 group-hover:rotate-12 transition-transform" />
                  <p className="font-poppins text-xs text-gray-600">7 Day Returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {IMAGES.filter(img => img.category === product.category && img.public_id !== product.public_id).length > 0 && (
          <div className="mt-12 lg:mt-16">
            <h2 className="font-montserrat text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {IMAGES.filter(img => img.category === product.category && img.public_id !== product.public_id)
                .slice(0, 4)
                .map((item, index) => (
                  <Link 
                    to={`/product/${item.public_id}`} 
                    key={item.public_id}
                    className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={item.url} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-3 lg:p-4">
                      <h3 className="font-montserrat text-xs lg:text-sm font-semibold text-gray-900 mb-1 group-hover:text-[#E14749] transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-poppins text-xs text-gray-500 mb-2">{item.category}</p>
                      <div className="flex items-center gap-1">
                        <IndianRupee size={12} className="text-[#E14749]" />
                        <p className="font-montserrat text-sm lg:text-base font-bold text-[#E14749]">
                          {item.price.toLocaleString('en-IN')}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}