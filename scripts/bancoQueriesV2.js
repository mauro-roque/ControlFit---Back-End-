// scripts/bancoQueries.js

const db = require("../scr/config/firebase");


// =====================================================
// USERS
// =====================================================

// INSERT USER
async function insertUser(dados) {

  const resultado = await db.collection("users").add({
    email: dados.email,
    name: dados.name,
    role: dados.role,
    personalId: dados.personalId || null,
    createdAt: new Date()
  });

  console.log("USER INSERIDO:", resultado.id);

  return resultado.id;
}


// SELECT USER BY ID
async function selectUserById(userId) {

  const resultado = await db
    .collection("users")
    .doc(userId)
    .get();

  console.log(resultado.data());

  return resultado.data();
}


// SELECT ALL USERS
async function selectUsers() {

  const resultado = await db.collection("users").get();

  resultado.forEach((doc) => {
    console.log(doc.id, doc.data());
  });
}


// UPDATE USER
async function updateUser(userId, dados) {

  await db
    .collection("users")
    .doc(userId)
    .update(dados);

  console.log("USER ATUALIZADO");
}


// DELETE USER
async function deleteUser(userId) {

  await db
    .collection("users")
    .doc(userId)
    .delete();

  console.log("USER DELETADO");
}



// =====================================================
// ALUNOS
// =====================================================

// INSERT ALUNO
async function insertAluno(dados) {

  const resultado = await db.collection("alunos").add({
    alunoId: dados.alunoId,
    personalId: dados.personalId,
    nome: dados.nome,
    dataNascimento: dados.dataNascimento,
    objetivos: dados.objetivos,
    status: dados.status
  });

  console.log("ALUNO INSERIDO:", resultado.id);

  return resultado.id;
}


// SELECT ALUNO BY ID
async function selectAlunoById(alunoId) {

  const resultado = await db
    .collection("alunos")
    .doc(alunoId)
    .get();

  console.log(resultado.data());

  return resultado.data();
}


// SELECT ALL ALUNOS
async function selectAlunos() {

  const resultado = await db.collection("alunos").get();

  resultado.forEach((doc) => {
    console.log(doc.id, doc.data());
  });
}


// UPDATE ALUNO
async function updateAluno(alunoId, dados) {

  await db
    .collection("alunos")
    .doc(alunoId)
    .update(dados);

  console.log("ALUNO ATUALIZADO");
}


// DELETE ALUNO
async function deleteAluno(alunoId) {

  await db
    .collection("alunos")
    .doc(alunoId)
    .delete();

  console.log("ALUNO DELETADO");
}



// =====================================================
// EXERCICIOS
// =====================================================

// INSERT EXERCICIO
async function insertExercicio(dados) {

  const resultado = await db.collection("exercicios").add({
    nome: dados.nome,
    grupoMuscular: dados.grupoMuscular,
    instrucoes: dados.instrucoes,
    personalId: dados.personalId
  });

  console.log("EXERCICIO INSERIDO:", resultado.id);

  return resultado.id;
}


// SELECT EXERCICIO BY ID
async function selectExercicioById(exercicioId) {

  const resultado = await db
    .collection("exercicios")
    .doc(exercicioId)
    .get();

  console.log(resultado.data());

  return resultado.data();
}


// SELECT ALL EXERCICIOS
async function selectExercicios() {

  const resultado = await db.collection("exercicios").get();

  resultado.forEach((doc) => {
    console.log(doc.id, doc.data());
  });
}


// UPDATE EXERCICIO
async function updateExercicio(exercicioId, dados) {

  await db
    .collection("exercicios")
    .doc(exercicioId)
    .update(dados);

  console.log("EXERCICIO ATUALIZADO");
}


// DELETE EXERCICIO
async function deleteExercicio(exercicioId) {

  await db
    .collection("exercicios")
    .doc(exercicioId)
    .delete();

  console.log("EXERCICIO DELETADO");
}



// =====================================================
// FICHAS
// =====================================================

// INSERT FICHA
async function insertFicha(dados) {

  const resultado = await db.collection("fichas").add({
    alunoId: dados.alunoId,
    personalId: dados.personalId,
    nomeFicha: dados.nomeFicha,
    dataCriacao: new Date(),
    ativa: dados.ativa
  });

  console.log("FICHA INSERIDA:", resultado.id);

  return resultado.id;
}


// SELECT FICHA BY ID
async function selectFichaById(fichaId) {

  const resultado = await db
    .collection("fichas")
    .doc(fichaId)
    .get();

  console.log(resultado.data());

  return resultado.data();
}


// SELECT ALL FICHAS
async function selectFichas() {

  const resultado = await db.collection("fichas").get();

  resultado.forEach((doc) => {
    console.log(doc.id, doc.data());
  });
}


// UPDATE FICHA
async function updateFicha(fichaId, dados) {

  await db
    .collection("fichas")
    .doc(fichaId)
    .update(dados);

  console.log("FICHA ATUALIZADA");
}


// DELETE FICHA
async function deleteFicha(fichaId) {

  await db
    .collection("fichas")
    .doc(fichaId)
    .delete();

  console.log("FICHA DELETADA");
}



// =====================================================
// FICHAS_EXERCICIOS
// =====================================================

