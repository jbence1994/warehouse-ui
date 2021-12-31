import React, { useEffect, useState } from "react";

import ProductCard from "../components/productCard";
import CreateSupplyForm from "../components/createSupplyForm";

import { getProductPhotos } from "../services/productPhotoService";
import { getProducts } from "../services/productService";

const Supplies = () => {
  const [productPhotos, setProductPhotos] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const populateProducts = async () => {
      const { data } = await getProducts();
      setProducts(data);
    };

    const populateProductPhotos = async () => {
      const { data } = await getProductPhotos();
      setProductPhotos(data);
    };
    populateProductPhotos();
    populateProducts();
  }, []);

  return (
    <React.Fragment>
      {console.log(productPhotos)}
      <section className="row">
        {products.map(
          ({ id, name, price, unit, availableQuantity, merchant }) => (
            <article key={id} className="col-sm-12 col-md-12 col-lg-4">
              <ProductCard
                name={name}
                price={price}
                merchantName={merchant.name}
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
