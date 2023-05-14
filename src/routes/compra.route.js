import {Router } from "express";
const { check } = require('express-validator');

const {
    getCompra,
    addCompra,
    getOneCompra,
    updateCompra,
    deleteCompra    




} = require ("../controllers/compra.controller")

const router = Router();

router.get("/", getCompra);
router.post("/", addCompra);
router.put("/:id",updateCompra);
router.delete("/:id", deleteCompra);
router.get("/:id", getOneCompra);


export default router;