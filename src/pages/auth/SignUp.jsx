import { useState } from "react";
import { useHistory } from "react-router-dom";

import SocialMedia from "../../components/auth/SocialMedia";
import AuthLocation from "../../components/auth/AuthLocation";

import "../../styles/auth.css";

function SignUp() {
  let history = useHistory();

  const [Data, setData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    date: "",
  });

  const onChange = (event) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Signing Up");
    console.table(Data);

    setTimeout(() => {
      history.push('/my-account')
    }, 1000);
  }

  return (
    <main>
      <h1>IXXI</h1>
      <section className="auth-container">
        <AuthLocation tab={1} />

        <h1 className="social__header">SIGN UP WITH...</h1>

        <SocialMedia
          subTitle={`Signing up with social is super quick. No extra passwords to remember - no brain fail. Don't worry, we'd never share any of your data or post anything on your behalf #notevil`}
        />

        <h1 className="social__header">OR SIGN UP WITH EMAIL</h1>

        <form className="container" onSubmit={handleSubmit}>
          <section className="form-group">
            <label htmlFor="id" className="form-group__label">
              Email Address:
            </label>
            <br />
            <input type="text" id="email" name="email" onChange={onChange} />
          </section>

          <section className="form-group">
            <label htmlFor="id" className="form-group__label">
              First Name:
            </label>
            <br />
            <input type="text" id="fName" name="fName" onChange={onChange} />
          </section>

          <section className="form-group">
            <label htmlFor="id" className="form-group__label">
              Last Name:
            </label>
            <br />
            <input type="text" id="lName" name="lName" onChange={onChange} />
          </section>

          <section className="form-group">
            <label htmlFor="id" className="form-group__label">
              Password:
            </label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              onChange={onChange}
            />
          </section>

          {/* Date Of Birth */}
          <section className="form-group">
            <label htmlFor="dob">DATE OF BIRTH : </label>
            <input type="date" name="date" id="date" onChange={onChange} />
          </section>

          {/* Radio Input */}
          <section className="form-group">
            <label htmlFor="dob">MOST INTERESTED IN : </label>
            <section className="radio-group">
              <section className="label-group">
                <input type="radio" name="choice" id="choice" />
                <label htmlFor="choice">Womenswear</label>
              </section>
              <section className="label-group">
                <input type="radio" name="choice" id="choice" />
                <label htmlFor="choice">Menswear</label>
              </section>
            </section>
          </section>

          {/* Contact Preference */}

          <section className="contact__preference" onSubmit={handleSubmit}>
            {/* Contact Preference Header */}
            <section className="contact__header">
              <section>
                <h3>Contact preferences</h3>
                <p>Tell us which emails you'd like:</p>
              </section>
              <button type="button">SELECT ALL</button>
            </section>

            {/* Contact Preference CheckBoxes */}
            <section className="checkbox">
              <section className="checkbox__item">
                <label htmlFor="">Discount and sales</label>
                <input type="checkbox" name="" id="" />
              </section>
              <section className="checkbox__item">
                <label htmlFor="">New Stuff</label>
                <input type="checkbox" name="" id="" />
              </section>
              <section className="checkbox__item">
                <label htmlFor="">Your Exculsives</label>
                <input type="checkbox" name="" id="" />
              </section>
            </section>

            <button type="submit">JOIN NOW</button>
          </section>
        </form>
      </section>
    </main>
  );
}

export default SignUp;
