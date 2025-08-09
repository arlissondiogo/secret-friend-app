let amigos = [];

function adicionarAmigo() {
  let input = document.getElementById("amigo");
  let amigo = input.value;

  if (amigo !== "") {
    amigos.push(amigo);
    input.value = "";

    mostrarLista();
  } else {
    alert("Por favor, insira o nome de um amigo.");
  }
}

function mostrarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  let numeroDeAmigos = amigos.length;

  if (numeroDeAmigos < 2) {
    alert("Adicione pelo menos dois amigos para sortear.");
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * numeroDeAmigos);
  let amigoSorteado = amigos[indiceSorteado];
  alert(`O amigo sorteado é: ${amigoSorteado}`);
}
