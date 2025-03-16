// filepath: c:\Users\dewan\Desktop\New folder\my-app\src\components\Sidebar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`flex flex-col ${isOpen ? "w-64" : "w-20"} bg-gray-800 text-white h-screen transition-width duration-300`}>
      <button onClick={() => setIsOpen(!isOpen)} className="p-4 focus:outline-none">
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
      <nav className="flex flex-col mt-4">
        <Link to="/" className={`p-4 hover:bg-gray-700 ${!isOpen && "text-center"}`}>{isOpen ? "Customer Management" : "CM"}</Link>
        <Link to="/stats" className={`p-4 hover:bg-gray-700 ${!isOpen && "text-center"}`}>{isOpen ? "Customer Stats" : "CS"}</Link>
      </nav>
    </div>
  );
};

export default Sidebar;