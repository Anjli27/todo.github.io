import React, { useState } from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";

function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div
      className="formContainer"
    >
      <div className="formWrapper">
        <span className="logoname">Chat Box</span>
        <span className="title-login">Login</span>
        <form className="submit" onSubmit={handleSubmit}>
          <input className="inputinput" type="email" placeholder="Email" />
          <input className="inputinput" type="password" placeholder="Password" />

          <button className="btn-sign">Sign In</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You don't have an account? <Link to="/Register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
