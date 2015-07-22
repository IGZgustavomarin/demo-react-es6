import React from 'react';
import GifBox from './components/GifBox';


export default class App {
  constructor(options) {
    console.log('app created with options', options);
    this.state = options.state;
  }

  render(element) {
    var appRootElem = React.createElement(GifBox, {
      state: this.state
    });

    if (element) {
      console.log('render to DOM');
      return React.render(appRootElem, element);
    }

    console.log('render to string');
    return React.renderToString(appRootElem);
  }

  renderToDOM(elem) {
    if (!elem) {
      throw new Error('App.renderToDOM: element is required');
    }
    this.render(elem);
  }

}
