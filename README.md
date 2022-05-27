<h1 align="center">Inventory/Product Management</h1>
<p align="center">
<img width="332" align="center" alt="Screen Shot 2021-11-27" src="https://user-images.githubusercontent.com/21915538/170594929-e20d5b6d-037e-4b83-97e6-22ed92d04030.png">
</p>


#### 🚀 Objective

*  Build a MERN application to help manage inventories in an imaginary store.
*  Render a searchable list of products.
*  Collect product name, category, price and stock availabilty using forms.
*  Allow the user to add and delete products from the list. 

#### 🚀 Implementation
*  Simulate CRUD operations by outlining a static object and using event handlers to retrieve, create, and delete items.
*  Creating a MongoDB cluster for this object
*  Build an API in Node/Express that interacts with MongoDB. 
*  Connect application to Node end-points to perform CRUD operations

Product.js
* Imports Filters, ProductTable, and ProductForm components
* Defines the data model (JSON data)
* Renders a static heading and three components including <Filters>, <ProductTable>, and <ProductForm> in that order.

Filters.js
* Renders a form and a text box inside the form for search and filtering out our product list
 
ProductTable.js
* Imports ProductRow component.
* Maps our data model (represented as an object) to an array
* Iterates through that array (.forEach()) and pushes a programmatically constructed <ProductRow> component to a temporary array. Call it ‘rows’ to makes things easy
* Renders a table. Table should contain headings and render out product row (now represented by rows array)

ProductRow.js
* Renders a table row complete with <td> tags
* Each <td> tag will display name and price (retrieved from props), and a button to delete an item

ProductForm.js
* Renders a form that displays text boxes for name, category, and price. Also renders a submit button for ‘Save’.
 
App.js
* Imports Products component
* Renders the <Products> component

**Inventory Management Application** using *MERN* 

 Run the following commands in separate terminals
1. **node server.js** 
2. **npm start**
