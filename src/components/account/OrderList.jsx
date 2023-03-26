import Order from "./Order";

export default function OrderList({ orders }) {
  return orders ? <AllOrders orders={orders} /> : <NoOrders />;

  function NoOrders() {
    return <p>No Order Placed</p>;
  }

  function AllOrders() {
    return orders.map((order) => {
      return <Order key={order.id} order={order} />;
    });
  }
}
