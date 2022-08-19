import { useState } from 'react';

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [toggleOrders, setToggleOrders] = useState(false);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const toggleOrdersFlechita = () => {
    return setToggleOrders(!toggleOrders);
  };

  const removeCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    });
  };

  return {
    state,
    addToCart,
    removeCart,
    toggleOrders,
    toggleOrdersFlechita,
  };
};

export default useInitialState;
