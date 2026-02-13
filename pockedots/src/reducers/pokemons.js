import { SET_POKEMONS } from "../actions/types"

const InitialState = {
    pokemons: []
}


export const pokemonsReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return ({ ...state, pokemons: action.payload })

        default:
            return state
    }

}