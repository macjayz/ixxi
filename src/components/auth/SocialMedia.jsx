import React from "react";

function SocialMedia({ subTitle }) {
  return (
    <>
      <section className="social">
        <button className="social__button">
          <img src="https://cdn.simpleicons.org/Google" alt="Google" />
          <span>Google</span>
        </button>
        <button className="social__button">
        <img src="https://cdn.simpleicons.org/Facebook" alt="Facebook" />
          <span>Facebook</span>
        </button>
      </section>
      <p className="social__text">{subTitle}</p>
    </>
  );
}

export default SocialMedia;
