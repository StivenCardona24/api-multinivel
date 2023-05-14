import {Router } from "express";
const { check } = require('express-validator');

const {
    getComision,
    addComision,
    getOneComision,
    updateComision,
    deleteComision    





} = require ("../controllers/comision.controller")

const router = Router();

router.get("/", getComision);
router.post("/", addComision);
router.put("/:id",updateComision);
router.delete("/:id", deleteComision);
router.get("/:id", getOneComision);


export default router;