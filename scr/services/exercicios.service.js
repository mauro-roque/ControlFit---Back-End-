const db = require("../config/firebase");

// INSERT
async function inserirExercicio(dados) {

  const resultado = await db
    .collection("exercicios")
    .add({
      nome: dados.nome,
      grupoMuscular: dados.grupoMuscular,
      instrucoes: dados.instrucoes,
      personalId: dados.personalId || null
    });

  return resultado.id;
}

// SELECT ALL
async function listarExercicios() {

  const resultado = await db
    .collection("exercicios")
    .get();

  return resultado.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

// SELECT BY ID
async function buscarExercicioPorId(id) {

  const doc = await db
    .collection("exercicios")
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
async function listarExerciciosDoPersonal(personalId) {

  const resultado = await db
    .collection("exercicios")
    .where("personalId", "==", personalId)
    .get();

  return resultado.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

// UPDATE
async function atualizarExercicio(id, dados) {

  const doc = await db
    .collection("exercicios")
    .doc(id)
    .get();

  if (!doc.exists) {
    throw new Error("Exercício não encontrado");
  }

  await db
    .collection("exercicios")
    .doc(id)
    .update(dados);

  return true;
}

// DELETE
async function deletarExercicio(id) {

  const doc = await db
    .collection("exercicios")
    .doc(id)
    .get();

  if (!doc.exists) {
    throw new Error("Exercício não encontrado");
  }

  await db
    .collection("exercicios")
    .doc(id)
    .delete();

  return true;
}

module.exports = {
  inserirExercicio,
  listarExercicios,
  buscarExercicioPorId,
  listarExerciciosDoPersonal,
  atualizarExercicio,
  deletarExercicio
};