import React from 'react';
import Pokemon  from './Pokemon';
import pokemonList from './data'

class Pokedex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemonIndex: 0,
      filterType: 'Fire'
    }
  }

  nextPokemon = (state, listLength) => {
    this.setState({
      pokemonIndex: (state.pokemonIndex + 1) >= listLength ? 0 : state.pokemonIndex + 1
    })
  }

  handleClick = (listLength) => {
    this.nextPokemon(this.state, listLength);
  }

  setFilter = (state, filter) => {
    this.setState({
      pokemonIndex: state.pokemonIndex,
      filterType: filter
    })
  }

  render () {
    const filteredPokemons = pokemonList.filter((pokemon) => this.state.filterType === pokemon.type);

    const { name, type, image, averageWeight } = filteredPokemons[this.state.pokemonIndex];

    return (
      <div className="pokemon-list"> 
          <Pokemon 
            name={name}
            type={type}
            image={image}
            weight={averageWeight.value}
            unit={averageWeight.measurementUnit}
          />
          <button onClick={() => this.handleClick(filteredPokemons.length)}>Next</button>
          <button onClick={() => this.setFilter(this.state, 'Fire')}>Fire</button>
          <button onClick={() => this.setFilter(this.state, 'Psychic')}>Psychic</button>
      </div>
    )
  }
}

export default Pokedex;