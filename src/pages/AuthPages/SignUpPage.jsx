import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";

const SignInPage = (props) => {
  const { login, logout } = useActions();
  const { message, users } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState({
    email: "email@email.com",
    password: "123",
  });

  useEffect(() => {
    logout();
  }, []);

  const changeUserData = (e) => {
    const eValue = e.target.value;
    setUserData({ ...userData, [e.target.id]: eValue });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    login(userData.email, userData.password, users);
  };

  let redirect = message === "Login successfull!" ? <Navigate to="/" /> : "";

  return (
    <>
      {redirect}
      <form
        onSubmit={submitHandler}
        className="container p-5 d-flex align-items-center flex-column"
      >
        <h1>Login Page</h1>

        <div className="form-group w-50 m-1" style={{ minWidth: "300px" }}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={userData.email}
            onChange={changeUserData}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group w-50 m-1" style={{ minWidth: "300px" }}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={userData.password}
            placeholder="Password"
            onChange={changeUserData}
          />
        </div>

        <button type="submit " className="btn btn-primary mt-3">
          Submit
        </button>
        <h6 className="mt-4">{message}</h6>
      </form>
    </>
    // <button onClick={logout}>Logout</button>
  );
};

export default SignInPage;
