// client/app/controllers/NegociacaoController.js

class NegociacaoController {
    adiciona(event) {
        // Cancelando a submissão do formulário
        event.preventDefault();

        // A ideia é que $ seja o querySelector
        // Realizando o bind, $ mantém document como seu contexto this
        let $ = document.querySelector.bind(document);

        // Buscando os elementos
        let inputData = $("#data");
        let inputQuantidade = $("#quantidade");
        let inputValor = $("#valor");

        console.log(inputData.value);
        console.log(parseInt(inputQuantidade.value));
        console.log(parseFloat(inputValor.value));
    }
}
