import React, { useState } from "react";
import styles from "./Auth.module.css";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const confirm = e.target.confirm.value;

      if (password !== confirm) {
        alert("Passwords do not match!");
        return;
      }

      // ✅ Store signup data and set login state
      const newUser = { name, email, password, role: "admin" };
      localStorage.setItem("user", JSON.stringify(newUser));
      localStorage.setItem("isLoggedIn", "true");

      alert("Signup successful! Welcome, " + name);
      window.location.reload(); // refresh to update Navbar state
    } else {
      const email = e.target.email.value;
      const password = e.target.password.value;
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedUser && storedUser.email === email && storedUser.password === password) {
        // ✅ Store login state
        localStorage.setItem("isLoggedIn", "true");
        alert(`Welcome back, ${storedUser.name}!`);
        window.location.reload(); // refresh to update Navbar state
      } else {
        alert("Invalid credentials!");
      }
    }
  };

  return (
    <>
      <h2 className={styles.title}>
        {isSignup ? "Create your account" : "Welcome back"}
      </h2>

      <form onSubmit={handleSubmit}>
        {isSignup && (
          <input
            name="name"
            className={styles.input}
            type="text"
            placeholder="Enter your name"
            required
          />
        )}

        <input
          name="email"
          className={styles.input}
          type="email"
          placeholder="Enter your email"
          required
        />

        <input
          name="password"
          className={styles.input}
          type="password"
          placeholder="Enter your password"
          required
        />

        {isSignup && (
          <input
            name="confirm"
            className={styles.input}
            type="password"
            placeholder="Confirm your password"
            required
          />
        )}

        {!isSignup && (
          <div className={styles.forgot}>
            <a href="#">Forgot Password?</a>
          </div>
        )}

        <button type="submit" className={styles.submit}>
          {isSignup ? "Sign up" : "Log in"}
        </button>
      </form>

      <p className={styles.toggle}>
        {isSignup ? (
          <>
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => setIsSignup(false)}
              className={styles.link}
            >
              Log in
            </button>
          </>
        ) : (
          <>
            Don’t have an account?{" "}
            <button
              type="button"
              onClick={() => setIsSignup(true)}
              className={styles.link}
            >
              Sign up
            </button>
          </>
        )}
      </p>
    </>
  );
};

export default Auth;
