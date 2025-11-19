import React, { useState } from "react";
import styles from "./Auth.module.css";
import {
  FiMail,
  FiUser,
  FiPhone,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

const Auth = () => {
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  return (
    <div className={styles.authWrapper}>
      {/* LOGIN */}
      {mode === "login" && (
        <>
          <h2 className={styles.title}>Welcome back</h2>

          <form>
            {/* EMAIL */}
            <div className={styles.inputGroup}>
              <FiMail className={styles.inputIcon} />
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.inputField}
                required
              />
            </div>

            {/* PASSWORD */}
            <div className={styles.inputGroup}>
              <FiLock className={styles.inputIcon} />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={styles.inputField}
                required
              />

              <span
                className={styles.eyeIcon}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>

            <div className={styles.forgotLink}>
              <a className="text-blue-600 underline text-sm" href="#">
                Forgot Password?
              </a>
            </div>

            {/* LOGIN BUTTON */}
            <button type="submit" className={styles.primaryBtn}>
              Log in
            </button>
          </form>

          <p className={styles.textCenter}>
            Don’t have an account?{" "}
            <span className={styles.altLink} onClick={() => setMode("signup")}>
              Signup
            </span>
          </p>

          {/* APPLE */}
          <button type="button" className={styles.appleBtn}>
            <img
              className="h-4 w-4"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png"
            />
            Log in with Apple
          </button>

          {/* GOOGLE */}
          <button type="button" className={styles.googleBtn}>
            <img
              className="h-4 w-4"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png"
            />
            Log in with Google
          </button>
        </>
      )}

      {/* SIGNUP */}
      {mode === "signup" && (
        <>
          <h2 className={styles.title}>Create Account</h2>

          <form>
            <div className={styles.inputGroup}>
              <FiUser className={styles.inputIcon} />
              <input
                type="text"
                placeholder="Full Name"
                className={styles.inputField}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <FiMail className={styles.inputIcon} />
              <input
                type="email"
                placeholder="Email Address"
                className={styles.inputField}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <FiPhone className={styles.inputIcon} />
              <input
                type="tel"
                placeholder="Phone Number"
                className={styles.inputField}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <FiLock className={styles.inputIcon} />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={styles.inputField}
                required
              />

              <span
                className={styles.eyeIcon}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>

            <div className={styles.inputGroup}>
              <FiLock className={styles.inputIcon} />
              <input
                type={showCPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className={styles.inputField}
                required
              />
              <span
                className={styles.eyeIcon}
                onClick={() => setShowCPassword(!showCPassword)}
              >
                {showCPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>

            <button type="submit" className={styles.primaryBtn}>
              Create Account
            </button>
          </form>

          <p className={styles.textCenter}>
            Already have an account?{" "}
            <span className={styles.altLink} onClick={() => setMode("login")}>
              Login
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default Auth;
