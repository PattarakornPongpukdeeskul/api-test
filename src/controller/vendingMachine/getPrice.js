import { calculatePrice } from "../../model"

export const getPrice = async (req, res) => {
  const { purchase } = req.query
  if (purchase) {
    try {
      const purchasing = JSON.parse(purchase)
      const resBody = await calculatePrice(purchasing)

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
      message: "purchase missing",
    },
  })
}
