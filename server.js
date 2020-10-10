const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname,"./public"), {extensions: "html"}));




app.listen(PORT, () => 
    console.log(`Server listening at http://localhost:${PORT}`));

fs.readFile("db.json", (error) => {
    if (error) {
        console.log(error);
    }else{
        console.log("Read notes file");
    }
});





