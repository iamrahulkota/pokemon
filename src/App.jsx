import React from "react"
import { Route, Routes } from "react-router-dom"
import PokedexTitle from "./Components/PokedexTitle/PokedexTitle"
import PokemonDetails from "./Components/PokemonDetails/PokemonDetails"


function App() {

  return (
      <Routes>
        <Route path='/' element={<PokedexTitle />} />
        <Route path='/pokemon/:id' element={<PokemonDetails />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
  )
}

export default App
