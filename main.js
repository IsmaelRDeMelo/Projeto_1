import Mouse from "./Mouse.js";
import Lizard from "./Lizard.js";
import MultiCategoria from "./MultiCategoria.js";

let pikachu = new Mouse(1, "Elétrico", 8, 8);
pikachu.setNome("Pikachu");
pikachu.setDescricao("Ratão tenebroso fuckin elétrico que solta raio " + 
"pra um carai enquanto grita PIKAACHUUUUU, o terror das donas de casa!!!");

let charizard = new Lizard(2, 2, 4, "Dragão");
charizard.setNome("Charizard");
charizard.setDescricao("Dragão voador de 3 toneladas kkkkkk, é brabo, o calor tá de matar " +
"porque ele cospe bola de fogo, putasso na maioria do tempo!!");

let evee = new MultiCategoria(1, ["Neutro", "Terra"], 1, 1);
evee.setNome("Evee");
evee.setDescricao("Um esquilo fofinho que não faz mal a uma cobra, até que alguém dá uma pedra pra ele kkkk"
+ " daí ele tem 4 formas possíveis de tocar o terror!!");

let mew = new MultiCategoria(4, ["Pisiquico", "Voado"], 5, 5);

let meusPokemon = [];
meusPokemon.push(pikachu);
meusPokemon.push(charizard);
meusPokemon.push(evee);

buscaPokemon(mew, meusPokemon);
exibePokemons(meusPokemon);

function buscaPokemon (busca, listaPokemon) {
    console.log("Buscando pokemon...");
    if (listaPokemon.indexOf(busca) === -1) {
        console.log("Pokemon não encontrado!!");
    }else{
        console.log("Pokemon encontrado!!\n");
        busca.toString();
    }
}

function exibePokemons(lista) {
    lista.forEach(pokemon => {
        pokemon.toString();
        console.log("======================");
    });
}