import { paintings } from '../data/paintings';

export default function About() {
  return (
    <>
      {/* Hero with Parallax */}
      <section className="relative h-[500px] bg-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200)',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-custom text-center text-white">
            <span className="inline-block px-6 py-2 bg-[#E14749]/90 backdrop-blur-sm font-montserrat text-xs tracking-[0.3em] uppercase mb-6 animate-slide-down">
              OUR STORY
            </span>
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl mb-6 animate-slide-up">
              AARTI ART STUDIO
            </h1>
            <p className="font-cormorant text-xl md:text-2xl text-white/90 max-w-3xl mx-auto italic">
              Where Tradition Meets Contemporary Expression
            </p>
          </div>
        </div>
      </section>
      
      {/* Artist Profile */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg" 
                  alt="Aarti Sharma - Artist"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#E14749] p-8 rounded-lg shadow-xl">
                <p className="font-playfair text-white text-4xl font-bold">15+</p>
                <p className="font-montserrat text-white/90 text-sm tracking-wider">Years of Excellence</p>
              </div>
            </div>
            
            <div>
              <h5 className="font-montserrat text-[#E14749] text-sm lg:text-base tracking-[0.3em] uppercase mb-4">
                FOUNDER & ARTIST
              </h5>
              <h2 className="font-playfair text-4xl md:text-5xl text-gray-900 mb-6">
                Aarti Sharma
              </h2>
              <div className="w-24 h-1 bg-[#E14749] mb-8"></div>
              
              <p className="font-cormorant text-xl text-gray-700 mb-6 italic">
                "Art is not what you see, but what you make others see."
              </p>
              
              <div className="space-y-4 text-gray-600 font-poppins">
                <p>
                  Based in the sacred city of Mathura, Aarti Sharma has been creating 
                  soulful artwork for over 15 years. Her journey began at the banks of 
                  River Yamuna, drawing inspiration from the divine love of Radha-Krishna 
                  and the rich cultural heritage of Braj region.
                </p>
                <p>
                  After completing her Master's in Fine Arts from Banaras Hindu University, 
                  she established AARTI ART STUDIO in 2010 with a vision to revive traditional 
                  Indian painting techniques while embracing contemporary expressions.
                </p>
                <p>
                  Her work has been exhibited in prestigious galleries across India, including 
                  Lalit Kala Akademi, National Gallery of Modern Art, and India Habitat Centre.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-playfair text-[#E14749] mb-2">500+</div>
                  <div className="text-sm font-montserrat text-gray-600">Artworks Created</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-playfair text-[#E14749] mb-2">25+</div>
                  <div className="text-sm font-montserrat text-gray-600">Exhibitions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-playfair text-[#E14749] mb-2">200+</div>
                  <div className="text-sm font-montserrat text-gray-600">Happy Collectors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Studio Location - Mathura Address */}
      <section className="py-20 lg:py-28 bg-[#FDF8F2]">
        <div className="container-custom">
          <div className="section-title">
            <h5>VISIT OUR STUDIO</h5>
            <h2>IN THE HEART OF BRAJ</h2>
            <div></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="studio-card p-8 text-center">
              <div className="w-20 h-20 bg-[#E14749]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#E14749]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl text-gray-900 mb-3">STUDIO ADDRESS</h3>
              <p className="font-poppins text-gray-600">
                Chandanvan Face 2,<br />
                Mathura, Uttar Pradesh<br />
                India - 281001
              </p>
            </div>
            
            <div className="studio-card p-8 text-center">
              <div className="w-20 h-20 bg-[#E14749]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#E14749]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl text-gray-900 mb-3">CONTACT</h3>
              <p className="font-poppins text-gray-600">
                +91 9027352937<br />
                prashant.001xz@gmail.com
              </p>
            </div>
            
            <div className="studio-card p-8 text-center">
              <div className="w-20 h-20 bg-[#E14749]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#E14749]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl text-gray-900 mb-3">STUDIO HOURS</h3>
              <p className="font-poppins text-gray-600">
                Tuesday - Sunday: 10 AM - 7 PM<br />
                Monday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-[450px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113778.22537626735!2d77.59208665!3d27.49241335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397371c0f6d6c6c5%3A0x9c9c9c9c9c9c9c!2sMathura%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
        ></iframe>
        <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-6 shadow-xl">
          <h4 className="font-playfair text-xl text-gray-900 mb-2">📍 Chandanvan Face 2</h4>
          <p className="font-poppins text-gray-600 text-sm">Visit our studio in Mathura</p>
        </div>
      </section>
    </>
  );
}