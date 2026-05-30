// scripts/bancoQueries.js

const db = require("../scr/config/firebase");

async function executarQueries() {

  try {

    console.log("=================================");
    console.log("INICIANDO TESTES DO BANCO");
    console.log("=================================");

    // =====================================================
    // USERS
    // =====================================================

    console.log("\nUSERS\n");

    // INSERT
    const userRef = await db.collection("users").add({
      email: "mauro@email.com",
      name: "Mauro Roque",
      role: "personal",
      createdAt: new Date()
    });

    console.log("INSERT USER:", userRef.id);

    // SELECT BY ID
    const userDoc = await db
      .collection("users")
      .doc(userRef.id)
      .get();

    console.log("SELECT USER:");
    console.log(userDoc.data());

    // SELECT ALL
    const users = await db.collection("users").get();

    users.forEach((doc) => {
      console.log("USER:", doc.id, doc.data());
    });

    // UPDATE
    await db
      .collection("users")
      .doc(userRef.id)
      .update({
        name: "Mauro Atualizado"
      });

    console.log("UPDATE USER OK");

    // DELETE
    // await db.collection("users").doc(userRef.id).delete();



    // =====================================================
    // ALUNOS
    // =====================================================

    console.log("\nALUNOS\n");

    // INSERT
    const alunoRef = await db.collection("alunos").add({
      alunoId: userRef.id,
      personalId: userRef.id,
      nome: "João Silva",
      dataNascimento: "2000-05-10",
      objetivos: "Hipertrofia",
      status: "ativo"
    });

    console.log("INSERT ALUNO:", alunoRef.id);

    // SELECT BY ID
    const alunoDoc = await db
      .collection("alunos")
      .doc(alunoRef.id)
      .get();

    console.log(alunoDoc.data());

    // SELECT ALL
    const alunos = await db.collection("alunos").get();

    alunos.forEach((doc) => {
      console.log("ALUNO:", doc.id, doc.data());
    });

    // SELECT WHERE
    const alunosAtivos = await db
      .collection("alunos")
      .where("status", "==", "ativo")
      .get();

    alunosAtivos.forEach((doc) => {
      console.log("ALUNO ATIVO:", doc.id, doc.data());
    });

    // UPDATE
    await db
      .collection("alunos")
      .doc(alunoRef.id)
      .update({
        status: "inativo"
      });

    console.log("UPDATE ALUNO OK");

    // DELETE
    // await db.collection("alunos").doc(alunoRef.id).delete();



    // =====================================================
    // EXERCICIOS
    // =====================================================

    console.log("\nEXERCICIOS\n");

    // INSERT
    const exercicioRef = await db.collection("exercicios").add({
      nome: "Supino Reto",
      grupoMuscular: "Peito",
      instrucoes: "Executar lentamente",
      personalId: userRef.id
    });

    console.log("INSERT EXERCICIO:", exercicioRef.id);

    // SELECT
    const exercicioDoc = await db
      .collection("exercicios")
      .doc(exercicioRef.id)
      .get();

    console.log(exercicioDoc.data());

    // SELECT ALL
    const exercicios = await db.collection("exercicios").get();

    exercicios.forEach((doc) => {
      console.log("EXERCICIO:", doc.id, doc.data());
    });

    // SELECT WHERE
    const peito = await db
      .collection("exercicios")
      .where("grupoMuscular", "==", "Peito")
      .get();

    peito.forEach((doc) => {
      console.log("PEITO:", doc.id, doc.data());
    });

    // UPDATE
    await db
      .collection("exercicios")
      .doc(exercicioRef.id)
      .update({
        grupoMuscular: "Peitoral"
      });

    console.log("UPDATE EXERCICIO OK");

    // DELETE
    // await db.collection("exercicios").doc(exercicioRef.id).delete();



    // =====================================================
    // FICHAS
    // =====================================================

    console.log("\nFICHAS\n");

    // INSERT
    const fichaRef = await db.collection("fichas").add({
      fichaId: "",
      alunoId: alunoRef.id,
      personalId: userRef.id,
      nomeFicha: "Ficha A - Hipertrofia",
      dataCriacao: new Date(),
      ativa: true
    });

    console.log("INSERT FICHA:", fichaRef.id);

    // SELECT
    const fichaDoc = await db
      .collection("fichas")
      .doc(fichaRef.id)
      .get();

    console.log(fichaDoc.data());

    // SELECT ALL
    const fichas = await db.collection("fichas").get();

    fichas.forEach((doc) => {
      console.log("FICHA:", doc.id, doc.data());
    });

    // SELECT WHERE
    const fichasAtivas = await db
      .collection("fichas")
      .where("ativa", "==", true)
      .get();

    fichasAtivas.forEach((doc) => {
      console.log("FICHA ATIVA:", doc.id, doc.data());
    });

    // UPDATE
    await db
      .collection("fichas")
      .doc(fichaRef.id)
      .update({
        ativa: false
      });

    console.log("UPDATE FICHA OK");

    // DELETE
    // await db.collection("fichas").doc(fichaRef.id).delete();



    // =====================================================
    // FICHAS_EXERCICIOS
    // =====================================================

    console.log("\nFICHAS_EXERCICIOS\n");

    // INSERT
    const fichaExercicioRef = await db
      .collection("fichas_exercicios")
      .add({
        fichaId: fichaRef.id,
        exercicioId: exercicioRef.id,
        ordem: 1,
        series: 4,
        repeticoes: 12,
        cargaSugerida: 20,
        observacoes: "Movimento controlado"
      });

    console.log("INSERT FICHA_EXERCICIO:", fichaExercicioRef.id);

    // SELECT
    const fichaExercicioDoc = await db
      .collection("fichas_exercicios")
      .doc(fichaExercicioRef.id)
      .get();

    console.log(fichaExercicioDoc.data());

    // SELECT ALL
    const fichasExercicios = await db
      .collection("fichas_exercicios")
      .get();

    fichasExercicios.forEach((doc) => {
      console.log("FICHA_EXERCICIO:", doc.id, doc.data());
    });

    // UPDATE
    await db
      .collection("fichas_exercicios")
      .doc(fichaExercicioRef.id)
      .update({
        repeticoes: 15
      });

    console.log("UPDATE FICHA_EXERCICIO OK");

    // DELETE
    // await db
    //   .collection("fichas_exercicios")
    //   .doc(fichaExercicioRef.id)
    //   .delete();



    // =====================================================
    // EXECUCOES
    // =====================================================

    console.log("\nEXECUCOES\n");

    // INSERT
    const execucaoRef = await db.collection("execucoes").add({
      execucaoId: "",
      alunoId: alunoRef.id,
      fichaId: fichaRef.id,
      dataExecucao: new Date(),
      concluida: false
    });

    console.log("INSERT EXECUCAO:", execucaoRef.id);

    // SELECT
    const execucaoDoc = await db
      .collection("execucoes")
      .doc(execucaoRef.id)
      .get();

    console.log(execucaoDoc.data());

    // SELECT ALL
    const execucoes = await db.collection("execucoes").get();

    execucoes.forEach((doc) => {
      console.log("EXECUCAO:", doc.id, doc.data());
    });

    // UPDATE
    await db
      .collection("execucoes")
      .doc(execucaoRef.id)
      .update({
        concluida: true
      });

    console.log("UPDATE EXECUCAO OK");

    // DELETE
    // await db.collection("execucoes").doc(execucaoRef.id).delete();



    // =====================================================
    // EXECUCAO_DETALHES
    // =====================================================

    console.log("\nEXECUCAO_DETALHES\n");

    // INSERT
    const detalheRef = await db
      .collection("execucao_detalhes")
      .add({
        execucaoId: execucaoRef.id,
        exercicioId: exercicioRef.id,
        seriesRealizadas: [12, 10, 9],
        cargasRealizadas: [20, 20, 18],
        percepcaoEsforco: 8
      });

    console.log("INSERT DETALHE:", detalheRef.id);

    // SELECT
    const detalheDoc = await db
      .collection("execucao_detalhes")
      .doc(detalheRef.id)
      .get();

    console.log(detalheDoc.data());

    // SELECT ALL
    const detalhes = await db
      .collection("execucao_detalhes")
      .get();

    detalhes.forEach((doc) => {
      console.log("DETALHE:", doc.id, doc.data());
    });

    // UPDATE
    await db
      .collection("execucao_detalhes")
      .doc(detalheRef.id)
      .update({
        percepcaoEsforco: 9
      });

    console.log("UPDATE DETALHE OK");

    // DELETE
    // await db
    //   .collection("execucao_detalhes")
    //   .doc(detalheRef.id)
    //   .delete();



    // =====================================================
    // HISTORICO
    // =====================================================

    console.log("\nHISTORICO\n");

    // INSERT
    const historicoRef = await db.collection("historico").add({
      tipo: "treino_concluido",
      dados: {
        alunoId: alunoRef.id,
        fichaId: fichaRef.id
      },
      timestamp: new Date()
    });

    console.log("INSERT HISTORICO:", historicoRef.id);

    // SELECT
    const historicoDoc = await db
      .collection("historico")
      .doc(historicoRef.id)
      .get();

    console.log(historicoDoc.data());

    // SELECT ALL
    const historicos = await db.collection("historico").get();

    historicos.forEach((doc) => {
      console.log("HISTORICO:", doc.id, doc.data());
    });

    // DELETE
    // await db.collection("historico").doc(historicoRef.id).delete();



    console.log("\n=================================");
    console.log("TODAS AS QUERIES EXECUTADAS");
    console.log("=================================");

  } catch (error) {

    console.error("ERRO:");
    console.error(error);

  }
}

executarQueries();