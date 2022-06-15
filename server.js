import express from "express";
import axios from "axios";

const app = express();
const port = 3009;
const employees = (
    await axios.get("https://edwardtanguay.netlify.app/share/employees.json")
).data;
//man kann await in node vervenden ohne iffi oder use conrext zu haben
app.get("/", (req, res) => {
    res.send(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>info site</title>
            
        </head>
        <body>
            
      
        <h1>info site</h1>
        <h2>there are ${employees.length} employees</h2>
        <ul>${employees
            .map(
                (employee) =>
                    `<li> ${employee.lastName}</li>`
            )
            .join("")}</ul>  </body>
        </html>`
    );
});
console.log(employees);
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
