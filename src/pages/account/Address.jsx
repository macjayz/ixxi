import Footer from "../../components/Footer";
import AddressCard from "../../components/account/AddressCard";
import Socials from "../../components/women/Socials";

export default function Address() {
  return (
    <section className="account__page">
      <p>
        The following addresses will be used on the checkout page by default.
      </p>
      <AddressCard type={"Billing"} />
      <AddressCard type={"Shipping"} />
      <Socials/>
      <Footer/>
    </section>
  );
}
