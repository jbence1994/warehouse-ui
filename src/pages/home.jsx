import React from "react";

import getCurrentDate from "../services/dateService";

const Home = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Üdvözöljük!</h1>
      <p className="lead">{getCurrentDate()}</p>
    </div>
  );
};

export default Home;
