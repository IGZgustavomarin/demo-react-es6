import React from 'react';
import GifList from './GifList';
import SearchBar from './SearchBar';
import searchGifs from '../service/giphy';


class GifBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchTerm: '', list: [] }
  }

  handleSearch(term) {

    if (!term) {
      this.setState({list: []});
      return;
    }

    console.log('Searching gifs about: ', term);

    searchGifs(term)
      .then((res) => {
        this.setState({list: res.data});
      })
  }

  componentWillMount() {
    console.log('GifBox componentWillMount');
  }

  componentDidMount() {
    console.log('GifBox componentDidMount');
  }

  render() {
    return <div>
      <h2>Gifinator</h2>
      <SearchBar onSearch={this.handleSearch.bind(this)} />
      <GifList list={this.state.list} />
    </div>;
  }
}

export default GifBox
