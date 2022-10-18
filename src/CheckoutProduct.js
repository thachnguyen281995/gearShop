import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct" key={id}>
      <img src={image} alt="" className="checkoutProduct__image" />

      {/* <div className="checkoutProduct__info"> */}
      <p className="checkoutProduct__title">{title}</p>
      <p className="checkoutProduct__price">
        {/* <strong>{price}</strong> */}
        <CurrencyFormat
          renderText={(price) => (
            <>
              <strong>{price}₫</strong>
            </>
          )}
          decimalScale={2}
          value={price}
          displayType={"text"}
          thousandSeparator={true}
        />
      </p>
      <div className="checkoutProduct__rating" key={id}>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </div>
      <button className="btn-payment" onClick={removeFromBasket}>
        Xóa
      </button>
      {/* </div> */}
    </div>
  );
}

export default CheckoutProduct;
