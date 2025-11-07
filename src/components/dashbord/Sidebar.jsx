import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingBag, Users, Settings, LogOut, Menu } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "Products", path: "/dashboard/products", icon: <ShoppingBag size={20} /> },
    { name: "Users", path: "/dashboard/users", icon: <Users size={20} /> },
    { name: "Settings", path: "/dashboard/settings", icon: <Settings size={20} /> },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-gray-900 text-white h-screen p-4 flex flex-col transition-all duration-300`}
    >
      {/* Top section */}
      <div className="flex items-center justify-between mb-8">
        <h1 className={`text-xl font-bold ${!isOpen && "hidden"}`}>Blinkit Admin</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          <Menu size={22} />
        </button>
      </div>

      {/* Menu items */}
      <ul className="flex-1 space-y-3">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 transition ${
                location.pathname === item.path ? "bg-gray-800" : ""
              }`}
            >
              {item.icon}
              <span className={`${!isOpen && "hidden"} text-sm font-medium`}>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Bottom actions */}
      <div className="border-t border-gray-700 pt-4">
        <button className="flex items-center gap-3 text-red-400 hover:text-red-300 transition">
          <LogOut size={20} />
          <span className={`${!isOpen && "hidden"} text-sm`}>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
