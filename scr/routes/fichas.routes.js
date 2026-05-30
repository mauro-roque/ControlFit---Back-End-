const router = require("express").Router();

const controller =
  require("../controllers/fichas.controller");

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

// SELECT POR PERSONAL
router.get(
  "/personal/:personalId",
  controller.listarPorPersonal
);

// UPDATE
router.put("/:id", controller.atualizar);

// ATIVAR
router.put("/:id/ativar", controller.ativar);

// DESATIVAR
router.put("/:id/desativar", controller.desativar);

// DELETE
router.delete("/:id", controller.excluir);

module.exports = router;