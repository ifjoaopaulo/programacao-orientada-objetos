# Exercício — Biblioteca API com PostgreSQL (solução)

## 1. Configure o banco de dados

- É preciso ter um **PostgreSQL rodando** na sua máquina.
- Abra `src/banco.ts` e **ajuste os dados de acesso** para os do seu PostgreSQL:

| Campo | Valor no projeto |
|---|---|
| `host` | `localhost` |
| `port` | `5432` |
| `username` | `postgres` |
| `password` | `postgres` |

- Se o usuário ou a senha estiverem errados, o próximo passo falha com erro de autenticação.

## 2. Instale as dependências

```
npm install
```

## 3. Crie o banco e cadastre os livros

```
npx ts-node src/criar-banco.ts
```

- Cria o banco `biblioteca`, se ele ainda não existir.
- Cadastra 6 livros, se a tabela estiver vazia.

## 4. Suba a API

```
npm run start:dev
```

## 5. Teste no navegador

| Rota | Resposta |
|---|---|
| `http://localhost:3000/livros` | os 6 livros |
| `http://localhost:3000/livros/2` | um livro |
| `http://localhost:3000/livros/9` | 404 — `Livro 9 não existe` |
| `http://localhost:3000/livros/abc` | 400 — o id não é número |
| `http://localhost:3000/livros/autor/Machado de Assis` | desafio: os 2 livros do autor |
