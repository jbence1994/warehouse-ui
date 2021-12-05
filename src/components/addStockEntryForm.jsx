import React from "react";

const AddStockEntryForm = ({ labelText }) => {
  return (
    <form noValidate>
      <label>{labelText}</label>
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

export default AddStockEntryForm;
