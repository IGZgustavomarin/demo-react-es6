import React from 'react';
import Debug from 'debug';
import GifBox from './components/GifBox';

let debug = Debug('GifBox');

export default class App {
  constructor(options) {
    debug('app created with options', options);
    this.state = options.state;
  }

  render(element) {
    var appRootElem = React.createElement(GifBox, {
      state: this.state
    });

    if (element) {
      debug('render to DOM');
      return React.render(appRootElem, element);
    }

    debug('render to string');
    return React.renderToString(appRootElem);
  }

  renderToDOM(elem) {
    if (!elem) {
      throw new Error('App.renderToDOM: element is required');
    }
    this.render(elem);
  }

}
