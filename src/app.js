import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import router from "./router/index.js"

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors({ credentials: true, origin: true }))
app.use(router)

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.listen(1001, () => {
  console.log("Start server at port 1001.")
})
