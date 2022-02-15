import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/common/navbar";
import Orders from "./pages/orders";
import Technicians from "./pages/technicians";
import Merchants from "./pages/merchants";
import Products from "./pages/products";
import Supplies from "./pages/supplies";
import Error from "./pages/error";
import NotFound from "./pages/notFound";

import pages, { APPLICATION_NAME } from "./config/app.skeleton";

import "./App.css";

const App = () => {
  const {
    SUPPLIES_PAGE,
    PRODUCTS_PAGE,
    MERCHANTS_PAGE,
    TECHNICIANS_PAGE,
    ORDERS_PAGE,
    NOT_FOUND_PAGE,
    ERROR_PAGE,
  } = pages;

  return (
    <BrowserRouter>
      <Navbar
        title={APPLICATION_NAME}
        homeRoute={SUPPLIES_PAGE.path}
        routes={[
          { name: SUPPLIES_PAGE.name, path: SUPPLIES_PAGE.path },
          { name: TECHNICIANS_PAGE.name, path: TECHNICIANS_PAGE.path },
          { name: ORDERS_PAGE.name, path: ORDERS_PAGE.path },
        ]}
      />
      <main className="container">
        <Switch>
          <Route exact path={ORDERS_PAGE.path} component={Orders} />
          <Route exact path={TECHNICIANS_PAGE.path} component={Technicians} />
          <Route exact path={MERCHANTS_PAGE.path} component={Merchants} />
          <Route exact path={PRODUCTS_PAGE.path} component={Products} />
          <Route exact path={SUPPLIES_PAGE.path} component={Supplies} />
          <Route exact path={ERROR_PAGE.path} component={Error} />
          <Route exact path={NOT_FOUND_PAGE.path} component={NotFound} />
          <Redirect to={NOT_FOUND_PAGE.path} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
