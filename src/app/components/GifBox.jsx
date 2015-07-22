import React from 'react';
import Paginator from 'react-paginate-component';

import GifList from './GifList';
import SearchBar from './SearchBar';
import SearchInfo from './SearchInfo';

import searchGifs from '../service/giphy';

class GifBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchTerm: '', items: [], totalPages: 0, term: '' }
  }

  handleSearch(term, page=1) {

    if (!term) {
      this.setState({term: '', list: []});
      return;
    }

    console.log('Searching gifs about: ', term);

    searchGifs(term, page)
      .then((res) => {
        this.setState({
          term: term,
          items: res.data,
          totalPages: res.pagination.total_pages,
          totalCount: res.pagination.total_count,
          page: page
        });
      })
  }

  onChangePage(page) {
    console.log('changing to page %s of %s', page, this.state.totalPages);
    this.handleSearch(this.state.term, page);
  }

  componentWillMount() {
    console.log('GifBox componentWillMount');
  }

  componentDidMount() {
    console.log('GifBox componentDidMount');
  }

  render() {
    let paginator = '';

    if (this.state.totalPages > 0) {
      paginator = <Paginator maxVisible={5} max={this.state.totalPages-1} onChange={this.onChangePage.bind(this)} />;
    }

    return <div>
      <h2>Gifinator</h2>
      <SearchBar onSearch={this.handleSearch.bind(this)} />
      <SearchInfo info={this.state} />
      {paginator}
      <GifList list={this.state.items} />
    </div>;
  }
}

export default GifBox
