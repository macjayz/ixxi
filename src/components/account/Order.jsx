import { Link } from "react-router-dom";

export default function Order({ order }) {
  return (
    <section className="order__item">
      <section className="order__item--header">
        <h1>Order Date: 7 Aug 2023</h1>
        <Link to={`/my-account/orders/${order.id}`}>
          <button>View Details</button>
        </Link>
      </section>
      <img
        src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/c_pad,dpr_1.0,f_auto,h_265,q_auto,w_265/media/catalog/product/M/J/158907_1619198684.jpg"
        alt="Product"
      />
      <hr />
    </section>
  );
}
