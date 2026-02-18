import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919027352937?text=Hi!%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20artworks."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75 group-hover:animate-none"></div>
        <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300">
          <MessageCircle size={28} />
        </div>
      </div>
    </a>
  );
}