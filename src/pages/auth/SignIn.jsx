import { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/auth.css";

import SocialMedia from "../../components/auth/SocialMedia";
import AuthLocation from "../../components/auth/AuthLocation";

function SignIn() {

  const [Data, setData] = useState({
    email: '',
    password: ''
  })

  const onChange = (event) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Signing In");
    console.table(Data);
  }

  return (
    <main>
      <h1>IXXI</h1>
      
      <section className="auth-container">

        <AuthLocation tab={2} />

        {/* Sign In Form */}

        <form className="container" onSubmit={handleSubmit}>

          {/* Email Address */}
          <section className="form-group">
            <label htmlFor="id" className="form-group__label">
              Email Address:{" "}
            </label>
            <br />
            <input type="email" id="email" name="email" onChange={onChange} />
          </section>

          {/* Password */}
          <section className="form-group">
            <label htmlFor="id" className="form-group__label">
              Password:
            </label>
            <br />
            <input type="password" id="password" name="password" onChange={onChange} />
          </section>

          <button type="submit">
            SIGN IN
          </button>

          <Link>Forgot Password?</Link>

        </form>

        <h1 className="social__header">OR SIGN IN WITH...</h1>
        <SocialMedia />
      </section>
    </main>
  );
  
}

export default SignIn;
