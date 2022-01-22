import React, { useEffect, useState } from "react";

import ProductCard from "../components/productCard";
import CreateSupplyForm from "../components/createSupplyForm";
import UploadPhotoForm from "../components/uploadPhotoForm";

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
    <section className="row">
      {products.map(
        ({ id, name, price, unit, availableQuantity, merchant, photo }) => (
          <article key={id} className="col-sm-12 col-md-12 col-lg-4">
            <ProductCard
              name={name}
              price={price}
              merchantName={merchant.name}
              photoFileName={photo ? photo.fileName : ""}
            />
            <CreateSupplyForm
              name="quantity"
              productId={id}
              availableQuantity={availableQuantity}
              unit={unit}
            />
            {!photo && <UploadPhotoForm productId={id} />}
          </article>
        )
      )}
    </section>
  );
};

export default Supplies;
