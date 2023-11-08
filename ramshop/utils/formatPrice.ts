export const formatPrice = (amount: number) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "DTN",
  }).format(amount);
};
