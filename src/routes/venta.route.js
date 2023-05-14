import {Router } from "express";
const { check } = require('express-validator');

const {
    getVenta,
    addVenta,
    getOneVenta,
    updateVenta,
    deleteVenta




} = require ("../controllers/venta.controller")

const router = Router();

router.get("/", getVenta);
router.post("/", addVenta);
router.put("/:id",updateVenta);
router.delete("/:id", deleteVenta);
router.get("/:id", getOneVenta);


export default router;