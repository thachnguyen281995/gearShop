import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CurrencyFormat from "react-currency-format";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product" key={id}>
      <div className="product__info">
        <h3 className="title">{title}</h3>
        <p className="product__price">
          <small></small>
          {/* <strong>{price}</strong> */}
          <CurrencyFormat 
                renderText = {(price) => (
                    <>
                        <strong>{price}₫</strong>
                        
                    </>
                )}
                decimalScale={3}
                value={price}
                displayType={"text"}
                thousandSeparator={true}
            />
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} />

      <button className="btn-product" onClick={addToBasket}>
        <ShoppingCartIcon fontSize="medium" className="btn-cart" />
        Thêm vào giỏ hàng
      </button>
    </div>
  );
}

export default Product;
