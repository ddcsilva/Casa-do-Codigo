class Negociacao {
    constructor(data, quantidade, valor) {
        // Cada parâmetro recebido será atribuído às propriedades da classe
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    obtemVolume() {
        return this._quantidade * this._valor;
    }

    getData() {
        return this._data;
    }

    getQuantidade() {
        return this._quantidade;
    }

    getValor() {
        return this._valor;
    }

    getVolume() {
        return this._quantidade * this._valor;
    }
}
