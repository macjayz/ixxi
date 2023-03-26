import DashboardCard from "../../components/account/DashboardCard";

import { BsBox2, BsMap, BsSuitHeart, BsPeople } from "react-icons/bs";
import { TfiWrite, TfiPowerOff } from "react-icons/tfi";
import { Link } from "react-router-dom";

export default function Account() {
  const username = "somtodev";
  const ICON_SIZE = 24;

  return (
    <section className="account__page">
      <section className="account__page--context">
        <p>
          Hello {username} (not {username}?{" "}
          <Link to={"/my-account/logout"}>Log Out</Link>)
        </p>
        <p>
          From your account dashboard you can view your recent orders, manage
          your shipping and billing addresses, and edit your password and
          account details.
        </p>
      </section>

      <section className="dashboard__cards">
        <DashboardCard
          path={"/my-account/orders"}
          icon={<BsBox2 size={ICON_SIZE} />}
          name={"Orders"}
        />
        <DashboardCard
          path={"/my-account/addresses"}
          icon={<BsMap size={ICON_SIZE} />}
          name={"Addresses"}
        />
        <DashboardCard
          path={"/my-account/details"}
          icon={<TfiWrite size={ICON_SIZE} />}
          name={"Account Details"}
        />

        <DashboardCard
          path={"/wishlist"}
          icon={<BsSuitHeart size={ICON_SIZE} />}
          name={"Wishlist"}
        />

        <DashboardCard
          path={"/my-account/social-accounts"}
          icon={<BsPeople size={ICON_SIZE} />}
          name={"Social Accounts"}
        />

        <DashboardCard
          path={"/my-account/logout"}
          icon={<TfiPowerOff size={ICON_SIZE} />}
          name={"Logout"}
        />
      </section>
    </section>
  );
}
