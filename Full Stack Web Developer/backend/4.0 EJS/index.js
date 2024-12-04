import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDate();
    let phrase = "Hey! It's";

    if (day === 0 || day === 6) {
        phrase = phrase + " the weekend, it's time to have fun!";
    } else {
        phrase = phrase + " a weekday, it's time to work hard";
    }

    res.render("index.ejs", {
        n: phrase
    });
});

app.listen (port, () => {
   console.log(`Listening on port ${port}`);
});