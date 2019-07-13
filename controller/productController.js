const mongoose = require('mongoose');
const Product = mongoose.model('product');

/* 
    Purpose : To create products
    Input : Product Name and product Rate
    Output : Created product
*/
module.exports.createProducts = async(req, res) => {
    if (!req.body.prodName) {
        res.status(500).json({
            "data ": null,
            "msg ": "Product Name is mandatory!"
        }); 
        return;
    };
    
    try {
        let prodRecords = await Product.find({prodName : req.body.prodName});
        /* Checking for duplicate */
        if (prodRecords.length == 0) {
            var product = new Product();
            product.prodName = req.body.prodName;
            product.rate = req.body.rate;
            product.crAt = new Date();
            product.save((err, docs) => {
                if (!err)
                    res.status(200).json(docs)
                else 
                res.status(500).json(err);
            })
        } else {
            res.json({
                "msg ": "This Product has already been saved..!"
            }); 
            return;
        };
        
    }catch (error) {
        res.send(error);
    }
};

/* 
    Purpose  : To delete the products
    Input    : Product _id
    Output   : Deleted products
    Note     : If we want to delete any records, we shouldn't delete that record, we have to set a "Status"
               # isActive = A(Active)  
               # isActive = D(DeActive)
*/
exports.deleteProducts = async(input) => {
    try {
        await Product.updateMany({_id : {$in : input}},{$set : {isActive : "D"}});   // This code will update the isActive status
        let delRcrds = await Product.find({_id : {$in : input},isActive : "D"});    // It will get the deleted records
        if (delRcrds.length == 0) {
            return new Error("Please check & give the correct product _id, There is no data in product collection..")
        } else {
            return  delRcrds;
        };        
    } catch(error) {
        return error;
    };    
};