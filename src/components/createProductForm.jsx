import React, { Fragment, useState } from "react";

import TextInput from "./common/textInput";
import NumberInput from "./common/numberInput";
import MerchantsDropdown from "./merchantsDropdown";
import Submit from "./common/submit";
import Modal from "./common/modal";

import { createProduct } from "../services/productService";

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

  const handleModalClosed = () => {
    setShouldShowSuccessModal(false);
    setShouldErrorShowModal(false);

    setProduct({ name: "", unit: "", price: 0, merchantId: 0 });
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

  return (
    <Fragment>
      <form onSubmit={handleSubmit} noValidate>
        <TextInput
          labelText="Termék neve"
          name="name"
          value={name}
          errorMessage="A név megadása kötelező."
          onChange={handleTextChange}
        />
        <TextInput
          labelText="Mennyiségi egység"
          name="unit"
          value={unit}
          errorMessage="A mennyiségi egység megadása kötelező."
          onChange={handleTextChange}
        />
        <NumberInput
          labelText="Ár"
          name="price"
          value={price}
          errorMessage="Az ár megadása kötelező."
          onChange={handleNumberChange}
        />
        <MerchantsDropdown value={merchantId} onChange={handleNumberChange} />
        <Submit text="Mentés" />
      </form>
      {shouldShowSuccessModal && (
        <Modal
          title="Termék hozzáadása sikeres!"
          content={`A(z) ${product.name} nevű termék sikeresen nyilvántartásba került.`}
          buttonText="Hozzáadás folytatása"
          routingButtonText="Vissza a raktárkészlethez"
          redirectUrl="/raktarkeszlet"
          onClick={handleModalClosed}
        />
      )}
      {shouldShowErrorModal && (
        <Modal
          title="Termék hozzáadása sikertelen!"
          content={`A(z) ${product.name} nevű termék nem került nyilvántartásba.`}
          buttonText="OK"
          isSuccessModal={false}
          onClick={handleModalClosed}
        />
      )}
    </Fragment>
  );
};

export default CreateProductForm;
