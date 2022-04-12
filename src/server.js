var express = require('express'),
    app = express(),
    bodyparser = require('body-parser'),
    connectdb = require('../config/database/mongodb').connect,
    swagger_ui = require('../lib/swagger-ui'),
    swagger_doc = require('../lib/swagger-ui/api_docs.json')

require('./app/routes/routes')(app);

app.use(bodyparser.json());

app.use('/swagger/api', swagger_ui.serve, swagger_ui.setup(swagger_doc));

app.listen(process.env.PORT, () => {
    console.log("Server is running on port: " + process.env.PORT);
    connectdb;
});