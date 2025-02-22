import express from "express";
import Item from "../models/item.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    next(err);
  }
});

export default router;