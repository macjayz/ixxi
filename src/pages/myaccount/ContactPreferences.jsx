import React, { useEffect } from "react";

import { BiIdCard } from "react-icons/bi";

import AccountInfoBar from "../../components/myaccount/AccountInfoBar";
import AccountPageBar from "../../components/myaccount/AccountPageBar";
import Navigation from "../../components/myaccount/Navigation";

export default function ContactPreferences() {

  useEffect(() => {
    document.title = "Contact preference | IXIX";
  }, []);

  return (
    <>
      <section className="account__page">
        <AccountInfoBar />
        <section className="account__content">
          <Navigation />
          <section className="account_page">
            <AccountPageBar
              name={"Contact Preference"}
              icon={<BiIdCard className="icons" />}
            />
          </section>
        </section>
      </section>
    </>
  );
}
