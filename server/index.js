const express = require("express");
const app = express();
const path = require("path");
const webpackConfig = require("../webpack.config.js");
const webpack = require("webpack");
const webpackMiddleware = require("webpack-dev-middleware");



app.listen(3000, () => {
    console.log("Server is listening on port number 3000");
})

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/public/index.html"))
})

