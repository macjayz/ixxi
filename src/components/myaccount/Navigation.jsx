import React from "react";
import Greeting from "./Greeting";
import NavItem from "./NavItem";
import { BsPerson, BsPeople, BsGift } from "react-icons/bs";
import { TfiPackage, TfiHome, TfiCreditCard } from "react-icons/tfi";
import { TbMessage } from "react-icons/tb";
import { VscSignOut, VscInfo } from "react-icons/vsc";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { BiIdCard } from "react-icons/bi";

export default function Navigation() {
  return (
    <aside className="account_nav">
      <Greeting />
      <NavItem icon={<BsPerson />} name={"Account Details"} main={true} />

      <section className="account_nav__list">
        <NavItem icon={<TfiPackage />} name={"My Orders"} path="orders" />
        <NavItem
          icon={<BiIdCard />}
          name={"My Details"}
          path="my-details"
          line={true}
        />
        <NavItem
          icon={<TfiHome />}
          name={"Address Book"}
          path="addresses"
          line={true}
        />
        <NavItem
          icon={<TfiCreditCard />}
          name={"Payment Methods"}
          path="payment-methods"
          line={true}
        />
        <NavItem
          icon={<TbMessage />}
          name={"Contact Preferences"}
          path="contact-preferences"
          line={true}
        />
        <NavItem
          icon={<BsPeople />}
          name={"Social accounts"}
          path="social-accounts"
        />
      </section>

      <NavItem icon={<BsGift />} name={"Gift cards & vouchers"} />

      <section className="account_nav__list">
        <NavItem icon={<VscInfo />} name={"Need help?"} line={true} />
        <NavItem
          icon={<RiQuestionAnswerLine />}
          name={"Where's my order?"}
          line={true}
        />
        <NavItem
          icon={<RiQuestionAnswerLine />}
          name={"How do I make a return?"}
          line={true}
        />
        <NavItem
          icon={<RiQuestionAnswerLine />}
          name={"I need a new returns note"}
        />
      </section>

      <NavItem icon={<VscSignOut />} name={"Sign Out"} />
    </aside>
  );
}
