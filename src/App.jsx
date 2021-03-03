import React from "react";

import SignUp from "./components/signup/signup.component";
import NavBar from "./components/navbar/navbar.component";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main style={{ minHeight: "900px" }}>
        <Switch>
          <Route path="/signup" component={SignUp}></Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
