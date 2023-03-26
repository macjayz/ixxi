import { Link } from "react-router-dom";

export default function NavItem({ icon, name, path, line, main}) {
  const addedClass = line ? "line" : "";

  return (
    <Link to={`${path ? `${"/my-account/" + path}` : "/my-account/"}` } className={main ? 'main__link' : ''}>
      <section className={`account_nav__item ${addedClass}`}>
        <span>{icon}</span>
        <span>{name}</span>
      </section>
    </Link>
  );
}
