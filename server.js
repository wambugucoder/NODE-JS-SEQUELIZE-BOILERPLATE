const express = require('express');
const bodyParser = require("body-parser");
const Api=require("./controller/Api")
const app = express();

//BODY-PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//DB CONNECTION
require("./database/connection");
//ROUTES
app.use('/api',Api);
//PORT
const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server running on port ${port} 🔥`));