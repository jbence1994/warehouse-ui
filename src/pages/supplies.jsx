import React, { useEffect, useState } from "react";

import Card from "../components/common/card";
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
              <Card
                title={name}
                // TODO: call api to fetch photo of a product.
                imageSource="https://picsum.photos/500"
                imageAlt={name}
                contents={[
                  { key: 1, value: `Ár: ${price}.- Forint` },
                  { key: 2, value: `Kereskedő: ${merchant.name}` },
                  {
                    key: 3,
                    // TODO: after available quantity update, re-render quantity.
                    value: `Jelenleg raktáron: ${availableQuantity} ${unit}`,
                  },
                ]}
              />
              <CreateSupplyForm name="quantity" productId={id} content={unit} />
            </article>
          )
        )}
      </section>
    </React.Fragment>
  );
};

export default Supplies;
