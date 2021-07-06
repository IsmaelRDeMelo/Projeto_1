import Pokemon from "./Pokemon.js";

export default class Mouse extends Pokemon{
    constructor(id, categoria, ataque, defesa){
        super(id, categoria, ataque, defesa);
        this.fator_evolutivo = 4;
    }

    falar(){
        console.log(this.nome + "... " + this.nome + " !!!");
    }

    evoluir(){
        this.falar();
        console.log(this.getNome() + " evoluindo... agora seus atributos serão multiplicados por " + this.fator_evolutivo);
        this.nivel++;
        this.ataque = this.ataque * this.fator_evolutivo;
        this.defesa = this.defesa * this.fator_evolutivo;
    }

    setDescricao(descricao){
        this.descricao = descricao;
    }

    getDescricao(){
        return this.descricao;
    }

    toString(){
        console.log("Dados do Pokemon: " + "\nID: " + this.id + "\nNome: " + this.getNome() + 
        "\nNível: " + this.nivel + "\nAtaque: " + this.getAtaque() + "\nDefesa: " + this.getDefesa()
        + "\nDescrção: " + this.getDescricao() + "\nTipo: " + this.categoria);
    }
}