import "./PokemonList.css"
import PokemonCard from "../PokemonCard/PokemonCard"

const PokemonList = ({ pokemons }) => {
    
    return (
        <div className="list ">
            {pokemons?.map((p) => {
                return <PokemonCard key={p?.name} name={p?.name} url={p?.url} />
            })
            }
        </div>
    )
}
export default PokemonList

