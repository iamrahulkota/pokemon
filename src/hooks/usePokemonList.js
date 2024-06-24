import React, { useEffect, useState } from 'react'
import downloadPokemons from '../utils/downloadPokemons';

function usePokemonList(DEFAULT_URL) {
    

    const [pokemonListState, setPokemonList] = useState({
        pokemonList : [],
        pokedexUrl : DEFAULT_URL,
        nextUrl : DEFAULT_URL,
        prevUrl : DEFAULT_URL
    });



    useEffect(()=>{
        downloadPokemons(pokemonListState, setPokemonList, DEFAULT_URL);
    },[pokemonListState.pokedexUrl]);
    
  return [pokemonListState, setPokemonList]
}

export default usePokemonList