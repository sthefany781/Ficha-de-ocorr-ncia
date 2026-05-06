function abrirModal(titulo, tipo, aluno, data, hora, motivo) {
  document.getElementById("titulo").innerText = titulo;

  let tipoElemento = document.getElementById("tipo");
  tipoElemento.innerText = tipo;

  // remove classes antigas
  tipoElemento.classList.remove("tipo-positiva", "tipo-negativa");

  // adiciona cor automaticamente
  if (tipo.toLowerCase() === "positiva") {
    tipoElemento.classList.add("tipo-positiva");
  } else {
    tipoElemento.classList.add("tipo-negativa");
  }

  document.getElementById("aluno").innerText = aluno;
  document.getElementById("data").innerText = data;
  document.getElementById("hora").innerText = hora;
  document.getElementById("motivo").innerText = motivo;

  document.getElementById("modal").classList.add("ativo");
}

function fecharModal() {
  document.getElementById("modal").classList.remove("ativo");
}

window.onclick = function(event) {
  let modal = document.getElementById("modal");
  if (event.target === modal) {
    fecharModal();
  }
}
