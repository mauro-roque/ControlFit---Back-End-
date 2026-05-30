const db = require("../config/firebase");

// INSERT
async function inserirAluno(dados) {

  const resultado = await db
    .collection("alunos")
    .add({
      alunoId: dados.alunoId,
      personalId: dados.personalId,
      nome: dados.nome,
      dataNascimento: dados.dataNascimento || null,
      objetivos: dados.objetivos || "",
      status: dados.status || "ativo"
    });

  return resultado.id;
}

// SELECT ALL
async function listarAlunos() {

  const resultado = await db
    .collection("alunos")
    .get();

  return resultado.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

// SELECT BY ID
async function buscarAlunoPorId(id) {

  const doc = await db
    .collection("alunos")
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

// SELECT POR PERSONAL
async function listarAlunosDoPersonal(personalId) {

  const resultado = await db
    .collection("alunos")
    .where("personalId", "==", personalId)
    .get();

  return resultado.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

// UPDATE
async function atualizarAluno(id, dados) {

  await db
    .collection("alunos")
    .doc(id)
    .update({
      ...dados
    });

  return true;
}

// DELETE
async function deletarAluno(id) {

  await db
    .collection("alunos")
    .doc(id)
    .delete();

  return true;
}

module.exports = {
  inserirAluno,
  listarAlunos,
  buscarAlunoPorId,
  listarAlunosDoPersonal,
  atualizarAluno,
  deletarAluno
};