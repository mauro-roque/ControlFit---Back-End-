const fichasService =
  require("../services/fichas.service");

// POST
async function criar(req, res) {

  try {

    const id =
      await fichasService.inserirFicha(
        req.body
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

    const fichas =
      await fichasService.listarFichas();

    res.json(fichas);

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }
}

// GET BY ID
async function buscarPorId(req, res) {

  try {

    const ficha =
      await fichasService.buscarFichaPorId(
        req.params.id
      );

    if (!ficha) {

      return res.status(404).json({
        erro: "Ficha não encontrada"
      });

    }

    res.json(ficha);

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }
}

// GET POR ALUNO
async function listarPorAluno(req, res) {

  try {

    const fichas =
      await fichasService
        .listarFichasPorAluno(
          req.params.alunoId
        );

    res.json(fichas);

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }
}

// GET POR PERSONAL
async function listarPorPersonal(req, res) {

  try {

    const fichas =
      await fichasService
        .listarFichasPorPersonal(
          req.params.personalId
        );

    res.json(fichas);

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }
}

// PUT
async function atualizar(req, res) {

  try {

    await fichasService.atualizarFicha(
      req.params.id,
      req.body
    );

    res.json({
      sucesso: true
    });

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }
}

// ATIVAR
async function ativar(req, res) {

  try {

    await fichasService.ativarFicha(
      req.params.id
    );

    res.json({
      sucesso: true
    });

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }
}

// DESATIVAR
async function desativar(req, res) {

  try {

    await fichasService.desativarFicha(
      req.params.id
    );

    res.json({
      sucesso: true
    });

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }
}

// DELETE
async function excluir(req, res) {

  try {

    await fichasService.deletarFicha(
      req.params.id
    );

    res.json({
      sucesso: true
    });

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
  listarPorAluno,
  listarPorPersonal,
  atualizar,
  ativar,
  desativar,
  excluir
};