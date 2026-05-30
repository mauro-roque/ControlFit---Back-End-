const router = require("express").Router();

const controller =
  require("../controllers/execucoes.controller");

// INSERT
router.post("/", controller.criar);

// SELECT ALL
router.get("/", controller.listar);

// SELECT BY ID
router.get("/:id", controller.buscarPorId);

// SELECT POR ALUNO
router.get(
  "/aluno/:alunoId",
  controller.listarPorAluno
);

// UPDATE
router.put("/:id", controller.atualizar);

// CONCLUIR
router.put(
  "/:id/concluir",
  controller.concluir
);

// DELETE
router.delete("/:id", controller.excluir);

module.exports = router;