import SignInPage from "../pages/AuthPages/SignInPage";
import SignUpPage from "../pages/AuthPages/SignUpPage";
import PostsPage from "../pages/PostsPages/PostsPage";
import routes from "./routes";

const publicRoutes = [
  { path: routes.SIGN_IN, exact: true, component: <SignInPage/> },
  { path: routes.SIGN_UP, exact: true, component: <SignUpPage/> },
  { path: "/", exact: true, component: <PostsPage/> },
];
export default publicRoutes
