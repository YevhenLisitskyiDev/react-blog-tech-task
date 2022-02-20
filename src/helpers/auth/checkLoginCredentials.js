// import { useSelector } from "react-redux";

const checkLoginCredentials = (email, password, users) => {
  let credentialsChekResult = false;
  // const users = useSelector((state) => state.auth);
  let currentUser = users.filter((user) => user.email === email);

  if (currentUser.length && currentUser[0].password === password) {
    credentialsChekResult = true;
  }
  

  return {
    loginSuccess: credentialsChekResult,
    currentUser: currentUser[0],
  };
};

export default checkLoginCredentials;


