## Create a data-driven, server-side Node/Express site
## create Node/Express server that serves HTML text
> make directory howto-node-express-server-side-rendering
> code howto-node-express-server-side-rendering
> set up a npm project with package.json file
 > npm init -y
> enable ES6 modules:   
> "type": "module",  
> set up a local repository  
> git init
> we will need Express  
> npm i express  
> initial commit  
> first create .gitignore  
> node_modules  
> initial commit  
> server.js 
#
import express from 'express';
 
const app = express();
const port = 3007;
 
app.get('/', (req, res) => {
    res.send('welcome to this <b>website</b>');
});
 
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
#
set up a better developing experience with nodemon  
npm i nodemon -D  
-D means to put it in devDependencies instead of dependences since e.g. Netlify doesn't need it to execute on the server and thus doesn't need to include it in the build  
i.e. we only need it for development, hence devDependences  
nodemon server.js  
make change, see it restart
package.json   
"start": "nodemon server.js"  
npm start  
note: it's better to install nodemon as a package in your   project like this instead of using it global  
reason: anyone who clones your repository is sure to have it when they execute npm start, whether they have nodemon installed globally or not
#
## Node/Express server that serves dynamic HTML
* npm i axios
* import axios from 'axios';
* get data from API
const nouns = ('url').data;

#
## display the data
notice Node now has top-level await
no need for IIFEs or async functions
but only when you use ES6 modules
another reason to use ES6 modules


