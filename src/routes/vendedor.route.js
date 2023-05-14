import {Router } from "express";
const { check } = require('express-validator');

const {
 
    getVendedor,
    addVendedor,
    getOneVendedor,
    updateVendedor,
    deleteVendedor



} = require ("../controllers/vendedor.controller")

const router = Router();

router.get("/", getVendedor);
router.post("/", addVendedor);
router.put("/:id",updateVendedor);
router.delete("/:id", deleteVendedor);
router.get("/:id", getOneVendedor);


export default router;