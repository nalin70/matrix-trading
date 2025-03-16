import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCustomers } from "../store/customerSlice";
import CustomerForm from "../components/CustomerForm";
import CustomerList from "../components/CustomerList";

const CustomerManagement = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Customer Management</h2>
      <CustomerForm />
      <CustomerList />
    </div>
  );
};

export default CustomerManagement;
