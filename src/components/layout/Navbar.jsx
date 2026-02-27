import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Search, ShoppingBag, User, Trash2, Plus, Minus, 
  Heart, Instagram, Facebook, Twitter, Home, Image, Info, Phone,
  Mountain, Bird, Sparkles, Flower2, Cloud, Users, Star, Trophy,
  Grid3x3, LogIn, Package, Palette
} from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navItems = [
  { path: '/', label: 'HOME', icon: Home },
  { path: '/gallery', label: 'GALLERY', icon: Image },
  { path: '/about', label: 'ABOUT', icon: Info },
  { path: '/contact', label: 'CONTACT', icon: Phone }
];

const categories = [
  { name: 'Landscape', icon: Mountain, count: 15, slug: 'landscape' },
  { name: 'Wildlife', icon: Bird, count: 12, slug: 'wildlife' },
  { name: 'Abstract', icon: Sparkles, count: 8, slug: 'abstract' },
  { name: 'Floral', icon: Flower2, count: 10, slug: 'floral' },
  { name: 'Spiritual', icon: Cloud, count: 7, slug: 'spiritual' },
  { name: 'Figurative', icon: Users, count: 5, slug: 'figurative' }
];

const featuredItems = [
  { name: 'New Arrivals', icon: Star, slug: 'new' },
  { name: 'Best Sellers', icon: Trophy, slug: 'best' },
  { name: 'Limited Edition', icon: Sparkles, slug: 'limited' }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity } = useCart();
  const cartRef = useRef(null);
  const cartButtonRef = useRef(null);
  const menuRef = useRef(null);

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target) && 
          cartButtonRef.current && !cartButtonRef.current.contains(event.target)) {
        setCartOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Animation for menu items
  useEffect(() => {
    if (isMenuOpen) {
      const timer = setTimeout(() => {
        const items = document.querySelectorAll('.menu-item');
        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('opacity-100', 'translate-x-0');
            item.classList.remove('opacity-0', '-translate-x-4');
          }, index * 100);
        });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isMenuOpen]);

  // Handle category click
  const handleCategoryClick = (category) => {
    setIsMenuOpen(false);
    navigate(`/gallery?category=${category.slug}`);
  };

  // Handle featured click
  const handleFeaturedClick = (slug) => {
    setIsMenuOpen(false);
    navigate(`/gallery?filter=${slug}`);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed w-full bg-white z-50 border-b border-gray-100" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
        <div className="container-custom">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Left: Menu Button & Logo */}
            <div className="flex items-center gap-4">
              {/* Menu Button - Dots with Animation */}
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="p-2 text-gray-700 hover:text-[#E14749] transition-colors group"
              >
                <div className="flex flex-col gap-1">
                  <div className="w-5 h-0.5 bg-current group-hover:animate-pulse"></div>
                  <div className="w-5 h-0.5 bg-current group-hover:animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-5 h-0.5 bg-current group-hover:animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </button>

              {/* Logo */}
              <Link to="/" className="font-montserrat text-xl font-bold tracking-wider text-gray-900">
                AARTI <span className="text-[#E14749]">ART</span>
              </Link>
            </div>

            {/* Desktop Menu - Center */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `font-montserrat text-xs font-semibold tracking-wider transition-colors hover:text-[#E14749] relative group flex items-center gap-1 ${
                        isActive ? 'text-[#E14749]' : 'text-gray-700'
                      }`
                    }
                  >
                    <Icon size={14} />
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#E14749] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </NavLink>
                );
              })}
            </div>

            {/* Icons - Right */}
            <div className="flex items-center space-x-2">
              <button className="hidden md:block p-2 text-gray-700 hover:text-[#E14749] transition-colors">
                <Search size={20} />
              </button>
              <button className="hidden md:block p-2 text-gray-700 hover:text-[#E14749] transition-colors">
                <User size={20} />
              </button>
              
              {/* Cart Button with Dropdown */}
              <div className="relative">
                <button 
                  ref={cartButtonRef}
                  onClick={() => setCartOpen(!cartOpen)}
                  className="p-2 text-gray-700 hover:text-[#E14749] transition-colors relative"
                >
                  <ShoppingBag size={20} />
                  {cart.totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#E14749] text-white text-[10px] flex items-center justify-center rounded-full animate-bounce">
                      {cart.totalItems}
                    </span>
                  )}
                </button>

                {/* Cart Dropdown */}
                {cartOpen && (
                  <div 
                    ref={cartRef}
                    className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-2xl border overflow-hidden z-50 animate-slide-down"
                    style={{ maxHeight: '80vh', overflowY: 'auto' }}
                  >
                    <div className="p-4 border-b bg-gray-50 sticky top-0">
                      <div className="flex justify-between items-center">
                        <h3 className="font-montserrat font-semibold text-gray-900">Shopping Cart</h3>
                        <button 
                          onClick={() => setCartOpen(false)}
                          className="text-gray-500 hover:text-[#E14749]"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </div>

                    {cart.items.length === 0 ? (
                      <div className="p-8 text-center">
                        <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
                        <p className="font-poppins text-gray-500">Your cart is empty</p>
                        <Link 
                          to="/gallery"
                          onClick={() => setCartOpen(false)}
                          className="inline-block mt-4 px-4 py-2 bg-[#E14749] text-white text-sm font-montserrat rounded hover:bg-[#C13535] transition-colors"
                        >
                          SHOP NOW
                        </Link>
                      </div>
                    ) : (
                      <>
                        <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
                          {cart.items.map((item) => (
                            <div key={item.id} className="flex gap-3 border-b pb-3">
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-16 h-16 object-cover bg-gray-100 rounded"
                              />
                              <div className="flex-1">
                                <div className="flex justify-between">
                                  <h4 className="font-montserrat text-sm font-semibold text-gray-900">{item.title}</h4>
                                  <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-gray-400 hover:text-[#E14749]"
                                  >
                                    <Trash2 size={14} />
                                  </button>
                                </div>
                                <p className="font-poppins text-xs text-gray-500 mb-2">{item.category}</p>
                                <div className="flex justify-between items-center">
                                  <div className="flex items-center gap-2 border rounded">
                                    <button 
                                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                      className="p-1 hover:bg-gray-100"
                                    >
                                      <Minus size={12} />
                                    </button>
                                    <span className="w-6 text-center text-xs">{item.quantity}</span>
                                    <button 
                                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                      className="p-1 hover:bg-gray-100"
                                    >
                                      <Plus size={12} />
                                    </button>
                                  </div>
                                  <p className="font-montserrat text-sm font-bold text-[#E14749]">
                                    ₹{item.price * item.quantity}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="p-4 border-t bg-gray-50 sticky bottom-0">
                          <div className="flex justify-between mb-3">
                            <span className="font-poppins text-gray-600">Subtotal</span>
                            <span className="font-montserrat font-bold text-gray-900">₹{cart.totalPrice}</span>
                          </div>
                          <Link 
                            to="/cart"
                            onClick={() => setCartOpen(false)}
                            className="block w-full px-4 py-3 bg-[#E14749] text-white font-montserrat text-sm font-semibold text-center rounded hover:bg-[#C13535] transition-colors mb-2"
                          >
                            VIEW CART
                          </Link>
                          <button 
                            onClick={() => {
                              const phoneNumber = '918019574565';
                              let message = 'Hi! I would like to purchase these items:\n\n';
                              cart.items.forEach((item, index) => {
                                message += `${index + 1}. ${item.title} - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
                              });
                              message += `\nTotal: ₹${cart.totalPrice}`;
                              window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
                              setCartOpen(false);
                            }}
                            className="w-full px-4 py-3 bg-[#25D366] text-white font-montserrat text-sm font-semibold rounded hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2"
                          >
                            CHECKOUT VIA WHATSAPP
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Left Side Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Left Side Menu - SCROLLABLE */}
      <div 
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-2xl transform transition-transform duration-500 ease-out overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 pb-20 min-h-full">
          {/* Menu Header - Sticky */}
          <div className="sticky top-0 bg-white pt-2 pb-4 border-b mb-4 z-10">
            <div className="flex justify-between items-center">
              <h2 className="font-montserrat text-xl font-bold text-gray-900">MENU</h2>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-[#E14749] transition-colors hover:rotate-90 transform duration-300"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Main Navigation Items - With Staggered Animation */}
          <div className="space-y-1 mb-8">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={() => setActiveItem(index)}
                  onMouseLeave={() => setActiveItem(null)}
                  className={({ isActive }) =>
                    `menu-item opacity-0 -translate-x-4 transition-all duration-300 block py-4 px-4 font-montserrat text-lg font-semibold rounded-lg transform hover:translate-x-2 ${
                      isActive 
                        ? 'text-[#E14749] bg-[#E14749]/10' 
                        : 'text-gray-700 hover:text-[#E14749] hover:bg-gray-50'
                    }`
                  }
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <span className="flex items-center gap-3">
                    <Icon size={20} />
                    {item.label}
                    {activeItem === index && (
                      <span className="ml-auto text-[#E14749] animate-pulse">•</span>
                    )}
                  </span>
                </NavLink>
              );
            })}
          </div>

          {/* Categories Section - CLICKABLE */}
          <div className="mb-8">
            <h3 className="font-montserrat text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 px-4 flex items-center gap-2">
              <Grid3x3 size={16} />
              CATEGORIES
            </h3>
            <div className="space-y-2">
              {categories.map((cat, index) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.name}
                    onClick={() => handleCategoryClick(cat)}
                    className="menu-item opacity-0 -translate-x-4 w-full text-left px-4 py-3 font-poppins text-gray-600 hover:text-[#E14749] hover:bg-gray-50 rounded-lg transition-all duration-300 flex items-center justify-between group"
                    style={{
                      transitionDelay: `${(navItems.length + index) * 100}ms`
                    }}
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={18} className="text-gray-400 group-hover:text-[#E14749]" />
                      {cat.name}
                    </span>
                    <span className="text-xs bg-gray-100 group-hover:bg-[#E14749] group-hover:text-white px-2 py-1 rounded-full transition-colors">
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Featured Collections - CLICKABLE */}
          <div className="mb-8 p-4 bg-gradient-to-r from-[#E14749]/5 to-transparent rounded-lg">
            <h3 className="font-montserrat text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Star size={16} className="text-[#E14749]" />
              FEATURED
            </h3>
            <div className="space-y-2">
              {featuredItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleFeaturedClick(item.slug)}
                    className="w-full text-left px-3 py-2 font-poppins text-sm text-gray-600 hover:text-[#E14749] hover:bg-white/50 rounded-lg transition-colors flex items-center gap-2 group"
                  >
                    <Icon size={14} className="text-[#E14749] group-hover:scale-110 transition-transform" />
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Account Section */}
          <div className="mb-8">
            <h3 className="font-montserrat text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 px-4">
              ACCOUNT
            </h3>
            <div className="space-y-2">
              <button className="menu-item opacity-0 -translate-x-4 w-full text-left px-4 py-3 font-poppins text-gray-600 hover:text-[#E14749] hover:bg-gray-50 rounded-lg transition-all duration-300 flex items-center gap-3"
                style={{ transitionDelay: `${(navItems.length + categories.length + 1) * 100}ms` }}
              >
                <LogIn size={18} />
                Sign In
              </button>
              <button className="menu-item opacity-0 -translate-x-4 w-full text-left px-4 py-3 font-poppins text-gray-600 hover:text-[#E14749] hover:bg-gray-50 rounded-lg transition-all duration-300 flex items-center gap-3"
                style={{ transitionDelay: `${(navItems.length + categories.length + 2) * 100}ms` }}
              >
                <Package size={18} />
                Orders
              </button>
              <button className="menu-item opacity-0 -translate-x-4 w-full text-left px-4 py-3 font-poppins text-gray-600 hover:text-[#E14749] hover:bg-gray-50 rounded-lg transition-all duration-300 flex items-center gap-3"
                style={{ transitionDelay: `${(navItems.length + categories.length + 3) * 100}ms` }}
              >
                <Heart size={18} />
                Wishlist
              </button>
            </div>
          </div>

          {/* Social Links - Sticky at bottom */}
          <div className="sticky bottom-0 bg-white pt-4 mt-4 border-t">
            <p className="font-poppins text-xs text-gray-400 mb-3 px-4">FOLLOW US</p>
            <div className="flex gap-4 px-4">
              <a href="#" className="text-gray-400 hover:text-[#E14749] transition-colors transform hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E14749] transition-colors transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E14749] transition-colors transform hover:scale-110">
                <Twitter size={20} />
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="mt-4 px-4 text-xs font-poppins text-gray-400">
              <p>📞 +91 80195 74565</p>
              <p>✉️ aartikumarsingh555@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}