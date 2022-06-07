import { v4 as uuidv4 } from "uuid"

export const createPaymentAndChange = async (price, payment) => {
  const change = payment - price
  if (change >= 0) {
    const getChange = (change) => {
      const eachChange = {
        1: 0,
        2: 0,
        5: 0,
        10: 0,
        20: 0,
        50: 0,
        100: 0,
        500: 0,
        1000: 0,
      }

      while (change > 0) {
        if (change > 999) {
          eachChange["1000"] += 1
          change -= 1000

        } else if (change > 499) {
          eachChange["500"] += 1
          change -= 500

        } else if (change > 99) {
          eachChange["100"] += 1
          change -= 100

        } else if (change > 49) {
          eachChange["50"] += 1
          change -= 50

        } else if (change > 19) {
          eachChange["20"] += 1
          change -= 20

        } else if (change > 9) {
          eachChange["10"] += 1
          change -= 10

        } else if (change > 4) {
          eachChange["5"] += 1
          change -= 5

        } else if (change > 1) {
          eachChange["2"] += 1
          change -= 2

        } else {
          eachChange["1"] += 1
          change -= 1
        }
      }

      return eachChange
    }

    const allChange = getChange(change)
    const idPayment = uuidv4()

    let resBody = {
      isError: false,
      data: {
        id: idPayment,
        price,
        payment,
        change,
        change: allChange,
      },
      code: 201,
    }

    return resBody
  }

  const moneyLack = price - payment
  let resBody = {
    isError: true,
    data: {
      message: "money not enough",
      moneyLack: moneyLack,
    },
    code: 403,
  }

  return resBody
}
