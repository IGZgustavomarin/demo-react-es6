import React from 'react';
import GifList from './GifList';
import SearchBar from './SearchBar';
import $ from 'jquery';

class GifBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchTerm: '', list: [] }
  }

  handleSearch(term) {
    console.log('Searching more gifs: ', term);

    this.loadGifsFromServer(term);
  }

  getSearchUrl(term) {
    term = encodeURI(term);
    return `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`
  }

  loadGifsFromServer(term) {

    if (!term) return;

    let url = this.getSearchUrl(term);
    console.log('url ', url);

    $.ajax({
      url: url,
      dataType: 'json',
      success: (res) => {
        this.setState({list: res.data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
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
