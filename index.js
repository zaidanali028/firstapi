//https://dev.to/ganeshmani/building-rest-api-using-node-express-and-sequelize-21hc
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

require('./server/routes')(app);

const PORT =  5050||process.env.PORT
app.listen(PORT,() => {
    console.log(`Server running onPORT: ${PORT}`)
})