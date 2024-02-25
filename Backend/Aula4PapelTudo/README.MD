### Componentes necessários
Pesquise no google, baixe e instale as versões LTS dos seguites aplicativos, para o seu Sistema Operacional.

- Visual Studio
- Node.js
- Xampp 

## Iniciando o projeto

- 1. Clone a pasta Aula4PapelTudo em seu computador
- 2. Abra a pasta com o visual studio 
- 3. Abra o Xampp e clique em "start"
- 4. No visual studio, entre no mysql, na instalação normal, ela deve se encontrar nesse caminho
```bash
    cd C:\xampp\mysql\bin
    mysql -u root
```
- 5. Insira o código do arquivo Script.sql que está localizado na pasta bd ou copiei e cole o seguinte código
```bash
-- SQL do banco de dados de Inventários com apenas uma tabela
DROP DATABASE IF EXISTS inventario;
CREATE DATABASE inventario CHARSET=UTF8 COLLATE utf8_general_ci;
USE inventario;
-- DDL Criação da estrutura da tabela
CREATE TABLE item(
    id integer not null primary key auto_increment,
    nome varchar(50) not null,
    descricao text,
    valor decimal(10,2) not null
);
-- DML Popular a tabela com dados de teste
INSERT INTO item (nome, descricao, valor) VALUES
('Mesa','Mesa de escritório',100.00),
('Computador','Desktop DEL i5, 8GB RAM, SSD 500GB',2200.00),
('Cadeira','Cadeira giratória de escritório',500.00),
('Longarina','Longarina de três cadeiras',450.00),
('Prateleira','Prateleira de vidro',2500.00),
('Prateleira','Prateleira de Madeira',1600.00);
```
- 6. Após inserir os dados no banco de dados, digite exit duas vezes e abra o prompt de comando novamente, e digite 
```bash
    cd api
    nodemon
```
- 6.1 Caso o nodemon não funcione, digite "node server.js"

- 7. Execute o index.html localizado na pasta front com o live server

- 8. Sua web deve estar funcionando agora