import request from 'browser-request';
import Promise from 'promise/lib/es6-extensions';

import { GIPHY_API_KEY } from '../config';

const GIPHY_API_URL = 'http://api.giphy.com/v1/gifs/';


function getSearchUrl(term, type='search') {
  return `${GIPHY_API_URL}/${type}?q=${encodeURI(term)}&api_key=${GIPHY_API_KEY}`;
}

export default function callGiphyService(term) {

  let url = getSearchUrl(term);
  console.log('fetching gifs from ', url);

  return new Promise((resolve, reject) => {
    request.get({
      url: url,
      json: true
    }, (err, res, body) => {
      if (err) {
        reject(err);
      }
      resolve(body);
    });
  })
    .catch((xhr, status, err) => {
      console.error(url, status, err.toString());
    });


}
