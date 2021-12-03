import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";

import "./App.css";

const App = () => {
  const [application] = useState({
    name: "Warehouse",
    pages: {
      home: { name: "Főoldal", path: "/" },
    },
  });

  const { pages } = application;
  const { home } = pages;

  return (
    <BrowserRouter>
      <main className="container">
        <Switch>
          <Route exact path={home.path} component={Home} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
