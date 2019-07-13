const mongoose = require('mongoose');

/* To connect mongoDB with node js */
mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true }, (err) => {
    if (!err)
        console.log("MongoDB connection succeeded.");
    else
        console.log("Error in DB connection : " + JSON.stringify(err, undefined, 2));
});

require('./products.model');
require('./categories.model');