import express from "express";
import { createList, deleteList, getList } from "../controller/activity.js";

const router = express.Router();

router.get("/activity", getList);
router.post("/activity", createList);
router.delete("/activity/:id", deleteList);
export default router;
