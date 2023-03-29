import { useContext } from "react";

// import { BsTrash } from "react-icons/bs";

import { CartContext } from "../contexts/CartContext";

export default function CartItem({ item }) {
  const { cart, setCart } = useContext(CartContext);

  const removeItem = () => {
    const ITEM_ID = item.id;
    setCart(
      cart.filter((item) => {
        return item.id !== ITEM_ID;
      })
    );
  };

  return (
    <section className="cart__item" key={item.id}>
      <section className="cart__item--image">
        <img src={item.preview} alt={item.name} />
      </section>
      <section className="cart__item--details">
        <section>
          <section>
            <h1>{item.name}</h1>
            <span>{item.order_price}</span>
            <br />

            <select>
              <option value={item.size}>{item.size}</option>
              {item.product_sizes.map((size) => {
                if (size !== item.size)
                  return <option value={size}>{size}</option>;
              })}
            </select>
          </section>
        </section>
        <button onClick={removeItem}>X</button>
      </section>
    </section>
  );
}
