import React, { useEffect, useState } from 'react'
import axios from 'axios'

function usePokemonList() {
    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";

    const [pokemonListState, setPokemonList] = useState({
        pokemonList : [],
        pokedexUrl : DEFAULT_URL,
        nextUrl : DEFAULT_URL,
        prevUrl : DEFAULT_URL
    });

    

    const POKEMONURL = "https://pokeapi.co/api/v2/pokemon";

    const downloadPokemon = async ()=>{

        const respone = await axios.get(pokemonListState.pokedexUrl ? pokemonListState.pokedexUrl : DEFAULT_URL);
        
        const totalPokemonData = respone.data.results;

        setPokemonList((state)=>({...state, nextUrl : respone.data.next, prevUrl : respone.data.previous}));
        
        const url = totalPokemonData.map((eachurl)=> axios.get(eachurl.url));

        const eachPokemonUrlData = await axios.all(url);
            
        const pokemon = eachPokemonUrlData.map((each)=>{
            const pok = each.data;
            return {
                id : pok.id,
                name : pok.name,
                image : pok.sprites.other.dream_world.front_default,
                types : pok.types
            }
        })

        setPokemonList((state)=>({...state, pokemonList : pokemon}))

    }

    useEffect(()=>{
        downloadPokemon();
    },[pokemonListState.pokedexUrl]);
    
  return [pokemonListState, setPokemonList]
}

export default usePokemonList