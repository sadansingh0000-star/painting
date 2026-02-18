import { useState } from 'react';
import { MessageCircle, Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:prashant.001xz@gmail.com?subject=Art Inquiry from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AMessage: ${formData.message}`;
  };

  return (
    <>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200"
          alt="Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center">
          <div className="container-custom">
            <h1 className="font-playfair text-5xl md:text-7xl text-white mb-4">
              Get in <span className="text-[#E14749]">Touch</span>
            </h1>
            <p className="font-poppins text-white/80 text-xl max-w-2xl">
              Let's discuss your artistic vision
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
              <h2 className="font-playfair text-3xl text-gray-900 mb-8">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#E14749] focus:outline-none font-poppins transition"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#E14749] focus:outline-none font-poppins transition"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#E14749] focus:outline-none font-poppins transition"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#E14749] focus:outline-none font-poppins resize-none transition"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#E14749] text-white font-montserrat text-sm rounded-xl hover:bg-[#C13535] transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="font-playfair text-2xl text-gray-900 mb-6">Contact Info</h3>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <MapPin size={20} className="text-[#E14749] shrink-0 mt-1" />
                    <p className="font-poppins text-gray-600">
                      Chandanvan Face 2, Mathura, Uttar Pradesh - 281001
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Phone size={20} className="text-[#E14749] shrink-0" />
                    <p className="font-poppins text-gray-600">+91 90273 52937</p>
                  </div>
                  <div className="flex gap-4">
                    <Mail size={20} className="text-[#E14749] shrink-0" />
                    <p className="font-poppins text-gray-600">prashant.001xz@gmail.com</p>
                  </div>
                  <div className="flex gap-4">
                    <Clock size={20} className="text-[#E14749] shrink-0" />
                    <p className="font-poppins text-gray-600">Tue-Sun: 10AM - 7PM</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919027352937"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white p-8 rounded-2xl hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <MessageCircle size={32} />
                  <div>
                    <h3 className="font-playfair text-xl mb-1">WhatsApp Chat</h3>
                    <p className="text-white/90 text-sm">Usually replies within minutes</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}