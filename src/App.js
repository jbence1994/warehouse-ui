import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/common/navbar";
import Supplies from "./pages/supplies";
import NotFound from "./pages/notFound";
import Home from "./pages/home";

import "./App.css";

const App = () => {
  const [application] = useState({
    name: "Warehouse",
    pages: {
      home: { name: "Főoldal", path: "/" },
      supplies: { name: "Raktárkészlet", path: "/raktarkeszlet" },
      notFound: { name: "A keresett oldal nem található", path: "/hiba" },
    },
  });

  const { name: applicationName } = application;
  const { pages } = application;
  const { home, supplies, notFound } = pages;

  const routes = [{ name: supplies.name, path: supplies.path }];

  return (
    <BrowserRouter>
      <Navbar title={applicationName} homeRoute={home.path} routes={routes} />
      <main className="container">
        <Switch>
          <Route exact path={supplies.path} component={Supplies} />
          <Route exact path={notFound.path} component={NotFound} />
          <Route exact path={home.path} component={Home} />
          <Redirect to={notFound.path} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
