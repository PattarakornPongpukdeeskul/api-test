import express from "express"
import vendingMachine from "./v1/vending-machine"

const router = express.Router()

router.use("/v1/vending-machine", vendingMachine)

export default router
