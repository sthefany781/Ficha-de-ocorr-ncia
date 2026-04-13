let tipoSelecionado = "";


function selecionarTipo(tipo) {
    tipoSelecionado = tipo;

    document.querySelector(".negativa").classList.remove("ativo");
    document.querySelector(".positiva").classList.remove("ativo");

    if (tipo === "negativa") {
        document.querySelector(".negativa").classList.add("ativo");
    } else {
        document.querySelector(".positiva").classList.add("ativo");
    }
}

function salvar() {
    let nome = document.getElementById("nome").value;
    let cgm = document.getElementById("cgm").value;

    if (!nome || !cgm || !tipoSelecionado) {
        alert("Preencha os campos obrigatórios!");
        return;
    }

    alert("Ocorrência salva com sucesso!");
}

function limpar() {
    document.getElementById("nome").value = "";
    document.getElementById("cgm").value = "";
    document.getElementById("descricao").value = "";

    tipoSelecionado = "";

    document.querySelector(".negativa").classList.remove("ativo");
    document.querySelector(".positiva").classList.remove("ativo");
}

