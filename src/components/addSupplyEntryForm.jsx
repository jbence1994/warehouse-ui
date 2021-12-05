import React from "react";

const AddSupplyEntryForm = () => {
  return (
    <form noValidate>
      <label>Raktárkészlet növelése</label>
      <section className="row">
        <article className="col-6">
          <p>Article #1 col-6</p>
        </article>
        <article className="col-6">
          <p>Article #2 col-6</p>
        </article>
        <article className="col-6">
          <p>Article #3 col-6</p>
        </article>
      </section>
    </form>
  );
};

export default AddSupplyEntryForm;
