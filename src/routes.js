import { lazy } from "react";

export default [
  {
    path: "/signup",
    label: "Register",
    exact: true,
    component: lazy(() => import("./pages/RegisterPage")),
    private: false,
    restricted: true,
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() => import("./pages/LoginPage")),
    private: false,
    restricted: true,
  },
  {
    path: "/contacts",
    label: "Contacts",
    exact: true,
    component: lazy(() => import("./pages/ContactsPage")),
    private: true,
    restricted: false,
  },
];
