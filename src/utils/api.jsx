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

        if (generation === PokemonGeneration.First) {
            start = 1;
            end = 151;
        } else if (generation === PokemonGeneration.Second) {
            start = 152;
            end = 251;
        } else if (generation === PokemonGeneration.Third) {
            start = 252;
            end = 386;
        }

        let url = `https://pokeapi.co/api/v2/pokemon?limit=${itensPerPage}&offset=${offset}`;

        if (generation !== PokemonGeneration.First) {
            url = `https://pokeapi.co/api/v2/pokemon?limit=${itensPerPage}&offset=${offset + end}`;
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