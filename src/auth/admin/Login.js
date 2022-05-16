import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "../Auth.module.css";
import { FiArrowLeft } from "react-icons/fi";

const LoginShop = () => {
  const [shop, setShop] = useState({
    email: "",
    passcode: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setShop({ ...shop, [e.target.name]: e.target.value });
  };
  
  return (
    <div className={styles.login_shop}>
      <form action="" className={styles.form}>
        <Link to="/">
          <FiArrowLeft size={20} />
          <span>Home</span>
        </Link>
        <h2>Login to your account</h2>
        <p>Use your email to login to your account</p>
        <br />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Log In Now</button>
        <p style={{ fontSize: "17px" }}>
          Don't have an account? <Link to="/auth/register-shop">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginShop;
