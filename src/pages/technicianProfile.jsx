import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import TechnicianOrdersTable from "../components/technicianOrdersTable";

import { getTechnician } from "../services/technicianService";

const TechnicianProfile = () => {
  const { id } = useParams();

  const [technician, setTechnician] = useState([]);

  useEffect(() => {
    const populateTechnician = async () => {
      const { data } = await getTechnician(id);
      setTechnician(data);
    };

    populateTechnician();
  }, [id]);

  return (
    <section className="row">
      <article className="col-sm-12 col-md-12 col-lg-6">
        <h1>Technician profile with id #{technician.id}</h1>
        <p>First name: {technician.firstName}</p>
        <p>Last name: {technician.lastName}</p>
        <p>Email: {technician.email}</p>
        <p>Phone: {technician.phone}</p>
        <p>Balance: {technician.balance}</p>
      </article>
      <article className="col-sm-12 col-md-12 col-lg-6">
        <TechnicianOrdersTable />
      </article>
    </section>
  );
};

export default TechnicianProfile;
