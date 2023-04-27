const formulario = document.querySelector("[data-formulario]");
const camposDoFormulario = document.querySelectorAll("[required]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaResposta = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "mensagem": e.target.elements["mensagem"].value
    }

    localStorage.setItem("cadastro", JSON.stringify(listaResposta));
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'tooShort'
]

const mensagens = {
    nome: {
        valueMissing: "This field cannot be empty",
        typeMismatch: "Please fill in a valid name",
        tooShort: "Please fill in a valid name"
    },
    email: {
        valueMissing: "This field cannot be empty",
        typeMismatch: "Please fill in a valid email",
        tooShort: "Email must contain 10 digits"
    },
    mensagem: {
        valueMissing: "This field cannot be empty",
        typeMismatch: "Please fill in a valid message",
        tooShort: "Please fill in a valid message"
    }
}

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    })
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeInput = campo.checkValidity();

    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
}

const botao = document.getElementById("botao");
const mensagem = "Message sent, thank you!";

function exibeAlert() {
    alert(mensagem);
}

botao.addEventListener(onclick, (e) => {
    exibeAlert();
})