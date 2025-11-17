import React, { useState, useEffect, useCallback } from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo/logo.png";
import PopupModal from "../PopupModal";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../provider/CartContext";

import {
  FiSearch,
  FiX,
  FiMenu,
  FiHome,
  FiShoppingCart,
  FiGrid,
  FiUser,
  FiHeart,
  FiPackage,
  FiHelpCircle,
  FiTag,
  FiMapPin,
  FiLogIn,
  FiSettings,
} from "react-icons/fi";

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

  const handleSearch = useCallback(() => {
    if (searchValue.trim()) console.log("Searching:", searchValue);
  }, [searchValue]);

  useEffect(() => {
    const timer = setTimeout(handleSearch, 300);
    return () => clearTimeout(timer);
  }, [searchValue, handleSearch]);

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
      {/* ------------------- NAVBAR ------------------- */}
      <nav
        className={`fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 h-[72px] border-b transition-all ${
          isScrolled
            ? "bg-white shadow-md border-gray-200 backdrop-blur-md"
            : "bg-transparent border-transparent"
        }`}
      >
        <Link to="/">
          <img src={logo} alt="Logo" className="w-32 md:w-36 lg:w-40" />
        </Link>

        {/* DESKTOP */}
        <div className="hidden sm:flex items-center gap-8 w-full justify-end">
          {/* SEARCH */}
          <div className={styles.searchBox}>
            <input
              type="text"
              className={styles.searchInput}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
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
            <FiSearch className={styles.searchIcon} />
          </div>

          {user?.role === "admin" && (
            <Link
              to="/admin/dashboard"
              className="font-medium"
              style={{ color: "var(--color-primary)" }}
            >
              Admin
            </Link>
          )}

          {/* CART */}
          <div className="relative cursor-pointer">
            <Link to="/product/addtocart">
              <FiShoppingCart
                size={22}
                style={{ color: "var(--color-primary)" }}
              />
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
              style={{ background: "var(--color-primary)" }}
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

      <div className="h-[72px]" />

      {/* overlay */}
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}></div>
      )}

      {/* ------------------- MOBILE MENU ------------------- */}
      <div
        className={`${styles.mobileMenu} ${
          open ? styles.menuOpen : styles.menuClose
        }`}
      >
        <div className={styles.menuHeader}>
          <img src={logo} alt="Logo" className="w-24" />
          <div className={styles.iconBox} onClick={() => setOpen(false)}>
            <FiX size={18} style={{ color: "var(--color-primary)" }} />
          </div>
        </div>

        <div className={styles.menuLinks}>
          {user && <p className={styles.userName}>👋 {user.name}</p>}

          <Link
            className={styles.menuItem}
            to="/"
            onClick={() => setOpen(false)}
          >
            <FiHome className={styles.menuIcon} /> Home
          </Link>

          <Link
            className={styles.menuItem}
            to="/product/addtocart"
            onClick={() => setOpen(false)}
          >
            <FiShoppingCart className={styles.menuIcon} /> Cart
            <span className={styles.cartBadge}>{cartCount}</span>
          </Link>

          <Link
            className={styles.menuItem}
            to="/orders"
            onClick={() => setOpen(false)}
          >
            <FiPackage className={styles.menuIcon} /> My Orders
          </Link>

          <Link
            className={styles.menuItem}
            to="/wishlist"
            onClick={() => setOpen(false)}
          >
            <FiHeart className={styles.menuIcon} /> Wishlist
          </Link>

          <Link
            className={styles.menuItem}
            to="/track"
            onClick={() => setOpen(false)}
          >
            <FiMapPin className={styles.menuIcon} /> Track Order
          </Link>

          <Link
            className={styles.menuItem}
            to="/account"
            onClick={() => setOpen(false)}
          >
            <FiUser className={styles.menuIcon} /> My Account
          </Link>

          <Link
            className={styles.menuItem}
            to="/offers"
            onClick={() => setOpen(false)}
          >
            <FiTag className={styles.menuIcon} /> Offers
          </Link>

          <Link
            className={styles.menuItem}
            to="/support"
            onClick={() => setOpen(false)}
          >
            <FiHelpCircle className={styles.menuIcon} /> Help & Support
          </Link>

          {user?.role === "admin" && (
            <Link
              className={styles.menuItem}
              to="/admin/dashboard"
              onClick={() => setOpen(false)}
            >
              <FiGrid className={styles.menuIcon} /> Admin
            </Link>
          )}

          {!user ? (
            <Link
              className={`${styles.menuItem} ${styles.secondaryItem}`}
              onClick={() => {
                setOpen(false);
                setShowModal(true);
              }}
            >
              <FiLogIn className={styles.menuIcon} /> Login
            </Link>
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

        {/* ⭐ SETTINGS AT BOTTOM */}
        <div className={styles.bottomSection}>
          <Link
            className={styles.menuItem}
            to="/settings"
            onClick={() => setOpen(false)}
          >
            <FiSettings className={styles.menuIcon} /> Settings
          </Link>
        </div>
      </div>

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
