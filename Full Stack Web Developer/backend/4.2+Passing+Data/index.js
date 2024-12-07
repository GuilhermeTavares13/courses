import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("./index.ejs",{
    phrase : "Enter your name"
  });
});

app.post("/submit", (req, res) => {
  res.render('./index.ejs',
      {
        phrase: "There are "
            + (req.body["fName"].replace(/\s/g, '').length + req.body["lName"].replace(/\s/g, '').length)
            + " letters in you name."
      }
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
