import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Art Collector",
    content: "The artwork I purchased from Pavsarts is absolutely breathtaking. The attention to detail and emotional depth in each piece is remarkable. Truly a gem in the art world.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-9989345c9b1a?w=200"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Gallery Owner",
    content: "Collaborating with Pavsarts has been an incredible journey. Their unique style and professional approach make them stand out. Highly recommended for any art enthusiast.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200"
  },
  {
    id: 3,
    name: "Anita Desai",
    role: "Interior Designer",
    content: "I've commissioned multiple pieces from Pavsarts for my clients. Each artwork exceeds expectations and brings spaces to life. Exceptional talent and service.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom">
        <div className="section-title">
          <h5>TESTIMONIALS</h5>
          <h2>WHAT COLLECTORS SAY</h2>
          <div></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-[#F3F0E5] p-8 md:p-12 lg:p-16">
            <div className="flex flex-col items-center text-center">
              {/* Quote Icon */}
              <div className="text-6xl text-[#E14749] mb-6">"</div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[#E14749] text-[#E14749]" />
                ))}
              </div>
              
              {/* Content */}
              <p className="font-fira text-lg md:text-xl text-black/80 mb-8 leading-relaxed">
                {testimonials[current].content}
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-megrim text-black text-xl">
                    {testimonials[current].name}
                  </h4>
                  <p className="font-fira text-black/60 text-sm">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-[#E14749] rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 bg-[#E14749] rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}