import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../config';

export default class Container extends Component {
  componentDidMount() {
    let query = this.props.match.params.searchText;
    this.fetchPhotos(query);
  }

  state = {
    photos: [],
    searchText: '',
  }

  fetchPhotos(query) {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${query}&per_page=12&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo,
        searchText: query
      });
      console.log(this.state.photos);
      console.log(this.state.searchText);
    })
  }

  displayPhotos() {

  }

  render() {
    return (
      <div>
        Container
      </div>
    );
  }
}
  