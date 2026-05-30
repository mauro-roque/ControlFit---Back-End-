const alunosService = require("../services/alunos.service");

// POST
async function criar(req, res) {
  try {
    const id = await alunosService.inserirAluno(
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
    const alunos =
      await alunosService.listarAlunos();
    res.json(alunos);
  } catch (erro) {
    res.status(500).json({
      erro: erro.message
    });
  }
}

// GET ID
async function buscarPorId(req, res) {
  try {
    const aluno =
      await alunosService.buscarAlunoPorId(
        req.params.id
      );
    if (!aluno) {
      return res.status(404).json({
        erro: "Aluno não encontrado"
      });
    }
    res.json(aluno);
  } catch (erro) {
    res.status(500).json({
      erro: erro.message
    });
  }
}

// GET PERSONAL
async function listarPorPersonal(req, res) {
  try {
    const alunos =
      await alunosService.listarAlunosDoPersonal(
        req.params.personalId
      );
    res.json(alunos);
  } catch (erro) {
    res.status(500).json({
      erro: erro.message
    });
  }
}

// PUT
async function atualizar(req, res) {
  try {
    await alunosService.atualizarAluno(
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
    await alunosService.deletarAluno(
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