import { Card } from "antd"


const PokemonCard = () => {
    return (
        <Card
            title="Ditto"
            cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="img pokemon" />}
        >
            <Card.Meta description='Fuego y Magia' />
        </Card>
    )
}

export default PokemonCard;