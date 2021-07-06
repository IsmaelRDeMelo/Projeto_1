export default class Pokemon{
    constructor(id, categoria, ataque, defesa){
        this.id = id;
        this.categoria = categoria;
        this.ataque = ataque;
        this.defesa = defesa;
        this.nivel = 1;
        this.fator_evolutivo = 2;
    }

    setNome(nome){
        this.nome = nome;
    }

    getNome(){
        return this.nome;
    }

    setAtaque(ataque){
        this.ataque = ataque;
    }

    getAtaque(){
        return this.ataque;
    }

    setDefesa(defesa){
        this.defesa = defesa;
    }

    getDefesa(){
        return this.defesa;
    }

    setNivel(nivel){
        this.nivel = nivel;
    }

    falar(){};

    
    toString(){
        
    }

}
