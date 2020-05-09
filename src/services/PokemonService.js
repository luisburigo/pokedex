import pokedex from "../data/pokedex.json"
import pokedexStats from "../data/pokedex-stats.json"

class PokemonService {
    static getPokemonByNum(num) {
        return pokedex.pokemon.find(pokemon => pokemon.num === num);
    }

    static getPokemonStatsById(id) {
        return pokedexStats.find(pokemon => pokemon.id === id);
    }

    static getPokemonStatsBaseById(id) {
        return this.getPokemonStatsById(id).base;
    }

    static getPokemonEvolutionsByPokemon(pokemon) {
        const evolutions = pokemon.next_evolution;

        if (evolutions && evolutions.length) {
            return evolutions.map(evolution => this.getPokemonByNum(evolution.num))
        }

        return [];
    }

    static getAllPokemons() {
        return [...pokedex.pokemon];
    }
}

export default PokemonService;
