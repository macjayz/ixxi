import { useState, useContext } from "react";

import { WishContext } from "../contexts/WishContext";
import { CartContext } from "../contexts/CartContext";

import { BsTrash } from "react-icons/bs";

export default function WishListItem({ item }) {
  const { setSavedItems, savedItems } = useContext(WishContext);
  const { cart, setCart } = useContext(CartContext);
  const [size, setSize] = useState("");

  const getDiscountPrice = () => {
    if (!item.discount) return item.original_price;

    let discount_price =
      item.original_price - (item.discount / 100) * item.original_price;
    return discount_price;
  };

  const bagItem = () => {
    setCart((prev) => {
      return [...prev, item];
    });
    console.log(cart);
    removeItem();
  };

  const removeItem = () => {
    const removeItem = item.id;
    setSavedItems(
      savedItems.filter((item) => {
        return item.id !== removeItem;
      })
    );
  };

  const handleSize = (event) => {
    const ITEM_ID = item.id;

    const value = event.target.value;
    const newItems = savedItems.map((item) => {
      if (item.id === ITEM_ID) {
        return { ...item, size: value, order_price: getDiscountPrice() };
      }

      return item;
    });

    setSavedItems(newItems);
    setSize(value);
  };

  return (
    <section className="wishlist__item">
      <img
        src={item.preview}
        alt="Product"
      />

      <h2>{item.name}</h2>

      <section className="wishlist__item--product-price">
        {item.discount ? (
          <>
            <span className="wishlist__item--product-price-discount">
              ${getDiscountPrice()}
            </span>
            <span className="wishlist__item--product-price-original wishlist__item--product-price-original--inactive">
              ${item.original_price}
            </span>
          </>
        ) : (
          <span className="wishlist__item--product-price-original wishlist__item--product-price-original--active">
            ${item.original_price}
          </span>
        )}
      </section>

      <section className="wishlist__item--product-color">
        {item.product_color}
      </section>

      <section className="wishlist_item--product-size">
        <select name="size" id="size" onChange={handleSize}>
          {size ? "" : <option value="">Select size</option>}
          {item.product_sizes.map((size) => {
            return (
              <option key={size} value={size}>
                {size}
              </option>
            );
          })}
        </select>
      </section>

      <section className="wishlist__item--product-buttons">
        {size ? (
          <button
            className="wishlist__item--product-button-active"
            onClick={bagItem}
          >
            MOVE TO BAG
          </button>
        ) : (
          <button className="wishlist__item--product-button-inactive">
            MOVE TO BAG
          </button>
        )}
      </section>

      <section className="wishlist__item--product-cta">
        <span></span>
        <button
          className="wishlist__item--product-cta-icon"
          onClick={removeItem}
        >
          <BsTrash size={24} />
        </button>
      </section>
      
    </section>
  );
}
