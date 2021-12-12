import React, { useEffect, useState } from "react";

import Card from "../components/common/card";
import AddSupplyEntryForm from "../components/addSupplyEntryForm";

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
                  { key: 2, value: `Egység: ${unit}` },
                  { key: 3, value: `Kereskedő: ${merchant.name}` },
                  {
                    key: 4,
                    // TODO: after available quantity update, re-render quantity.
                    value: `Jelenleg raktáron: ${availableQuantity} ${unit}`,
                  },
                ]}
              />
              <AddSupplyEntryForm
                name="quantity"
                productId={id}
                content={unit}
              />
            </article>
          )
        )}
      </section>
    </React.Fragment>
  );
};

export default Supplies;
