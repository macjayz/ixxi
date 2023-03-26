import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";

export default function AccountPageBar({ icon, name, children }) {
  return (
    <>
      <section className="account_bar">
        <section className="account_bar__icons">
          <Link className="account_bar__link" to={"/my-account"}>
            <span>
              <MdArrowBackIosNew size={18} />
            </span>
            <h2>{icon}</h2>
          </Link>
          <h2 className="account_bar__hide">{icon}</h2>
        </section>

        <section className="account_bar__text">
          <h2>{name}</h2>
        </section>
      </section>

      <section className="account_page__content">{children}</section>
    </>
  );
}
