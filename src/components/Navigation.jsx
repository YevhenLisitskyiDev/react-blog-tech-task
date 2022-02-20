import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import { Navigate, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";
import privateRoutes from "../routes/privateRoutes";

const Navigation = () => {
  const { currentUser, users } = useSelector((state) => state.auth);
  const { logout } = useActions();

  let location = useLocation().pathname;

  const isPrivateRoute =
    privateRoutes.filter((rote) => rote.path === location).length === 0
      ? false
      : true;

  const redirect =
    currentUser === null && isPrivateRoute && location !== "/sign-up" ? (
      <Navigate to="sign-up" />
    ) : !currentUser?.isAdmin && location === "/admin" ? (
      <Navigate to="/" />
    ) : null;

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((currentState) => !currentState);
  };

  return (
    <div>
      {redirect}

      <Navbar color="light" light expand="md">
        <NavbarBrand to="/">React Blog Tech Task</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto " navbar>
            <NavItem>
              <NavLink
                className={"nav-link"}
                activeClassName={"font-weight-bold "}
                to="/"
              >
                Posts
              </NavLink>
            </NavItem>

            {currentUser?.isAdmin && (
              <NavItem>
                <NavLink
                  className={"nav-link"}
                  activeClassName={"font-weight-bold"}
                  to="/admin"
                >
                  Admin Page
                </NavLink>
              </NavItem>
            )}

            {currentUser !== null ? (
              <>
                <NavItem>
                  <NavLink
                    className={"nav-link"}
                    activeClassName={"font-weight-bold"}
                    to="/my-posts"
                  >
                    My Posts
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={"nav-link"}
                    activeClassName={"font-weight-bold"}
                    to="/contacts"
                  >
                    Contacts
                  </NavLink>
                </NavItem>

                <NavItem>
                  <button className={"btn btn-primary"} onClick={logout}>
                    Logout
                  </button>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLink
                    className={"btn btn-primary"}
                    activeClassName={"font-weight-bold"}
                    to="/sign-in"
                  >
                    Sign In
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={"nav-link"}
                    activeClassName={"font-weight-bold"}
                    to="/sign-up"
                  >
                    Sign Up
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
