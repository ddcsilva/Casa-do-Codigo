// client/app/app.js

// Cria a instância do Controller
let controller = new NegociacaoController();

// Associa o evento de submissão do formulário à chamada do método "adiciona"
document.querySelector(".form").addEventListener("submit", controller.adiciona.bind(controller));
