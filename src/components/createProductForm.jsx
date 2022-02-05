import React, { Fragment, useState } from "react";

import TextInput from "./common/textInput";
import NumberInput from "./common/numberInput";
import MerchantsDropdown from "./merchantsDropdown";
import Button from "./common/button";
import Modal from "./common/modal";

import { createProduct } from "../services/productService";

import pages from "../config/app.skeleton";

const CreateProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    unit: "",
    price: 0,
    merchantId: 0,
  });

  const [shouldShowSuccessModal, setShouldShowSuccessModal] = useState(false);
  const [shouldShowErrorModal, setShouldErrorShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await createProduct(product);
      setProduct({ ...data });

      setShouldShowSuccessModal(true);
    } catch {
      setShouldErrorShowModal(true);
    }
  };

  const handleSuccessModalClosed = () => {
    setShouldShowSuccessModal(false);

    setProduct({ name: "", unit: "", price: 0, merchantId: 0 });
  };

  const handleErrorModalClosed = () => {
    setShouldErrorShowModal(false);
  };

  const handleTextChange = ({ currentTarget: input }) => {
    const updatedProduct = { ...product };
    updatedProduct[input.name] = input.value;
    setProduct(updatedProduct);
  };

  const handleNumberChange = ({ currentTarget: input }) => {
    const updatedProduct = { ...product };
    updatedProduct[input.name] = parseInt(input.value);
    setProduct(updatedProduct);
  };

  const { name, unit, price, merchantId } = product;

  const { SUPPLIES_PAGE } = pages;
  const { path: suppliesPagePath } = SUPPLIES_PAGE;

  return (
    <Fragment>
      <form onSubmit={handleSubmit} noValidate>
        <TextInput
          name="name"
          value={name}
          maxLength={255}
          labelText="Termék neve"
          errorMessage="A név megadása kötelező."
          onChange={handleTextChange}
        />
        <TextInput
          name="unit"
          value={unit}
          maxLength={255}
          labelText="Mennyiségi egység"
          errorMessage="A mennyiségi egység megadása kötelező."
          onChange={handleTextChange}
        />
        <NumberInput
          name="price"
          value={price}
          minValue={1}
          labelText="Ár"
          errorMessage="Az ár megadása kötelező."
          onChange={handleNumberChange}
        />
        <MerchantsDropdown value={merchantId} onChange={handleNumberChange} />
        {/* TODO: disable button if price is zero or any required input is not filled. */}
        <Button text="Mentés" />
      </form>
      {shouldShowSuccessModal && (
        <Modal
          title="Termék hozzáadása sikeres!"
          content={`A(z) ${name} nevű termék sikeresen nyilvántartásba került.`}
          buttonText="Hozzáadás folytatása"
          routingButtonText="Vissza a raktárkészlethez"
          redirectUrl={suppliesPagePath}
          onClick={handleSuccessModalClosed}
        />
      )}
      {shouldShowErrorModal && (
        <Modal
          title="Termék hozzáadása sikertelen!"
          content={`A(z) ${name} nevű termék nem került nyilvántartásba.`}
          buttonText="OK"
          isSuccessModal={false}
          onClick={handleErrorModalClosed}
        />
      )}
    </Fragment>
  );
};

export default CreateProductForm;
