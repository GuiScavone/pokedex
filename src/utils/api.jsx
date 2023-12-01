import axios from "axios"
import { PokemonGeneration } from "./generation";


export const searchPokemon = async (pokemon) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await axios.get(url)
        return response.data;
    } catch (error) {
        console.log("error: ", error)
    }
}
export const getPokemons = async (generation, itensPerPage = 151, offset = 0) => {
    try {
        let start, end;

        if (generation === "first") {
            start = 1;
            end = 151;
            if (offset + itensPerPage > end ) {
                itensPerPage = 7
            }
            
        } else if (generation === "second") {
            start = 152;
            end = 251;
            if (offset + itensPerPage > end ) {
                itensPerPage = 5
            }
        } else if (generation === "third") {
            start = 252;
            end = 386;
            if (offset + itensPerPage > end ) {
                itensPerPage = 5
            }
        }

        let url = `https://pokeapi.co/api/v2/pokemon?limit=${itensPerPage}&offset=${offset}`;

        if (generation === PokemonGeneration.First) {
            url = `https://pokeapi.co/api/v2/pokemon?limit=${itensPerPage}&offset=${offset}`;
        } else if (generation === PokemonGeneration.Second) {
            url = `https://pokeapi.co/api/v2/pokemon?limit=${itensPerPage}&offset=${offset + 151}`;
        } else if (generation === PokemonGeneration.Third) {
            url = `https://pokeapi.co/api/v2/pokemon?limit=${itensPerPage}&offset=${offset + 251 }`;
        }
        
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log("error: ", error);
    }
};


export const getPokemonData = async (url) => {
    try {
        const response = await axios.get(url)
        return response.data;
    } catch (error) {
        console.log("error: ", error)
    }
}