import { Router } from "express";

import {
  renderAboutPage,
  renderIndexPage,
  renderNewEntryPage,
  createNewEntry,
  deleteBook,
  renderIndexPage2,renderContacto,renderservicios,renderObjetivo,rendertestimonio,renderusuario
} from "../controllers/index.controller.js";

const router = Router();

router.get("/", renderIndexPage2);

router.get("/inicio", renderIndexPage2);

router.get("/Contacto", renderContacto);
router.get("/Servicio", renderservicios);
router.get("/Objetivos", renderObjetivo);
router.get("/Testimonio", rendertestimonio);
router.get("/Usuario", renderusuario);


router.get("/about", renderAboutPage);

router.get("/new-entry", renderNewEntryPage);

router.post("/new-entry", createNewEntry);

router.get("/delete/:id", deleteBook);

export default router;
