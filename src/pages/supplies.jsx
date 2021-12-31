import React, { useEffect, useState } from "react";

import Card from "../components/common/card";
import CreateSupplyForm from "../components/createSupplyForm";

import { getProducts } from "../services/productService";

const Supplies = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const populateProducts = async () => {
      const { data } = await getProducts();
      setProducts(data);
    };
    populateProducts();
  }, []);

  return (
    <React.Fragment>
      <section className="row">
        {products.map(
          ({ id, name, price, unit, availableQuantity, merchant }) => (
            <article key={id} className="col-sm-12 col-md-12 col-lg-4">
              <Card
                title={name}
                // TODO: call api to fetch photo of a product.
                imageSource="https://picsum.photos/500"
                imageAlt={name}
                contents={[
                  { key: 1, value: `Ár: ${price}.- Forint` },
                  { key: 2, value: `Kereskedő: ${merchant.name}` },
                ]}
              />
              <CreateSupplyForm
                name="quantity"
                productId={id}
                availableQuantity={availableQuantity}
                unit={unit}
              />
            </article>
          )
        )}
      </section>
    </React.Fragment>
  );
};

export default Supplies;
