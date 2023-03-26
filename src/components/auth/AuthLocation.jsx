import React from "react";
import { Link } from "react-router-dom";

function AuthLocation({ tab }) {
  const condition = tab === 1
  const hoverClass = condition ? 'auth-menu__left':'auth-menu__right'
  return (
    <section className={`container auth-menu + ${hoverClass}`}>
        <ul>
            <li><Link to='/auth/signUp'>JOIN</Link></li>
            <li><Link to='/auth/signIn'>SIGN IN</Link></li>
        </ul>
    </section>
  );
}

export default AuthLocation;
