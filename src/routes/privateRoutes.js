import AdminPage from "../pages/OtherPages/AdminPage";
import PostsPage from "../pages/PostsPages/PostsPage";
import ContactPage from "../pages/OtherPages/ContactPage";
import routes from "./routes";

const privateRoutes = [
  { path: routes.ADMIN_PAGE, exact: true, component: <AdminPage /> },
  { path: routes.MY_POSTS_PAGE, exact: true, component: <PostsPage /> },
  { path: routes.CONTACT_US_PAGE, exact: true, component: <ContactPage /> },
];
export default privateRoutes;
