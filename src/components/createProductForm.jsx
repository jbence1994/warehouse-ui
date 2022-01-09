import React from "react";

import TextInput from "./common/textInput";
import NumberInput from "./common/numberInput";
import MerchantsDropdown from "./merchantsDropdown";
import Submit from "./common/submit";

const CreateProductForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Send new product to api.");
  };

  const handleTextChange = ({ currentTarget: input }) => {
    console.log("products.handleTextChange.", input.name, input.value);
  };

  const handleNumberChange = ({ currentTarget: input }) => {
    console.log("products.handleNumberChange.", input.name, input.value);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} noValidate>
        <TextInput
          labelText="Termék neve"
          name="name"
          value=""
          errorMessage="A név megadása kötelező."
          onChange={handleTextChange}
        />
        <TextInput
          labelText="Mennyiségi egység"
          name="unit"
          value=""
          errorMessage="A mennyiségi egység megadása kötelező."
          onChange={handleTextChange}
        />
        <NumberInput
          labelText="Termék ára"
          name="price"
          value={0}
          errorMessage="Az ár megadása kötelező."
          onChange={handleNumberChange}
        />
        <MerchantsDropdown handleNumberChange={handleNumberChange} />
        <Submit text="Mentés" />
      </form>
    </React.Fragment>
  );
};

export default CreateProductForm;
