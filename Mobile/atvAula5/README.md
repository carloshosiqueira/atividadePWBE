## Projeto paginas mobile para Juros e Idade

### Atividade

A atividade consiste em desenvolver um aplicativo com 4 Telas

- Tela de Login (com dois usuários validos)
- Tela de Bem Vindo com dois botões ( Calcular Juros / Calcular Idade)
- Tela de Calcular Juros
- Tela de Calcular Idade

### Tecnologias

- Visual Studio - ambiente de programaçao
- Yarn 


### Dependências

Para o projeto funcionar em seu computador, clone o repositório, abra-o com o Visual Studio e entre na pasta Idade-Juros
1. Abra o prompt de comando do visual studio e digite os seguintes comandos 
```bash
npm i
yarn run web
```

Caso o código acima não funcione tente utilizar 

```bash
    yarn add @react-navigation/native
    yarn add react-native-safe-area-context
    yarn add react-native-screens
    yarn add react-native-svg
    yarn add @react-navigation/native-stack
    yarn add react-native-mask-input

    yarn run web
```

2. Quando o projeto abrir, ele deverá aparacer na tela para fazer login, onde os existentes são:
| Usuário | Senha |
| ------- | ----- |
| pessoa1 | 123   |
| pessoa2 | 456   |
| pessoa3 | 789   |


-- Colocar a imagem da tela de login aqui assim que possivel

3. Após entrar, você verá uma mensagem escrito bem vindo e dois botões na tela, um para calcular idade e outro para calcular juros

4. Na página de calcular idade você verá os campos: dia, mês e ano para preencher, e um botão para calcular a idade baseada no tempo atual

-- Colocar a imagem da tela de idade aqui assim que possivel

5 Na página de calcular juros você verá os campos: valor e taxa para preencher, e um botão para calcular o juros com base na formula (valor + (valor * taxa / 100))

-- Colocar a imagem da tela de juros aqui assim que possivel