import {Router } from "express";
const { check } = require('express-validator');

const {
    crearCarpeta,
    asignarTablespaceATabla



} = require ("../controllers/tablespace.controller")

const router = Router();


router.post("/", crearCarpeta);
router.put("/:",asignarTablespaceATabla);



export default router;