import React from "react";

import Button from "../components/common/button";

const Error = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Hoppá!</h1>
      <p className="lead">Hiba történt a hálózati kapcsolatban...</p>
      <hr className="my-4" />
      <p>
        Próbálja meg később újraindítani az oldalt vagy ellenőrizze az
        internetkapcsolatot.
      </p>
      <p className="lead">
        <Button text="Vissza a főoldalra" url="/" />
      </p>
    </div>
  );
};

export default Error;
