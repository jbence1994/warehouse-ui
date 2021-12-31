import React, { useState } from "react";

import Counter from "./common/counter";
import TextInputDisabled from "./common/textInputDisabled";
import Submit from "./common/submit";

import { createSupply } from "../services/supplyService";

const CreateSupplyForm = ({ name, productId, availableQuantity, unit }) => {
  const [supply, setSupply] = useState({
    productId: productId,
    quantity: 0,
  });

  const [productAvailableQuantity, setProductAvailableQuantity] =
    useState(availableQuantity);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await createSupply(supply);
    const { product } = data;
    const { availableQuantity } = product;

    setProductAvailableQuantity(availableQuantity);
  };

  const handleNumberChange = ({ currentTarget: input }) => {
    const updatedSupply = { ...supply };
    updatedSupply[input.name] = parseInt(input.value);
    setSupply(updatedSupply);
  };

  return (
    <React.Fragment>
      <h6 className="mb-4">
        Jelenleg raktáron: {productAvailableQuantity} {unit}
      </h6>
      <form onSubmit={handleSubmit} noValidate>
        <section className="row">
          <article className="col-6">
            <Counter name={name} minValue={1} onChange={handleNumberChange} />
          </article>
          <article className="col-6">
            <TextInputDisabled content={unit} />
          </article>
          <article className="col-12">
            <Submit text="Raktárkészlet növelése" />
          </article>
        </section>
      </form>
    </React.Fragment>
  );
};

export default CreateSupplyForm;
