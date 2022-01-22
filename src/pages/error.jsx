import React from "react";

import RoutingButton from "../components/common/routingButton";

const Error = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Hoppá!</h1>
      <p className="lead">Hiba történt a hálózati kapcsolatban...</p>
      <hr className="my-4" />
      <p>
        Próbálkozzon később újraindítani az oldalt vagy ellenőrízze az
        internetkapcsolatot.
      </p>
      <p className="lead">
        <RoutingButton text="Vissza a főoldalra" url="/" />
      </p>
    </div>
  );
};

export default Error;
