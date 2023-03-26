import OrderList from "../../components/account/OrderList";
import "../../styles/orders.css";

export default function Orders() {
  const orders = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
  ];

  return (
    <section className="account__page orders">
      <h1>Orders</h1>
      <hr />
      <section className="order__list">
        {/* <OrderList  />  */}
        <OrderList orders={orders} />
      </section>
    </section>
  );
}
