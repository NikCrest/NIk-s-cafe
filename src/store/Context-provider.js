import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCart = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const newAmount = state.totalAmount + action.item.price * action.item.qnt;
    const existingIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingIndex];
    let newItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        qnt: existingItem.qnt + action.item.qnt,
      };
      newItems = [...state.items];
      newItems[existingIndex] = updatedItem;
    } else {
      newItems = state.items.concat(action.item);
    }
    return {
      items: newItems,
      totalAmount: newAmount,
    };
    
  }
  if (action.type === 'REMOVE') {
    const existingIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingIndex];
    const newAmount = state.totalAmount - existingItem.price;
    let newItems;
    if (existingItem.qnt === 1) {
      newItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, qnt: existingItem.qnt - 1 };
      newItems = [...state.items];
      newItems[existingIndex] = updatedItem;
    }

    return {
      items: newItems,
      totalAmount: newAmount
    };
  }
  if (action.type === 'CLEAR'){
      return defaultCart;
  } 
  return defaultCart;
};

const CartProvider = (props) => {
  const [cart, dispatch] = useReducer(cartReducer, defaultCart);

  const addHandler = (item) => {
    dispatch({type: 'ADD', item: item});
  };

  const removeHandler = (id) => {
    dispatch({type: 'REMOVE', id: id});
  };

  const clearHandler = ()=>{
      dispatch({type: 'CLEAR'})
  }
  const cartData = {
    items: cart.items,
    totalAmount: cart.totalAmount,
    addItem: addHandler,
    removeItem: removeHandler,
    clearCart:clearHandler
  };

  return (
    <CartContext.Provider value={cartData}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;