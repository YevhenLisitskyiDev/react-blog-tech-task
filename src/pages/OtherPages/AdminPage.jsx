import React from "react";
import { useSelector } from "react-redux";

const AdminPage = (props) => {
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <div className="container mt-5">Welcome admin – {currentUser?.name}</div>
  );
};

export default AdminPage;
