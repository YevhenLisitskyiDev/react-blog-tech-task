import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { Navigate } from "react-router-dom";

const SignInPage = (props) => {
  const { register, logout } = useActions();
  const { message } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState({
    name: "Name",
    surname: "Surname",
    email: "email@email.com",
    phoneNumber: "0993855343",
    password: "123",
    isAdmin: true,
  });

  useEffect(() => {
    logout();
  }, []);

  const changeUserData = (e) => {
    const eValue =
      e.target.id === "isAdmin" ? e.target.checked : e.target.value;
    setUserData({ ...userData, [e.target.id]: eValue });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    register(userData);
  };
  let redirect =
    message === "User registered successfully" ? <Navigate to="/" /> : "";

  return (
    <>
      {redirect}

      <form
        onSubmit={submitHandler}
        className="container p-5 d-flex align-items-center flex-column"
      >
        <h1>Register Page</h1>
        <h5>All fields marked with * are required</h5>

        <div className="form-group w-50 m-1" style={{ minWidth: "300px" }}>
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={userData.name}
            placeholder="Name"
            onChange={changeUserData}
            required
          />
        </div>
        <div className="form-group w-50 m-1" style={{ minWidth: "300px" }}>
          <label htmlFor="name">Surname</label>
          <input
            type="text"
            className="form-control"
            id="surname"
            value={userData.surname}
            placeholder="Surname"
            onChange={changeUserData}
          />
        </div>
        <div className="form-group w-50 m-1" style={{ minWidth: "300px" }}>
          <label htmlFor="phoneNumber">Phone*</label>
          <input
            type="tel"
            pattern="[0-9]{10}"
            className="form-control"
            id="phoneNumber"
            value={userData.phoneNumber}
            placeholder="Phone Number"
            onChange={changeUserData}
            required
          />
          <small>Format: 0997773355</small>
        </div>
        <div className="form-group w-50 m-1" style={{ minWidth: "300px" }}>
          <label htmlFor="email">Email address*</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={userData.email}
            onChange={changeUserData}
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group w-50 m-1" style={{ minWidth: "300px" }}>
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={userData.password}
            placeholder="Password"
            onChange={changeUserData}
            required
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="isAdmin"
            checked={userData.isAdmin}
            onChange={changeUserData}
          />
          <label className="form-check-label" htmlFor="isAdmin">
            Is Admin
          </label>
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
