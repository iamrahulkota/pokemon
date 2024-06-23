import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PokemonCard from '../PokemonCard/PokemonCard';

function PokemonList() {

    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";

    const [pokemonList, setPokemonList] = useState([]);

    const [pokedexUrl, setPokedexUrl] = useState(DEFAULT_URL);

    const [prevUrl, setPrevUrl] = useState(DEFAULT_URL);

    const [nextUrl, setNextUrl] = useState(DEFAULT_URL);

    

    const POKEMONURL = "https://pokeapi.co/api/v2/pokemon";

    const downloadPokemon = async ()=>{

        const respone = await axios.get(pokedexUrl ? pokedexUrl : DEFAULT_URL);

        const totalPokemonData = respone.data.results;

        setNextUrl(respone.data.next);
        setPrevUrl(respone.data.previous);
        
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
        setPokemonList(pokemon);

    }

    useEffect(()=>{
        downloadPokemon();
    },[pokedexUrl]);

    console.log(pokemonList[0])
    

   
  return (
    <>
        <div className=''>
            <button
            onClick={()=>setPokedexUrl(prevUrl)}
             className='m-8 px-8 py-2 text-2xl font-medium border-2 border-black'>Prev</button>
            <button 
            onClick={()=>setPokedexUrl(nextUrl)}
            className='m-8 px-8 py-2 text-2xl font-medium border-2 border-black'>Next</button>
        </div>
        <div className='flex flex-wrap'>
            {pokemonList.map(eachitem => <PokemonCard name={eachitem.name} imageurl={eachitem.image} id={eachitem.id}/>)}
        </div>
    </>
  )
}

export default PokemonList