import React, { Fragment, useState } from "react";

import TextInput from "./common/textInput";
import NumberInput from "./common/numberInput";
import MerchantsDropdown from "./merchantsDropdown";
import Submit from "./common/submit";
import SuccessModal from "./common/successModal";
import ErrorModal from "./common/errorModal";

import { createProduct } from "../services/productService";

const CreateProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    unit: "",
    price: 0,
    merchantId: 0,
  });

  const [shouldShowModal, setShouldShowModal] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await createProduct(product);
      setProduct({ ...data });
      setShouldShowModal(true);
    } catch (e) {
      console.log(e.message); // TODO: show error modal
    }
  };

  const handleModalClosed = () => {
    setShouldShowModal(false);
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

  // TODO: set back condition to: shouldShowModal
  const displayModal = true ? (
    <SuccessModal
      shouldShow={shouldShowModal}
      headerTitle="Termék hozzáadása sikeres!"
      bodyContent={`A(z) ${product.name} nevű termék sikeresen nyilvántartásba került.`}
      footerButtonText="Hozzáadás folytatása"
      footerRoutingButtonText="Vissza a raktárkészlethez"
      footerRoutingButtonRoute="/raktarkeszlet"
      onClick={handleModalClosed}
    />
  ) : (
    <ErrorModal
      shouldShow={shouldShowModal}
      headerTitle="Termék hozzáadása sikertelen!"
      bodyContent={`A(z) ${product.name} nevű termék nem került nyilvántartásba.`}
      buttonText="OK"
      onClick={handleModalClosed}
    />
  );

  return (
    <Fragment>
      <h6>
        <code>{JSON.stringify(product)}</code>
      </h6>
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
          labelText="Termék ára"
          name="price"
          value={price}
          errorMessage="Az ár megadása kötelező."
          onChange={handleNumberChange}
        />
        <MerchantsDropdown value={merchantId} onChange={handleNumberChange} />
        <Submit text="Mentés" />
      </form>
      {displayModal}
    </Fragment>
  );
};

export default CreateProductForm;

// TODO: if modal class is applied to Modal component, it's disappearing. Fix this to proper behaviour.
