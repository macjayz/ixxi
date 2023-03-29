import "../styles/account.css";

import Navigation from "../components/account/Navigation";

export default function AccountLayout({ children }) {
  return (
    <section className="container account__layout">
      <section className="account__layout--page">
        <Navigation />
        <section className="account__layout--content">{children}</section>
      </section>
    </section>
  );
}
