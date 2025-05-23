# Como rodar o json-server

Siga os passos abaixo para rodar o json-server com os dados do projeto:

## 1. Instale o json-server (caso ainda não tenha)

No terminal, execute:
npm install -g json-server

## 2. Verifique o arquivo de dados

Certifique-se de que o arquivo `db.json` está nesta pasta (`json-server`) e contém os dados desejados.

## 3. Inicie o servidor

No terminal, dentro da raiz do projeto, execute:
json-server --watch json-server/db.json --port 3001


---

**Dica:**  
Deixe o terminal com o json-server aberto enquanto estiver usando a aplicação para garantir que a API estará disponível.