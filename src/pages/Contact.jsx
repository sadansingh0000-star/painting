import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:prashant.001xz@gmail.com?subject=${formData.subject} - ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AMessage: ${formData.message}`;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-custom text-center text-white">
            <span className="inline-block px-6 py-2 bg-[#E14749] font-['Montserrat'] text-xs tracking-[0.3em] uppercase mb-6">
              GET IN TOUCH
            </span>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl mb-6">
              Contact Us
            </h1>
            <p className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Let's discuss your artistic vision
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-[#FDF8F2] p-8 lg:p-12 rounded-2xl">
              <h5 className="font-['Montserrat'] text-[#E14749] text-sm tracking-[0.3em] uppercase mb-4">
                SEND MESSAGE
              </h5>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-gray-900 mb-8">
                Let's Create Something Beautiful
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Full Name *"
                    className="w-full px-5 py-4 bg-white border border-gray-200 focus:border-[#E14749] focus:outline-none focus:ring-2 focus:ring-[#E14749]/20 rounded-lg font-['Poppins'] text-sm transition"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    className="w-full px-5 py-4 bg-white border border-gray-200 focus:border-[#E14749] focus:outline-none focus:ring-2 focus:ring-[#E14749]/20 rounded-lg font-['Poppins'] text-sm transition"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-5 py-4 bg-white border border-gray-200 focus:border-[#E14749] focus:outline-none focus:ring-2 focus:ring-[#E14749]/20 rounded-lg font-['Poppins'] text-sm transition"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-5 py-4 bg-white border border-gray-200 focus:border-[#E14749] focus:outline-none focus:ring-2 focus:ring-[#E14749]/20 rounded-lg font-['Poppins'] text-sm transition"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message *"
                    rows="5"
                    className="w-full px-5 py-4 bg-white border border-gray-200 focus:border-[#E14749] focus:outline-none focus:ring-2 focus:ring-[#E14749]/20 rounded-lg font-['Poppins'] text-sm resize-none transition"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#E14749] text-white font-['Montserrat'] text-sm tracking-wider rounded-lg hover:bg-[#C13535] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={18} /> SEND MESSAGE
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h5 className="font-['Montserrat'] text-[#E14749] text-sm tracking-[0.3em] uppercase mb-4">
                VISIT US
              </h5>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-gray-900 mb-8">
                AARTI ART STUDIO
              </h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-5 group">
                  <div className="w-14 h-14 bg-[#E14749]/10 group-hover:bg-[#E14749] rounded-xl flex items-center justify-center shrink-0 transition-all duration-300">
                    <MapPin size={24} className="text-[#E14749] group-hover:text-white transition" />
                  </div>
                  <div>
                    <h4 className="font-['Playfair_Display'] text-gray-900 text-lg mb-2">Studio Address</h4>
                    <p className="font-['Poppins'] text-gray-600 leading-relaxed">
                      Chandanvan Face 2,<br />
                      Mathura, Uttar Pradesh<br />
                      India - 281001
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-5 group">
                  <div className="w-14 h-14 bg-[#E14749]/10 group-hover:bg-[#E14749] rounded-xl flex items-center justify-center shrink-0 transition-all duration-300">
                    <Phone size={24} className="text-[#E14749] group-hover:text-white transition" />
                  </div>
                  <div>
                    <h4 className="font-['Playfair_Display'] text-gray-900 text-lg mb-2">Phone</h4>
                    <p className="font-['Poppins'] text-gray-600">
                      +91 90273 52937
                    </p>
                    <p className="font-['Poppins'] text-gray-500 text-sm mt-1">
                      Available 10 AM - 7 PM
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-5 group">
                  <div className="w-14 h-14 bg-[#E14749]/10 group-hover:bg-[#E14749] rounded-xl flex items-center justify-center shrink-0 transition-all duration-300">
                    <Mail size={24} className="text-[#E14749] group-hover:text-white transition" />
                  </div>
                  <div>
                    <h4 className="font-['Playfair_Display'] text-gray-900 text-lg mb-2">Email</h4>
                    <p className="font-['Poppins'] text-gray-600">
                      prashant.001xz@gmail.com
                    </p>
                    <p className="font-['Poppins'] text-gray-500 text-sm mt-1">
                      For commissions & inquiries
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-5 group">
                  <div className="w-14 h-14 bg-[#E14749]/10 group-hover:bg-[#E14749] rounded-xl flex items-center justify-center shrink-0 transition-all duration-300">
                    <Clock size={24} className="text-[#E14749] group-hover:text-white transition" />
                  </div>
                  <div>
                    <h4 className="font-['Playfair_Display'] text-gray-900 text-lg mb-2">Studio Hours</h4>
                    <p className="font-['Poppins'] text-gray-600">
                      Tuesday - Sunday: 10:00 AM - 7:00 PM<br />
                      Monday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="border-t border-gray-200 pt-8">
                <h4 className="font-['Playfair_Display'] text-gray-900 text-lg mb-4">Follow Our Art Journey</h4>
                <div className="flex gap-4">
                  <button className="w-12 h-12 bg-[#FDF8F2] hover:bg-[#E14749] rounded-xl flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300">
                    <Instagram size={20} />
                  </button>
                  <button className="w-12 h-12 bg-[#FDF8F2] hover:bg-[#E14749] rounded-xl flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300">
                    <Facebook size={20} />
                  </button>
                  <button className="w-12 h-12 bg-[#FDF8F2] hover:bg-[#E14749] rounded-xl flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300">
                    <Twitter size={20} />
                  </button>
                  <button className="w-12 h-12 bg-[#FDF8F2] hover:bg-[#E14749] rounded-xl flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300">
                    <Youtube size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113778.22537626735!2d77.59208665!3d27.49241335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397371c0f6d6c6c5%3A0x9c9c9c9c9c9c9c!2sMathura%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-full h-full"
        ></iframe>
        <div className="absolute bottom-8 right-8 bg-white p-6 rounded-xl shadow-2xl border-l-4 border-[#E14749] max-w-sm">
          <h4 className="font-['Playfair_Display'] text-xl text-gray-900 mb-2">📍 Chandanvan Face 2</h4>
          <p className="font-['Poppins'] text-gray-600 mb-2">Mathura, Uttar Pradesh - 281001</p>
          <p className="font-['Poppins'] text-[#E14749] font-semibold">+91 90273 52937</p>
        </div>
      </section>
    </>
  );
}