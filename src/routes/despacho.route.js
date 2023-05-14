import {Router } from "express";
const { check } = require('express-validator');

const {
    getDespacho,
    addDespacho,
    getOneDespacho,
    updateDespacho,
    deleteDespacho    


} = require ("../controllers/despacho.controller")

const router = Router();

router.get("/", getDespacho);
router.post("/", addDespacho);
router.put("/:id",updateDespacho);
router.delete("/:id", deleteDespacho);
router.get("/:id", getOneDespacho);


export default router;