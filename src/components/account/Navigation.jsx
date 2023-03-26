import { NavLink } from "react-router-dom";

import {
  BsPerson,
  BsBox2,
  BsGift,
  BsMap,
  BsSuitHeart,
  BsPeople,
  BsTicketPerforated
} from "react-icons/bs";
import { TfiWrite, TfiPowerOff } from "react-icons/tfi";

export default function Navigation() {
  const ICON_SIZE = 16;

  const logOut = () => {
    console.log("logging out");
  };

  return (
    <section className="account__links">
      <NavLink
        exact
        to={"/my-account/"}
        activeClassName="account__link--active"
        className="account__link"
      >
        <span>
          <BsPerson size={ICON_SIZE} />
        </span>
        <span>Dashboard</span>
      </NavLink>
      <NavLink
        exact
        to={"/my-account/orders"}
        activeClassName="account__link--active"
        className="account__link"
      >
        <span>
          <BsBox2 size={ICON_SIZE} />
        </span>
        <span>Orders</span>
      </NavLink>

      <NavLink
        to={"/my-account/addresses"}
        activeClassName="account__link--active"
        className="account__link"
      >
        <span>
          <BsMap size={ICON_SIZE} />
        </span>
        <span>Addresses</span>
      </NavLink>

      <NavLink
        exact
        to={"/my-account/my-details"}
        activeClassName="account__link--active"
        className="account__link"
      >
        <span>
          <TfiWrite size={ICON_SIZE} />
        </span>
        <span>Account Details</span>
      </NavLink>

      <NavLink
        exact
        to={"/wishlist"}
        activeClassName="account__link--active"
        className="account__link"
      >
        <span>
          <BsSuitHeart size={ICON_SIZE} />
        </span>
        <span>Wishlist</span>
      </NavLink>

      <NavLink
        exact
        to={"/my-account/gift-cards-and-vouchers"}
        activeClassName="account__link--active"
        className="account__link"
      >
        <span>
          <BsTicketPerforated size={ICON_SIZE} />
        </span>
        <span>Vouchers</span>
      </NavLink>

      <NavLink
        exact
        to={"/my-account/social-accounts"}
        activeClassName="account__link--active"
        className="account__link"
        onClick={logOut}
      >
        <span>
          <BsPeople size={ICON_SIZE} />
        </span>
        <span>Social Accounts</span>
      </NavLink>

      <NavLink
        exact
        to={"/my-account/logout"}
        activeClassName="account__link--active"
        className="account__link"
        onClick={logOut}
      >
        <span>
          <TfiPowerOff size={ICON_SIZE} />
        </span>
        <span>Logout</span>
      </NavLink>
    </section>
  );
}
