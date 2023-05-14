import {Router } from "express";
const { check } = require('express-validator');

const {
    
    login


} = require ("../controllers/sesion.controller")

const router = Router();

router.post("/email,password", login);


export default router;