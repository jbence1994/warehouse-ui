import React, { useState } from "react";

import Counter from "./common/counter";
import TextInputDisabled from "./common/textInputDisabled";
import Submit from "./common/submit";

const CreateSupplyForm = ({ name, productId, content }) => {
  const [supply, setSupply] = useState({
    productId: productId,
    quantity: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleNumberChange = ({ currentTarget: input }) => {
    const updatedSupply = { ...supply };
    updatedSupply[input.name] = parseInt(input.value);
    setSupply(updatedSupply);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label>Raktárkészlet növelése</label>
      <section className="row">
        <article className="col-6">
          <Counter name={name} minValue={1} onChange={handleNumberChange} />
        </article>
        <article className="col-6">
          <TextInputDisabled content={content} />
        </article>
        <article className="col-12">
          <Submit />
        </article>
      </section>
    </form>
  );
};

export default CreateSupplyForm;
