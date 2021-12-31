import React, { useEffect, useState } from "react";

import ProductCard from "../components/productCard";
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
          ({ id, name, price, unit, availableQuantity, merchant, photo }) => (
            <article key={id} className="col-sm-12 col-md-12 col-lg-4">
              <ProductCard
                name={name}
                price={price}
                merchantName={merchant.name}
                photoFileName={photo.fileName}
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
