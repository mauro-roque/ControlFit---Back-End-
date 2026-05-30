const db = require("../config/firebase");

// Evolução do aluno
async function relatorioEvolucao(alunoId) {

  const execucoes = await db
    .collection("execucoes")
    .where("alunoId", "==", alunoId)
    .get();

  return {
    alunoId,
    totalTreinos: execucoes.size
  };
}

// Frequência do aluno
async function relatorioFrequencia(alunoId) {

  const execucoes = await db
    .collection("execucoes")
    .where("alunoId", "==", alunoId)
    .where("concluida", "==", true)
    .get();

  return {
    alunoId,
    treinosConcluidos: execucoes.size
  };
}

// Fichas do aluno
async function relatorioFichas(alunoId) {

  const fichas = await db
    .collection("fichas")
    .where("alunoId", "==", alunoId)
    .get();

  return {
    alunoId,
    totalFichas: fichas.size,
    fichas: fichas.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  };
}

// Dashboard do Personal
async function dashboardPersonal(personalId) {

  const alunos = await db
    .collection("alunos")
    .where("personalId", "==", personalId)
    .get();

  const fichas = await db
    .collection("fichas")
    .where("personalId", "==", personalId)
    .get();

  return {
    totalAlunos: alunos.size,
    totalFichas: fichas.size
  };
}

module.exports = {
  relatorioEvolucao,
  relatorioFrequencia,
  relatorioFichas,
  dashboardPersonal
};