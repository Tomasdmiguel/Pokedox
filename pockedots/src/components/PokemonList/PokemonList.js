import "./PokemonList.css"
import PokemonCard from "../PokemonCard/PokemonCard"

const PokemonList = ({ pokemons = Array(10).fill('') }) => {

    return (
        <div className="list ">
            {pokemons?.map((_, index) => {
                return <PokemonCard key={index} />
            })
            }
        </div>
    )
}
export default PokemonList

