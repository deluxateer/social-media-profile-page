import React, { Component } from 'react';
import Post from './Post';

const Favorites = () => {
  const headerImg1 = [
    {
      headerImgSrc: "https://picsum.photos/200/100",
      headerAltText: "Favorite 1"
    }
  ];
  const headerImg2 = [
    {
      headerImgSrc: "https://picsum.photos/200/100",
      headerAltText: "Favorite 2"
    },
    {
      headerImgSrc: "https://picsum.photos/200/100",
      headerAltText: "Favorite 2"
    }
  ];
  return (
    <div className="favorites card">
      <h2 className="card-header">Favorites</h2>
      {/* <!-- First Favorite Item --> */}
      <Post
        headerImgs={headerImg1}
        proImgSrc="https://picsum.photos/40"
        proAltText="Profile Picture"
        authorName="Jane Smith"
        authorJob="Embroidery Artisan"
        timestamp="03/23"
        postText="I finally made the quilt I've always dreamed of making!"></Post>
      {/* <!-- Second Favorite Item --> */}
      <Post
        headerImgs={headerImg2}
        proImgSrc="https://picsum.photos/40"
        proAltText="Profile Picture"
        authorName="Chance Jackson"
        authorJob="Polisher"
        timestamp="03/16"
        postText="It's amazing to see how much simple polishing can do to bring out the beauty in a steel object!"></Post>
      </div>
    );
  };

  export default Favorites;
