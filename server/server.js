import express from "express";
//import products from './data/Products.js';
import dotenv from "dotenv";
import connectDatabase from './config/MongoDb.js';
import ImportData from "./Dataimport.js";

dotenv.config();
connectDatabase();
const app = express();

// //load product from server
// app.get("/api/products",(req,res)=>{
//     res.json(products)
// });

// //single product from server
// app.get("/api/products/:id",(req,res)=>{
//     const product = products.find((p) => p._id === req.params.id);
//     res.json(product);
// });

//API
app.get("/api/import/", ImportData);

app.get("/",(req,res)=>{
    res.send("API is Running....");
});

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`));