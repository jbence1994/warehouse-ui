import React, { useEffect, useState } from "react";

import ProductCard from "../components/productCard";
import CreateSupplyForm from "../components/createSupplyForm";

import { getProducts } from "../services/productService";

const Supplies = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const populateProducts = async () => {
      try {
        const { data } = await getProducts();
        setProducts(data);
      } catch (e) {
        window.location.href = "/error";
      }
    };

    populateProducts();
  }, []);

  return (
    <section className="row">
      {products.map((product) => (
        <article key={product.id} className="col-sm-12 col-md-12 col-lg-4">
          <ProductCard product={product} />
          <CreateSupplyForm
            name="quantity"
            productId={product.id}
            availableQuantity={product.availableQuantity}
            unit={product.unit}
          />
        </article>
      ))}
    </section>
  );
};

export default Supplies;
