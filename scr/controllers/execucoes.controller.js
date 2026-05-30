const execucoesService =
  require("../services/execucoes.service");

// POST
async function criar(req, res) {

  try {

    const id =
      await execucoesService.inserirExecucao(
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

    const execucoes =
      await execucoesService.listarExecucoes();

    res.json(execucoes);

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }
}

// GET BY ID
async function buscarPorId(req, res) {

  try {

    const execucao =
      await execucoesService.buscarExecucaoPorId(
        req.params.id
      );

    if (!execucao) {

      return res.status(404).json({
        erro: "Execução não encontrada"
      });

    }

    res.json(execucao);

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }
}

// GET POR ALUNO
async function listarPorAluno(req, res) {

  try {

    const execucoes =
      await execucoesService
        .listarExecucoesPorAluno(
          req.params.alunoId
        );

    res.json(execucoes);

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }
}

// PUT
async function atualizar(req, res) {

  try {

    await execucoesService.atualizarExecucao(
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

// CONCLUIR
async function concluir(req, res) {

  try {

    await execucoesService.concluirExecucao(
      req.params.id
    );

    res.json({
      sucesso: true,
      mensagem: "Execução concluída"
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

    await execucoesService.deletarExecucao(
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
  atualizar,
  concluir,
  excluir
};