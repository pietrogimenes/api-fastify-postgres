
# API de Inscrição em Eventos - Fastify + PostgreSQL

## 📌 Sobre o Projeto

Esta API permite gerenciar eventos, inscrições de usuários e indicações de participantes, utilizando **Fastify** como framework backend e **PostgreSQL** como banco de dados. A API permite operações de **CRUD** (Criar, Listar, Atualizar e Deletar eventos e inscrições).

## 🚀 Tecnologias Utilizadas

- **Node.js** (runtime JavaScript)
- **Fastify** (framework web leve e rápido)
- **PostgreSQL** (banco de dados relacional)
- **JWT** (para autenticação de usuários)
- **dotenv** (gerenciamento de variáveis de ambiente)

## 📂 Estrutura do Projeto

```
📁 api-inscricao-eventos-fastify-postgres
├── 📄 server.js            # Servidor Fastify
├── 📄 db.js                # Conexão com o PostgreSQL
├── 📄 auth.js              # Autenticação com JWT
├── 📄 routes.js            # Rotas da API
├── 📄 .env                 # Configurações do ambiente
├── 📄 .gitignore           # Arquivos ignorados no Git
└── 📄 README.md            # Documentação do projeto
```

## 📦 Como Rodar o Projeto

### 1️⃣ **Clonar o Repositório**

```bash
git clone https://github.com/pietrogimenes/api-fastify-postgres.git
cd api-fastify-postgres
```

### 2️⃣ **Instalar Dependências**

```bash
npm install
```

### 3️⃣ **Configurar Variáveis de Ambiente**

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

```env
DATABASE_URL="sua_string_de_conexao_postgresql"
JWT_SECRET="sua_chave_secreta_jwt"
```

### 4️⃣ **Criar a Tabela no Banco**

```bash
node create-table.js
```

### 5️⃣ **Iniciar o Servidor**

```bash
npm start
```

> O servidor rodará na porta `3000` por padrão.

## 🔄 Rotas da API

### 🔹 Criar um Evento

**POST** `/events`

```json
{
  "name": "Evento de Tecnologia",
  "description": "Evento sobre novas tendências de tecnologia",
  "date": "2025-05-10"
}
```

### 🔹 Listar Eventos

**GET** `/events`

### 🔹 Inscrever um Usuário em um Evento

**POST** `/events/:id/inscricoes`

```json
{
  "user_id": 1
}
```

### 🔹 Indicar um Participante

**POST** `/events/:id/indicacoes`

```json
{
  "user_id": 2
}
```

## 📜 Licença

Este projeto está sob a licença **MIT**.

---

💻 **Desenvolvido por** [Pietro Gimenes](https://github.com/pietrogimenes) 🚀
