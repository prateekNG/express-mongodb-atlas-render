import express from "express";
import Item from "../models/item.js";

const router = express.Router();

// GET route to fetch all items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    next(err);
  }
});

// POST route to add a new item
router.post("/", async (req, res, next) => {
  try {
    const newItem = new Item({
      name: req.body.name,
      quantity: req.body.quantity
    });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    next(err);
  }
});

export default router;