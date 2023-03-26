import "../../styles/common.css";
export default function PageBanner({ pageName, children }) {
  return (
    <section className="page__banner">
      <section className="container page__banner--container">
        <h1 className="page__banner--name">{pageName}</h1>
        <span className="page__banner--links">
          <a href="/">Home</a>
          {
            children
          }
        </span>
      </section>
    </section>
  );
}
