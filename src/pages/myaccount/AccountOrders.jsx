import React from "react";

import { TfiPackage } from "react-icons/tfi";

import AccountInfoBar from "../../components/myaccount/AccountInfoBar";
import AccountPageBar from "../../components/myaccount/AccountPageBar";
import Navigation from "../../components/myaccount/Navigation";

export default function AccountOrders() {
  return (
    <>
    <section className="account__page">
      <AccountInfoBar/>
      <section className="account__content">
        <Navigation />
        <section className="account_page">
          <AccountPageBar
            name={"My Orders"}
            icon={<TfiPackage className="icons" />}
          />
        </section>
      </section>
    </section>
    
    <section className="account space account__page">
      
    </section>
    </>
  );
}
