import { Router } from "express";
import { login, signup } from "../../controller/user.controller";
import Validate from "../../validator/vaildate";
import LoginValidator from "../../validator/login.validator";
import SignupValidator from "../../validator/signup.validator";

const router: Router = Router();

router.post("/signup", Validate(SignupValidator), signup);
router.post("/login", Validate(LoginValidator), login);

export default router;
