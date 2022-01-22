import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/common/navbar";
import Orders from "./pages/orders";
import TechnicianProfile from "./pages/technicianProfile";
import Technicians from "./pages/technicians";
import Products from "./pages/products";
import Supplies from "./pages/supplies";
import Error from "./pages/error";
import NotFound from "./pages/notFound";
import Home from "./pages/home";

import APPLICATION_NAME from "./config/application-name";
import pages from "./config/app-skeleton";

import "./App.css";

const App = () => {
  const {
    HOME_PAGE,
    SUPPLIES_PAGE,
    PRODUCTS_PAGE,
    TECHNICIAN_PAGE,
    TECHNICIANS_PAGE,
    ORDERS_PAGE,
    NOT_FOUND_PAGE,
    ERROR_PAGE,
  } = pages;

  return (
    <BrowserRouter>
      <Navbar
        title={APPLICATION_NAME}
        homeRoute={HOME_PAGE.path}
        routes={[
          { name: SUPPLIES_PAGE.name, path: SUPPLIES_PAGE.path },
          { name: PRODUCTS_PAGE.name, path: PRODUCTS_PAGE.path },
          { name: TECHNICIANS_PAGE.name, path: TECHNICIANS_PAGE.path },
          { name: ORDERS_PAGE.name, path: ORDERS_PAGE.path },
        ]}
      />
      <main className="container">
        <Switch>
          <Route exact path={ORDERS_PAGE.path} component={Orders} />
          <Route
            exact
            path={TECHNICIAN_PAGE.path}
            component={TechnicianProfile}
          />
          <Route exact path={TECHNICIANS_PAGE.path} component={Technicians} />
          <Route exact path={PRODUCTS_PAGE.path} component={Products} />
          <Route exact path={SUPPLIES_PAGE.path} component={Supplies} />
          <Route exact path={ERROR_PAGE.path} component={Error} />
          <Route exact path={NOT_FOUND_PAGE.path} component={NotFound} />
          <Route exact path={HOME_PAGE.path} component={Home} />
          <Redirect to={NOT_FOUND_PAGE.path} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
