export const siteView = ({ employees,  books }) => {
    return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="main.css" />
            <title>info site</title>
           
        </head>
        <body>
            
      
        <h1>info site</h1>
        <h2>there are ${employees.length} employees</h2>
        <ul>${employees
            .map((employee) => `<li> ${employee.lastName}</li>`)
            .join("")}</ul>  
         <img src="images/" alt="" />
       
     
            </body>

        </html>`;
};
