
import "../../styles/account.css";

import Navigation from "../../components/myaccount/Navigation";
import AccountInfoBar from "../../components/myaccount/AccountInfoBar";

export default function Account() {
  return (
    <section className="account space">
      <AccountInfoBar/>
      <section className="account__content">
        <Navigation />
        <section className="account__design">
          <h1>Welcome to your account</h1>
        </section>
      </section>
    </section>
  );
}
