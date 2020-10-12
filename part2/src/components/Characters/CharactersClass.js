import React, { Component } from 'react';
import Filter from '../Filter/Filter';
import List from '../List/List';
import './Characters.css'

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      filter: '',
    };
  }

  async componentDidMount() {
    const data = await fetch('https://rickandmortyapi.com/api/character');

    data.json().then((data) => {
      if (this.state.filter) {
        return this.setState({
          characters: data.results.filter(
            (result) => result.species === this.state.filter,
          ),
        });
      }

      return this.setState({ characters: data.results });
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    const data = await fetch('https://rickandmortyapi.com/api/character');

    data.json().then((data) => {
      if (this.state.filter && prevState !== this.state.filter) {
        return this.setState({
          characters: data.results.filter(
            (result) => result.species === this.state.filter,
          ),
        });
      }

      return this.setState({ characters: data.results });
    });
  }

  render() {
    const setFilter = (filter) => {
      this.setState({ filter })
    }

    return (
      <div className='characters'>
        <Filter filter={this.state.filter} setFilter={setFilter} />
        <List characters={this.state.characters} />
      </div>
    );
  }
}

export default Characters;
