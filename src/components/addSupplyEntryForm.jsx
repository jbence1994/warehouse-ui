import React from "react";

import Counter from "./common/counter";
import TextInputDisabled from "./common/textInputDisabled";
import Submit from "./common/submit";

const AddSupplyEntryForm = ({ name, productId, content }) => {
  const handleNumberChange = () => {};

  return (
    <form noValidate>
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

export default AddSupplyEntryForm;
