import express from "express";
import { getMahasiswa, saveMahasiswa, updateMahasiswa, deleteMahasiswa, getMahasiswaById } from "../controller/MahasiswaController.js";
const router = express.Router();

router.get("/", getMahasiswa);
router.get("/:id", getMahasiswaById);
router.post("/", saveMahasiswa);
router.patch("/:id", updateMahasiswa);
router.delete("/:id", deleteMahasiswa);

export default router;
