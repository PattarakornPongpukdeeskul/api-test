import express from "express"
import { getPrice, createPayment } from "../../controller"

const vendingMachine = express.Router()

vendingMachine.get("/", getPrice)
vendingMachine.post("/", createPayment)

export default vendingMachine
