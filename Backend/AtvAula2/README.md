### Componentes necessários
Pesquise no google, baixe e instale as versões LTS dos seguites aplicativos, para o seu Sistema Operacional.

- Visual Studio
- Node.js
- XAMPP (sql)

## Abrindo o projeto

- No aplicativo XAMPP, clique no botão para iniciar o "Mysql"
- Após isso, clique do lado direito do aplicativo no ícone escrito "shell" e insira o seguinte código:
  ```bash
    drop database if exists prodCantina;
    create database prodCantina;
    use prodCantina;

    create table produtos(
    id integer primary key auto_increment,
    nome varchar(40) unique not null,
    preco decimal(3,2) not null,
    quantidade int not null
    );

    describe produtos;

    insert into produtos(nome, preco, quantidade) VALUES
    ("Pão de Queijo", "5.00", "10"),
    ("Coxinha de Frango", "7.50", "12"),
    ("Hamburguer de Carne", "7.50", "20"),
    ("Hamburger de Cheddar", "7.50", "20"),
    ("Refrigerante lata Fanta Uva", "5.50", "10"),
    ("Refrigerante lata Fanta Laranja", "5.50", "10"),
    ("Refrigerante lata Sprite", "5.50", "10"),
    ("Refrigerante lata CocaCola", "5.50", "10"),
    ("Refrigerante lata CocaCola Zero", "5.50", "10");
    
  ```
- Após isso, pode digitar "Exit" duas vezes para fechar o terminal e prosseguir com a próxima etapa
  
- Abra um terminal CMD no visual studio e digite os comandos a seguir
```bash
    cd back
    npm i
    nodemon ou node server.js
```
- Após receber a mensagem "backend respondendo na porta 3000" no terminal do visual studio, basta executar o arquivo Index.html na pasta "Front" com o live server
- Você notará na tabela os dados inseridos anteriormente e no topo da tela um botão de cadastrar para adicionar novos produtos, e o botão listar todos, para abrir a página na qual você ja está agora
