# E-Commerce-API



# ABOUT
This is an E-commerce API made using Node.Js & MongoDB. 

STEPS TO USE THE API:
1) run "npm init" command on the terminal in this project directory
2) start the server using node app.js
3) Open Postman
4) Make a GET request on localhost:8000/products
5) The products should be visible

STEPS TO CREATE A NEW PRODUCT: 
1) start the server using node app.js
2) Open Postman
3) put http://localhost:8000/products/create as the URL. 
4) Select the Body tab below the URL textarea and then select x-www-form-URL-encoded
5) Add name & quantity as the keys and set the desired values for the keys.
6) Make a POST request.
7) If you receive a message saying a new product has been added successfully, you have done everything correctly.
8) The product is created. Check it out by making a GET request at http://localhost:8000/products

STEPS TO DELETE A PRODUCT:
1) copy the object ID of the product you want to delete.
2) add the ID after http://localhost:8000/products/
3) Make a DELETE request.
4) You will receive a message saying deleted successfully.

STEPS TO UPDATE THE QUANTITY OF A PRODUCT:
1) Copy the object ID of the product whose quantity you want to update
2) Put the id after localhost:8000/products/
3) After putting the id add /?number={x} in the URL where x is the number you want to increase or decrease the quantity.
4) the url should be looking like http://localhost:8000/products/id/?number=x
5) Make a POST request and you should get a message containing the updated product


# TECHSTACK
Node.Js, MongoDB
