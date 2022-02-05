import React, { Fragment, useState } from "react";

import TextInput from "./common/textInput";
import Button from "./common/button";
import Modal from "./common/modal";

import { createMerchant } from "../services/merchantService";

import pages from "../config/app.skeleton";

const CreateMerchantForm = () => {
  const [merchant, setMerchant] = useState({
    name: "",
    city: "",
    email: "",
    phone: "",
  });

  const [shouldShowSuccessModal, setShouldShowSuccessModal] = useState(false);
  const [shouldShowErrorModal, setShouldErrorShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await createMerchant(merchant);
      setMerchant({ ...data });

      setShouldShowSuccessModal(true);
    } catch {
      setShouldErrorShowModal(true);
    }
  };

  const handleSuccessModalClosed = () => {
    setShouldShowSuccessModal(false);

    setMerchant({ name: "", city: "", email: "", phone: "" });
  };

  const handleErrorModalClosed = () => {
    setShouldErrorShowModal(false);
  };

  const handleTextChange = ({ currentTarget: input }) => {
    const updatedMerchant = { ...merchant };
    updatedMerchant[input.name] = input.value;
    setMerchant(updatedMerchant);
  };

  const { name, city, email, phone } = merchant;

  const { SUPPLIES_PAGE } = pages;
  const { path: suppliesPagePath } = SUPPLIES_PAGE;

  return (
    <Fragment>
      <form onSubmit={handleSubmit} noValidate>
        <TextInput
          name="name"
          value={name}
          maxLength={255}
          labelText="Kereskedő neve"
          errorMessage="A név megadása kötelező."
          onChange={handleTextChange}
        />
        <TextInput
          name="city"
          value={city}
          maxLength={255}
          labelText="Település"
          errorMessage="A település megadása kötelező."
          onChange={handleTextChange}
        />
        <TextInput
          name="email"
          value={email}
          maxLength={255}
          labelText="E-mail cím"
          onChange={handleTextChange}
        />
        <TextInput
          name="phone"
          value={phone}
          maxLength={25}
          labelText="Telefonszám"
          onChange={handleTextChange}
        />
        {/* TODO: disable button if price is zero or any required input is not filled. */}
        <Button text="Mentés" />
      </form>
      {shouldShowSuccessModal && (
        <Modal
          title="Kereskedő hozzáadása sikeres!"
          content={`A(z) ${name} nevű kereskedő sikeresen nyilvántartásba került.`}
          buttonText="Hozzáadás folytatása"
          routingButtonText="Vissza a raktárkészlethez"
          redirectUrl={suppliesPagePath}
          onClick={handleSuccessModalClosed}
        />
      )}
      {shouldShowErrorModal && (
        <Modal
          title="Kereskedő hozzáadása sikertelen!"
          content={`A(z) ${name} nevű kereskedő nem került nyilvántartásba.`}
          buttonText="OK"
          isSuccessModal={false}
          onClick={handleErrorModalClosed}
        />
      )}
    </Fragment>
  );
};

export default CreateMerchantForm;
