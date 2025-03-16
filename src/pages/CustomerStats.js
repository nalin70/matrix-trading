import React from "react";
import { useSelector } from "react-redux";

const CustomerStats = () => {
  const customers = useSelector((state) => state.customers.data);
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Customer Statistics</h2>
      <p>Total Customers: {customers.length}</p>
    </div>
  );
};

export default CustomerStats;
