const mongoose = require('mongoose');

/* To create a schema for products */
mongoose.set('useCreateIndex', true)
var ProductSchema = new mongoose.Schema({
    prodName : {                                  // Product Name
        type : String, 
        required : true,
        unique : true
    },
    rate : {                                      // Product Amount
        type : Number 
    },
    crAt  : {                                     // Created At
        type:Date,
        default:Date.now 
    },
    isActive : {                                  // Active Status
        type: String,                             // A : Active (default)
        default:'A'                               // D : DeActive
    }
});

/* Create the model */
mongoose.model('product',ProductSchema)
  