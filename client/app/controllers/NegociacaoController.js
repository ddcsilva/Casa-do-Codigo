// client/app/controllers/NegociacaoController.js

class NegociacaoController {
    adiciona(event) {
        // Cancelando a submissão do formulário
        event.preventDefault();

        alert("Chamei ação no controller");
    }
}
