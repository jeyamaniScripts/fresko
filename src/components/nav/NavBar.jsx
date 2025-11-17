import React, { useState, useEffect, useCallback } from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo/logo.png";
import PopupModal from "../PopupModal";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../provider/CartContext";
import { FiSearch, FiX, FiMenu } from "react-icons/fi";

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

    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const suggestions = [
    "fresh apples",
    "organic vegetables",
    "farm milk",
    "bread & eggs",
    "tender coconuts",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  // ⭐ Debounced Search
  const handleSearch = useCallback(() => {
    if (searchValue.trim()) {
      console.log("Searching for:", searchValue);
    }
  }, [searchValue]);

  useEffect(() => {
    const timer = setTimeout(handleSearch, 300);
    return () => clearTimeout(timer);
  }, [searchValue, handleSearch]);

  // Animated placeholder text
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % suggestions.length);
        setFade(true);
      }, 250);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 h-[72px] border-b transition-all ${
          isScrolled
            ? "bg-white shadow-md border-gray-200 backdrop-blur-md"
            : "bg-transparent border-transparent"
        }`}
      >
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-32 md:w-36 lg:w-40" />
        </Link>

        {/* DESKTOP */}
        <div className="hidden sm:flex items-center gap-8 w-full justify-end">
          {/* SEARCH */}
          <div className={styles.searchBox}>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={styles.searchInput}
            />

            {searchValue.length === 0 && (
              <div
                className={`${styles.suggestionText} ${
                  fade ? styles.fadeIn : styles.fadeOut
                }`}
              >
                Search for "{suggestions[index]}"
              </div>
            )}

            <FiSearch
              className={styles.searchIcon}
              style={{ color: "var(--color-primary)" }}
            />
          </div>

          {user?.role === "admin" && (
            <Link
              to="/admin/dashboard"
              className="font-medium hover:underline"
              style={{ color: "var(--color-primary)" }}
            >
              Dashboard
            </Link>
          )}

          {/* CART */}
          <div className="relative cursor-pointer">
            <Link to="/product/addtocart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l3.6 12.59a2 2 0 0 0 2 1.41h9a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </Link>

            <span
              className="absolute -top-2 -right-3 text-xs text-white w-[18px] h-[18px] rounded-full flex items-center justify-center"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              {cartCount}
            </span>
          </div>

          {/* LOGIN / LOGOUT */}
          {!user ? (
            <button
              onClick={() => setShowModal(true)}
              className="cursor-pointer px-8 py-2 text-white rounded-full"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              Login
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="cursor-pointer px-6 py-2 border rounded-full"
              style={{
                color: "var(--color-primary)",
                borderColor: "var(--color-primary)",
              }}
            >
              Logout
            </button>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="sm:hidden" onClick={() => setOpen(true)}>
          <FiMenu size={24} style={{ color: "var(--color-primary)" }} />
        </button>
      </nav>

      {/* SPACER */}
      <div className="h-[72px]" />

      {/* MOBILE OVERLAY */}
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}></div>
      )}

      {/* MOBILE SLIDE-IN MENU */}
      <div
        className={`${styles.mobileMenu} ${
          open ? styles.menuOpen : styles.menuClose
        }`}
      >
        <div className={styles.menuHeader}>
          <img src={logo} alt="Logo" className="w-28" />
          <FiX
            size={26}
            style={{ color: "var(--color-primary)" }}
            onClick={() => setOpen(false)}
          />
        </div>

        <div className={styles.menuLinks}>
          {user && <p className={styles.userName}>👋 {user.name}</p>}

          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/product/addtocart" onClick={() => setOpen(false)}>
            Cart ({cartCount})
          </Link>

          {user?.role === "admin" && (
            <Link to="/admin/dashboard" onClick={() => setOpen(false)}>
              Admin Dashboard
            </Link>
          )}

          {!user ? (
            <button
              className={styles.loginBtn}
              style={{
                backgroundColor: "var(--color-primary)",
                color: "white",
              }}
              onClick={() => {
                setOpen(false);
                setShowModal(true);
              }}
            >
              Login
            </button>
          ) : (
            <button
              className={styles.logoutBtn}
              style={{
                borderColor: "var(--color-primary)",
                color: "var(--color-primary)",
              }}
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* POPUP MODAL */}
      {showModal && (
        <PopupModal
          onCancel={() => setShowModal(false)}
          onConfirm={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default NavBar;
