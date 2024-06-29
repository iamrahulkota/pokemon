import axios from 'axios';
import React, { useEffect, useState } from 'react'
import downloadPokemons from '../utils/downloadPokemons';
import { useParams } from 'react-router-dom';


function usePokemon(pokemonName) {
  
    const { id } = useParams();

    const POKEMON_DETAILS_URL = "https://pokeapi.co/api/v2/pokemon/"
  
    const [pokemon, setPokemon] = useState(null);

    const [pokemonListState, setPokemonList] = useState({
        pokemonList : [],
        pokedexUrl : '',
        nextUrl : '',
        prevUrl : ''
    });
  
    const downloadPokemonGiven = async (id)=>{
      const response =  await axios.get(POKEMON_DETAILS_URL+ ((pokemonName) ? pokemonName : id));
      const pokemon = response.data;
      setPokemon({
        name : pokemon.name,
        height : pokemon.height,
        weight : pokemon.weight,
        types : pokemon.types,
        image : pokemon.sprites.other.dream_world.front_default
      });
      const types = response.data.types.map(t=>t.type.name);
      return types[0];
    }


    const downloadPokemonAndRelated = async (id)=>{
      try {
        const type = await downloadPokemonGiven(id);
        await downloadPokemons(pokemonListState, setPokemonList, `https://pokeapi.co/api/v2/type/${type}`)
      } catch (error) {
        console.log(error)
      }
        
    }


  
    useEffect(()=>{
      downloadPokemonAndRelated(id);
      window.scrollTo({top:0, left:0, behavior:'smooth'})
    }, [id, pokemonName]);

  return [pokemon, pokemonListState, ];
}

export default usePokemon