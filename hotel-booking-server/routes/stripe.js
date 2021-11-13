import express from 'express';
import { createConnectAccount } from '../controller/stripe';
import { requiresignin } from '../middleware';
const router=express.Router();
router.post("/create-connect-account",requiresignin,createConnectAccount)
module.exports=router