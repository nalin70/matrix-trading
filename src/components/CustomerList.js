import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer } from "../store/customerSlice";

const CustomerList = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers.data);

  return (
    <ul className="mt-4">
      {customers.map((customer) => (
        <li key={customer.id} className="flex justify-between border-b p-2">
          <span>{customer.name} ({customer.email})</span>
          <button
            onClick={() => dispatch(deleteCustomer(customer.id))}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CustomerList;
