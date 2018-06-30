import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../config';

import Gallery from './Gallery';

class Container extends Component {
  componentDidMount() {
    const query = this.props.match.params.searchText;
    this.fetchPhotos(query);
  }

  componentWillReceiveProps(nextProps) {
    const query = nextProps.match.params.searchText;
    this.fetchPhotos(query);
  }

  state = {
    photos: [],
    searchText: '',
    loading: true,
    error: false
  }

  fetchPhotos(query) {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${query}&per_page=12&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo,
        searchText: query,
        loading: false
      });
    })
    .catch(error => {
      console.log('Failed to fetch photos', error);
      this.setState({ error: true });
    })
  }

  render() {
    let jsx;
    if (this.state.loading) {
      jsx = <div>Loading...</div>;
    } else {
      jsx = <Gallery photos={this.state.photos} searchText={this.state.searchText} />
    }
    return (
      <div>
        {jsx}
      </div>
    );
  }
}

export default Container;