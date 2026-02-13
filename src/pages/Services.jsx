import { services } from '../data/paintings';
import { Check, ChevronRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=1200)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-custom text-center text-white">
            <span className="inline-block px-6 py-2 bg-[#E14749] font-['Montserrat'] text-xs tracking-[0.3em] uppercase mb-6">
              OUR SERVICES
            </span>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl mb-6">
              Art Services
            </h1>
            <p className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Comprehensive art solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h5 className="font-['Montserrat'] text-[#E14749] text-sm lg:text-base tracking-[0.3em] uppercase mb-4">
              WHAT WE OFFER
            </h5>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
              Complete Art Solutions
            </h2>
            <div className="w-20 h-1 bg-[#E14749] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-[#FDF8F2] p-8 hover:bg-[#E14749] transition-all duration-500 rounded-xl shadow-lg hover:shadow-2xl"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl text-gray-900 group-hover:text-white mb-4">
                  {service.title}
                </h3>
                <p className="font-['Poppins'] text-gray-600 group-hover:text-white/90 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-white/80">
                      <Check size={16} className="text-[#E14749] group-hover:text-white" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 group-hover:border-white/20 pt-4 mt-4">
                  <p className="font-['Montserrat'] text-[#E14749] group-hover:text-white font-semibold">
                    {service.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-[#FDF8F2]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h5 className="font-['Montserrat'] text-[#E14749] text-sm lg:text-base tracking-[0.3em] uppercase mb-4">
              HOW IT WORKS
            </h5>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
              Our Process
            </h2>
            <div className="w-20 h-1 bg-[#E14749] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We discuss your vision, requirements, and budget" },
              { step: "02", title: "Concept", desc: "Creating initial sketches and color schemes for approval" },
              { step: "03", title: "Creation", desc: "Bringing the artwork to life with traditional techniques" },
              { step: "04", title: "Delivery", desc: "Secure shipping and installation at your location" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 bg-[#E14749]/10 group-hover:bg-[#E14749] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                  <span className="font-['Playfair_Display'] text-3xl text-[#E14749] group-hover:text-white">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="font-['Poppins'] text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[#E14749]">
        <div className="container-custom text-center">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create something beautiful together
          </p>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="px-10 py-4 bg-white text-[#E14749] font-['Montserrat'] text-sm tracking-wider rounded-lg hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-2"
          >
            GET STARTED <ChevronRight size={18} />
          </button>
        </div>
      </section>
    </>
  );
}