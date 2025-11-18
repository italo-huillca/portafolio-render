const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.home);
router.get("/about", mainController.about);
router.get("/proyectos", mainController.proyectos);

router.get("/contact", mainController.contact);
router.post("/contact", mainController.contactPost);

// Ruta para el sitemap XML
router.get("/sitemap.xml", mainController.sitemap);

module.exports = router;
