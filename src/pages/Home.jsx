import HeroSlider from '../components/home/HeroSlider';
import { paintings, services, testimonials } from '../data/paintings';
import { useState } from 'react';
import { Star, ShoppingBag, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = ['all', 'Traditional', 'Spiritual', 'Cultural', 'Landscape', 'Heritage'];
  const featuredPaintings = paintings.slice(0, 6);

  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Services Section - Modern Cards */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h5 className="font-['Montserrat'] text-[#E14749] text-sm lg:text-base tracking-[0.3em] uppercase mb-4">
              WHAT WE OFFER
            </h5>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-[#E14749] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-[#FDF8F2] p-8 hover:bg-[#E14749] transition-all duration-500 rounded-lg shadow-lg hover:shadow-2xl"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl text-gray-900 group-hover:text-white mb-3">
                  {service.title}
                </h3>
                <p className="font-['Poppins'] text-gray-600 group-hover:text-white/90 text-sm mb-4">
                  {service.description}
                </p>
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-white/80">
                      <span className="w-1.5 h-1.5 bg-[#E14749] group-hover:bg-white rounded-full"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                <p className="font-['Montserrat'] text-[#E14749] group-hover:text-white font-semibold mb-4">
                  {service.price}
                </p>
                <button 
                  onClick={() => window.location.href = '/services'}
                  className="inline-flex items-center gap-2 text-[#E14749] group-hover:text-white font-['Montserrat'] text-sm font-semibold"
                >
                  Learn More <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artworks Section */}
      <section className="py-20 lg:py-28 bg-[#FDF8F2]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h5 className="font-['Montserrat'] text-[#E14749] text-sm lg:text-base tracking-[0.3em] uppercase mb-4">
              OUR COLLECTION
            </h5>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
              Featured Artworks
            </h2>
            <div className="w-20 h-1 bg-[#E14749] mx-auto"></div>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 font-['Montserrat'] text-sm tracking-wider transition-all duration-300 rounded-full ${
                  activeCategory === cat
                    ? 'bg-[#E14749] text-white'
                    : 'bg-white text-gray-700 hover:bg-[#E14749] hover:text-white'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Artworks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPaintings.map((painting) => (
              <div 
                key={painting.id} 
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={painting.image} 
                    alt={painting.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#E14749] hover:text-white">
                    <ShoppingBag size={18} />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-['Playfair_Display'] text-xl text-gray-900">
                      {painting.title}
                    </h3>
                    <span className="font-['Montserrat'] text-[#E14749] font-semibold">
                      {painting.price}
                    </span>
                  </div>
                  <p className="font-['Poppins'] text-gray-600 text-sm mb-3">
                    {painting.category} • {painting.year}
                  </p>
                  <p className="font-['Poppins'] text-gray-500 text-sm mb-4">
                    {painting.description}
                  </p>
                  <button 
                    onClick={() => window.location.href = '/portfolio'}
                    className="w-full py-3 bg-[#E14749] text-white font-['Montserrat'] text-sm tracking-wider rounded-lg hover:bg-[#C13535] transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => window.location.href = '/portfolio'}
              className="px-10 py-4 bg-[#E14749] text-white font-['Montserrat'] text-sm tracking-wider rounded-lg hover:bg-[#C13535] transition-all duration-300 inline-flex items-center gap-2"
            >
              View All Artworks <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h5 className="font-['Montserrat'] text-[#E14749] text-sm lg:text-base tracking-[0.3em] uppercase mb-4">
              TESTIMONIALS
            </h5>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
              What Collectors Say
            </h2>
            <div className="w-20 h-1 bg-[#E14749] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-[#FDF8F2] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#E14749] text-[#E14749]" />
                  ))}
                </div>
                <p className="font-['Cormorant_Garamond'] text-lg text-gray-700 italic mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-['Playfair_Display'] text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="font-['Poppins'] text-gray-500 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Info Section */}
      <section className="py-20 lg:py-28 bg-[#E14749]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h5 className="font-['Montserrat'] text-white/90 text-sm lg:text-base tracking-[0.3em] uppercase mb-4">
                VISIT OUR STUDIO
              </h5>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                AARTI ART STUDIO
              </h2>
              <div className="w-20 h-1 bg-white mb-8"></div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <p className="font-['Poppins'] text-white/90">
                    Chandanvan Face 2, Mathura, Uttar Pradesh - 281001
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Phone size={20} className="text-white" />
                  </div>
                  <p className="font-['Poppins'] text-white/90">
                    +91 90273 52937
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <p className="font-['Poppins'] text-white/90">
                    prashant.001xz@gmail.com
                  </p>
                </div>
              </div>
              
              <button 
                onClick={() => window.location.href = '/contact'}
                className="px-8 py-4 bg-white text-[#E14749] font-['Montserrat'] text-sm tracking-wider rounded-lg hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-2"
              >
                SCHEDULE A VISIT <ChevronRight size={18} />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600" 
                alt="Studio"
                className="w-full h-48 object-cover rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600" 
                alt="Artist Working"
                className="w-full h-48 object-cover rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 mt-8"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}