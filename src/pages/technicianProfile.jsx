import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import TechnicianOrdersTable from "../components/technicianOrdersTable";
import TechnicianBalancesTable from "../components/technicianBalancesTable";

import { getTechnician } from "../services/technicianService";

const TechnicianProfile = () => {
  const { id } = useParams();

  const [technician, setTechnician] = useState({});

  useEffect(() => {
    const populateTechnician = async () => {
      const { data } = await getTechnician(id);
      setTechnician(data);
    };

    populateTechnician();
  }, [id]);

  return (
    <section className="row">
      <article className="col-sm-12 col-md-12 col-lg-4">
        <p>Név: {technician.name}</p>
        <p>E-mail cím: {technician.email}</p>
        <p>Telefonszám: {technician.phone}</p>
        <p>Egyenleg: {technician.balance} Forint</p>
      </article>
      <article className="col-sm-12 col-md-12 col-lg-4">
        <TechnicianOrdersTable technicianId={technician.id} />
      </article>
      <article className="col-sm-12 col-md-12 col-lg-4">
        <TechnicianBalancesTable technicianId={technician.id} />
      </article>
    </section>
  );
};

export default TechnicianProfile;
