import Axios from "axios";

const api = Axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

class PokedexAPIService {

    /**
     * @param {string|number} nameOrId Name or id for pokemon
     * @return Promise
     */
    static async getPokemon(nameOrId) {
        const response = await api.get(`pokemon/${nameOrId}`);
        return response.data;
    }

    /**
     * @param {string|number} nameOrId Name or id for pokemon
     * @return Promise
     */
    static async getSpecies(nameOrId){
        const response = await api.get(`pokemon-species/${nameOrId}`);
        return response.data;
    }

    /**
     * @param {string|number} nameOrId Name or id for pokemon
     * @return Promise
     */
    static async getGender(nameOrId){
        const response = await api.get(`gender/${nameOrId}`);
        return response.data;
    }

}

export default PokedexAPIService;
