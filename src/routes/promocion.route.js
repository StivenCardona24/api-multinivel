import {Router } from "express";
const { check } = require('express-validator');

const {
    getPromocion,
    addPromocion,
    getOnePromocion,
    updatePromocion,
    deletePromocion    



} = require ("../controllers/promocion.controller")

const router = Router();

router.get("/", getPromocion);
router.post("/", addPromocion);
router.put("/:id",updatePromocion);
router.delete("/:id", deletePromocion);
router.get("/:id", getOnePromocion);


export default router;