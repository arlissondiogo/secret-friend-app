# Desafio do Programa ONE 

<div align="center">
  <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ25mdW1xMWF3d291a2l5azFxOWpuY3k0OHUya3poZzh0MmI3MGs3YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Pk9n41p2yA7CFGJg60/giphy.gif" width="100" alt="Demonstração">
</div>

## Sorteador de amigo secreto

### Descrição

Um pequeno projeto web para organizar um sorteio de amigo secreto. Permite adicionar nomes de amigos, visualizar a lista e sortear um amigo aleatoriamente.

### Funcionalidades

- Adicionar nomes de amigos à lista

- Visualizar lista atualizada em tempo real

- Sortear um amigo aleatório da lista

- Validações simples: evita adicionar nomes vazios e exige pelo menos dois amigos para sortear

### Tecnologias usadas

- HTML5

- CSS3

- JavaScript (vanilla)

### Como baixar?

Clone o repositório:

1. no Prompt de Comando (CMD) digite:

```bash
git clone https://github.com/arlissondiogo/secret-friend-app

```

2. Navegue até a pasta do projeto no seu editor de código (por exemplo, VS Code).

3. Execute o projeto

**Ou faça o download do arquivo zip**

1. Clique no botão verde "Code" na página do repositório.

2. Selecione "Download ZIP".

3. Extraia os arquivos em uma pasta no seu computador.

4. Abra o projeto

5. Navegue até a pasta do projeto no seu editor de código (por exemplo, VS Code).

6. Execute o projeto

### Como utilizar?

- Digite o nome dos seus amigos no campo de texto e clique em "Adicionar".

- A lista de amigos aparece logo abaixo do campo.

- Quando a lista tiver pelo menos dois amigos, clique em "Sortear amigo" para escolher um amigo secreto aleatoriamente.

### Código JavaScript

O código principal está em script.js e é responsável por:

* Manter a lista de amigos em um array:

* Adicionar amigos à lista ao clicar no botão.

* Atualizar a lista exibida na tela.

* Realizar o sorteio de forma aleatória.

_**Abaixo explico a lógica utilizada:**_

```javascript
// Cria a lista de amigos em um array:
let amigos = [];
```

```javascript
function adicionarAmigo() {
  // Pega o elemento <input> que tem o id="amigo"
  let input = document.getElementById("amigo");

  // Lê o texto que o usuário digitou no campo de input
  let amigo = input.value;

  // Verifica se o campo não está vazio
  if (amigo !== "") {
    // Adiciona o nome digitado no array 'amigos'
    amigos.push(amigo);

    // Limpa o campo de texto para permitir nova digitação
    input.value = "";

    // Atualiza a lista de amigos exibida na tela
    mostrarLista();
  } else {
    // Se o campo estiver vazio, mostra um alerta para o usuário
    alert("Por favor, insira o nome de um amigo.");
  }
}
```

```javascript
function mostrarLista() {
  // Pega o elemento <ul> ou <ol> que tem o id="listaAmigos"
  let lista = document.getElementById("listaAmigos");

  // Limpa todo o conteúdo HTML dessa lista antes de mostrar os novos itens
  lista.innerHTML = "";

  // Percorre cada nome dentro do array 'amigos'
  amigos.forEach((amigo) => {
    // Cria um novo elemento <li> (item de lista)
    let li = document.createElement("li");

    // Define o texto do <li> como o nome do amigo
    li.textContent = amigo;

    // Adiciona o <li> criado dentro da lista (ul/ol)
    lista.appendChild(li);
  });
}
```

```javascript
function sortearAmigo() {
  // Pega a quantidade total de amigos na lista
  let numeroDeAmigos = amigos.length;

  // Verifica se há pelo menos dois amigos para sortear
  if (numeroDeAmigos < 2) {
    alert("Adicione pelo menos dois amigos para sortear.");
    return; // Sai da função sem continuar
  }

  // Gera um número aleatório entre 0 e (numeroDeAmigos - 1)
  let indiceSorteado = Math.floor(Math.random() * numeroDeAmigos);

  // Pega o nome do amigo correspondente ao índice sorteado
  let amigoSorteado = amigos[indiceSorteado];

  // Mostra um alerta com o nome do amigo sorteado
  alert(`O amigo sorteado é: ${amigoSorteado}`);
}
```

