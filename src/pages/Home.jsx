import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  ShoppingBag, Star, Truck, Shield, RotateCcw, 
  ArrowRight, Heart 
} from 'lucide-react';
import { useImages } from '../hooks/useImages';
import { useCart } from '../context/CartContext';

export default function Home() {
  const { images, loading } = useImages();
  const { addToCart } = useCart();
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    { name: 'Landscape', image: images[0]?.url, count: 25 },
    { name: 'Wildlife', image: images[1]?.url, count: 18 },
    { name: 'Abstract', image: images[2]?.url, count: 15 }
  ];

  const handleAddToCart = (item, e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: item.public_id,
      title: item.title,
      price: item.price,
      image: item.url,
      category: item.category,
      quantity: 1
    });
  };

  if (loading) {
    return (
      <div className="full-width pt-20">
        <div className="content-container py-20">
          <div className="cards-grid">
            {[1,2,3,4,5,6,7,8].map(n => (
              <div key={n} className="skeleton h-96 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="full-width">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          {images[0] && <img src={images[0].url} alt="Hero" />}
        </div>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <div>
            <h1 className="hero-title">
              Discover Beautiful
              <br />
              <span className="text-gradient">Original Artwork</span>
            </h1>
            
            <p className="hero-subtitle">
              Hand-painted masterpieces that bring beauty and emotion to your space
            </p>
            
            <div className="hero-buttons">
              <Link to="/gallery" className="ecomm-btn text-lg">
                EXPLORE GALLERY
                <ArrowRight className="inline ml-2" size={18} />
              </Link>
              <Link to="/contact" className="ecomm-btn-outline text-lg">
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="cards-section">
        <div className="content-container">
          <h2 className="section-title">Featured Artworks</h2>
          
          <div className="cards-grid">
            {images.slice(0, 8).map((item, index) => (
              <div 
                key={item.public_id}
                className="art-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link to={`/product/${item.public_id}`}>
                  <div className="art-card-image">
                    <img src={item.url} alt={item.title} />
                    <span className="art-card-badge">New</span>
                  </div>
                  <div className="art-card-content">
                    <h3 className="art-card-title">{item.title}</h3>
                    <p className="art-card-category">{item.category}</p>
                    <div className="art-card-footer">
                      <span className="art-card-price">₹{item.price.toLocaleString('en-IN')}</span>
                      <button 
                        onClick={(e) => handleAddToCart(item, e)}
                        className="art-card-btn"
                      >
                        <ShoppingBag size={16} className="inline mr-1" />
                        Add
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery" className="ecomm-btn inline-flex items-center gap-2">
              VIEW ALL ARTWORKS
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - MOVED HERE AFTER FEATURED ARTWORKS */}
      <section className="features-section">
        <div className="content-container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Truck size={32} />
              </div>
              <h3 className="feature-title">Free Shipping</h3>
              <p className="feature-desc">On orders above ₹999</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={32} />
              </div>
              <h3 className="feature-title">Secure Payment</h3>
              <p className="feature-desc">100% secure transactions</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <RotateCcw size={32} />
              </div>
              <h3 className="feature-title">Easy Returns</h3>
              <p className="feature-desc">7 day return policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="content-container">
          <h2 className="section-title">Shop by Category</h2>
          
          <div className="categories-grid">
            {categories.map((cat, index) => (
              <div key={index} className="category-card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={cat.image} alt={cat.name} />
                <div className="category-overlay">
                  <div>
                    <h3 className="category-title">{cat.name}</h3>
                    <p className="category-count">{cat.count} Artworks</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="newsletter-container">
          <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
          <p className="newsletter-subtitle">
            Get updates about new artworks and exclusive offers
          </p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="newsletter-btn">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="content-container">
          <div className="footer-grid">
            <div>
              <h3 className="footer-title">AARTI ART STUDIO</h3>
              <p className="footer-text">
                Creating beautiful artwork that brings joy and inspiration to your space.
              </p>
            </div>
            
            <div>
              <h4 className="footer-title">Quick Links</h4>
              <div className="footer-links">
                <Link to="/about" className="footer-link">About Us</Link>
                <Link to="/contact" className="footer-link">Contact</Link>
                <Link to="/gallery" className="footer-link">Gallery</Link>
              </div>
            </div>
            
            <div>
              <h4 className="footer-title">Categories</h4>
              <div className="footer-links">
                <Link to="/gallery?category=landscape" className="footer-link">Landscape</Link>
                <Link to="/gallery?category=wildlife" className="footer-link">Wildlife</Link>
                <Link to="/gallery?category=abstract" className="footer-link">Abstract</Link>
              </div>
            </div>
            
            <div>
              <h4 className="footer-title">Contact Info</h4>
              <div className="footer-contact">
                <p>📍 C-807, Mayflower grand, Nacharam - Mallapur, Hyderabad- 500076</p>
                <p>📞 +91 80195 74565</p>
                <p>✉️ aartikumarsingh555@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 AARTI ART STUDIO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}