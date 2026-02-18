import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:aartikumarsingh555@gmail.com?subject=Art Inquiry from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
  };

  return (
    <>
      {/* Hero */}
      <div className="bg-[#E14749] pt-32 pb-20">
        <div className="container-custom text-center text-white">
          <h1 className="font-montserrat text-4xl md:text-6xl font-bold mb-4">CONTACT</h1>
          <p className="font-poppins text-lg text-white/90 max-w-2xl mx-auto">
            Get in touch for commissions and inquiries
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">SEND MESSAGE</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-200 focus:border-[#E14749] focus:outline-none font-poppins"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-200 focus:border-[#E14749] focus:outline-none font-poppins"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-200 focus:border-[#E14749] focus:outline-none font-poppins"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-[#E14749] text-white font-montserrat text-sm font-semibold tracking-wider hover:bg-[#C13535] transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">STUDIO INFO</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin size={20} className="text-[#E14749] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-montserrat text-sm font-semibold text-gray-900 mb-1">ADDRESS</h3>
                    <p className="font-poppins text-sm text-gray-600">
                      C-807, Mayflower Grand<br />
                      Nacharam - Mallapur,<br />
                      Hyderabad - 500076
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone size={20} className="text-[#E14749] shrink-0" />
                  <div>
                    <h3 className="font-montserrat text-sm font-semibold text-gray-900 mb-1">PHONE</h3>
                    <p className="font-poppins text-sm text-gray-600">+91 80195 74565</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail size={20} className="text-[#E14749] shrink-0" />
                  <div>
                    <h3 className="font-montserrat text-sm font-semibold text-gray-900 mb-1">EMAIL</h3>
                    <p className="font-poppins text-sm text-gray-600">aartikumarsingh555@gmail.com</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/918019574565"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-montserrat text-sm font-semibold hover:bg-[#128C7E] transition-colors"
                >
                  <MessageCircle size={18} />
                  CHAT ON WHATSAPP
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}