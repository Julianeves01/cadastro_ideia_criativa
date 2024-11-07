class User {
    constructor( id, titulo, categorias, prioridade) {
        this.id = this.generateId();
        this.titulo = this.titulo;
        this.categorias = categorias;
        this.prioridade = prioridade;
        this.feedback = [];
    }

    generateId() {
        return Math.floor(Math.random() *999999) + 1;
    }
}

export default User;