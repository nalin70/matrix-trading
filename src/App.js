import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import CustomerManagement from "./pages/CustomerManagement";
import CustomerStats from "./pages/CustomerStats";
import { Provider } from "react-redux";
import store from "./store/store";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<CustomerManagement />} />
              <Route path="/stats" element={<CustomerStats />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;