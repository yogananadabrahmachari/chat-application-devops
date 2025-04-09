require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://chari:chari@chari.6iui6ar.mongodb.net/chatapp?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to Database");
});
