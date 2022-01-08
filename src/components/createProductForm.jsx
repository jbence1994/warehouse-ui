import React from "react";

import MerchantsDropdown from "./merchantsDropdown";
import Submit from "./common/submit";

const CreateProductForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Send new product to api.");
  };

  const handleNumberChange = ({ currentTarget: input }) => {
    console.log("products.handleNumberChange.", input.name, input.value);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} noValidate>
        <MerchantsDropdown handleNumberChange={handleNumberChange} />
        <Submit text="Mentés" />
      </form>
    </React.Fragment>
  );
};

export default CreateProductForm;
