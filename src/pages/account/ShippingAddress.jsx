import "../../styles/address.css";

export default function ShippingAddress() {
  return (
    <section className="account__page address">
      <h1>Shipping Address</h1>

      <form className="multi__form" onSubmit={handleSubmit}>
        <section className="input__group input__group--two">
          <section className="form__input">
            <label htmlFor="fname">First name*</label>
            <input type="text" name="" id="" />
          </section>
          <section className="form__input">
            <label htmlFor="lname">Last name*</label>
            <input type="text" name="" id="" />
          </section>
        </section>

        <section className="input__group">
          <section className="form__input">
            <label htmlFor="companyname">Company name(optional)</label>
            <input type="text" name="" id="" />
          </section>
        </section>

        <section className="input__group">
          <section className="form__input">
            <label htmlFor="country">Country / Region</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Select a country / region"
            />
          </section>
        </section>

        <section className="input__group">
          <section className="form__input">
            <label htmlFor="country">Street address</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="House number and street name"
            />
          </section>
          <section className="form__input">
            <input
              type="text"
              name=""
              id=""
              placeholder="Apartment, Suite, Unit, etc.(optional)"
            />
          </section>
        </section>

        <section className="input__group">
          <section className="form__input">
            <label htmlFor="country">Town / City</label>
            <input type="text" name="" id="" />
          </section>
        </section>

        <section className="input__group">
          <section className="form__input">
            <label htmlFor="country">State*</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Select an option..."
            />
          </section>
        </section>

        <section className="input__group">
          <section className="form__input">
            <label htmlFor="country">Phone*</label>
            <input type="tel" name="" id="" />
          </section>
        </section>

        <section className="input__group">
          <section className="form__input">
            <label htmlFor="country">Email address*</label>
            <input type="email" name="" id="" />
          </section>
        </section>

        <button type="submit">SAVE ADDRESS</button>
      </form>
    </section>
  );

  function handleSubmit() {}
}
