const mongoose = require("mongoose")
const leModel = require("./../model.js")
mongoose.connect("mongodb://localhost:27017/test")
module.exports = async function (context, req) {
  const response = (context.res = { "Content-Type": "application/json" })
  if (req.method == "POST") {
    if (req.body && req.body.message) {
      const { nom, prenom, datedenaissance } = req.body
      console.log(nom)
      const newpost = new leModel({ nom, prenom, datedenaissance })

      try {
        await newpost.save(req.body)
        res.status(200).json(newpost)
      } catch (error) {
        res.status(409).json({ message: error.message })
      }
    }
  }
}
