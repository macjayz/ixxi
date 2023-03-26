import React from "react";

import { BiIdCard } from "react-icons/bi";

import AccountInfoBar from "../../components/myaccount/AccountInfoBar";
import AccountPageBar from "../../components/myaccount/AccountPageBar";
import Navigation from "../../components/myaccount/Navigation";

export default function Address() {
  return (
    <>
      <section className="account__page">
        <AccountInfoBar />
        <section className="account__content">
          <Navigation />
          <section className="account_page">
            <AccountPageBar
              name={"Address Book"}
              icon={<BiIdCard className="icons" />}
            />
          </section>
        </section>
      </section>
    </>
  );
}
