# ControlFit---Back-End
API REST para gerenciamento de alunos, treinos, execuções e relatórios para Personal Trainers, utilizando Node.js, Express e Firebase Firestore.

# 🏋️ ControlFit API

Sistema de Gestão para Personal Trainers desenvolvido como Projeto Integrador VII do Centro Universitário de Ourinhos (UNIFIO).

## 📌 Objetivo

O ControlFit foi criado para facilitar o gerenciamento de alunos, treinos e acompanhamento da evolução física.

O sistema permite:

- Cadastro de alunos
- Cadastro de exercícios
- Criação de fichas de treino
- Registro de execuções
- Histórico de atividades
- Relatórios de desempenho

---

# 🚀 Tecnologias Utilizadas

- Node.js
- Express.js
- Firebase Firestore
- Firebase Authentication
- JavaScript

---

# 📂 Estrutura do Projeto

```text
backend/
│
├── src/
│   │
│   ├── config/
│   │   └── firebase.js
│   │
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── middlewares/
│   ├── models/
│   │
│   ├── app.js
│   └── server.js
│
├── serviceAccountKey.json
├── package.json
└── README.md
```

---

# ⚙️ Instalação

## 1. Clonar projeto

```bash
git clone https://github.com/mauro-roque/ControlFit---Back-End-

cd controlfit/backend
```

---

## 2. Instalar dependências

```bash
npm install
```

Ou:

```bash
npm install express firebase-admin cors dotenv
```

---

## 3. Configurar Firebase

Acesse:

```text
Firebase Console
→ Configurações do Projeto
→ Contas de Serviço
→ Gerar Nova Chave Privada
```

Baixe o arquivo:

```text
serviceAccountKey.json
```

Coloque na raiz do projeto:

```text
backend/serviceAccountKey.json
```

---

## 4. Configurar conexão Firebase

Arquivo:

```text
src/config/firebase.js
```

```js
const admin = require("firebase-admin");

const serviceAccount = require("../../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;
```

---

# ▶️ Executando o Projeto

## Desenvolvimento

```bash
node src/server.js
```

ou

```bash
npm start
```

---

Saída esperada:

```text
Servidor rodando na porta 3000
```

---

# 🌐 URL Base

```http
http://localhost:3000
```

---

# 📊 Banco de Dados (Firestore)

Coleções utilizadas:

```text
users
alunos
exercicios
fichas
execucoes
historico
```

---

# 👨‍🎓 Alunos

## Criar Aluno

### POST

```http
/alunos
```

Body:

```json
{
  "alunoId": "ALUNO001",
  "personalId": "PERSONAL001",
  "nome": "João Silva",
  "dataNascimento": "2000-01-01",
  "objetivos": "Hipertrofia",
  "status": "ativo"
}
```

---

## Listar Alunos

### GET

```http
/alunos
```

---

## Buscar Aluno por ID

### GET

```http
/alunos/:id
```

---

## Buscar Alunos de um Personal

### GET

```http
/alunos/personal/:personalId
```

---

## Atualizar Aluno

### PUT

```http
/alunos/:id
```

Body:

```json
{
  "objetivos": "Emagrecimento"
}
```

---

## Excluir Aluno

### DELETE

```http
/alunos/:id
```

---

# 💪 Exercícios

## Criar Exercício

### POST

```http
/exercicios
```

Body:

```json
{
  "nome": "Supino Reto",
  "grupoMuscular": "Peito",
  "instrucoes": "Executar lentamente",
  "personalId": "PERSONAL001"
}
```

---

## Listar Exercícios

### GET

```http
/exercicios
```

---

## Buscar Exercício

### GET

```http
/exercicios/:id
```

---

## Buscar Exercícios do Personal

### GET

```http
/exercicios/personal/:personalId
```

---

## Atualizar Exercício

### PUT

```http
/exercicios/:id
```

---

## Excluir Exercício

### DELETE

```http
/exercicios/:id
```

---

# 📋 Fichas

## Criar Ficha

### POST

```http
/fichas
```

Body:

```json
{
  "alunoId": "ALUNO001",
  "personalId": "PERSONAL001",
  "nomeFicha": "Ficha A - Hipertrofia"
}
```

---

## Listar Fichas

### GET

```http
/fichas
```

---

## Buscar Ficha

### GET

```http
/fichas/:id
```

---

## Buscar Fichas de um Aluno

### GET

```http
/fichas/aluno/:alunoId
```

---

## Buscar Fichas de um Personal

### GET

```http
/fichas/personal/:personalId
```

---

## Atualizar Ficha

### PUT

```http
/fichas/:id
```

---

## Ativar Ficha

### PUT

```http
/fichas/:id/ativar
```

---

## Desativar Ficha

### PUT

```http
/fichas/:id/desativar
```

---

## Excluir Ficha

### DELETE

```http
/fichas/:id
```

---

# 🏃 Execuções

## Criar Execução

### POST

```http
/execucoes
```

Body:

```json
{
  "alunoId": "ALUNO001",
  "fichaId": "FICHA001"
}
```

---

## Listar Execuções

### GET

```http
/execucoes
```

---

## Buscar Execução

### GET

```http
/execucoes/:id
```

---

## Buscar Execuções por Aluno

### GET

```http
/execucoes/aluno/:alunoId
```

---

## Atualizar Execução

### PUT

```http
/execucoes/:id
```

---

## Concluir Execução

### PUT

```http
/execucoes/:id/concluir
```

### Regra

Após concluída:

- Não pode ser alterada
- Não pode ser excluída

---

## Excluir Execução

### DELETE

```http
/execucoes/:id
```

---

# 📜 Histórico

## Registrar Evento

### POST

```http
/historico
```

Body:

```json
{
  "tipo": "treino_concluido",
  "dados": {
    "alunoId": "ALUNO001",
    "fichaId": "FICHA001"
  }
}
```

---

## Listar Histórico

### GET

```http
/historico
```

---

## Buscar Histórico

### GET

```http
/historico/:id
```

---

## Buscar Histórico do Aluno

### GET

```http
/historico/aluno/:alunoId
```

---

# 📈 Relatórios

## Evolução do Aluno

### GET

```http
/relatorios/evolucao/:alunoId
```

---

## Frequência do Aluno

### GET

```http
/relatorios/frequencia/:alunoId
```

---

## Relatório de Fichas

### GET

```http
/relatorios/fichas/:alunoId
```

---

## Dashboard do Personal

### GET

```http
/relatorios/dashboard/:personalId
```

---

# 🔒 Regras de Negócio

### Ficha vinculada a aluno

Não é permitido criar ficha sem aluno.

---

### Histórico Imutável

Após registrado, o histórico não pode ser alterado.

---

### Execução Concluída

Após conclusão:

- Não pode ser editada
- Não pode ser excluída

---

### Relatórios

Os relatórios são gerados utilizando dados reais armazenados no Firestore.

---

# 👨‍💻 Equipe

Projeto Integrador VII

- Arthur Viceles Vida
- Lucas Adriano
- Leonardo Vieira
- Gabriel Gonçalves
- Mauro Roque

---

# 🎯 ControlFit

Mais produtividade para o profissional e melhores resultados para os alunos.



