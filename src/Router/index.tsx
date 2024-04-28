import { Route, Routes } from "react-router-dom";
import Home from "../Screen/Home";
import About from "../Screen/About";
import Contact from "../Screen/Contact";
import React from "react";
import NotFoundScreen from "../Screen/NotFound/inde";
import useDocumentTitle from "../Common/Components/UpdateDocumentTitle/UpdateDocumentTitle";
import Login from "../Screen/Login";
import ProtectedRoute from "../Common/Components/ProtectedRoute/ProtectedRoute";

function MainRouter() {
  function Page({ components, title, screen }: any) {
    const titlePrefix = "";
    useDocumentTitle(`${titlePrefix}${title}`);
    if (screen !== "login") {
      return <ProtectedRoute>{components}</ProtectedRoute>;
    }
    return components;
  }

  return (
    <Routes>
      <Route
        path="/weather/login"
        element={<Page screen="login" components={<Login />} title="Login" />}
      />
      <Route
        path="/weather"
        element={<Page screen="" components={<Home />} title="Home" />}
      />
      <Route
        index
        path="/about"
        element={<Page screen="" components={<About />} title="Home" />}
      />
      <Route
        path="/contact"
        element={<Page screen="" components={<Contact />} title="Home" />}
      />
      <Route
        path="*"
        element={
          <Page components={<NotFoundScreen />} title="404 | Not Found" />
        }
      />
    </Routes>
  );
}

export default MainRouter;
