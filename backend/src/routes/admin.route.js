import { Router } from "express";
import { checkAdmin, createAlbum, createSong, deleteAlbum, deleteSong } from "../controller/admin.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.use(protectRoute, requireAdmin);

// checkAdmin to display admin features in frontend
router.get("/check", checkAdmin);

router.post("/songs", createSong);
router.delete("/songs/:id", deleteSong);

router.post("/albums", createAlbum);
router.delete("/albums/:id", deleteAlbum);

export default router;