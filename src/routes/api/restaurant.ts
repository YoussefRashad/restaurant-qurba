import { Router } from "express";
import auth from "../../middleware/auth";
import Validate from "../../validator/validate";

import {
  createRestaurant,
  deleteRestaurant,
  editRestaurant,
  getRestaurant,
  fetchRestaurant,
  searchRestaurant,
} from "../../controller/restaurant.controller";

const router: Router = Router();

router.get("/fetch", fetchRestaurant);
router.post("/get", getRestaurant);
router.post("/search", searchRestaurant);
router.post("/create", auth, createRestaurant);
router.put("/edit", auth, editRestaurant);
router.delete("/delete", auth, deleteRestaurant);

export default router;
