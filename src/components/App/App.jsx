import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  //likeCount tracks my state
  //setLikeCount lets me change the value of state
  const [galleryList, setGalleryList] = useState([]);
  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = () => {
    Axios.get('/gallery')
      .then((response) => {
        console.log('got a response!', response.data);

        // Update our local state, with data from the server
        setGalleryList(response.data);
      })
      .catch((err) => {
        console.log('ruh-roh....', err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Here it is!</p>

      <GalleryList galleryList={galleryList} fetchGallery={fetchGallery} />

      <div></div>
    </div>
  );
}

export default App;
