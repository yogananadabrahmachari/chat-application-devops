const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017", {
  mongoose.connect("mongodb+srv://chari:root@chari.6iui6ar.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to Database");
});
 