import React from "react";

import { Link } from "react-router-dom";

export default function DashboardCard({ path, name, icon }) {
  return (
    <Link to={path} className="dashboard__card">
      <span>{icon}</span>
      <h3>{name}</h3>
    </Link>
  );
}
