const mongoose = require('mongoose');

/* To create a schema for categories */
var categorySchema = new mongoose.Schema({
    catName : {                                // Category Name
        type : String, 
        required : true
    },
    rating : {                                 // Category Rating
        type : Number 
    }, 
    crAt  : {                                  // Created At
        type:Date, 
        default:Date.now 
    },
    isActive : {                                // Active Status
        type: String,                           // A : Active (default)
        default:'A'                             // D : DeActive
    },
    products : {
        type : Array,                           // Associated Product
        required : true
    }
});

/* Create the model */
mongoose.model('category',categorySchema);
  