import React from 'react';

const Gallery = (props) => {
  const { photos, searchText } = props;
  const galleryImages = photos.map((photo) => {
    return (
      <li key={photo.id}>
        <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={photo.title}/>
      </li>
    );
  }); 
  return (
    <div className="photo-container">
      <h2>Results: {searchText}</h2>
      <ul>
        {galleryImages}
      </ul>
    </div>
  );
}

export default Gallery;