import { useCart } from '../context/CartContext';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, checkoutViaWhatsApp } = useCart();

  if (cart.items.length === 0) {
    return (
      <div className="pt-24 pb-20 min-h-[60vh]">
        <div className="container-custom text-center">
          <ShoppingBag size={64} className="mx-auto text-gray-300 mb-6" />
          <h1 className="font-montserrat text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
          <p className="font-poppins text-gray-500 mb-8">Looks like you haven't added any artworks yet.</p>
          <Link 
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E14749] text-white font-montserrat text-sm font-semibold tracking-wider hover:bg-[#C13535] transition-colors"
          >
            BROWSE GALLERY
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <div className="bg-white pt-24 pb-8 border-b">
        <div className="container-custom">
          <h1 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-2">SHOPPING CART</h1>
          <p className="font-poppins text-gray-500">{cart.totalItems} items</p>
        </div>
      </div>

      {/* Cart Items */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-4">
              {cart.items.map((item) => (
                <div key={item.id} className="bg-white border rounded-lg p-4 flex gap-4">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-24 h-24 object-cover bg-gray-100"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <div>
                        <h3 className="font-montserrat font-semibold text-gray-900">{item.title}</h3>
                        <p className="font-poppins text-sm text-gray-500">{item.category}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-[#E14749] transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3 border rounded">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-100 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center font-poppins">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="font-montserrat font-bold text-[#E14749]">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h2 className="font-montserrat text-xl font-bold text-gray-900 mb-6">ORDER SUMMARY</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="font-poppins text-gray-600">Subtotal</span>
                    <span className="font-montserrat font-semibold">${cart.totalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins text-gray-600">Shipping</span>
                    <span className="font-poppins text-gray-600">Calculated at checkout</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-bold">
                      <span className="font-montserrat">Total</span>
                      <span className="font-montserrat text-[#E14749]">${cart.totalPrice}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={checkoutViaWhatsApp}
                  className="w-full px-6 py-4 bg-[#25D366] text-white font-montserrat text-sm font-semibold tracking-wider rounded-lg hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2 mb-3"
                >
                  <MessageCircle size={18} />
                  CHECKOUT VIA WHATSAPP
                </button>

                <Link 
                  to="/gallery"
                  className="block text-center w-full px-6 py-3 border-2 border-[#E14749] text-[#E14749] font-montserrat text-sm font-semibold tracking-wider hover:bg-[#E14749] hover:text-white transition-colors"
                >
                  CONTINUE SHOPPING
                </Link>

                <p className="font-poppins text-xs text-gray-500 text-center mt-4">
                  You'll be redirected to WhatsApp with your order details
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}