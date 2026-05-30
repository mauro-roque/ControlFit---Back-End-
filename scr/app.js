const express = require("express");

const alunosRoutes = require("./routes/alunos.routes");
const exerciciosRoutes = require("./routes/exercicios.routes");
const fichasRoutes = require("./routes/fichas.routes");
const execucoesRoutes = require("./routes/execucoes.routes");
const historicoRoutes = require("./routes/historico.routes");
const relatoriosRoutes = require("./routes/relatorios.routes");

const execucoesRoutes = require("./routes/execucoes.routes");
const exerciciosRoutes = require("./routes/exercicios.routes");
const fichasRoutes = require("./routes/fichas.routes");
const historicoRoutes = require("./routes/historico.routes");
const relatoriosRoutes = require("./routes/relatorios.routes");

const app = express();
app.use(express.json());

// Rotas
app.use("/alunos", alunosRoutes);
app.use("/exercicios", exerciciosRoutes);
app.use("/fichas", fichasRoutes);
app.use("/execucoes", execucoesRoutes);
app.use("/historico", historicoRoutes);
app.use("/relatorios", relatoriosRoutes);

// Execucoes
app.use("/execucoes", execucoesRoutes);

// Exercicios
app.use("/exercicios", exerciciosRoutes);

// Fichas
app.use("/fichas", fichasRoutes);

// Historico
app.use("/historico", historicoRoutes);

// Relatorio
app.use("/relatorios", relatoriosRoutes);

// Teste
app.get("/", (req, res) => {
  res.json({
    sistema: "ControlFit API",
    status: "Online"
  });
});

module.exports = app;