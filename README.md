# Search Pilot

Projeto para pesquisar usuários do github pelo username e visualizar detalhamento do mesmo.

**(Link e stack utilizada está listada na lateral do repositório)**

## 📚 Escolhas

O projeto foi inteiramente criado do zero, por isso as escolhas não seguem um padrão arquitetural complexo, até mesmo por se tratar de uma aplicação menor feita em um período curto de tempo.

## 🎯 Objetivos

- Criar um projeto do zero, sem auxílio de libs de componentes ou que auxiliam na performance
- Ter a possibilidade de utilizar o sistema apenas com o teclado (setas, tab, espaço, enter)
- Entregar um design agradável tanto para o desktop quanto para o mobile (Todo o layout foi criado do zero e inspirado nas cores e componentes do próprio Github)
- Avaliar trade-off de tempo X entrega

## 💯 Performance & Acessiblidade & User Experience

- Input de pesquisa que faz um auto-search possui um debounce de 500ms para evitar chamadas desnecessárias
- Valor do input pode ser pesquisado aguardando os 500ms depois da última digitação ou pressionando enter (onSubmit de um formulário)
- Opções da pesquisa podem ser navegáveis com um _tab_ e depois com as setas do teclado (cima/baixo & direita/esquerda)
- Com um "_enter_" ou _"space"_ também é possível acessar o detalhamento do perfil que está em foco nas opções apresentadas
- Modal utilizado corretamente, com React.Portal e fazendo o gerenciamento de foco corretamente
- É possível sair do modal com um click fora
- É possível sair do modal com a tecla _"esc"_

## 📈 Melhorias

- Abstrair lógica de manipulação de eventos de teclado para custom hooks
- Melhorar testes (teste de integração + unitários nos componentes prioritários)
- Criar HOC para gerenciar o retorno da requisição e exibir o resultado (loading, erro, ausência de dados ou dados)

## 🧪 Rodando os testes

Para rodar o único teste E2E criado até o momento pode ser utilizado os comandos do `package.json` do cypress. Ou também rodando-o manualmente

```bash
  npm run cy:run-e2e
```

Ou se desejar abrir o cypress também é possível:

```bash
  npm run cy:open-e2e
```
