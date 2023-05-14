import {Router } from "express";
const { check } = require('express-validator');

const {
    getProducto,
    addProducto,
    getOneProducto,
    updateProducto,
    deleteProducto



} = require ("../controllers/producto.controller")

const router = Router();

router.get("/", getProducto);
router.post("/", addProducto);
router.put("/:id",updateProducto);
router.delete("/:id", deleteProducto);
router.get("/:id", getOneProducto);


export default router;