// INSERT FICHA EXERCICIO
async function insertFichaExercicio(dados) {

  const resultado = await db
    .collection("fichas_exercicios")
    .add({
      fichaId: dados.fichaId,
      exercicioId: dados.exercicioId,
      ordem: dados.ordem,
      series: dados.series,
      repeticoes: dados.repeticoes,
      cargaSugerida: dados.cargaSugerida,
      observacoes: dados.observacoes
    });

  console.log("FICHA EXERCICIO INSERIDO:", resultado.id);

  return resultado.id;
}


// SELECT FICHA EXERCICIO BY ID
async function selectFichaExercicioById(id) {

  const resultado = await db
    .collection("fichas_exercicios")
    .doc(id)
    .get();

  console.log(resultado.data());

  return resultado.data();
}


// UPDATE FICHA EXERCICIO
async function updateFichaExercicio(id, dados) {

  await db
    .collection("fichas_exercicios")
    .doc(id)
    .update(dados);

  console.log("FICHA EXERCICIO ATUALIZADO");
}


// DELETE FICHA EXERCICIO
async function deleteFichaExercicio(id) {

  await db
    .collection("fichas_exercicios")
    .doc(id)
    .delete();

  console.log("FICHA EXERCICIO DELETADO");
}



// =====================================================
// EXECUCOES
// =====================================================

// INSERT EXECUCAO
async function insertExecucao(dados) {

  const resultado = await db.collection("execucoes").add({
    alunoId: dados.alunoId,
    fichaId: dados.fichaId,
    dataExecucao: new Date(),
    concluida: dados.concluida
  });

  console.log("EXECUCAO INSERIDA:", resultado.id);

  return resultado.id;
}


// SELECT EXECUCAO BY ID
async function selectExecucaoById(execucaoId) {

  const resultado = await db
    .collection("execucoes")
    .doc(execucaoId)
    .get();

  console.log(resultado.data());

  return resultado.data();
}


// UPDATE EXECUCAO
async function updateExecucao(execucaoId, dados) {

  await db
    .collection("execucoes")
    .doc(execucaoId)
    .update(dados);

  console.log("EXECUCAO ATUALIZADA");
}


// DELETE EXECUCAO
async function deleteExecucao(execucaoId) {

  await db
    .collection("execucoes")
    .doc(execucaoId)
    .delete();

  console.log("EXECUCAO DELETADA");
}



// =====================================================
// EXECUCAO DETALHES
// =====================================================

// INSERT DETALHE
async function insertExecucaoDetalhe(dados) {

  const resultado = await db
    .collection("execucao_detalhes")
    .add({
      execucaoId: dados.execucaoId,
      exercicioId: dados.exercicioId,
      seriesRealizadas: dados.seriesRealizadas,
      cargasRealizadas: dados.cargasRealizadas,
      percepcaoEsforco: dados.percepcaoEsforco
    });

  console.log("DETALHE INSERIDO:", resultado.id);

  return resultado.id;
}


// SELECT DETALHE BY ID
async function selectExecucaoDetalheById(id) {

  const resultado = await db
    .collection("execucao_detalhes")
    .doc(id)
    .get();

  console.log(resultado.data());

  return resultado.data();
}


// UPDATE DETALHE
async function updateExecucaoDetalhe(id, dados) {

  await db
    .collection("execucao_detalhes")
    .doc(id)
    .update(dados);

  console.log("DETALHE ATUALIZADO");
}


// DELETE DETALHE
async function deleteExecucaoDetalhe(id) {

  await db
    .collection("execucao_detalhes")
    .doc(id)
    .delete();

  console.log("DETALHE DELETADO");
}



// =====================================================
// HISTORICO
// =====================================================

// INSERT HISTORICO
async function insertHistorico(dados) {

  const resultado = await db.collection("historico").add({
    tipo: dados.tipo,
    dados: dados.dados,
    timestamp: new Date()
  });

  console.log("HISTORICO INSERIDO:", resultado.id);

  return resultado.id;
}


// SELECT HISTORICO BY ID
async function selectHistoricoById(historicoId) {

  const resultado = await db
    .collection("historico")
    .doc(historicoId)
    .get();

  console.log(resultado.data());

  return resultado.data();
}


// SELECT ALL HISTORICOS
async function selectHistoricos() {

  const resultado = await db.collection("historico").get();

  resultado.forEach((doc) => {
    console.log(doc.id, doc.data());
  });
}


// DELETE HISTORICO
async function deleteHistorico(historicoId) {

  await db
    .collection("historico")
    .doc(historicoId)
    .delete();

  console.log("HISTORICO DELETADO");
}



// =====================================================
// EXPORTS
// =====================================================

module.exports = {

  insertUser,
  selectUserById,
  selectUsers,
  updateUser,
  deleteUser,

  insertAluno,
  selectAlunoById,
  selectAlunos,
  updateAluno,
  deleteAluno,

  insertExercicio,
  selectExercicioById,
  selectExercicios,
  updateExercicio,
  deleteExercicio,

  insertFicha,
  selectFichaById,
  selectFichas,
  updateFicha,
  deleteFicha,

  insertFichaExercicio,
  selectFichaExercicioById,
  updateFichaExercicio,
  deleteFichaExercicio,

  insertExecucao,
  selectExecucaoById,
  updateExecucao,
  deleteExecucao,

  insertExecucaoDetalhe,
  selectExecucaoDetalheById,
  updateExecucaoDetalhe,
  deleteExecucaoDetalhe,

  insertHistorico,
  selectHistoricoById,
  selectHistoricos,
  deleteHistorico
};