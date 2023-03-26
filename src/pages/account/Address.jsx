import AddressCard from "../../components/account/AddressCard";

export default function Address() {
  return (
    <section className="account__page">
      <p>
        The following addresses will be used on the checkout page by default.
      </p>
      <AddressCard type={"Billing"} />
      <AddressCard type={"Shipping"} />
    </section>
  );
}
