require("dotenv").config()
const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const path = require("path");


// Define storage for the images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // Folder where images will be stored
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    ); // Append timestamp to avoid filename collisions
  },
});

const upload = multer({ storage: storage });

const port = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));

// Remove this line: app.use(multer);

// login cashier section

app.post("/api/register/cashier", require("./src/routes/RegisterCashierRoutes"));

// User login endpoint
app.post("/api/login/cashier", require("./src/routes/loginCashierRoutes"));

// user stock section
app.post("/api/register/stock",require("./src/routes/RegisterStockRoutes"));


// login stock
app.post("/api/login/stock", require("./src/routes/loginStockRoutes"));
// -----------------------------------------------------------------------

// inventory section
// get single inventory item
app.get("/api/item/inventory/:id", require("./src/routes/getSingleInventoryRoutes"));

// get all inventory items
app.get("/api/all/item/inventory",require("./src/routes/AllInventoryItemsRoutes"));

// delete item inventory
app.delete("/api/delete/inventory/:id",require("./src/routes/deleteInventoryRoutes"));

// edit inventory
app.put("/api/update/inventory/:id", require("./src/routes/updateInventoryRoutes"));

// add item inventory
app.post("/api/add/item/inventory", require("./src/routes/addItemInventoryRoutes"));

//----------------------------------------------------------------------------------------

// prodcut section

// get single product
app.get("/api/products/:id",require("./src/routes/getSingleProductsRoutes"));

// get all products
app.get("/api/all/products",require("./src/routes/getAllProductsRoute"));

// delete product
app.delete("/api/delete/product/:id", require("./src/routes/deleteProductsRoutes"));

// edit product
app.put("/api/update/products/:id", upload.single("image"), require("./src/routes/updateProductsRoutes"));

// Add product with image
app.post("/api/add/product", upload.single("image"), require("./src/routes/addProductsRoutes"));

// ---------------------------------------------------------------------------------------- //

// edit cafe branch
app.put("/api/update/cafe/branch/:id", require("./src/routes/updateCafeBranchRoutes"));

// delete cafe branch
app.delete("/api/delete/cafe/branch/:id", require("./src/routes/deleteCafeBranchRoutes"));

// add cafe branch
app.post("/api/add/cafe/branch", require("./src/routes/addCafeBranchRoutes"));

// get all cafe branch
app.get("/api/cafe-branch", require("./src/routes/getAllCafeBranchRoutes"));
// get sinlge cafe branch
app.get("/api/cafe-branch/:id", require("./src/routes/getSingleCafeBranchRoutes"));

// ----------------------------------------------------------------------------------------- //

// orders section

// Get all orders with their items
app.post("/api/add/order",require("./src/routes/addOrderRoutes"));

// get all orders
app.get("/api/all/orders", require("./src/routes/getAllOrdersRoutes"));

// ------------------------------------------------------------------------------------------ //

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
