import React from "react";

import { Switch, Route } from "react-router-dom";

import SignUp from "./components/signup/signup.component";
import NavBar from "./components/navbar/navbar.component";
import Index from "./components/index";
import Footer from "./components/footer/footter";
import SugarManagement from "./components/pages/SugarManagement";
import Weightmanagmenet from "./components/pages/weightmanagmenet";

import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/sugar-management" component={SugarManagement} />
        <Route path="/weight-management" component={Weightmanagmenet} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
