
import axios from "axios"

const downloadPokemons = async (pokemonListState, setPokemonList, default_url, limit=20)=>{

    const respone = await axios.get(pokemonListState.pokedexUrl ? pokemonListState.pokedexUrl : default_url);
    
    let totalPokemonData = respone.data.results ? respone.data.results : respone.data.pokemon;

    totalPokemonData = totalPokemonData.slice(0,limit);

    const url = totalPokemonData.map((p, idx)=> {

        if (p.url) {
            return axios.get(p.url);
        }
        else if (p.pokemon.url){
            return axios.get(p.pokemon.url);
        }
        
    });

    const eachPokemonUrlData = await axios.all(url);

    console.log(eachPokemonUrlData)
        
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

export default downloadPokemons;