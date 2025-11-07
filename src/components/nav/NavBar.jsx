import React, { useState, useEffect } from "react";
import logo from "../../assets/logo/logo.png";
import PopupModal from "../PopupModal";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../provider/CartContext";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);

    // Scroll listener for animation
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = () => setShowModal(true);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const handleConfirm = () => {
    setShowModal(false);
    const newUser = JSON.parse(localStorage.getItem("user"));
    setUser(newUser);
  };

  const handleCancel = () => setShowModal(false);

  const suggestions = [
    "fresh apples",
    "organic vegetables",
    "farm milk",
    "bread & eggs",
    "tender coconuts",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade-out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % suggestions.length);
        setFade(true); // fade-in next text
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 h-[72px] border-b transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md border-gray-200 backdrop-blur-md"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Fresko Logo"
            className="w-32 md:w-36 lg:w-40 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8 w-full justify-end">
          {/* Search */}
          <div className="relative flex items-center border pl-3 gap-2 bg-white border-gray-300 h-[44px] rounded-md overflow-hidden w-[320px] md:w-[420px] lg:w-[520px]">
            <input
              type="text"
              className="w-full h-full outline-none text-gray-700 text-sm placeholder-transparent"
              placeholder="Search..."
            />

            {/* Animated suggestion text */}
            <div
              className={`absolute left-3 pointer-events-none text-gray-400 text-sm transition-all duration-500 ease-in-out ${
                fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
              }`}
            >
              Search for "{`${suggestions[index]}`}"
            </div>
          </div>

          {/* Admin Dashboard Link */}
          {user?.role === "admin" && (
            <Link
              to="/admin/dashboard"
              className="text-green-600 font-medium hover:underline"
            >
              Dashboard
            </Link>
          )}

          {/* Cart */}
          <div className="relative cursor-pointer">
            <Link to="/product/addtocart">
              <svg
                width="20"
                height="20"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
                  stroke="#22c55e"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 text-xs text-white bg-green-500 w-[18px] h-[18px] rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          {/* Login or User Profile */}
          {!user ? (
            <button
              onClick={handleLogin}
              className="cursor-pointer px-8 py-2 bg-green-500 hover:bg-green-600 transition text-white rounded-full h-[44px] flex items-center justify-center"
            >
              Login
            </button>
          ) : (
            <div className="flex items-center gap-4">
              <p className="text-gray-700 font-medium">👋 {user.name}</p>
              <button
                onClick={handleLogout}
                className="cursor-pointer px-6 py-2 border border-green-500 text-green-600 hover:bg-green-500 hover:text-white rounded-full h-[44px] flex items-center justify-center transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="sm:hidden"
        >
          <svg
            width="22"
            height="16"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="21" height="1.5" rx=".75" fill="#16a34a" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#16a34a" />
            <rect
              x="6"
              y="13"
              width="15"
              height="1.5"
              rx=".75"
              fill="#16a34a"
            />
          </svg>
        </button>

        {/* Popup Modal */}
        {showModal && (
          <PopupModal onCancel={handleCancel} onConfirm={handleConfirm} />
        )}
      </nav>

      {/* Spacer to avoid content hiding under fixed navbar */}
      <div className="h-[72px]" />
    </>
  );
};

export default NavBar;
