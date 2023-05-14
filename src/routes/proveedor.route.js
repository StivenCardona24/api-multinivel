import {Router } from "express";
const { check } = require('express-validator');

const {
    getProveedor,
    addProveedor,
    getOneProveedor,
    updateProveedor,
    deleteProveedor    

} = require ("../controllers/proveedor.controller")

const router = Router();

router.get("/", getProveedor);
router.post("/", addProveedor);
router.put("/:id",updateProveedor);
router.delete("/:id", deleteProveedor);
router.get("/:id", getOneProveedor);


export default router;