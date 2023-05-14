import {Router } from "express";
const { check } = require('express-validator');

const {
    getNivel,
        addNivel,
        getOneNivel,
        updateNivel,
        deleteNivel    
  



} = require ("../controllers/nivel.controller")

const router = Router();

router.get("/", getNivel);
router.post("/", addNivel);
router.put("/:id",updateNivel);
router.delete("/:id", deleteNivel);
router.get("/:id", getOneNivel);


export default router;