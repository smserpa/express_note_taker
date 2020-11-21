const shortid = require("shortid");
const fs = require("fs");
const path = require("path");

let db = require("../db.json");

module.exports = app => {
  app.get("/api/notes", (req, res) => {
    res.json(db);
  });

  app.post("/api/notes", (req, res) => {

    const newNote = {
      id: shortid.generate(),
      title: req.body.title,
      text: req.body.text,
    }

    db.push(newNote)
    fs.writeFileSync(path.join(__dirname, "../db.json"), JSON.stringify(db));
    res.json(db);

  
  });

  app.delete("/api/notes/:id", (req, res) => {

    db = db.filter((note)=> note.id !== req.params.id);
    console.log(db);
    fs.writeFile(path.join(__dirname, "../db.json"), JSON.stringify(db), err => {
      if (err) {
        res.sendStatus(400);
      }
      res.sendStatus(200);
    });
    console.log(db); 

    // db.deleteNote(req.params.id, err => {
    //   if (err) {
    //     res.writeHead(500, { "Content-Type": "text/plain" });
    //     return res.end("Server error");
    //   }

    //   res.end();
    // });
  });
};