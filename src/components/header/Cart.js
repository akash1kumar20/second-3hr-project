import React, { useContext } from "react";
import classes from "./Cart.module.css";
import CartContext from "../../data_room/Cart-context";
export default function Cart() {
  const cartCtx = useContext(CartContext);
  const count = cartCtx.items.reduce((currValue, item) => {
    return currValue + Number(item.quantity);
  }, 0);
  return <div className={classes.cart}>Items = {count}</div>;
}
