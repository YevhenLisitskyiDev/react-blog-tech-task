import React from "react";
import { useSelector } from "react-redux";

const ContactPage = () => {
  const users = useSelector((state) => state.auth.users);
  return (
    <div className="container">
      <h1>Contacts:</h1>
      {users.map((contact) => (
        <div key={contact.phoneNumber}>
          {contact.name} - {contact.phoneNumber.split(" ")[0]}
        </div>
      ))}
    </div>
  );
};

export default ContactPage;
