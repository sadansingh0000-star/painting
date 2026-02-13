const services = [
  {
    icon: "🎨",
    title: "ORIGINAL ARTWORK",
    description: "Unique, one-of-a-piece paintings created with passion and expertise.",
    features: ["Oil Paintings", "Acrylic Art", "Mixed Media"]
  },
  {
    icon: "🖼️",
    title: "CUSTOM COMMISSIONS",
    description: "Personalized artwork tailored to your vision and space requirements.",
    features: ["Portrait", "Landscape", "Abstract"]
  },
  {
    icon: "🏛️",
    title: "ART CONSULTING",
    description: "Professional guidance for collectors, businesses, and art enthusiasts.",
    features: ["Collection Curation", "Investment Advice", "Installation"]
  },
  {
    icon: "📦",
    title: "WORLDWIDE SHIPPING",
    description: "Safe and secure delivery of artwork to any corner of the globe.",
    features: ["Crate Packaging", "Insurance", "Tracking"]
  },
  {
    icon: "🎭",
    title: "EXHIBITIONS",
    description: "Regular showcase of contemporary art in prestigious galleries.",
    features: ["Solo Shows", "Group Exhibitions", "Art Fairs"]
  },
  {
    icon: "📚",
    title: "ART WORKSHOPS",
    description: "Learn painting techniques from experienced master artists.",
    features: ["Beginner Classes", "Advanced Techniques", "Master Classes"]
  }
];

export default function Services() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom">
        <div className="section-title">
          <h5>WHAT WE OFFER</h5>
          <h2>OUR SERVICES</h2>
          <div></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-[#F3F0E5] hover:bg-[#E14749] transition-all duration-500"
            >
              <div className="text-5xl mb-4 group-hover:text-white transition">
                {service.icon}
              </div>
              <h3 className="font-megrim text-xl lg:text-2xl text-black group-hover:text-white mb-3 tracking-wider">
                {service.title}
              </h3>
              <p className="font-fira text-black/70 group-hover:text-white/90 text-sm lg:text-base mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="font-fira text-sm text-black/60 group-hover:text-white/80 flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#E14749] group-hover:bg-white rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}