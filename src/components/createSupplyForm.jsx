import React, { Fragment, useState } from "react";

import AddOnInput from "./common/addOnInput";
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

  // TODO: check what the root cause of the error (negative number / zero / empty)
  const errorMessage = true ? "A mennyiség megadása kötelező." : "N/A";

  return (
    <Fragment>
      <h6 className="mb-4">
        Jelenleg raktáron: {productAvailableQuantity} {unit}
      </h6>
      <form onSubmit={handleSubmit} noValidate>
        <section className="row">
          <article className="col-12">
            <AddOnInput
              type="number"
              name={name}
              addOnText={unit}
              errorMessage={errorMessage}
              onChange={handleNumberChange}
            />
          </article>
          <article className="col-12">
            <Submit text="Raktárkészlet növelése" />
          </article>
        </section>
      </form>
    </Fragment>
  );
};

export default CreateSupplyForm;
