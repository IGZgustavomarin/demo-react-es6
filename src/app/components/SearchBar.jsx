import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    //this.state = { list: [] }
  }

  handleSubmit() {
    let term = React.findDOMNode(this.refs.searchBox).value;
    this.props.onSearch(term);
  }

  componentWillMount() {
    console.log('SearchBar componentWillMount');
  }

  componentDidMount() {
    console.log('SearchBar componentDidMount');
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Search..." ref="searchBox" />
        <button onClick={this.handleSubmit.bind(this)}>Gif me!</button>
      </div>
      )
  }
}

export default SearchBar