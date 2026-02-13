import { paintings } from '../../data/paintings';
import { useState } from 'react';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', 'Abstract', 'Landscape', 'Cityscape', 'Nature', 'Traditional'];
  
  const filteredPaintings = filter === 'all' 
    ? paintings 
    : paintings.filter(p => p.category === filter);

  return (
    <section className="py-20 lg:py-28 bg-[#F3F0E5]">
      <div className="container-custom">
        <div className="section-title">
          <h5>OUR WORK</h5>
          <h2>FEATURED ARTWORKS</h2>
          <div></div>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 font-megrim text-sm tracking-wider transition ${
                filter === cat
                  ? 'bg-[#E14749] text-white'
                  : 'bg-white text-black hover:bg-[#E14749] hover:text-white'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
        
        {/* Artwork Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPaintings.map((painting) => (
            <div 
              key={painting.id} 
              className="group relative overflow-hidden bg-white"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={painting.image} 
                  alt={painting.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <div className="text-center p-6">
                  <h4 className="font-megrim text-white text-2xl mb-2">
                    {painting.title}
                  </h4>
                  <p className="font-fira text-white/80 text-sm mb-4">
                    {painting.category} • {painting.year}
                  </p>
                  <button className="px-6 py-2 bg-[#E14749] text-white font-megrim text-xs tracking-wider hover:bg-white hover:text-black transition">
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-10 py-4 bg-[#E14749] text-white font-megrim text-sm tracking-wider hover:bg-opacity-90 transition">
            VIEW ALL ARTWORKS
          </button>
        </div>
      </div>
    </section>
  );
}