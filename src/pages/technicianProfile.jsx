import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import TechnicianCard from "../components/technicianCard";
import TechnicianOrdersTable from "../components/technicianOrdersTable";
import TechnicianBalancesTable from "../components/technicianBalancesTable";

import { getTechnician } from "../services/technicianService";

const TechnicianProfile = () => {
  const { id: idRouteParameter } = useParams();

  const [technician, setTechnician] = useState({
    id: idRouteParameter,
    name: "",
    email: "",
    phone: "",
    balance: 0,
    photoFileName: "",
  });

  useEffect(() => {
    const populateTechnician = async () => {
      try {
        const { data } = await getTechnician(idRouteParameter);
        setTechnician(data);
      } catch (e) {
        window.location.href = "/error";
      }
    };

    populateTechnician();
  }, [idRouteParameter]);

  const { id } = technician;

  return (
    <section className="row">
      <article className="col-sm-12 col-md-12 col-lg-4">
        <TechnicianCard technician={technician} />
      </article>
      <article className="col-sm-12 col-md-12 col-lg-4">
        <TechnicianOrdersTable technicianId={id} />
      </article>
      <article className="col-sm-12 col-md-12 col-lg-4">
        <TechnicianBalancesTable technicianId={id} />
      </article>
    </section>
  );
};

export default TechnicianProfile;
