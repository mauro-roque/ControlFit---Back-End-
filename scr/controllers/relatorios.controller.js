const relatoriosService =
  require("../services/relatorios.service");

// Evolução
async function evolucao(req, res) {

  try {

    const resultado =
      await relatoriosService.relatorioEvolucao(
        req.params.alunoId
      );

    res.json(resultado);

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }
}

// Frequência
async function frequencia(req, res) {

  try {

    const resultado =
      await relatoriosService.relatorioFrequencia(
        req.params.alunoId
      );

    res.json(resultado);

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }
}

// Fichas
async function fichas(req, res) {

  try {

    const resultado =
      await relatoriosService.relatorioFichas(
        req.params.alunoId
      );

    res.json(resultado);

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }
}

// Dashboard
async function dashboard(req, res) {

  try {

    const resultado =
      await relatoriosService.dashboardPersonal(
        req.params.personalId
      );

    res.json(resultado);

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }
}

module.exports = {
  evolucao,
  frequencia,
  fichas,
  dashboard
};