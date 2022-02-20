import { useSelector } from "react-redux";
import SinglePostPage from "../pages/PostsPages/SinglePostPage";
import { Routes, Route, Navigate } from "react-router-dom";

import publicRoutes from "./publicRoutes";
import privateRoutes from "./privateRoutes";
import routes from "./routes";

const Router = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            element={route.component}
          />
        );
      })}

      <Route path={"/:id"} exact element={<SinglePostPage />} />

      {privateRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            element={route.component}
          />
        );
      })}

      <Route
        path={`${routes.MY_POSTS_PAGE}/:id`}
        exact
        element={<SinglePostPage />}
      />
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
};

export default Router;
