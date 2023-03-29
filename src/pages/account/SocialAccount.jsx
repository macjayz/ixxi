import Footer from "../../components/Footer";
import Socials from "../../components/women/Socials";
import "../../styles/social.css";
export default function SocialAccount() {
  return (
    <section className="account__page address">
      <h1>Social Accounts</h1>
      <p>Use your social media accounts to make it even easier to log in.</p>
      <hr />

      <section className="social__account">
        <img
          className="social__account--image"
          src="https://cdn.simpleicons.org/Google"
          alt="Google"
        />
        <section className="social__account--info">
          <section>
            <h2>Google</h2>
            <button>DISCONNECT</button>
          </section>
          <p>You are using this account to sign in.</p>
        </section>
      </section>

      <section className="social__account">
        <img
          className="social__account--image"
          src="https://cdn.simpleicons.org/Facebook"
          alt="Google"
        />
        <section>
          <section>
            <h2>Facebook</h2>
            <button className="social__button--disconnect">CONNECT</button>
          </section>
        </section>
      </section>
      <Socials/>
      <Footer/>
    </section>
  );
}
