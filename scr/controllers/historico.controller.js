const historicoService =
  require("../services/historico.service");

// POST
async function criar(req, res) {

  try {

    const id =
      await historicoService.registrarHistorico(
        req.body.tipo,
        req.body.dados
      );

    res.status(201).json({
      sucesso: true,
      id
    });

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }
}

// GET ALL
async function listar(req, res) {

  try {

    const historicos =
      await historicoService.listarHistoricos();

    res.json(historicos);

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }
}

// GET BY ID
async function buscarPorId(req, res) {

  try {

    const historico =
      await historicoService.buscarHistoricoPorId(
        req.params.id
      );

    if (!historico) {

      return res.status(404).json({
        erro: "Histórico não encontrado"
      });

    }

    res.json(historico);

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }
}

// GET POR ALUNO
async function listarPorAluno(req, res) {

  try {

    const historicos =
      await historicoService
        .listarHistoricosPorAluno(
          req.params.alunoId
        );

    res.json(historicos);

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }
}

module.exports = {
  criar,
  listar,
  buscarPorId,
  listarPorAluno
};