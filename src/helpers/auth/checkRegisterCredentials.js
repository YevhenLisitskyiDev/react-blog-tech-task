// import { useSelector } from "react-redux";

const checkRegisterCredentials = (currentUser, users) => {
  let emailIsNotUniqueCheck = users.filter((user) => user.email === currentUser.email);
  let phoneNumberIsNotUniqueCheck = users.filter(
    (user) => user.phoneNumber === currentUser.phoneNumber
  );


  let emailIsUnique 
  let phoneNumberIsUnique
  

  emailIsNotUniqueCheck.length ? (emailIsUnique = false) : (emailIsUnique = true);
  phoneNumberIsNotUniqueCheck.length
    ? (phoneNumberIsUnique = false)
    : (phoneNumberIsUnique = true);

  return {
    emailIsUnique,
    phoneNumberIsUnique,
  };
};

export default checkRegisterCredentials;
