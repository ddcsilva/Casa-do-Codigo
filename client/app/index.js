// client/app/index.js

var campos = [
    document.querySelector("#data"),
    document.querySelector("#valor"),
    document.querySelector("#quantidade"),
];

console.log(campos); // Verificando o conteúdo do array

// Precisamos do tbody, pois ele receberá a td que vamos construir
var tbody = document.querySelector("table tbody");

document.querySelector(".form").addEventListener("submit", function (event) {
    // Cancelando a submissão do formulário
    event.preventDefault();

    // Substituindo o alert pelo novo código
    var tr = document.createElement("tr");

    campos.forEach(function (campo) {
        // Cria uma td sem informações
        var td = document.createElement("td");

        // Atribui o valor do campo à td
        td.textContent = campo.value;

        // Adiciona a td na tr
        tr.appendChild(td);
    });

    // Nova td que armazenará o volume da negociação
    var tdVolume = document.createElement("td");

    // As posições 1 e 2 do array armazenam os campos de quantidade e valor respectivamente
    tdVolume.textContent = campos[1].value * campos[2].value;

    // Adicionando a td que faltava à tr
    tr.appendChild(tdVolume);

    // Adicionando a tr
    tbody.appendChild(tr);

    // limpa o campo da data
    campos[0].value = "";
    // limpa o campo da quantidade
    campos[1].value = 1;
    // limpa o campo do valor
    campos[2].value = 0;
    // foca no campo da data
    campos[0].focus();
});
