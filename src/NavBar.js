import "./styles.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "./store/actions/auth";
import { LOGOUT } from "./store/constants";

const NavBar = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.isAuthenticated) {
      props.history.push("/");
    }
  }, [auth]);

  const handleLogOut = () => {
    dispatch(authAction({ type: LOGOUT, payload: null }));
  };

  return (
    <nav>
      <h2>Simple Redux Application</h2>
      <button className="log-out" onClick={handleLogOut}>
        Log out
      </button>
    </nav>
  );
};

export default NavBar;
