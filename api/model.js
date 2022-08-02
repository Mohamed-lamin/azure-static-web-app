const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
  nom: String,
  prenom: String,
  datedenaissance: String,
})
module.exports.leModel = mongoose.model("leModel", postSchema)
