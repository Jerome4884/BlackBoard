const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://@cluster.top9reg.mongodb.net/blackboard';

mongoose.connect(connectionString, {connectTimeoutMS: 2000})
    .then(() => console.log('Database is connected'))
    .catch(error => console.log(error));
