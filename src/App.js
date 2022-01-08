import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/common/navbar";
import Products from "./pages/products";
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
      products: { name: "Termékek", path: "/termekek" },
      notFound: { name: "A keresett oldal nem található", path: "/hiba" },
    },
  });

  const { name: applicationName } = application;
  const { pages } = application;
  const { home, supplies, products, notFound } = pages;

  const routes = [
    { name: supplies.name, path: supplies.path },
    { name: products.name, path: products.path },
  ];

  return (
    <BrowserRouter>
      <Navbar title={applicationName} homeRoute={home.path} routes={routes} />
      <main className="container">
        <Switch>
          <Route exact path={products.path} component={Products} />
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
