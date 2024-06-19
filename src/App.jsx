import React from "react"
import PokedexTitle from "./Components/PokedexTitle/PokedexTitle"
import SearchBtn from "./Components/SearchBtn/SearchBtn"


function App() {

  return (
    <>
      <div className="bg-[#F6E6CB] w-full h-screen px-28">
        <PokedexTitle />
        <SearchBtn />
      </div>
    </>
  )
}

export default App
