// dependencies
var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

// set ups express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static directory
app.use(express.static(__dirname + "/public"));

// Start our server
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});