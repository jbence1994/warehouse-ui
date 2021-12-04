import React from "react";

import Card from "../components/common/card";

const Supplies = () => {
  // TODO: call api and clean up hard-coded data.
  const supplies = [
    {
      id: 1,
      product: {
        name: "Product #1",
        price: 100,
        unit: "darab",
        merchant: { name: "AcmeCorp." },
      },
      quantity: 10,
    },
    {
      id: 2,
      product: {
        name: "Product #2",
        price: 110,
        unit: "darab",
        merchant: { name: "AcmeCorp." },
      },
      quantity: 20,
    },
    {
      id: 3,
      product: {
        name: "Product #3",
        price: 120,
        unit: "darab",
        merchant: { name: "AcmeCorp." },
      },
      quantity: 30,
    },
  ];

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
          </article>
        ))}
      </section>
    </React.Fragment>
  );
};

export default Supplies;
