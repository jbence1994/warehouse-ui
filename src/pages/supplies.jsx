import React, { useEffect, useState } from "react";

import Card from "../components/common/card";
import AddSupplyEntryForm from "../components/addSupplyEntryForm";

import { getSupplies } from "../services/supplyService";

const Supplies = () => {
  const [supplies, setSupplies] = useState([]);

  useEffect(() => {
    const populateSupplies = async () => {
      const { data } = await getSupplies();
      setSupplies(data);
    };
    populateSupplies();
  }, []);

  return (
    <React.Fragment>
      <section className="row">
        {supplies.map(({ id, product, quantity }) => (
          <article key={id} className="col-sm-12 col-md-12 col-lg-4">
            <Card
              title={product.name}
              // TODO: call api to fetch photo of a product.
              imageSource="https://picsum.photos/500"
              imageAlt={product.name}
              contents={[
                { key: 1, value: `Ár: ${product.price}.- Forint` },
                { key: 2, value: `Egység: ${product.unit}` },
                { key: 3, value: `Kereskedő: ${product.merchant.name}` },
                {
                  key: 4,
                  // TODO: after supply quantity update re-render quantity.
                  value: `Jelenleg raktáron: ${quantity} ${product.unit}`,
                },
              ]}
            />
            <AddSupplyEntryForm
              name="quantity"
              productId={product.id}
              content={product.unit}
            />
          </article>
        ))}
      </section>
    </React.Fragment>
  );
};

export default Supplies;
