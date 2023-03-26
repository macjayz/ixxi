import React, { useEffect } from "react";

import { BiIdCard } from "react-icons/bi";

import AccountInfoBar from "../../components/myaccount/AccountInfoBar";
import AccountPageBar from "../../components/myaccount/AccountPageBar";
import Navigation from "../../components/myaccount/Navigation";

export default function Payment() {

  useEffect(() => {
    document.title = "Payment Methods | IXIX";
  }, []);
  
  return (
    <>
      <section className="account__page">
        <AccountInfoBar />
        <section className="account__content">
          <Navigation />
          <section className="account_page">
            <AccountPageBar
              name={"PAYMENT METHODS"}
              icon={<BiIdCard className="icons" />}
            />
          </section>
        </section>
      </section>
    </>
  );
}
