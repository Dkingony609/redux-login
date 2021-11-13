// import { useSelector } from "react-redux";
import "../styles.css";
import { authAction } from "../store/actions/auth";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.isAuthenticated) {
      props.history.push("/dashboard");
    }
  }, [auth]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authAction({ username, password }));
  };

  return (
    <div className="wrap">
      <div className="login">
        <h2>Login Form</h2>
        <form action="/" method="post">
          <div className="container">
            <label htmlFor="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              name="uname"
              value={username}
              placeholder="Enter username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="pwd">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              name="pwd"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button id="login" onClick={handleSubmit} type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
