import React from 'react';
import GifList from './GifList';
import $ from 'jquery';

class GifBox extends React.Component {

  constructor() {
    super();
    this.state = { list: [] }
  }

  loadGifsFromServer() {
    $.ajax({
      url: "http://api.giphy.com/v1/gifs/trending?q=funny+cat&api_key=dc6zaTOxFJmzC",
      dataType: 'json',
      success: (res) => {
        this.setState({list: res.data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  componentDidMount() {
    this.loadGifsFromServer();
  }

  render() {
    return <div>
      <h2>Gifinator</h2>
      <GifList list={this.state.list} />
    </div>;
  }
}

export default GifBox
