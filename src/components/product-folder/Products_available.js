import React, { useContext } from "react";
import "./Products.css";
import CartContext from "../../data_room/Cart-context";

export default function Products_available() {
  const cartCtx = useContext(CartContext);
  const showNow = cartCtx.items.length > 0;
  const decrease = (element) => {
    cartCtx.addItems({ ...element });
  };

  return (
    <>
      {showNow && (
        <div className="container products">
          <h2>Medicine Available</h2>
          <div className="row elements_heading">
            <div className="col-5">
              <div className="row">
                <div className="col-6">Name:</div>
                <div className="col-6">Used For:</div>
              </div>
            </div>
            <div className="col-5">
              <div className="row">
                <div className="col-6">Price: </div>
                <div className="col-6">Left in Stock:</div>
              </div>
            </div>
          </div>
          {cartCtx.items.map((element) => (
            <ul className="elements" key={element.id}>
              <div className="row">
                <div className="col-5">
                  <div className="row">
                    <div className="col-6">{element.name}</div>
                    <div className="col-6">{element.discription}</div>
                  </div>
                </div>
                <div className="col-5">
                  <div className="row">
                    <div className="col-6">₹{element.price}</div>
                    <div className="col-6">{element.cartQuantity}</div>
                  </div>
                </div>
                <div className="col-2">
                  {element.cartQuantity > 0 && (
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={decrease.bind(null, element)}
                    >
                      Add
                    </button>
                  )}
                  {!element.cartQuantity > 0 && (
                    <button className="btn btn-secondary btn-sm">Add</button>
                  )}
                </div>
              </div>
            </ul>
          ))}
        </div>
      )}
    </>
  );
}
