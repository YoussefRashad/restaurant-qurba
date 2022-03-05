import { Router } from "express";
import auth from "../../middleware/auth";
import Validate from "../../validator/validate";

const router: Router = Router();

router.get('/fetch')
router.post('/get')
router.post('/search')
router.post('/create', auth)
router.put('/edit', auth)
router.delete('/delete', auth)

export default router;
