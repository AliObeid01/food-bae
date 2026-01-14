import { createContext, useContext, useReducer, useCallback, useMemo } from 'react';
import { restaurantInfo } from '../data/menu';

const initialState = {
  items: [],
  isOpen: false,
};

const ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  UPDATE_MODIFIERS: 'UPDATE_MODIFIERS',
  UPDATE_NOTES: 'UPDATE_NOTES',
  UPDATE_ITEM: 'UPDATE_ITEM',
  CLEAR_CART: 'CLEAR_CART',
  TOGGLE_CART: 'TOGGLE_CART',
  OPEN_CART: 'OPEN_CART',
  CLOSE_CART: 'CLOSE_CART',
};

const generateCartItemId = () => `cart_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

function cartReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_ITEM: {
      const { item, quantity = 1, modifiers = [], notes = '' } = action.payload;
      
      const existingIndex = state.items.findIndex(
        cartItem => 
          cartItem.id === item.id && 
          JSON.stringify(cartItem.modifiers) === JSON.stringify(modifiers) &&
          cartItem.notes === notes
      );
      
      if (existingIndex > -1) {
        const updatedItems = [...state.items];
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          quantity: updatedItems[existingIndex].quantity + quantity,
        };
        return { ...state, items: updatedItems };
      }
      
      const newItem = {
        ...item,
        cartItemId: generateCartItemId(),
        quantity,
        modifiers,
        notes,
      };
      
      return { ...state, items: [...state.items, newItem] };
    }
    
    case ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.cartItemId !== action.payload.cartItemId),
      };
    
    case ACTIONS.UPDATE_QUANTITY: {
      const { cartItemId, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(item => item.cartItemId !== cartItemId),
        };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.cartItemId === cartItemId ? { ...item, quantity } : item
        ),
      };
    }
    
    case ACTIONS.UPDATE_MODIFIERS: {
      const { cartItemId, modifiers } = action.payload;
      return {
        ...state,
        items: state.items.map(item =>
          item.cartItemId === cartItemId ? { ...item, modifiers } : item
        ),
      };
    }
    
    case ACTIONS.UPDATE_NOTES: {
      const { cartItemId, notes } = action.payload;
      return {
        ...state,
        items: state.items.map(item =>
          item.cartItemId === cartItemId ? { ...item, notes } : item
        ),
      };
    }

    case ACTIONS.UPDATE_ITEM: {
      const { cartItemId, quantity, modifiers, notes } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(item => item.cartItemId !== cartItemId),
        };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.cartItemId === cartItemId 
            ? { ...item, quantity, modifiers, notes } 
            : item
        ),
      };
    }
    
    case ACTIONS.CLEAR_CART:
      return { ...state, items: [] };
    
    case ACTIONS.TOGGLE_CART:
      return { ...state, isOpen: !state.isOpen };
    
    case ACTIONS.OPEN_CART:
      return { ...state, isOpen: true };

    case ACTIONS.CLOSE_CART:
      return { ...state, isOpen: false };
    
    default:
      return state;
  }
}

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  const addItem = useCallback((item, quantity = 1, modifiers = [], notes = '') => {
    dispatch({
      type: ACTIONS.ADD_ITEM,
      payload: { item, quantity, modifiers, notes },
    });
  }, []);
  
  const removeItem = useCallback((cartItemId) => {
    dispatch({ type: ACTIONS.REMOVE_ITEM, payload: { cartItemId } });
  }, []);
  
  const updateQuantity = useCallback((cartItemId, quantity) => {
    dispatch({ type: ACTIONS.UPDATE_QUANTITY, payload: { cartItemId, quantity } });
  }, []);
  
  const updateModifiers = useCallback((cartItemId, modifiers) => {
    dispatch({ type: ACTIONS.UPDATE_MODIFIERS, payload: { cartItemId, modifiers } });
  }, []);
  
  const updateNotes = useCallback((cartItemId, notes) => {
    dispatch({ type: ACTIONS.UPDATE_NOTES, payload: { cartItemId, notes } });
  }, []);

  const updateItem = useCallback((cartItemId, quantity, modifiers, notes) => {
    dispatch({ 
      type: ACTIONS.UPDATE_ITEM, 
      payload: { cartItemId, quantity, modifiers, notes } 
    });
  }, []);
  
  const clearCart = useCallback(() => {
    dispatch({ type: ACTIONS.CLEAR_CART });
  }, []);
  
  const toggleCart = useCallback(() => {
    dispatch({ type: ACTIONS.TOGGLE_CART });
  }, []);
  
  const openCart = useCallback(() => {
    dispatch({ type: ACTIONS.OPEN_CART });
  }, []);
  
  const closeCart = useCallback(() => {
    dispatch({ type: ACTIONS.CLOSE_CART });
  }, []);
  
  const itemCount = useMemo(() => 
    state.items.reduce((sum, item) => sum + item.quantity, 0),
    [state.items]
  );
  
  const calculateItemTotal = useCallback((item) => {
    const basePrice = item.price;
    const modifiersTotal = item.modifiers.reduce((sum, mod) => sum + mod.price, 0);
    return (basePrice + modifiersTotal) * item.quantity;
  }, []);
  
  const subtotal = useMemo(() => 
    state.items.reduce((sum, item) => sum + calculateItemTotal(item), 0),
    [state.items, calculateItemTotal]
  );
  
  const tax = useMemo(() => subtotal * 0.11, [subtotal]);
  const total = useMemo(() => subtotal + tax, [subtotal, tax]);
  
  const generateWhatsAppMessage = useCallback(() => {
    if (state.items.length === 0) return '';
    
    let message = '🍔 *New Order from Food Bae Website*\n\n';
    message += '📋 *Order Details:*\n';
    message += '─────────────────\n';
    
    state.items.forEach((item, index) => {
      message += `\n${index + 1}. *${item.name}*\n`;
      message += `   Qty: ${item.quantity} × $${item.price.toFixed(2)}\n`;
      
      if (item.modifiers.length > 0) {
        message += `   Add-ons:\n`;
        item.modifiers.forEach(mod => {
          message += `   • ${mod.name} (+$${mod.price.toFixed(2)})\n`;
        });
      }
      
      if (item.notes) {
        message += `   📝 Note: ${item.notes}\n`;
      }
      
      message += `   💰 Subtotal: $${calculateItemTotal(item).toFixed(2)}\n`;
    });
    
    message += '\n─────────────────\n';
    message += `📦 Subtotal: $${subtotal.toFixed(2)}\n`;
    message += `📊 Tax (11%): $${tax.toFixed(2)}\n`;
    message += `💵 *Total: $${total.toFixed(2)}*\n`;
    message += '\n─────────────────\n';
    message += '📍 Please confirm your delivery address';
    
    return encodeURIComponent(message);
  }, [state.items, calculateItemTotal, subtotal, tax, total]);
  
  const sendToWhatsApp = useCallback(() => {
    const message = generateWhatsAppMessage();
    const whatsappNumber = restaurantInfo.whatsapp.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }, [generateWhatsAppMessage]);
  
  const value = useMemo(() => ({
    items: state.items,
    isOpen: state.isOpen,
    itemCount,
    subtotal,
    tax,
    total,
    addItem,
    removeItem,
    updateQuantity,
    updateModifiers,
    updateNotes,
    updateItem,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
    calculateItemTotal,
    generateWhatsAppMessage,
    sendToWhatsApp,
  }), [
    state.items,
    state.isOpen,
    itemCount,
    subtotal,
    tax,
    total,
    addItem,
    removeItem,
    updateQuantity,
    updateModifiers,
    updateNotes,
    updateItem,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
    calculateItemTotal,
    generateWhatsAppMessage,
    sendToWhatsApp,
  ]);
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export default CartContext;
