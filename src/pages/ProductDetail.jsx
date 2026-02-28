import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { 
  ShoppingBag, Heart, Share2, ChevronLeft, Truck, Shield, 
  RotateCcw, MessageCircle, Minus, Plus, Package, IndianRupee,
  Palette, Ruler, Frame, Award, Star
} from 'lucide-react';
import { IMAGES } from '../api/cloudinary';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    
    setTimeout(() => {
      const found = IMAGES.find(img => img.public_id === id);
      if (found) {
        setProduct(found);
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
      <div className="product-detail-page flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-white">Loading artwork...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-detail-page flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <Package size={64} className="mx-auto text-white/60 mb-4" />
          <h2 className="text-2xl font-['Poppins'] font-bold text-white mb-4">Product Not Found</h2>
          <p className="text-white/80 mb-8">The artwork you're looking for doesn't exist.</p>
          <Link to="/gallery" className="ecomm-btn inline-flex items-center gap-2">
            <ChevronLeft size={18} />
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  const details = {
    sku: product.public_id.split('_')[0],
    medium: "Acrylic on Canvas",
    size: "12 x 16 inches",
    frame: "Optional (+₹199)",
    year: "2024",
    artist: "Aarti Kumar Singh"
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        {/* Breadcrumb */}
        <nav className="product-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/gallery">Gallery</Link>
          <span>/</span>
          <span className="text-white">{product.title}</span>
        </nav>

        {/* Main Content */}
        <div className="product-detail-grid">
          {/* Left - Image */}
          <div className="product-image-container">
            <img 
              src={product.url} 
              alt={product.title}
              className="product-main-image"
            />
          </div>

          {/* Right - Details */}
          <div className="product-info">
            <h1 className="product-info-title">{product.title}</h1>
            
            <div className="product-info-price">
              <span className="product-current-price">₹{product.price.toLocaleString('en-IN')}</span>
              <span className="product-original-price">₹{Math.round(product.price * 1.3).toLocaleString('en-IN')}</span>
              <span className="product-stock-badge">In Stock</span>
            </div>

            <p className="product-description">
              Beautiful artwork created with premium quality materials. Each piece is hand-painted by skilled artists, ensuring unique character and attention to detail.
            </p>

            {/* Specifications */}
            <div className="product-specs-grid">
              <div className="product-spec-item">
                <Palette size={20} className="product-spec-icon" />
                <p className="product-spec-label">Medium</p>
                <p className="product-spec-value">{details.medium}</p>
              </div>
              <div className="product-spec-item">
                <Ruler size={20} className="product-spec-icon" />
                <p className="product-spec-label">Size</p>
                <p className="product-spec-value">{details.size}</p>
              </div>
              <div className="product-spec-item">
                <Frame size={20} className="product-spec-icon" />
                <p className="product-spec-label">Frame</p>
                <p className="product-spec-value">Optional</p>
              </div>
            </div>

            {/* Quantity */}
            <div className="product-quantity">
              <span className="product-quantity-label">Quantity:</span>
              <div className="product-quantity-controls">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="product-quantity-btn"
                >
                  <Minus size={16} />
                </button>
                <span className="product-quantity-value">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="product-quantity-btn"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="product-action-buttons">
              <button 
                onClick={handleAddToCart}
                className="product-add-to-cart"
              >
                <ShoppingBag size={18} />
                {addedToCart ? 'ADDED TO CART!' : 'ADD TO CART'}
              </button>
              <button 
                onClick={handleWhatsApp}
                className="product-whatsapp-btn"
              >
                <MessageCircle size={18} />
                BUY ON WHATSAPP
              </button>
            </div>

            {/* Tabs */}
            <div className="product-tabs">
              <div className="product-tab-buttons">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`product-tab ${activeTab === 'description' ? 'active' : ''}`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('details')}
                  className={`product-tab ${activeTab === 'details' ? 'active' : ''}`}
                >
                  Details
                </button>
              </div>
              
              <div className="product-tab-content">
                {activeTab === 'description' ? (
                  <p>
                    This stunning {product.title} is a beautiful example of {product.category} art. 
                    Created with premium quality materials and expert craftsmanship, this piece brings 
                    life and emotion to any space. Each brushstroke tells a story, making it a unique 
                    addition to your collection.
                  </p>
                ) : (
                  <div className="space-y-2">
                    <p><strong>SKU:</strong> {details.sku}</p>
                    <p><strong>Artist:</strong> {details.artist}</p>
                    <p><strong>Year:</strong> {details.year}</p>
                    <p><strong>Medium:</strong> {details.medium}</p>
                    <p><strong>Size:</strong> {details.size}</p>
                    <p><strong>Frame:</strong> {details.frame}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {IMAGES.filter(img => img.category === product.category && img.public_id !== product.public_id).length > 0 && (
          <div className="related-products">
            <h2 className="related-title">You May Also Like</h2>
            <div className="related-grid">
              {IMAGES.filter(img => img.category === product.category && img.public_id !== product.public_id)
                .slice(0, 4)
                .map((item) => (
                  <Link 
                    to={`/product/${item.public_id}`} 
                    key={item.public_id}
                    className="related-card"
                  >
                    <img 
                      src={item.url} 
                      alt={item.title}
                      className="related-card-image"
                    />
                    <div className="related-card-info">
                      <h3 className="related-card-title">{item.title}</h3>
                      <p className="related-card-price">₹{item.price.toLocaleString('en-IN')}</p>
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