import { Router } from "express";
import auth from "../../middleware/auth";
import Validate from "../../validator/validate";
import CreateValidate from "../../validator/createRestaurant.validator";
import UpdateValidate from "../../validator/updateRestaurant.validator";
import GetValidate from "../../validator/getRestaurant.validator";
import SearchValidate from "../../validator/searchRestaurant.validator";
import {
  createRestaurant,
  deleteRestaurant,
  updateRestaurant,
  getRestaurant,
  fetchRestaurant,
  searchRestaurant,
} from "../../controller/restaurant.controller";

const router: Router = Router();

router.get("/fetch", fetchRestaurant);
router.post("/get",  Validate(GetValidate), getRestaurant);
router.post("/search",  Validate(SearchValidate), searchRestaurant);
router.post("/create", auth, Validate(CreateValidate), createRestaurant);
router.put("/update", auth, Validate(UpdateValidate), updateRestaurant);
router.delete("/delete", auth, Validate(GetValidate), deleteRestaurant);

export default router;
