export class Lancamento {
    constructor(
        public id: number,
        public data: string,
        public tipo: string,
        public descricao: string,
        public localizacao: string,
        public funcionarioId: number
    ) { }
}