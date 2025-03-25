# Atividade-mongo

# Gerenciamento de Alunos - CRUD com Node.js, Express e MongoDB

Este projeto é uma atividade da faculdade de **Ciência da Computação**, realizada no **3º período**, com o objetivo de desenvolver um sistema completo para o gerenciamento de alunos. A aplicação utiliza as tecnologias **Node.js**, **Express**, **MongoDB** e **Mongoose** para o backend, e **HTML**, **CSS** e **JavaScript** para o frontend. O sistema permite realizar as operações **CRUD** (Criar, Listar, Atualizar, Excluir) nos dados dos alunos.

## Tecnologias Utilizadas

### Backend:
- **Node.js**: Ambiente de execução JavaScript para o backend.
- **Express**: Framework para criação da API RESTful.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar os dados dos alunos.
- **Mongoose**: ODM para interação com o MongoDB.
- **CORS**: Liberação de acesso entre o frontend e o backend.

### Frontend:
- **HTML**: Estrutura da interface do usuário.
- **CSS**: Estilo da interface.
- **JavaScript**: Lógica para interação com a API.

## Funcionalidades

- **Cadastro de Alunos**: O usuário pode adicionar novos alunos ao sistema, informando nome, e-mail, curso, período, turma, turno, endereço e telefone.
- **Listagem de Alunos**: O usuário pode visualizar todos os alunos cadastrados no sistema.
- **Edição de Dados de Alunos**: O sistema permite editar as informações de um aluno já cadastrado.
- **Exclusão de Alunos**: O usuário pode excluir o registro de um aluno.

Endpoints da API
GET /students: Lista todos os alunos cadastrados.

POST /students: Cadastra um novo aluno.

PUT /students/:id: Atualiza as informações de um aluno.

DELETE /students/:id: Exclui o registro de um aluno.

Validação e Tratamento de Erros
A aplicação realiza validação de dados no frontend, garantindo que os campos do formulário sejam preenchidos corretamente antes de enviar os dados para o backend.

O backend também possui tratamento de erros, retornando mensagens apropriadas em caso de falhas na requisição.

Testes
Para testar a API, utilize ferramentas como Postman para verificar o funcionamento das rotas antes de conectar ao frontend.

Realize testes de todas as funcionalidades, incluindo a criação, listagem, atualização e exclusão de alunos.

Contribuições
Este projeto foi desenvolvido com o objetivo de praticar a implementação de um CRUD completo utilizando tecnologias modernas de desenvolvimento web, sendo parte de uma atividade acadêmica do curso de Ciência da Computação no 3º período. Sinta-se à vontade para contribuir ou sugerir melhorias.

Autor: Sophia De Paula