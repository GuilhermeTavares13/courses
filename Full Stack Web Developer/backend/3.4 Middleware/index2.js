import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

/*app.use((req,res,next) => {

  next();
});*/

/*app.use((req,res,next) => {responses(req); next();});*/

app.use(responses());

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function responses() {
  return (req, res, next) => {
    console.log("Request method: ", req.method);
    console.log("Request url", req.url);
    next();
  }
}
