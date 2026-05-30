const db = require("../config/firebase");

// INSERT
async function registrarHistorico(tipo, dados) {

  const resultado = await db
    .collection("historico")
    .add({
      tipo,
      dados,
      timestamp: new Date()
    });

  return resultado.id;
}

// SELECT ALL
async function listarHistoricos() {

  const resultado = await db
    .collection("historico")
    .orderBy("timestamp", "desc")
    .get();

  return resultado.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

// SELECT BY ID
async function buscarHistoricoPorId(id) {

  const doc = await db
    .collection("historico")
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
async function listarHistoricosPorAluno(alunoId) {

  const resultado = await db
    .collection("historico")
    .where("dados.alunoId", "==", alunoId)
    .orderBy("timestamp", "desc")
    .get();

  return resultado.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

module.exports = {
  registrarHistorico,
  listarHistoricos,
  buscarHistoricoPorId,
  listarHistoricosPorAluno
};