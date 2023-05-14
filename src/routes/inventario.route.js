import {Router } from "express";
const { check } = require('express-validator');

const {
    getInventario,
    addInventario,
    getOneInventario,
    updateInventario,
    deleteInventario    




} = require ("../controllers/inventario.controller")

const router = Router();

router.get("/", getInventario);
router.post("/", addInventario);
router.put("/:id",updateInventario);
router.delete("/:id", deleteInventario);
router.get("/:id", getOneInventario);


export default router;