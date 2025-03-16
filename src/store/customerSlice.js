import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/customers";

export const fetchCustomers = createAsyncThunk("customers/fetch", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addCustomer = createAsyncThunk("customers/add", async (customer) => {
  const response = await axios.post(API_URL, customer);
  return response.data;
});

export const deleteCustomer = createAsyncThunk("customers/delete", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const customerSlice = createSlice({
  name: "customers",
  initialState: { data: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.fulfilled, (state, action) => { state.data = action.payload; })
      .addCase(addCustomer.fulfilled, (state, action) => { state.data.push(action.payload); })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.data = state.data.filter((customer) => customer.id !== action.payload);
      });
  }
});

export default customerSlice.reducer;
