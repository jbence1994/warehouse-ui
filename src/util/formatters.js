const formatCurrency = (currency) => {
  const formattedCurrency = { value: currency };

  return `${formattedCurrency.value}.- Forint`;
};

const formatDate = (date) => {
  const formattedDate = { ...date };

  return formattedDate.toString().replace("T", " ");
};

export { formatCurrency, formatDate };
