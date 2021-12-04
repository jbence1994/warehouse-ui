import React from "react";

import getCurrentDate from "../services/dateService";

const Home = () => {
  return (
    <div className="jumbotron">
      <h1>Üdvözöljük!</h1>
      <p>{getCurrentDate()}</p>
    </div>
  );
};

export default Home;
