import { createPaymentAndChange } from "../../model"

export const createPayment = async (req, res) => {
  const { price, payment } = req.body
  if (price && payment) {
    try {
      const resBody = await createPaymentAndChange(price, payment)

      return res.status(resBody.code).json(resBody)
    } catch (error) {
      return res.status(403).json({
        isError: true,
        data: {
          message: "wrong format",
        },
      })
    }
  }

  return res.status(403).json({
    isError: true,
    data: {
      message: "price or payment missing",
    },
  })
}
