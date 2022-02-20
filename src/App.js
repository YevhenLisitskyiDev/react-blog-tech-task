import Router from "./routes/Router";
import Navigation from "./components/Navigation";
import { useEffect } from "react";
import { useActions } from "./hooks/useActions";

function App() {
  const { FetchUsers } = useActions();

  useEffect(() => {
    let defaultUser = {
      id: 777,
      name: "Name",
      surname: "Surname",
      email: "email@email.com",
      phoneNumber: "0993855343",
      password: "123",
      isAdmin: true,
    };

    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => {
        return data.map((user, i) => {
          let userFullName = user.name.split(" ");
          let remadeUser = {
            id: user.id,
            name: userFullName[0],
            surname: [1],
            email: user.email,
            phoneNumber: user.phone,
            password: user.website,
            isAdmin: i % 2 === 0 ? true : false,
          };
          return remadeUser;
        });
      })
      .then((users) => {
        let allUsers = [...users, defaultUser];
        FetchUsers(allUsers);
      })
      .catch((err) => {
        alert(err);
        FetchUsers(defaultUser);
      });
  }, []);
  return (
    <div className="App">
      <Navigation />
      {/* <Routes>
        <Route path="/" element={<PostsPage />} />
      </Routes> */}

      <Router />
    </div>
  );
}

export default App;
