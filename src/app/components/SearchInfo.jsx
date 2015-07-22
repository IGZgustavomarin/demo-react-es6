import React from 'react';

class SearchInfo extends React.Component {

  render() {

    let info = this.props.info;

    if (!info.term && !info.totalCount) {
      return <span />;
    }

    if (info.term && !info.totalCount) {
      return <div>No results for {info.term} </div>
    }

    return <div>Found {info.totalCount} for {info.term}. Showing page {info.page} </div>

  }
}

export default SearchInfo
