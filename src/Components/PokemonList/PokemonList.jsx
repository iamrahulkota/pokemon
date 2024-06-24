

import usePokemonList from '../../hooks/usePokemonList';
import PokemonCard from '../PokemonCard/PokemonCard';

function PokemonList() {
  const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";
    const [pokemonListState, setPokemonList] = usePokemonList(DEFAULT_URL);

   
  return (
    <>
        <div className=''>
            <button
            onClick={()=>setPokemonList({...pokemonListState, pokedexUrl : pokemonListState.prevUrl})}
             className='m-8 px-8 py-2 text-2xl font-medium border-2 border-black'>Prev</button>
            <button 
            onClick={()=>setPokemonList({...pokemonListState, pokedexUrl : pokemonListState.nextUrl})}
            className='m-8 px-8 py-2 text-2xl font-medium border-2 border-black'>Next</button>
        </div>
        <div className='flex flex-wrap'>
            {pokemonListState.pokemonList.map(eachitem => <PokemonCard name={eachitem.name} imageurl={eachitem.image} id={eachitem.id}/>)}
        </div>
    </>
  )
}

export default PokemonList