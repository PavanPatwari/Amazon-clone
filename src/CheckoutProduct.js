import React from 'react';
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id, title, price, rating, image}) {

  const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
      //remove item from Basket
      dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
      });
    };

  return (
    <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} alt="" />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title"> {title} </p>
          <p className="checkoutproduct__price">
          <small>₹</small>
          <strong>{price}</strong>
          </p>
          <div className="checkoutproduct__rating">
              {
                Array(rating)
                .fill()
                .map((_) => (
                  <p>⭐</p>
                ))
              }
          </div>
          <button onClick={removeFromBasket}> Remove From cart </button>
        </div>
    </div>
  );
}

export default CheckoutProduct;
