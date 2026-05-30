const router = require("express").Router();
const controller = require("../controllers/alunos.controller");

// INSERT
router.post("/", controller.criar);

// SELECT ALL
router.get("/", controller.listar);

// SELECT POR ID
router.get("/:id", controller.buscarPorId);

// SELECT POR PERSONAL
router.get(
  "/personal/:personalId",
  controller.listarPorPersonal
);

// UPDATE
router.put("/:id", controller.atualizar);

// DELETE
router.delete("/:id", controller.excluir);

module.exports = router;