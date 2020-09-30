
const express = require('express');
const app = express();
app.get("/", function (request, response) {
    response.send("Hey there");
});
app.get("/home", function (request, response) {
    response.send("Hey at home");
});
app.listen(3000, function () {
    console.log("Server started at port 3000")
});



