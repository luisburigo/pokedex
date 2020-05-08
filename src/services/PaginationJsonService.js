class Pagination {

    constructor(data) {
        this._data = data;
        this._length = data.length;
        this._state = {
            page: 1,
            index: 0,
        }
    }

    load(quantity) {
        // Estou na pagina 1 e quero 10 por pagina
        // Então nessa primeira pagina eu vou ter 10 itens
        // Se eu vou para a pagina 2 e querer carregar mais 5
        // eu vou ter que pegar do json da posicao 10 até o 5
        /*
                const data = */
        const data = this._data.splice(this._state.index, quantity);
        this._state.index = quantity - 2;
        ++this._state.page;
        return data;
    }
}

class PaginationJsonService {

    static create(json, quantity) {
        let pagination = new Pagination(json);
        pagination.load(quantity);
        return pagination;
    }

}

let pagination = PaginationJsonService.create([1, 2, 3, 4, 56, 7, 8, 9], 10);
pagination.load(10)

//export default PaginationJsonService;
