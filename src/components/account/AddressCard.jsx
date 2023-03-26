import { Link } from "react-router-dom";

export default function AddressCard({ type }) {

  let ENDPOINT = '/api/auth/my-account/address/billing'


  return (
    <section className="address__card">
      <section className="address__card--head">
        <h3>{type} Address</h3>
        <Link to={`/my-account/addresses/edit-address/${type.toLowerCase()}`}>Edit</Link>
      </section>
      <section>
        {!ENDPOINT ? <ul>
            <li>Full Name</li>
            <li>Street Address</li>
            <li>City</li>
            <li>State</li>
            <li>Country</li>
        </ul> : <p>You have not set up this type of address yet.</p>}
      </section>
    </section>
  );
}
