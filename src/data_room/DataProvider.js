import React, { useReducer } from "react";
import CartContext from "./Cart-context";
const defaultValue = {
  items: [],
};
const reducerFn = (latestSnapShot, actionTaken) => {
  if (actionTaken.do === "ADD") {
    const indexPresent = latestSnapShot.items.findIndex(
      (item) => item.name === actionTaken.item.name
    );

    const alreadyPresentItems = latestSnapShot.items[indexPresent];

    let itemAdded;
    if (alreadyPresentItems) {
      const addedAgain = {
        ...alreadyPresentItems,
        quantity: Number(alreadyPresentItems.quantity) + 1,
        cartQuantity: Number(alreadyPresentItems.cartQuantity) - 1,
        price: actionTaken.item.price,
      };
      itemAdded = [...latestSnapShot.items];
      itemAdded[indexPresent] = addedAgain;
    } else {
      itemAdded = latestSnapShot.items.concat(actionTaken.item);
    }

    return {
      items: itemAdded,
    };
  }

  return defaultValue;
};

const DataProvider = (props) => {
  const [latestState, dispatchFn] = useReducer(reducerFn, defaultValue);
  const addedInCart = (item) => {
    dispatchFn({ do: "ADD", item: item });
  };

  const cartContext = {
    items: latestState.items,
    addItems: addedInCart,
  };
  console.log(cartContext);
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default DataProvider;
