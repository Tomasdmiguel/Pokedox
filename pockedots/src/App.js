import { useEffect } from 'react';
import { connect } from 'react-redux';

import Searcher from './components/Searcher/Searcher';
import PokemonList from './components/PokemonList/PokemonList';

import { getPokemon } from './api';
import { setPokemons as setPokemonsActions } from './actions';

import './App.css';
import { Col } from 'antd';
import logo from './static/logo.svg'

function App({ pokemons, setPokemons }) {

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await getPokemon();
        setPokemons(res);
      } catch (err) {
        console.log('catch')
      } finally {
        console.log('cargando...')
      }
    };

    fetchPokemon();
  }, []);


  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt="PokeDots" />
      </Col>

      <Col span={8} offset={8}>
        <Searcher />

      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons
})

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
