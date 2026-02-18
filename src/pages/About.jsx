import { MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

export default function About() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200"
          alt="Artist Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center">
          <div className="container-custom">
            <span className="text-[#E14749] font-montserrat text-sm tracking-[0.3em] uppercase mb-4 block">
              OUR STORY
            </span>
            <h1 className="font-playfair text-5xl md:text-7xl text-white mb-4">
              About <span className="text-[#E14749]">Us</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 mb-6">
                AARTI ART STUDIO
              </h2>
              <div className="w-20 h-1 bg-[#E14749] mb-8"></div>
              <div className="space-y-6 text-gray-700">
                <p className="font-poppins leading-relaxed">
                  Founded in 2014 by Aarti Sharma, a passionate artist from the holy city of Mathura, 
                  our studio has become a sanctuary for art lovers and collectors. With a deep connection 
                  to the rich cultural heritage of Braj, we specialize in creating soulful artwork that 
                  blends traditional Indian art forms with contemporary expressions.
                </p>
                <p className="font-poppins leading-relaxed">
                  Each artwork in our collection tells a story - of devotion, of nature, of the divine 
                  love of Radha-Krishna. Located in Chandanvan, Mathura, our studio is where tradition 
                  meets modernity, where every brushstroke carries emotion.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="font-playfair text-3xl text-[#E14749] mb-2">70+</div>
                  <div className="font-poppins text-sm text-gray-600">Artworks</div>
                </div>
                <div>
                  <div className="font-playfair text-3xl text-[#E14749] mb-2">15+</div>
                  <div className="font-poppins text-sm text-gray-600">Categories</div>
                </div>
                <div>
                  <div className="font-playfair text-3xl text-[#E14749] mb-2">10+</div>
                  <div className="font-poppins text-sm text-gray-600">Years</div>
                </div>
              </div>
            </div>

            {/* Right - Info Cards */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#E14749] rounded-xl flex items-center justify-center text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl text-gray-900 mb-2">Studio Address</h3>
                    <p className="font-poppins text-gray-600">
                      Chandanvan Face 2<br />
                      Mathura, Uttar Pradesh<br />
                      India - 281001
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#E14749] rounded-xl flex items-center justify-center text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl text-gray-900 mb-2">Contact</h3>
                    <p className="font-poppins text-gray-600">+91 90273 52937</p>
                    <p className="font-poppins text-gray-500 text-sm mt-1">Available 10 AM - 7 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#E14749] rounded-xl flex items-center justify-center text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl text-gray-900 mb-2">Email</h3>
                    <p className="font-poppins text-gray-600">prashant.001xz@gmail.com</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919027352937"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#25D366] text-white p-8 rounded-2xl hover:bg-[#128C7E] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <MessageCircle size={32} />
                  <div>
                    <h3 className="font-playfair text-xl mb-1">Chat on WhatsApp</h3>
                    <p className="text-white/90 text-sm">Quick response within minutes</p>
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