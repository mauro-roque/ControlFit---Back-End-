const router = require("express").Router();

const controller =
  require("../controllers/relatorios.controller");

// Evolução
router.get(
  "/evolucao/:alunoId",
  controller.evolucao
);

// Frequência
router.get(
  "/frequencia/:alunoId",
  controller.frequencia
);

// Fichas
router.get(
  "/fichas/:alunoId",
  controller.fichas
);

// Dashboard do personal
router.get(
  "/dashboard/:personalId",
  controller.dashboard
);

module.exports = router;