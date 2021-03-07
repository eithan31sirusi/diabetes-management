import React from "react";

import SignUp from "./components/signup/signup.component";
import NavBar from "./components/navbar/navbar.component";
import Index from "./components/index";
import Footer from "./components/footer/footter";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Index />
      <Footer />
    </>
  );
}

export default App;
