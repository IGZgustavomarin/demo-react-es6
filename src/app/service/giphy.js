import request from 'browser-request';
import Promise from 'promise/lib/es6-extensions';

import { GIPHY_API_KEY, GIFS_PER_PAGE } from '../config';

const GIPHY_API_URL = 'http://api.giphy.com/v1/gifs/';


function getSearchUrl(term, type='search') {
  return ;
}

export default function callGiphyService(term, page=1) {

  let url = `${GIPHY_API_URL}/search`;

  let qs = {
    q: encodeURI(term),
    api_key: GIPHY_API_KEY
  }

  if (page) {
    qs.offset = (page-1) * GIFS_PER_PAGE;
  }

  return new Promise((resolve, reject) => {
    request.get({
      url: url,
      json: true,
      qs
    }, (err, res, body) => {
      if (err) {
        reject(err);
      }
      let pagination = body.pagination;

      pagination.total_pages = pagination.count ?  Math.ceil(pagination.total_count / GIFS_PER_PAGE) : 0;
      pagination.curr_page = page;

      console.log( 'Body res', body);
      resolve(body);
    });
  })
    .catch((xhr, status, err) => {
      console.error(url, status, err.toString());
    });


}
