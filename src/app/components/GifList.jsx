import React from 'react';
import GifItem from './GifItem';

class GifList extends React.Component {

  render() {
    let gifList = this.props.list.map(function(gif) {
      return <GifItem key={gif.id} gif={gif} image={gif.images.fixed_width_still}/>;
    });

    return (
      <div>
        <span>The list</span>
        <div>
          {gifList}
        </div>
      </div>
    );

  }
}

export default GifList
