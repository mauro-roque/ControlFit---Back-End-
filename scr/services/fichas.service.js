const db = require("../config/firebase");

// INSERT
async function inserirFicha(dados) {

  const aluno = await db
    .collection("alunos")
    .doc(dados.alunoId)
    .get();

  if (!aluno.exists) {
    throw new Error("Aluno não encontrado");
  }

  const resultado = await db
    .collection("fichas")
    .add({
      alunoId: dados.alunoId,
      personalId: dados.personalId,
      nomeFicha: dados.nomeFicha,
      dataCriacao: new Date(),
      ativa: true
    });

  return resultado.id;
}

// SELECT ALL
async function listarFichas() {

  const resultado = await db
    .collection("fichas")
    .get();

  return resultado.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

// SELECT BY ID
async function buscarFichaPorId(id) {

  const doc = await db
    .collection("fichas")
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
async function listarFichasPorAluno(alunoId) {

  const resultado = await db
    .collection("fichas")
    .where("alunoId", "==", alunoId)
    .get();

  return resultado.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

// SELECT POR PERSONAL
async function listarFichasPorPersonal(personalId) {

  const resultado = await db
    .collection("fichas")
    .where("personalId", "==", personalId)
    .get();

  return resultado.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

// UPDATE
async function atualizarFicha(id, dados) {

  const doc = await db
    .collection("fichas")
    .doc(id)
    .get();

  if (!doc.exists) {
    throw new Error("Ficha não encontrada");
  }

  await db
    .collection("fichas")
    .doc(id)
    .update(dados);

  return true;
}

// ATIVAR
async function ativarFicha(id) {

  await db
    .collection("fichas")
    .doc(id)
    .update({
      ativa: true
    });

  return true;
}

// DESATIVAR
async function desativarFicha(id) {

  await db
    .collection("fichas")
    .doc(id)
    .update({
      ativa: false
    });

  return true;
}

// DELETE
async function deletarFicha(id) {

  const doc = await db
    .collection("fichas")
    .doc(id)
    .get();

  if (!doc.exists) {
    throw new Error("Ficha não encontrada");
  }

  await db
    .collection("fichas")
    .doc(id)
    .delete();

  return true;
}

module.exports = {
  inserirFicha,
  listarFichas,
  buscarFichaPorId,
  listarFichasPorAluno,
  listarFichasPorPersonal,
  atualizarFicha,
  ativarFicha,
  desativarFicha,
  deletarFicha
};