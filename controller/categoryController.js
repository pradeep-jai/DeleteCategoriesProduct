const mongoose = require('mongoose');
const Category = mongoose.model('category');
const ProdController = require('./productController');

/* 
    Purpose : To create categories
    Input : categories Name and categories Rating
    Output : Created categories
*/
module.exports.createCategories = async(req, res) => {
    if (!req.body.catName || !req.body.products) {
        res.status(500).json({
            "data ": null,
            "msg ": "categories Name  and products Array is mandatory!"
        }); 
        return;
    };

    if (req.body.products && req.body.products.length == 0) {
        res.status(500).json({
            "data ": null,
            "msg ": "We must give the created product _id!"
        }); 
        return;
    }

    try {
        let catRecord =  await Category.find({catName : req.body.catName});
        /* Checking for duplicate */
        if (catRecord.length == 0) {
            var category = new Category();
            category.catName = req.body.catName;
            category.rating = req.body.rating;
            category.crAt = new Date();
            category.products = req.body.products;

            category.save((err, docs) => {
                if (!err)
                    res.status(200).json(docs)
                else 
                    res.status(500).json(err);
            })
        } else {
            res.json({
                "msg ": "This category has already been saved..!"
            }); 
            return;
        };        
    }catch(error) {
         res.json(error);
    }
    
};

/* 
    Purpose  : To delete the categories
    Input    : categories _id
    Output   : Deleted categories
    Note     : If we want to delete any records, we shouldn't delete that record, we have to set a "Status"
               # isActive = A(Active)  
               # isActive = D(DeActive)
*/
module.exports.deleteCategories = async(req, res) => {
    try {
        let resObj = {};
        var catDocs = await Category.findOne({_id : req.body.catId});  // It will get the categories records
        await Category.updateOne({_id : req.body.catId},{"$set" : {isActive : "D"}});  // It will update the categories records if we want to delete any categories records
        resObj.dateledCatRecord = await Category.findOne({_id : req.body.catId});  // It will get the deleted categories records

        /* To delete associated products of categories */
        if(catDocs && Object.keys(catDocs).length > 0 && catDocs.products && catDocs.products.length > 0) {
            var deletedProRecords = await ProdController.deleteProducts(catDocs.products)
            if (deletedProRecords.length > 0) {
                resObj.deletedProRecords = deletedProRecords;
            } else {
                res.json({
                    "msg ": "Please check & give the correct product _id, There is no data in product collection.."
                }); 
                return;
            }
            
        }else {
            throw new Error("No Produts were found for this category...")
        }
        res.status(200).json(resObj)
    }catch (error) {
        return res.status(500).json(error);
    }
};