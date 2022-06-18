import express from "express";
import { siteView } from "./views.js";
import { siteModel } from "./models.js";

const app = express();
const port = 3009;
app.use(express.static('public'))


//man kann await in node vervenden ohne iffi oder use conrext zu haben
app.get("/", (req, res) => {
    res.send(siteView(siteModel));
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
