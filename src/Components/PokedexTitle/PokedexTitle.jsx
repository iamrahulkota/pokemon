import React from 'react'
import SearchBtn from "../SearchBtn/SearchBtn"
import PokemonList from "../PokemonList/PokemonList"

function PokedexTitle() {
  return (
    <>
      <div className="bg-[#F6E6CB] h-100 px-28">
          <h1 className='font-medium text-5xl py-12'>Podedex</h1>
          <SearchBtn />
          <PokemonList />
      </div>
    </>
  )
}

export default PokedexTitle