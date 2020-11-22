const express = require("express");
const path = require("path");

module.exports = app => {
  app.use(
    express.static("public", {
      extensions: "html"
    })
  );

  app.get("/", req, res => {
    res.json(path.join(__dirname, "../public/index.html"));
  });  

  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/index.html"))
  );
};