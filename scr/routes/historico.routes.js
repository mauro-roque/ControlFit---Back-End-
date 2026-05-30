const router = require("express").Router();

const controller =
  require("../controllers/historico.controller");

// INSERT
router.post("/", controller.criar);

// SELECT ALL
router.get("/", controller.listar);

// SELECT BY ALUNO
router.get(
  "/aluno/:alunoId",
  controller.listarPorAluno
);

// SELECT BY ID
router.get("/:id", controller.buscarPorId);

module.exports = router;