export default function AccountDetails() {
  return (
    <section className="account__page address">
      <form className="multi__form" onSubmit={handleSubmit}>
        <section className="input__group">
          <section className="form__input">
            <label htmlFor="lname">First name *</label>
            <input type="text" name="" id="" />
          </section>
        </section>

        <section className="input__group">
          <section className="form__input">
            <label htmlFor="lname">Last name *</label>
            <input type="text" name="" id="" />
          </section>
        </section>

        <section className="input__group">
          <section className="form__input">
            <label htmlFor="lname">Display name *</label>
            <input type="text" name="" id="" />
          </section>
        </section>

        <section className="input__group">
          <section className="form__input">
            <label htmlFor="lname">Email address *</label>
            <input type="email" name="" id="" />
          </section>
        </section>

        <section className="input__group">
          <section className="form__input">
            <label htmlFor="lname">
              Current Password(leave blank to leave unchanged)
            </label>
            <input type="password" name="" id="" />
          </section>
        </section>

        <section className="input__group">
          <section className="form__input">
            <label htmlFor="lname">
              New Password(leave blank to leave unchanged)
            </label>
            <input type="password" name="" id="" />
          </section>
        </section>

        <section className="input__group">
          <section className="form__input">
            <label htmlFor="lname">Confirm new password</label>
            <input type="password" name="" id="" />
          </section>
        </section>

        <button type="submit">
            Save Changes
        </button>
        
      </form>
    </section>
  );

  function handleSubmit() {}
}
