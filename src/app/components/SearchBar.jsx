import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    //this.state = { list: [] }
  }

  getTerm() {
    return React.findDOMNode(this.refs.searchBox).value;

  }
  handleSubmit() {
    this.props.onSearch(this.getTerm());
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.props.onSearch(this.getTerm());
    }
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
        <input type="text" placeholder="Search..." ref="searchBox" onKeyUp={this.handleKeyDown.bind(this)}/>
        <button onClick={this.handleSubmit.bind(this)}>Gif me!</button>
      </div>
      )
  }
}

export default SearchBar
