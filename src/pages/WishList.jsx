import { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/wishlist.css";

import { WishContext } from "../contexts/WishContext";

import { BsHeart } from "react-icons/bs";

import WishListItem from "../components/WishListItem";
import PageBanner from "../components/common/PageBanner";

export default function WishList() {
  const { savedItems } = useContext(WishContext);

  const orderItems = (event) => {
    const filter = event.target.value;

    switch (filter) {
      case "expiring":
        showExpiringItems();
        break;
      case "brand_az":
        showAscndItems();
        break;
      default:
        alert("Sorting");
    }
  };

  const showExpiringItems = () => {};

  const showAscndItems = () => {};

  return (
    <>
      <PageBanner pageName={"Wishlist"}>
        <Link to={"./wishlist"}>Wishlist</Link>
        <Link to="/cart">Cart</Link>
      </PageBanner>

      <section className="container wishlist">
        {savedItems.length > 0 ? (
          <>
          <WishListHeader/>
          <section className="wishlist__items">
            {savedItems.map((item) => {
              return <WishListItem key={item.id} item={item} />;
            })}
          </section>
          </>
        ) : (
          <NoSavedItems />
        )}
      </section>
    </>
  );

  function WishListHeader() {
    return (
      <section className="wishlist__header">
        <select onChange={orderItems}>
          <option value="expiring">Expiring Soonest</option>
          <option value="recent_discount">Recently Discounted</option>
          <option value="perc_discount">% Discount</option>
          <option value="price_htl">Price: high to low</option>
          <option value="price_lth">Price: low to high</option>
          <option value="brand_az">Brand: A-Z</option>
          <option value="brand_za">Brand: Z-A</option>
        </select>
        <span>{savedItems.length} items</span>
      </section>
    );
  }

  function NoSavedItems() {
    return (
      <section className="no__items">
        <BsHeart size={36} color={"red"} />
        <p>You have no saved items</p>
        <Link to="/my-account">
          <button>RETURN TO SHOP</button>
        </Link>
      </section>
    );
  }
}
