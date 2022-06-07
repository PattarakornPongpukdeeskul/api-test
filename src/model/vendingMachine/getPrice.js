import { priceData, promotion1, promotion2 } from "../../mock"

export const calculatePrice = async (allPurchasing) => {
  try {
    const allPurchasePrice = allPurchasing.map((purchasing) => {
      let dataProduct = priceData.find((item) => item.sku === purchasing.sku)
      
      return dataProduct.price * purchasing.amount
    })

    let sumPrice = 0
  
    for (let i = 0; i < allPurchasePrice.length; i++) {
      sumPrice += allPurchasePrice[i]
    }
  
    const discount1 = promotion1(allPurchasing)
    sumPrice += discount1
  
    const discount2 = promotion2(sumPrice)
    sumPrice += discount2
  
    let resBody = {
      isError: false,
      data: {
        finalPrice: sumPrice,
      },
      code: 200,
    }
  
    return resBody  
  } catch {
    let resBody = {
      isError: true,
      data: {
        message: 'wrong product sku',
      },
      code: 404,
    }
  
    return resBody  
  }
}
