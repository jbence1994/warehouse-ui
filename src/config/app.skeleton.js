export const APPLICATION_NAME = "Warehouse";

const pages = {
  HOME_PAGE: {
    name: "Főoldal",
    path: "/",
  },
  SUPPLIES_PAGE: {
    name: "Raktárkészlet",
    path: "/raktarkeszlet",
  },
  PRODUCTS_PAGE: {
    name: "Termékek",
    path: "/termek/uj",
  },
  ORDERS_PAGE: {
    name: "Vásárlás",
    path: "/vasarlas",
  },
  TECHNICIANS_PAGE: {
    name: "Technikus info",
    path: "/technikus-info",
  },
  NOT_FOUND_PAGE: {
    name: "A keresett oldal nem található",
    path: "/notFound",
  },
  ERROR_PAGE: {
    name: "Hiba történt",
    path: "/error",
  },
};

export default pages;
