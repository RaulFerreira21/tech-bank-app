# Tech Bank App

Este projeto foi desenvolvido pelos alunos:
 - Diego Minelli - RM362536
 - Jackson dos Santos - RM359898
 - Jefferson Guerra - RM363144
 - Raul Ferreira - RM362993
 - Thomas Aguiar - RM363369

Matriculados na turma 3FRNT da Pós Graduação em Front-end Engeniering da FIAP.

O Tech Bank App é uma aplicação bancária digital desenvolvida em [Next.js](https://nextjs.org) com Material UI, simulando funcionalidades de uma fintech. O projeto permite visualizar saldo, extrato, realizar depósitos, transferências, pagamentos de boletos e acessar outros serviços de uma conta bancária.
Decidimos também reimaginar em alguns pontos o layout proposto ara o projeto, que pode ser encontrato nesse projeto do [Figma](https://www.figma.com/design/06sUi5crvAO4JuQHdGkdo2/Tech-Challenge?node-id=0-1&p=f&t=GN8a2pifAUeCwBl0-0)

## Funcionalidades
  As principais funcionalidades do projeto são:

- Visualização de saldo em conta corrente e poupança
- Extrato detalhado com agrupamento por data, edição e exclusão de lançamentos
- Depósito em conta corrente ou poupança
- Transferência entre contas
- Pagamento de boletos
- Listagem de serviços adicionais
- Interface responsiva e moderna

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org)
- [React](https://react.dev)
- [Material UI](https://mui.com)
- [json-server](https://github.com/typicode/json-server) (mock API)

## Como rodar o projeto

1. **Clone o repositório e instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de dados (json-server):**
   ```bash
   npm install -g json-server
   json-server --watch json-server/db.json --port 3001
   ```

3. **Inicie o servidor de desenvolvimento Next.js:**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação:**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador. Após abrir a aplicação no seu navegador, aparecerá uma tela inicial informativa sobre o Bytebank, para acessar a parte transacional do projeto, clique em "Já tenho conta".

## Documentação de Componentes com Storybook

Este projeto utiliza o [Storybook](https://storybook.js.org/) para documentar e visualizar os componentes de interface de forma isolada.

### O que foi feito

- **Configuração do Storybook** integrada ao projeto Next.js.
- **Stories criados** para os principais componentes da pasta `src/components`, permitindo visualizar exemplos, estados e variações.

### Como rodar o Storybook

1. Inicie o Storybook:
   ```bash
   npm run storybook
   ```

2. Acesse o Storybook no navegador:
   ```
   http://localhost:6006
   ```

## Estrutura do Projeto

- `src/pages/` — Páginas principais (dashboard, extrato, depósito, etc)
- `src/components/` — Componentes reutilizáveis da interface
- `src/assets/` — Imagens e ícones
- `src/utils/` — Utilitários e constantes
- `json-server/db.json` — Base de dados simulada para extratos e operações financeiras
- `src/stories` - Documentação visual dos componentes do projeto

## Observações

- O projeto utiliza o `json-server` para simular uma API REST. Certifique-se de deixá-lo rodando para que as operações funcionem corretamente.
- Os dados não são persistidos em um banco real, apenas no arquivo `db.json`.

## Licença

Projeto desenvolvido para fins educacionais no Tech Challenge FIAP. Pós Graduação em Front-end Engeniering
