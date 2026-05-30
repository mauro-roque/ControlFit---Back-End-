const exerciciosService =
  require("../services/exercicios.service");

// POST
async function criar(req, res) {

  try {

    const id =
      await exerciciosService.inserirExercicio(
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

    const exercicios =
      await exerciciosService.listarExercicios();

    res.json(exercicios);

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }
}

// GET BY ID
async function buscarPorId(req, res) {

  try {

    const exercicio =
      await exerciciosService.buscarExercicioPorId(
        req.params.id
      );

    if (!exercicio) {

      return res.status(404).json({
        erro: "Exercício não encontrado"
      });

    }

    res.json(exercicio);

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }
}

// GET POR PERSONAL
async function listarPorPersonal(req, res) {

  try {

    const exercicios =
      await exerciciosService
        .listarExerciciosDoPersonal(
          req.params.personalId
        );

    res.json(exercicios);

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }
}

// PUT
async function atualizar(req, res) {

  try {

    await exerciciosService.atualizarExercicio(
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

// DELETE
async function excluir(req, res) {

  try {

    await exerciciosService.deletarExercicio(
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
  listarPorPersonal,
  atualizar,
  excluir
};