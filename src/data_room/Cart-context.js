import React from "react";
const CartContext = React.createContext({
  items: [],
  addItems: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
