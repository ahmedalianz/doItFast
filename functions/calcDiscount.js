function calcDiscount(basePrice, discountPrice, quantity, minCharge) {
  let totalFees = 0;
  if (quantity > 1) {
    totalFees += quantity * discountPrice;
  } else {
    totalFees += +basePrice;
  }
  totalFees += +minCharge;
  return totalFees;
}
module.exports = calcDiscount;
