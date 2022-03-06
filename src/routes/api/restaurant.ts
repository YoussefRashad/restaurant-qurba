import { Router } from "express";
import auth from "../../middleware/auth";
import Validate from "../../validator/validate";
import CreateValidate from "../../validator/createRestaurant.validator";
import UpdateValidate from "../../validator/updateRestaurant.validator";
import DeleteValidate from "../../validator/deleteRestaurant.validator";

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
router.post("/create", auth, Validate(CreateValidate), createRestaurant);
router.put("/update", auth, Validate(UpdateValidate), editRestaurant);
router.delete("/delete", auth, Validate(DeleteValidate), deleteRestaurant);

export default router;
