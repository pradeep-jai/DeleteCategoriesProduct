# DeleteCategoriesProducts
Detele associated products of categories using Node js and MongoDB

# Before running this project, we have to do somethings
    1.We need postman tool for check the node js responce
    2.In that postman we have to set http methods (POST,GET,PUT) according to the API and also
    we have to set Headers, which is inside the Headers
        
        1.After setting http methods
        2.Inside the postman Headers label will be there
        3.Inside that Headers label, we have to set Content-Type key and value
            Content-Type    : application/json

    3.Inside the Body label , we have to pass our input (if it is POST method)
    4.Inside the Body label, 5 radio button will be there, we have choose last dropdown option (JSON(applicaion/json))

    5.last Hit Send, now we can see our output in down box.

# To run this project
    1.npm i
    2.install some Dependency directories
    3.node index.js
    4.Please read following things

# Project workflow
    1.First we have to create the products, for that i have used POST method

        ==> localhost:3019/api/createProducts

        Input : {
                    "prodName": "mouse",
                    "rate": 900
                }
    2.Second we have to create the categories, for that i have used POST method, 

        ==> localhost:3019/api/createCategories

        Input : {
        "catName" : "laptop",
        "rating" : 2,
        "products" : ["5d29f8d5c341512900958295","5d29fc79f042cb2d0012b104"]
        }

        for input we have to send created product _id for associate purpose (like), we can get from products collection (_id)

    3.Next thing , we have to delete associated products of categories and categories , for that i have been used PUT method

    ==> localhost:3019/api/deleteCategories

    Input : {
        	"catId" : "5d29fc4ef042cb2d0012b103"
    }

# I have attached the postman screenshot inside the helper folder for your reference, Please find that attachement..


