import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2A2A2A] text-white pt-16 lg:pt-20 pb-8">
      <div className="container-custom">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          
          {/* Studio Info */}
          <div>
            <h3 className="font-playfair text-2xl lg:text-3xl text-white mb-4">
              AARTI <span className="font-light">ART</span>
            </h3>
            <p className="font-cormorant text-white/70 text-lg mb-6">
              Creating soulful artwork inspired by the divine land of Braj.
            </p>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-white/10 hover:bg-[#E14749] rounded-full flex items-center justify-center transition cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div className="w-10 h-10 bg-white/10 hover:bg-[#E14749] rounded-full flex items-center justify-center transition cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div className="w-10 h-10 bg-white/10 hover:bg-[#E14749] rounded-full flex items-center justify-center transition cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl text-white mb-6">EXPLORE</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`}
                    className="font-poppins text-white/70 hover:text-[#E14749] text-sm transition flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#E14749] rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Address */}
          <div>
            <h4 className="font-playfair text-xl text-white mb-6">STUDIO</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={18} className="text-[#E14749] shrink-0 mt-1" />
                <span className="font-poppins text-white/70 text-sm">
                  Chandanvan Face 2,<br />Mathura, UP - 281001
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-[#E14749] shrink-0" />
                <span className="font-poppins text-white/70 text-sm">
                  +91 9027352937
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-[#E14749] shrink-0" />
                <span className="font-poppins text-white/70 text-sm">
                  prashant.001xz@gmail.com
                </span>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="text-[#E14749] shrink-0" />
                <span className="font-poppins text-white/70 text-sm">
                  Tue-Sun: 10AM - 7PM
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-playfair text-xl text-white mb-6">NEWSLETTER</h4>
            <p className="font-poppins text-white/70 text-sm mb-4">
              Get updates on new artworks and exhibitions.
            </p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email"
                className="px-4 py-3 bg-white/10 border border-white/20 focus:border-[#E14749] focus:outline-none font-poppins text-sm text-white placeholder-white/50"
              />
              <button className="px-6 py-3 bg-[#E14749] text-white font-montserrat text-sm tracking-wider hover:bg-[#C13535] transition">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 mt-8 text-center">
          <p className="font-poppins text-white/60 text-xs sm:text-sm">
            © 2024 AARTI ART STUDIO. All rights reserved. | Mathura, Uttar Pradesh
          </p>
        </div>
      </div>
    </footer>
  )
}