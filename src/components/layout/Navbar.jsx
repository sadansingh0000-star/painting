import { Link, NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import { Menu, X } from 'lucide-react'

const navItems = [
  { path: "/", label: "HOME" },
  { path: "/about", label: "ABOUT" },
  { path: "/services", label: "SERVICES" },
  { path: "/portfolio", label: "PORTFOLIO" },
  { path: "/contact", label: "CONTACT" }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
        : 'bg-[#FDF8F2]/95 backdrop-blur-sm py-5'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="group">
            <h2 className="font-['Playfair_Display'] text-2xl lg:text-3xl text-gray-900 group-hover:text-[#E14749] transition">
              AARTI <span className="font-light">ART</span>
            </h2>
            <p className="font-['Montserrat'] text-[8px] sm:text-[10px] tracking-[0.5em] text-gray-500 group-hover:text-[#E14749] transition">
              STUDIO
            </p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `font-['Montserrat'] text-sm tracking-wider transition hover:text-[#E14749] relative group ${
                    isActive ? 'text-[#E14749]' : 'text-gray-700'
                  }`
                }
              >
                {item.label}
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-[#E14749] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                  ({ isActive }) => isActive ? 'scale-x-100' : ''
                }`}></span>
              </NavLink>
            ))}
            <button className="px-6 py-2.5 bg-[#E14749] text-white font-['Montserrat'] text-sm tracking-wider rounded-lg hover:bg-[#C13535] transition-all duration-300">
              COMMISSION
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#E14749] transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white/95 backdrop-blur-md border border-[#FFE4E1] rounded-lg shadow-xl py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-6 font-['Montserrat'] text-base transition ${
                    isActive 
                      ? 'bg-[#E14749]/10 text-[#E14749]' 
                      : 'text-gray-700 hover:bg-[#FDF8F2] hover:text-[#E14749]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="px-6 mt-4">
              <button className="w-full py-3 bg-[#E14749] text-white font-['Montserrat'] text-sm tracking-wider rounded-lg hover:bg-[#C13535] transition">
                COMMISSION ARTWORK
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}