import React, { useContext, useState } from "react";
import CartContext from "../../data_room/Cart-context";
import "./Add_products.css";
export default function Add_products(props) {
  const cartCtx = useContext(CartContext);
  const [nameValue, setNameValue] = useState("");
  const [discrptionValue, setDiscrptionValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [quantityValue, setQuantityValue] = useState("");
  const nameFn = (event) => {
    setNameValue(event.target.value);
  };
  const dispcriptionFn = (event) => {
    setDiscrptionValue(event.target.value);
  };
  const priceFn = (event) => {
    setPriceValue(event.target.value);
  };
  const quantityFn = (event) => {
    setQuantityValue(event.target.value);
  };

  const productDetails = (event) => {
    event.preventDefault();
    cartCtx.addItems({
      id: Math.random(),
      discription: discrptionValue,
      name: nameValue,
      price: priceValue,
      cartQuantity: quantityValue,
      quantity: 0,
    });
    setNameValue("");
    setDiscrptionValue("");
    setPriceValue("");
    setQuantityValue("");
  };
  return (
    <div className="container container-items">
      <form onSubmit={productDetails}>
        <label htmlFor="pName">Medicine Name</label>
        <input
          type="text"
          id="pName"
          required
          className="ms-1 me-1"
          value={nameValue}
          onChange={nameFn}
        ></input>

        <label htmlFor="pUsedFor">Medicine Used For</label>
        <input
          type="text"
          id="pUsedFor"
          required
          className="ms-1 me-1"
          value={discrptionValue}
          onChange={dispcriptionFn}
        ></input>

        <label htmlFor="pPrice">Price</label>
        <input
          placeholder="₹"
          type="number"
          id="pPrice"
          required
          min="1"
          className="ms-1 me-1"
          value={priceValue}
          onChange={priceFn}
        ></input>

        <label htmlFor="pQuantity">Quantity</label>
        <input
          type="number"
          id="pQuantity"
          required
          min="0"
          className="ms-1 me-1"
          value={quantityValue}
          onChange={quantityFn}
        ></input>

        <div className="col-md-12 btn">
          <button type="submit" className="btn-inside">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
