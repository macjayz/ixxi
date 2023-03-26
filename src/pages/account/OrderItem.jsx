import { useParams } from "react-router-dom";

export default function OrderItem() {
  const { id } = useParams();

  const order = {
    items: [
      {
        name: "",
        price: "",
        quantity: "",
      },
    ],
    status: "Shipped",
  };

  return (
    <section className="account__page orders">
      <h1>Order Details</h1>
      <hr />

      <section className="list">
        <section className="list__item list--header list--horizontal">
          <h3>Order Information</h3>
          <button className="list__item--button">Track Order</button>
        </section>

        <section className="list__item list--horizontal">
          <h3>Order Number</h3>
          <h3>{id}</h3>
        </section>

        <section className="list__item list--horizontal">
          <h3>Order Date</h3>
          <h3>{`${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`}</h3>
        </section>

        <section className="list__item list--horizontal">
          <h3>Delivery Fee</h3>
          <h3>$10</h3>
        </section>

        <section className="list__item list--horizontal">
          <h3>Total Amount</h3>
          <h3>$2000</h3>
        </section>
      </section>

      <section className="list">
        <section className="list__item list--header list--horizontal">
          <h3>Items Order</h3>
          <button className="list__item--button list__item--button-colored">
            {order.status}
          </button>
        </section>

        <section className="order__details">
          <section className="order__detail">
            <img
              src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/c_pad,dpr_1.0,f_auto,q_auto/media/catalog/product/K/B/82344_1633797286.jpg"
              alt=""
            />
            <section className="order__detail--details">
              <h4>Product Name</h4>
              <h5>
                <span>$100</span>
              </h5>
              <h6>Quantity: {1}</h6>
            </section>
            <button>Buy Again</button>
          </section>
        </section>
      </section>
    </section>
  );
}
