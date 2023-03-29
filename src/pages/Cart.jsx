import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

import "../styles/cart.css";

import PageBanner from "../components/common/PageBanner";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Socials from "../components/women/Socials";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <PageBanner pageName={"Cart"}>
        <Link to="/cart">Cart</Link>
        <Link to="/wishlist">Wishlist</Link>
      </PageBanner>
      <section className="container cart">
        <section className="cart__items">
          <section className="cart__items--header">
            <h1>Cart({cart.length})</h1>
          </section>
          {cart.map((item) => {
            return <CartItem item={item} />;
          })}
        </section>
        <section className="cart__checkout">
          <h1>Checkout</h1>
        </section>
      </section>
      <Socials/>
      <Footer/>
    </>
  );
}
