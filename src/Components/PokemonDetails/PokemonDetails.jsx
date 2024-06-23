import { Link, useParams } from 'react-router-dom';
import usePokemon from '../../hooks/usePokemon';

function PokemonDetails() {

  const { id } = useParams();
  const [pokemon] =usePokemon(id);

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