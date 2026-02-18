import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-playfair text-gray-900">
            AARTI <span className="text-[#E14749]">ART</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-montserrat text-sm tracking-wide transition-colors hover:text-[#E14749] ${
                    isActive ? 'text-[#E14749] font-semibold' : 'text-gray-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button className="px-5 py-2 bg-[#E14749] text-white font-montserrat text-sm rounded-lg hover:bg-[#C13535] transition-colors">
              Commission
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#E14749]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 font-montserrat transition-colors ${
                    isActive ? 'text-[#E14749] font-semibold' : 'text-gray-700 hover:text-[#E14749]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button className="w-full mt-4 px-5 py-3 bg-[#E14749] text-white font-montserrat text-sm rounded-lg">
              Commission
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}