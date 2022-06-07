export const promotion1 = (allProductPurchase) => {
  console.log(allProductPurchase)
  if (allProductPurchase.some(e => e.sku === 'a') && allProductPurchase.some(e => e.sku === 'b')) {
    const productCounterA = [...allProductPurchase].filter(
      x => x.sku === "a"
    )[0].amount
    console.log('productCounterA',productCounterA)
    const productCounterB = [...allProductPurchase].filter(
      x => x.sku === "b"
    )[0].amount

    if (productCounterA >= productCounterB) {
      return -50 * productCounterB
    }

    return -50 * productCounterA
  }

  return 0
}

export const promotion2 = (price) => {
  if (price > 200) {
    return - 0.1 * price
  }

  return 0
}
