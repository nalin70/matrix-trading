import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../store/customerSlice";

const CustomerForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    dispatch(addCustomer({ name, email }));
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4 bg-white p-6 rounded shadow-md">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
        required
      />
      <button
        type="submit"
        className="button-primary"
      >
        Add Customer
      </button>
    </form>
  );
};

export default CustomerForm;