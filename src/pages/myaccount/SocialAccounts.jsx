import React, { useEffect } from "react";

import { BiIdCard } from "react-icons/bi";

import AccountInfoBar from "../../components/myaccount/AccountInfoBar";
import AccountPageBar from "../../components/myaccount/AccountPageBar";
import Navigation from "../../components/myaccount/Navigation";
import Footer from "../../components/Footer";

export default function SocialAccounts() {
  useEffect(() => {
    document.title = "Social accounts | IXIX";
  }, []);
  return (
    <>
      <section className="account__page">
        <AccountInfoBar />
        <section className="account__content">
          <Navigation />
          <section className="account_page">
            <AccountPageBar
              name={"Social Accounts"}
              icon={<BiIdCard className="icons" />}
            />
          </section>
        </section>
      </section>
      <Footer/>
    </>
  );
}
