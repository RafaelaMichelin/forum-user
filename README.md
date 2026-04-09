# Fórum de Usuários - API

Este projeto é uma API REST desenvolvida com o framework NestJS utilizando o ORM Sequelize.

A aplicação tem como objetivo servir como backend para um sistema de fórum de usuários, onde será possível futuramente criar perguntas e respostas.

 > ⚠️ Este projeto é apenas o backend (API). Não há interface frontend implementada até o momento.


### :hammer: Projeto em Andamento
---

## 🎓 Sobre o projeto

Este projeto foi desenvolvido com foco em aprendizado e prática de desenvolvimento backend moderno utilizando o NestJS.

O principal objetivo é explorar e consolidar conceitos importantes como:

* Arquitetura modular
* Separação de responsabilidades (Controller, Service, Module)
* Integração com banco de dados usando Sequelize
* Uso de injeção de dependência


---

## 🚀 Tecnologias utilizadas

* Node.js
* NestJS
* Sequelize
* MySQL
* TypeScript

---

## 📁 Estrutura do projeto

O projeto segue a arquitetura modular do NestJS:

```id="k2g1pj"
src/
 ├── user/
 │   ├── user.module.ts
 │   ├── user.controller.ts
 │   ├── user.service.ts
 │   ├── user.model.ts
 │
 ├── config/
 │   ├── sequelize.config.ts
 │
 ├── app.module.ts
 ├── main.ts
```

### 📌 Organização

* **Module** → organiza os recursos da aplicação
* **Controller** → responsável pelas rotas (HTTP)
* **Service** → contém a lógica de negócio
* **Sequelize** → configuração e integração com o banco de dados

---

## 👤 Funcionalidades atuais

### CRUD de Usuários

A API atualmente permite:

* Criar usuários
* Listar usuários
* Buscar usuário pelo Nome
* Atualizar usuário
* Remover usuário

---

## 🛠️ Configuração do ambiente

### 1. Instalar dependências

```bash id="g9r8x2"
npm install
```

### 2. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz:

```env id="l7d3sa"
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root
DB_DATABASENAME=forum
```

---

## ▶️ Executando o projeto

```bash id="8zq2mj"
npm run start:dev
```

A API estará disponível em:

```id="u9v2de"
http://localhost:3000
```

---

## 📌 Endpoints

### Usuários (`/users`)

| Método | Rota       | Descrição            |
| ------ | ---------- | -------------------- |
| GET    | /users     | Lista usuários |
| GET    | /users/:name | Busca usuário pelo nome |
| POST   | /users     | Cria um usuário      |
| PUT  | /users/:id | Atualiza um usuário  |
| DELETE | /users/:id | Remove um usuário    |

---

## 📈 Próximas funcionalidades

O projeto continuará evoluindo como parte do processo de aprendizado:

* 📌 Sistema de perguntas (Questions)
* 💬 Sistema de respostas (Answers)
* 🔐 Autenticação com JWT

---


## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

## 👨‍💻 Autor

Rafaela Michelin
