import {Router } from "express";
const { check } = require('express-validator');

const {
    getCategoria,
    addCategoria,
    getOneCategoria,
    updateCategoria,
    deleteCategoria    



} = require ("../controllers/categoria.controller")

const router = Router();

router.get("/", getCategoria);
router.post("/", addCategoria);
router.put("/:id",updateCategoria);
router.delete("/:id", deleteCategoria);
router.get("/:id", getOneCategoria);


export default router;