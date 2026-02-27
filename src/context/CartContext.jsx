import { createContext, useContext, useReducer, useEffect, useState } from 'react';
import { ShoppingBag } from 'lucide-react';

const CartContext = createContext();

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        
        const newState = {
          items: updatedItems,
          totalItems: state.totalItems + 1,
          totalPrice: Number((state.totalPrice + action.payload.price).toFixed(2))
        };
        
        // Save to localStorage immediately
        localStorage.setItem('cart', JSON.stringify(newState));
        return newState;
      } else {
        const newState = {
          items: [...state.items, { ...action.payload, quantity: 1 }],
          totalItems: state.totalItems + 1,
          totalPrice: Number((state.totalPrice + action.payload.price).toFixed(2))
        };
        
        // Save to localStorage immediately
        localStorage.setItem('cart', JSON.stringify(newState));
        return newState;
      }
    }

    case 'REMOVE_ITEM': {
      const item = state.items.find(item => item.id === action.payload);
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      
      const newState = {
        items: updatedItems,
        totalItems: state.totalItems - item.quantity,
        totalPrice: Number((state.totalPrice - (item.price * item.quantity)).toFixed(2))
      };
      
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (quantity === 0) {
        const newState = {
          items: state.items.filter(item => item.id !== id),
          totalItems: state.totalItems - item.quantity,
          totalPrice: Number((state.totalPrice - (item.price * item.quantity)).toFixed(2))
        };
        
        localStorage.setItem('cart', JSON.stringify(newState));
        return newState;
      }

      const updatedItems = state.items.map(item =>
        item.id === id ? { ...item, quantity } : item
      );

      const newState = {
        items: updatedItems,
        totalItems: state.totalItems - item.quantity + quantity,
        totalPrice: Number((
          state.totalPrice - (item.price * item.quantity) + (item.price * quantity)
        ).toFixed(2))
      };
      
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    }

    case 'CLEAR_CART': {
      localStorage.removeItem('cart');
      return initialState;
    }

    case 'LOAD_CART': {
      return action.payload;
    }

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [showNotification, setShowNotification] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load cart from localStorage on mount
  useEffect(() => {
    const loadCart = () => {
      try {
        const savedCart = localStorage.getItem('cart');
        console.log('Loading cart from localStorage:', savedCart); // Debug log
        
        if (savedCart) {
          const parsedCart = JSON.parse(savedCart);
          // Validate that parsedCart has the correct structure
          if (parsedCart && Array.isArray(parsedCart.items)) {
            dispatch({ type: 'LOAD_CART', payload: parsedCart });
          } else {
            // If structure is invalid, start fresh
            localStorage.removeItem('cart');
          }
        }
      } catch (error) {
        console.error('Error loading cart:', error);
        localStorage.removeItem('cart'); // Clear corrupted data
      } finally {
        setIsLoading(false);
      }
    };

    loadCart();
  }, []);

  // Save cart to localStorage on update (redundant but safe)
  useEffect(() => {
    if (!isLoading) {
      console.log('Saving cart to localStorage:', state); // Debug log
      localStorage.setItem('cart', JSON.stringify(state));
    }
  }, [state, isLoading]);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
    setLastAddedItem(item);
    setShowNotification(true);
    
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const isInCart = (id) => {
    return state.items.some(item => item.id === id);
  };

  const getItemQuantity = (id) => {
    const item = state.items.find(item => item.id === id);
    return item ? item.quantity : 0;
  };

  const checkoutViaWhatsApp = () => {
    if (state.items.length === 0) return;

    const phoneNumber = '918019574565';
    
    let message = '🖼️ *New Art Order*\n\n';
    message += '*Items:*\n';
    
    state.items.forEach((item, index) => {
      message += `${index + 1}. ${item.title} - $${item.price} x ${item.quantity} = $${(item.price * item.quantity)}\n`;
    });
    
    message += `\n*Total Amount:* ₹${state.totalPrice}`;
    message += `\n\nPlease confirm availability and payment details.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  if (isLoading) {
    return null; // Or a loading spinner
  }

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      checkoutViaWhatsApp,
      isInCart,
      getItemQuantity,
      showNotification,
      lastAddedItem
    }}>
      {children}
      
      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg border-l-4 border-[#E14749] p-4 z-50 animate-slide-up">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E14749]/10 rounded-full flex items-center justify-center">
              <ShoppingBag size={20} className="text-[#E14749]" />
            </div>
            <div>
              <p className="font-poppins text-sm text-gray-900 font-medium">Added to Cart!</p>
              <p className="font-poppins text-xs text-gray-500">{lastAddedItem?.title}</p>
            </div>
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};