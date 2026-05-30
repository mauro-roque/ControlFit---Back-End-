const db = require("../config/firebase");

// INSERT
async function inserirExecucao(dados) {

  const resultado = await db
    .collection("execucoes")
    .add({
      alunoId: dados.alunoId,
      fichaId: dados.fichaId,
      dataExecucao: new Date(),
      concluida: false
    });

  return resultado.id;
}

// SELECT ALL
async function listarExecucoes() {

  const resultado = await db
    .collection("execucoes")
    .get();

  return resultado.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

// SELECT BY ID
async function buscarExecucaoPorId(id) {

  const doc = await db
    .collection("execucoes")
    .doc(id)
    .get();

  if (!doc.exists) {
    return null;
  }

  return {
    id: doc.id,
    ...doc.data()
  };
}

// SELECT POR ALUNO
async function listarExecucoesPorAluno(alunoId) {

  const resultado = await db
    .collection("execucoes")
    .where("alunoId", "==", alunoId)
    .get();

  return resultado.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

// UPDATE
async function atualizarExecucao(id, dados) {

  const doc = await db
    .collection("execucoes")
    .doc(id)
    .get();

  if (!doc.exists) {
    throw new Error("Execução não encontrada");
  }

  const execucao = doc.data();

  if (execucao.concluida) {
    throw new Error("Execução concluída não pode ser alterada");
  }

  await db
    .collection("execucoes")
    .doc(id)
    .update(dados);

  return true;
}

// CONCLUIR EXECUÇÃO
async function concluirExecucao(id) {

  const doc = await db
    .collection("execucoes")
    .doc(id)
    .get();

  if (!doc.exists) {
    throw new Error("Execução não encontrada");
  }

  const execucao = doc.data();

  if (execucao.concluida) {
    throw new Error("Execução já concluída");
  }

  await db
    .collection("execucoes")
    .doc(id)
    .update({
      concluida: true
    });

  return true;
}

// DELETE
async function deletarExecucao(id) {

  const doc = await db
    .collection("execucoes")
    .doc(id)
    .get();

  if (!doc.exists) {
    throw new Error("Execução não encontrada");
  }

  const execucao = doc.data();

  if (execucao.concluida) {
    throw new Error("Execução concluída não pode ser removida");
  }

  await db
    .collection("execucoes")
    .doc(id)
    .delete();

  return true;
}

module.exports = {
  inserirExecucao,
  listarExecucoes,
  buscarExecucaoPorId,
  listarExecucoesPorAluno,
  atualizarExecucao,
  concluirExecucao,
  deletarExecucao
};