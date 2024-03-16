const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://Jerome:nEWdIHqHXCb1Gs21@cluster0.top9reg.mongodb.net/blackboard';

mongoose.connect(connectionString, {connectTimeoutMS: 2000})
    .then(() => console.log('Database is connected'))
    .catch(error => console.log(error));