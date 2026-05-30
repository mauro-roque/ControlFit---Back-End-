/**
 * PRIMEIRO SCRIPT DE TESTE DO BANCO COM TODAS AS TABELAS
 */

const db = require("../scr/config/firebase");

async function executarTestes() {
  try {
    console.log("=================================");
    console.log("TESTE USERS");
    console.log("=================================");

    // INSERT USER
    const userRef = await db.collection("users").add({
      email: "mauro@email.com",
      name: "Mauro Roque",
      role: "personal",
      createdAt: new Date()
    });

    console.log("User criado:", userRef.id);

    // SELECT USER
    const userDoc = await db.collection("users")
      .doc(userRef.id)
      .get();

    console.log("User encontrado:");
    console.log(userDoc.data());

    // UPDATE USER
    await db.collection("users")
      .doc(userRef.id)
      .update({
        name: "Mauro Roque Atualizado"
      });

    console.log("User atualizado");



    console.log("=================================");
    console.log("TESTE ALUNOS");
    console.log("=================================");

    // INSERT ALUNO
    const alunoRef = await db.collection("alunos").add({
      alunoId: userRef.id,
      personalId: userRef.id,
      nome: "João Silva",
      dataNascimento: "2000-05-10",
      objetivos: "Hipertrofia",
      status: "ativo"
    });

    console.log("Aluno criado:", alunoRef.id);

    // SELECT ALUNO
    const alunoDoc = await db.collection("alunos")
      .doc(alunoRef.id)
      .get();

    console.log(alunoDoc.data());

    // UPDATE ALUNO
    await db.collection("alunos")
      .doc(alunoRef.id)
      .update({
        status: "inativo"
      });

    console.log("Aluno atualizado");



    console.log("=================================");
    console.log("TESTE EXERCICIOS");
    console.log("=================================");

    // INSERT EXERCICIO
    const exercicioRef = await db.collection("exercicios").add({
      nome: "Supino Reto",
      grupoMuscular: "Peito",
      instrucoes: "Executar lentamente",
      personalId: userRef.id
    });

    console.log("Exercicio criado:", exercicioRef.id);

    // SELECT
    const exercicioDoc = await db.collection("exercicios")
      .doc(exercicioRef.id)
      .get();

    console.log(exercicioDoc.data());

    // UPDATE
    await db.collection("exercicios")
      .doc(exercicioRef.id)
      .update({
        grupoMuscular: "Peitoral"
      });

    console.log("Exercicio atualizado");



    console.log("=================================");
    console.log("TESTE FICHAS");
    console.log("=================================");

    // INSERT FICHA
    const fichaRef = await db.collection("fichas").add({
      fichaId: "",
      alunoId: alunoRef.id,
      personalId: userRef.id,
      nomeFicha: "Ficha A - Hipertrofia",
      dataCriacao: new Date(),
      ativa: true
    });

    console.log("Ficha criada:", fichaRef.id);

    // SELECT
    const fichaDoc = await db.collection("fichas")
      .doc(fichaRef.id)
      .get();

    console.log(fichaDoc.data());

    // UPDATE
    await db.collection("fichas")
      .doc(fichaRef.id)
      .update({
        ativa: false
      });

    console.log("Ficha atualizada");



    console.log("=================================");
    console.log("TESTE FICHAS_EXERCICIOS");
    console.log("=================================");

    // INSERT
    const fichaExercicioRef = await db.collection("fichas_exercicios").add({
      fichaId: fichaRef.id,
      exercicioId: exercicioRef.id,
      ordem: 1,
      series: 4,
      repeticoes: 12,
      cargaSugerida: 20,
      observacoes: "Movimento controlado"
    });

    console.log("Ficha exercicio criado:", fichaExercicioRef.id);

    // SELECT
    const fichaExercicioDoc = await db.collection("fichas_exercicios")
      .doc(fichaExercicioRef.id)
      .get();

    console.log(fichaExercicioDoc.data());

    // UPDATE
    await db.collection("fichas_exercicios")
      .doc(fichaExercicioRef.id)
      .update({
        repeticoes: 15
      });

    console.log("Ficha exercicio atualizado");



    console.log("=================================");
    console.log("TESTE EXECUCOES");
    console.log("=================================");

    // INSERT
    const execucaoRef = await db.collection("execucoes").add({
      alunoId: alunoRef.id,
      fichaId: fichaRef.id,
      dataExecucao: new Date(),
      concluida: false
    });

    console.log("Execucao criada:", execucaoRef.id);

    // SELECT
    const execucaoDoc = await db.collection("execucoes")
      .doc(execucaoRef.id)
      .get();

    console.log(execucaoDoc.data());

    // UPDATE
    await db.collection("execucoes")
      .doc(execucaoRef.id)
      .update({
        concluida: true
      });

    console.log("Execucao atualizada");



    console.log("=================================");
    console.log("TESTE EXECUCAO_DETALHES");
    console.log("=================================");

    // INSERT
    const detalheRef = await db.collection("execucao_detalhes").add({
      execucaoId: execucaoRef.id,
      exercicioId: exercicioRef.id,
      seriesRealizadas: [12, 10, 9],
      cargasRealizadas: [20, 20, 18],
      percepcaoEsforco: 8
    });

    console.log("Detalhe criado:", detalheRef.id);

    // SELECT
    const detalheDoc = await db.collection("execucao_detalhes")
      .doc(detalheRef.id)
      .get();

    console.log(detalheDoc.data());

    // UPDATE
    await db.collection("execucao_detalhes")
      .doc(detalheRef.id)
      .update({
        percepcaoEsforco: 9
      });

    console.log("Detalhe atualizado");



    console.log("=================================");
    console.log("TESTE HISTORICO");
    console.log("=================================");

    // INSERT
    const historicoRef = await db.collection("historico").add({
      tipo: "treino_concluido",
      dados: {
        alunoId: alunoRef.id,
        fichaId: fichaRef.id
      },
      timestamp: new Date()
    });

    console.log("Historico criado:", historicoRef.id);

    // SELECT
    const historicoDoc = await db.collection("historico")
      .doc(historicoRef.id)
      .get();

    console.log(historicoDoc.data());



    console.log("=================================");
    console.log("TODOS OS TESTES FINALIZADOS");
    console.log("=================================");

  } catch (error) {

    console.error("ERRO:");
    console.error(error);

  }
}

executarTestes();