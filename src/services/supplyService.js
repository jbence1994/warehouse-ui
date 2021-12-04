import restClient from "axios";

const getSupplies = () => {
  return [
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
};

export { getSupplies };
