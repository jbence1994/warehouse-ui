const formatCurrency = (currency) => {
  const formattedCurrency = { ...currency };

  return formattedCurrency.append(".- Forint");
};

const formatDate = (date) => {
  const formattedDate = { ...date };

  return formattedDate.toString().replace("T", " ");
};

export { formatCurrency, formatDate };
