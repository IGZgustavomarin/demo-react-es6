import React from 'react';

class GifItem extends React.Component {

  handleMouseOver() {
    this.setState({ image: this.props.gif.images.fixed_width });
  }

  handleMouseOut() {
    this.setState({ image: this.props.gif.images.fixed_width_still });
  }

  render() {

    let gif = this.props.gif;
    let image = this.state ? this.state.image : this.props.image;

    return (<a href={gif.embed_url} >
        <img
          src={image.url}
          width={image.width}
          height={image.height}
          onMouseOver={this.handleMouseOver.bind(this)}
          onMouseOut={this.handleMouseOut.bind(this)}
          />
      </a>);

  }
}

export default GifItem
