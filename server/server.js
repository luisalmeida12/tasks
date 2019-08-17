const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const TaskRoutes = require('./routes/Task');
const mongoose = require('mongoose');
const config = require('./config/keys.config');

app.use(bodyParser.json());
app.use('api/tasks', TaskRoutes);

mongoose.connect(config.mongodbUri, {useNewUrlParser: true})
.then(() => console.log('Database Connected'))
.catch((err) => console.log('Error on database connection ', err));
mongoose.set('useFindAndModify', false);

const port = process.env.PORT || 3001;

app.listen(port, function(){
    console.log('Server listening on port ' + port);
});
