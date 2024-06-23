import React from 'react'
import { Link } from 'react-router-dom'

function PokemonCard({name, imageurl, types, id}) {
  return (
    <>
    <Link to={`/pokemon/${id}`} >
        <div className='bg-white m-3 p-5 w-64 h-80'>
            
            <div className='h-100'>
                <div className='h-3/5 mx-auto'>
                    <img src={imageurl} width='150px' className='mx-auto'/>
                </div>
                <div className='h-2/5'>
                    <h1 className='text-2xl font-bold uppercase text-center my-5'>{name}</h1>
                    <p className=''>{types}</p>
                </div>
            </div>
            
        </div>
    </Link>
        
    </>
  )
}

export default PokemonCard