import React, { Fragment, useState } from "react";

import TextInput from "./common/textInput";
import Submit from "./common/submit";
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
          labelText="Kereskedő neve"
          name="name"
          value={name}
          errorMessage="A név megadása kötelező."
          onChange={handleTextChange}
        />
        <TextInput
          labelText="Település"
          name="city"
          value={city}
          errorMessage="A település megadása kötelező."
          onChange={handleTextChange}
        />
        <TextInput
          labelText="E-mail cím"
          name="email"
          value={email}
          onChange={handleTextChange}
        />
        <TextInput
          labelText="Telefonszám"
          name="phone"
          value={phone}
          onChange={handleTextChange}
        />
        <Submit text="Mentés" />
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
