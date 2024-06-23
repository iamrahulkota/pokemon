import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function PokemonDetails() {

  const { id } = useParams();

  const POKEMON_DETAILS_URL = "https://pokeapi.co/api/v2/pokemon/"

  const [pokemon, setPokemon] = useState(null);

  const downloadPokemon = async ()=>{
    const response =  await axios.get(POKEMON_DETAILS_URL+id);
    const pokemon = response.data;
    setPokemon({
      name : pokemon.name,
      height : pokemon.height,
      weight : pokemon.weight,
      types : pokemon.types,
      image : pokemon.sprites.other.dream_world.front_default
    });
  }

  useEffect(()=>{
    downloadPokemon();
  }, []);

  return (
    <div className='bg-[#F6E6CB] h-screen'>
    
    <h1 className='mx-60 py-12 font-medium text-2xl'>
      <Link to='/'>Back</Link>
    </h1>
    {pokemon && <div className='mx-60'>
      <div className='bg-white w-2/6 mx-auto p-10'>
            <div>
              <img src={pokemon.image} className='mx-auto' />
              <h1 className='text-3xl font-medium text-center mt-5'>{pokemon.name}</h1>
            </div>
            <div className='my-3 flex'>
              <h1 className='text-xl font-medium my-1 mx-3'>Height : {pokemon.height}</h1>
              <h1 className='text-xl font-medium my-1 mx-3'>Weight : {pokemon.weight}</h1>
            </div>
            <div className='mx-3'>
              Type : {pokemon.types.map(t =><span key={t.type.nmae}>{t.type.name}</span>)}
            </div>
      </div>
        
    </div>}
    </div>
  )
}

export default PokemonDetails